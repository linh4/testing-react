import React, { useState } from 'react';

const CommentBox = () => {
  const [comment, setComment] = useState('')

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setComment('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add Comment</h4>
      <textarea
        onChange={handleChange}
        value={comment}
      />
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default CommentBox;
