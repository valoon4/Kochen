import { BrokerTemplate, CategoryResponse, CategoryData, NavData, 
  NavResponse, PostData, PostResponse, ConfigTemplate} from '../interfaces/InterfaceCollection';

class StrapiBroker implements BrokerTemplate {
  private settings: ConfigTemplate;

  constructor(config: ConfigTemplate) {
    this.settings = config;
  }

  //Navigationsdaten anfragen und zurückgeben
  async getNavigation(): Promise<NavResponse[]> {
    const url = `${this.settings.baseURL}${this.settings.endpoints.navigation}`;
    const response = await fetch(url);
    const received: NavData[] = await response.json();

    if (received && received.length > 0) {
      const navResponse: NavResponse[] = received.map((item: NavData) => ({
        title: item.titel,
        url: item.url,
      }));

      return navResponse;
    }
    else {
      throw new Error('No Navigation found');
    }
  }

  //Post per Name abrufen und zurückgeben
  async getPostBySlug(slug: string): Promise<PostResponse> {
    const url = `${this.settings.baseURL}${this.settings.endpoints.posts}${this.settings.slugfilter}${slug}`;
    const response = await fetch(url);
    const received: PostData[] = await response.json();

    if (received && received.length > 0) {
      const post = received[0]; // Der erste Beitrag im Array
  
      const singlepost: PostResponse = {
        id: post.id,
        title: post.titel!,
        imageURL: post.bild!.url,
        zutaten: post.zutaten!.split("\n"),
        zubereitung: post.zubereitung!.split("\n"),
      };
  
      return singlepost;
    } else {
      throw new Error('Post nicht gefunden.');
    }
  }

  //Alle Posts abrufen und zurückgeben
  async getPosts(): Promise<PostResponse[]> {
    const url = `${this.settings.baseURL}${this.settings.endpoints.posts}`;
    const response = await fetch(url);
    const received: PostData[] = await response.json();

    if (received && received.length > 0) {
      const posts: PostResponse[] = received.map((post: PostData) => ({
          id: post.id,
          title: post.titel!,
          imageURL: post.bild!.url, 
          zutaten: post.zutaten!.split("\n"),
          zubereitung: post.zubereitung!.split("\n"),
      }));
      return posts;
    } else {
      return [];
    }
  }

  //Alle Kategorien abrufen und zurückgeben
  async getCategories(): Promise<CategoryResponse[]> {
    const url = `${this.settings.baseURL}${this.settings.endpoints.kategorien}`;
    const response = await fetch(url);
    const received: CategoryData[] = await response.json();

    if (received && received.length > 0) {
      const kategorien: CategoryResponse[] = received.map((kategorie: CategoryData) => ({
        id: kategorie.id,
        title: kategorie.kategoriename || "Fehler",
        categoryitems: kategorie.rezeptes!.map((rezept) => rezept.titel),
      }));
    
      return kategorien;
    } else {
      return [];
    }
    
  }

}

export default StrapiBroker;