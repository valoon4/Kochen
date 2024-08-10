import { CategoryResponse, NavResponse, PostResponse } from '../interfaces/InterfaceCollection';
import { brokerFactory } from '../factories/BrokerFactory';

export const createResource = <T>(fetcher: () => Promise<T>) => {
  let status = 'pending';
  let result: T;
  let suspender = fetcher().then(
    data => {
      status = 'success';
      result = data;
    },
    error => {
      status = 'error';
      result = error;
    }
  );

  return {
    read() {
      if (status === 'pending') throw suspender;
      if (status === 'error') throw result;
      if (status === 'success') return result;
    }
  };
};

export const loadPosts = async (): Promise<PostResponse[]> => {
  try {
    const myBroker = await brokerFactory();
    const posts: PostResponse[] = await myBroker.getPosts();

    if (!posts || posts.length === 0) {
      return [];
    }

    return posts;
  } catch (error) {
    throw new Error('Fehler beim Abrufen der Posts: ' + error);
  }
};

export const loadNavigation = async (): Promise<NavResponse[]> => {
  try {
    const myBroker = await brokerFactory();
    const navis: NavResponse[] = await myBroker.getNavigation();

    if (!navis || navis.length === 0) {
      return [];
    }

    return navis;
  } catch (error) {
    throw new Error('Fehler beim Abrufen der Navigation: ' + error);
  }
};

export const loadCategories = async (): Promise<CategoryResponse[]> => {
  try {
    const myBroker = await brokerFactory();
    const categories: CategoryResponse[] = await myBroker.getCategories();

    if (!categories || categories.length === 0) {
      return [];
    }

    return categories;
  } catch (error) {
    throw new Error('Fehler beim Abrufen der Kategorien: ' + error);
  }
};

export const loadPostBySlug = async (slug: string): Promise<PostResponse> => {
  try {
    const myBroker = await brokerFactory();
    const post: PostResponse = await myBroker.getPostBySlug(slug);

    if (!post) {
      return {} as PostResponse;
    }

    return post;
  } catch (error) {
    throw new Error('Fehler beim Abrufen des Posts: ' + error);
  }
};

export function sortPosts(posts: PostResponse[], sortBy: string): PostResponse[] {
  switch (sortBy) {
    case 'title':
      return [...posts].sort((a, b) => a.title.localeCompare(b.title));
    case 'titleReverse':
      return [...posts].sort((a, b) => b.title.localeCompare(a.title));
    case 'newest':
      return [...posts].reverse();
    default:
      return posts;
  }
}

export function searchPosts(posts: PostResponse[], searchTerm: string): PostResponse[] {
  return posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
}

export default createResource;