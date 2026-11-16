import React from 'react';
import { useFetchAPi } from './useFetchAPi';

function CustomHook() {
  const { data: posts, loading, error } = useFetchAPi(
    'https://jsonplaceholder.typicode.com/posts'
  );

  // 1. Handle Loading State
  if (loading) {
    return <p>Loading...</p>;
  }

  // 2. Handle Error State
  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  // 3. Render List of Posts
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Posts</h1>
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id} style={{ marginBottom: '16px' }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CustomHook;