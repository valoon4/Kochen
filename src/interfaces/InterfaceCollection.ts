export interface BrokerTemplate {
  getPostBySlug(slug: string): Promise<PostResponse>;
  getPosts(): Promise<PostResponse[]>;
  getNavigation(): Promise<NavResponse[]>;
  getCategories(): Promise<CategoryResponse[]>;
}

//Navigationsdaten werden in diesem Format erwartet
export interface NavData {
  content?: {
    rendered: string;
  }; // Nur in Wordpress
  titel: string;
  url: string;
  // Nur in Strapi
}

//Navigation wird in diesem Format dargestellt sofern möglich
export interface NavResponse {
  title?: string;    // Nur in Strapi
  url?: string;      // Nur in Strapi
  content?: string;  // Nur in Wordpress
}

//Posts werden in diesem Format erwartet
export interface PostData {
  id: number;
  title?: {
    rendered: string;
  }; // Nur in Wordpress
  content?: {
    rendered: string;
  }; // Nur in Wordpress
  titel?: string;
  zutaten?: string;
  zubereitung?: string;
  bild?: {
    url: string;
  };
}

//Posts werden in diesem Format dargestellt
export interface PostResponse {
  id: number;
  title: string;
  content?: string; //Nur in Wordpress
  imageURL?: string; //Nur in Strapi
  zutaten?: string[]; //Nur in Strapi
  zubereitung?: string[]; //Nur in Strapi
}

//Kategorien werden in diesem Format erwartet
export interface CategoryData {
  id: number;
  name?: string; //Nur in Wordpress
  kategoriename?: string;
  rezeptes?: { titel: string }[]; //Nur in Strapi 
}

//Kategorien werden in diesem Format dargestellt
export interface CategoryResponse {
  id: number;
  title: string;
  categoryitems: string[];
}

export interface PaginationInterface {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

//Interface um die Einstellungen auszulesen
export interface ConfigTemplate {
  brokerClass: string;
  baseURL: string;
  query?: string;
  slugfilter?: string;
  endpoints: {
    posts: string;
    navigation: string;
    kategorien: string;
  };
}