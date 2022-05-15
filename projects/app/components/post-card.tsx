import { Post } from '../interfaces/posts';

export interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => (
  <div className="post flex flex-col w-56 h-56 shadow-lg p-3 bg-white cursor-pointer hover:bg-slate-50">
    <h1>{ post.title }</h1>
  </div>
);
