import React from 'react'

export interface PostProps {
  userId: string
  id: number
  title: string
  body: string
}

const Post: React.FC<PostProps> = ({ userId, id, title, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <h2>{title}</h2>
        <div>
          <p>{id}</p>
        </div>
      </div>
      <p>{body}</p>
    </div>
  )
}

export default Post
