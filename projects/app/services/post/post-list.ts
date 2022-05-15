import { useQuery } from 'react-query';
import { httpClient } from '../http-client';
import { PostCacheKey } from './post.cache-keys';
import { Post } from '../../interfaces/posts';

export const fetchPosts = async (page: number) => {
  const { data: posts } = await httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
  return posts;
};

export const usePostList = ({ page }: { page: number }) => useQuery<Post[]>(
  PostCacheKey.page(page),
  () => fetchPosts(page),
);
