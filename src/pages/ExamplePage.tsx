import React from 'react'
import Post, { PostProps } from '../components/Post'
import useFetch from '../hooks/useFetch'
const ExamplePage: React.FC = () => {
  const { data, loading, error } = useFetch<PostProps[]>(
    'https://jsonplaceholder.typicode.com/posts',
  )

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div style={{ textAlign: 'center', height: '100%', background: 'blue' }}>
      <h1>Example Page</h1>
      <p>This is an example page using React Router.</p>
      {data && data.map((post) => <Post key={post.id} {...post} />)}
    </div>
  )
}

export default ExamplePage
