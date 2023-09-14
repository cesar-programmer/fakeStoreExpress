function logErrors (err, req, res, next) {
  console.log('logErrors')
  console.log(err)
  next(err)
}

function errorHandler (err, req, res, next) {
  console.log('errorHandler')
  res.status(500).json({
    message: 'internal server error',
    stack: err.stack
  })
}

function boomErrorHandler (err, req, res, next) {
  console.log('boomErrorHandler')
  if (err.isBoom) {
    const { statusCode, payload } = err.output
    res.status(statusCode).json(payload)
  } else {
    next(err)
  }
}

export { logErrors, errorHandler, boomErrorHandler }
