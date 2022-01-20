// TODO Need PostCard Component and Container Component


const Feed =() =>{
    return (
        <Container>
        {posts.map((post, index) => (
          <PostCard key={index} post={post}></PostCard>
        ))}
      </Container>
    )
}

export default Feed

// import styled from 'styled-components';

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   max-width: 732px;
//   align-items: center;
//   flex: 1 1 auto;
// `;