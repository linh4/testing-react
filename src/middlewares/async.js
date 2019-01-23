export default ({ dispatch }) => next => action => {
  // check if action has a promise on its payload property
  // if yes, then wait for it to resolve
  // if no, send the action to the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action)
  }

  // wait for the promis to resolve
  // get its data, then create a new action with that data
  // dispatch it
  action.payload.then(response => {
    const newAction = {...action, payload: response}
    dispatch(newAction)
  })
}
