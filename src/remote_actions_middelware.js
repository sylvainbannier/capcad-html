export default socket => store => next => action => {
  console.log('middleware',action);
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
}
