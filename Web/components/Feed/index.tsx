// TODO Need PostCard Component and Container Component

import { IPostCardHeaderProps } from "../Video/PostCardHeader";

interface FeedProps {
  posts: any;
}

const Feed = ({ posts }: FeedProps) => {
  return (
    <div className="feed-container flex flex-col max-w-[768px] items-center flex-auto">
      {posts.map((post: any, index: any) => (
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
