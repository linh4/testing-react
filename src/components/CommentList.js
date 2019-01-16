import React from 'react';
import { connect } from 'react-redux';

const renderComments = (props) => {
  return props.comments.map(comment => {
    return <li key={comment}>{comment}</li>
  })
}

const CommentList = (props) => {
  return (
    <div>
      <ul>
        {renderComments(props)}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
    };
};

export default connect(mapStateToProps)(CommentList);
