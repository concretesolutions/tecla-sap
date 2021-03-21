import React from 'react'
import postList from '../../public/postList'
import PostTemplate from '../PostTemplate'

function PostContainer() {
  return (
    <ul className="posts">
      {postList &&
        postList.map((post, ind) => (
          <PostTemplate
            key={`post-${ind}`}
            link={post.link}
            title={post.title}
            description={post.description}
          />
        ))}
    </ul>
  )
}

export default PostContainer
