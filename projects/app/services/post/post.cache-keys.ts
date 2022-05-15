export const PostCacheKey = {
  all: ['post'] as const,
  list: () => [...PostCacheKey.all, 'list'] as const,
  page: (page: number) => [...PostCacheKey.list(), { page }] as const,
  details: (postId: string) => [...PostCacheKey.list(), { id: postId }] as const,
};
