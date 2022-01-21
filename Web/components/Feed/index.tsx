// TODO Need PostCard Component and Container Component

const Feed = () => {
  return (
    <div className="feed-container flex flex-col max-w-3xl items-center flex-auto">
      {posts.map((post, index) => (
        <PostCard key={index} post={post}></PostCard>
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
