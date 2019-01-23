import React from 'react';
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';
import * as actions from 'actions'

const App = (props) => {

  const renderButton = () => {
    return (props.auth) ? (
      <button onClick={() => props.changeAuth(false)}>
        Sign Out
      </button>
    )
    : (
      <button onClick={() => props.changeAuth(true)}>
        Sign In
      </button>
    )
  }

  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>{renderButton()}</li>
      </ul>
    )
  }

  return (
    <div>
      {renderHeader()}
      <Route path="/post" component={CommentBox} />
      <Route exact path="/" component={CommentList} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
    };
};

export default connect(mapStateToProps, actions)(App)
