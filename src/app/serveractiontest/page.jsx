import { addPost, deletePost } from '@/lib/actions'
import React from 'react'

const ServerAction = () => {
  return (
    <div>
      <h1>Create a New Post</h1>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="Description" name="desc" />
        <input type="text" placeholder="User Id" name="userId" />
        <input type="text" placeholder="Slug" name="slug" />
        <button type="submit">Submit</button>
      </form>

      <h1>Delete Post</h1>
      <form action={deletePost}>
        <input type="text" placeholder="User Id" name="userId" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ServerAction