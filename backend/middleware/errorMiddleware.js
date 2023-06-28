const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`); // create a new error object
  res.status(404); // set the status to 404
  next(error); // next() will pass the error to the next middleware
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode; // if the status code is 200, set it to 500, otherwise use the status code that was passed in
  let message = err.message; // set the message to the error message

  // Check for Mongoose bad ObjectId
  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = "Resource not found";
    statusCode = 404;
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? "*" : err.stack,
  });
};

export { notFound, errorHandler };
