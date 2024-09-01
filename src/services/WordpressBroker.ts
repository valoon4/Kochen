import {
  BrokerTemplate, CategoryResponse, CategoryData, NavData,
  NavResponse, PostData, PostResponse, ConfigTemplate
} from '../interfaces/InterfaceCollection';


class WordPressBroker implements BrokerTemplate {
  private settings: ConfigTemplate;

  constructor(config: ConfigTemplate) {
    this.settings = config;
  }

  //Navigationsdaten anfragen und zurückgeben
  async getNavigation(): Promise<NavResponse[]> {
    const url = `${this.settings.baseURL}${this.settings.endpoints.navigation}`;
    const response = await fetch(url);
    const rawData: NavData[] = await response.json();

    if (rawData && rawData.length > 0) {
      const content = rawData[0].content?.rendered; //Navigation aus der JSON ziehen
      const navResponse: NavResponse = { content }; //Inhalt in die Antwort packen
      return [navResponse];
    } else {
      throw new Error('Keine Navigation gefunden.');
    }
  }

  //Post per Name abrufen und zurückgeben
  async getPostBySlug(postName: string): Promise<PostResponse> {
    const slug = postName.replace(/ /g, '-')
      .replace(/ä/g, 'ae')
      .replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue')
      .replace(/ß/g, 'ss');

    const url = `${this.settings.baseURL}${this.settings.endpoints.posts}?slug=${slug}`;
    const response = await fetch(url);
    const rawData: PostData[] = await response.json();


    if (rawData && rawData.length > 0) {
      const postData = rawData[0];
      const post: PostResponse = {
        id: postData.id,
        title: postData.title!.rendered,
        content: postData.content?.rendered,
      };
      return post;
    } else {
      throw new Error('Post nicht gefunden.');
    }
  }

  // Alle Posts abrufen und zurückgeben
  async getPosts(): Promise<PostResponse[]> {
    const url = `${this.settings.baseURL}${this.settings.endpoints.posts}?per_page=100`;
    let allPosts: PostResponse[] = [];
    let page = 1;
    let hasMorePosts = true;

    while (hasMorePosts) {
      const response = await fetch(`${url}&page=${page}`);
      const data: PostData[] = await response.json();

      if (data && data.length > 0) {
        const posts: PostResponse[] = data.map((post: PostData) => ({
          id: post.id,
          title: post.title!.rendered,
          content: post.content?.rendered,
        }));

        allPosts = allPosts.concat(posts);
        page++; // Nächste Seite
      } else {
        hasMorePosts = false; // Keine weiteren Posts
      }
    }

    return allPosts;
  }


  //Alle Kategorien abrufen und zurückgeben
  async getCategories(): Promise<CategoryResponse[]> {
    const url = `${this.settings.baseURL}${this.settings.endpoints.kategorien}`;
    const postURL = `${this.settings.baseURL}${this.settings.endpoints.posts}${this.settings.query}` + "=";

    try {
      const rawCategories = await fetch(url);
      const categoriesData: CategoryData[] = await rawCategories.json();
      const kategorien: CategoryResponse[] = [];

      // Für jede Kategorie die dazugehörigen Posts abrufen
      for (const kategorie of categoriesData) {

        let allPosts: PostResponse[] = [];
        let page = 1;
        let hasMorePosts = true;

        while (hasMorePosts) {

          const postsResponse = await fetch(`${postURL}${kategorie.id}&page=${page}`);
          const postsData: PostData[] = await postsResponse.json();

          if (postsData && postsData.length > 0) {
            const postTitles = postsData.map(post => post.title!.rendered);

          kategorien.push({
            id: kategorie.id,
            title: kategorie.name!,
            categoryitems: postTitles
          });
    
            page++; // Nächste Seite
          } else {
            hasMorePosts = false; // Keine weiteren Posts
          }

          
        }
      }

      return kategorien;
    } catch (error) {
      throw new Error('Fehler beim Abrufen der Kategorien');
    }
  }

}

export default WordPressBroker;