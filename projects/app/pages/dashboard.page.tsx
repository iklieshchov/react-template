import { Helmet } from 'react-helmet';
import { PostCard } from '../components';
import { usePostList } from '../services/post';

export const DashboardPage = () => {
  const { data, isLoading } = usePostList({ page: 1 });

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="flex items-center flex-col w-full h-full">
        <div className="w-[1000px] h-full pt-4">
          {
            isLoading ? (
              <span>loading...</span>
            ) : (
              <div className="flex flex-wrap gap-2">
                {
                  data?.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};
