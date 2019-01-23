import React, { useEffect } from 'react';
import { connect } from 'react-redux'

export default (ChildComponent) => {
  const ComposedComponent = (props) => {

    const shouldNavigateAway = () => {
      if (!props.auth) {
        console.log("not auth yet")
        props.history.push('/')
      }
    }

    useEffect(() => {
      shouldNavigateAway()
    })

    return <ChildComponent {...props} />
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth
      };
  };

  return connect(mapStateToProps)(ComposedComponent)
}
