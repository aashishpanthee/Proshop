const asyncHandler = (fn) => (req, res, next) => {
  // fn is the function that will be passed in
  return Promise.resolve(fn(req, res, next)).catch(next); // return a promise that will resolve the function and catch any errors and pass them to the next middleware
};
export default asyncHandler;
