export function loggingMiddleware(request, response, next) {
  console.log(`${request.method}: ${request.path}`);
  next();
}