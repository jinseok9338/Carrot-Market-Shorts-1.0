// TODO Need PostCard Component and Container Component

import { PostCard } from "../PostCard";
import { IPostCardHeaderProps } from "../PostCard/PostCardHeader";

interface FeedProps {
  posts: IPostCardHeaderProps[];
}

const Feed = ({ posts }: FeedProps) => {
  return (
    <div className="feed-container flex flex-col max-w-3xl items-center flex-auto">
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};

export default Feed;

//   Container
//   display: flex;
//   flex-direction: column;
//   max-width: 732px;
//   align-items: center;
//   flex: 1 1 auto;
// `;
