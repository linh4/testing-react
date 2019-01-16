import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions'

const CommentBox = (props) => {
  const [comment, setComment] = useState('')

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.saveComment(comment)
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

export default connect(null, actions)(CommentBox);
