'use strict'
import http from 'http'
import url from 'url'

const asyncPipe = (...fns: any[]) => (initialParams: any) =>
  fns.reduce(async (result, next) => next(await result), initialParams)

const routes = [
  {
    path: '/',
    method: 'GET',
    handler: (req: http.IncomingMessage, res: http.ServerResponse) => {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end('Hello World Bro')
    }
  }
]

const handleRequest = (req: http.IncomingMessage, res: http.ServerResponse) => {
  const urlParsed = url.parse(req.url as string)
  console.log(urlParsed.path)
  routes.forEach(route => {
    if (route.path === urlParsed.path && route.method === req.method)
      return route.handler(req, res)
    res.write('Route not found')
    res.end()
    req.pipe
  })
}

const PORT = 4000

const createServer = () => http.createServer(handleRequest)

createServer().listen(PORT, () => {
  console.log('Server started on ==>', `http://localhost:${PORT}`)
})
