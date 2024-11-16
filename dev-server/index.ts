// We use a Express.js server for development

import express from 'express'
import { renderPage } from 'vike/server'
import { createServer } from 'vite'
import fetch from 'node-fetch'
import compression from 'compression'

import type { CustomPageContext } from '#src/worker/ssr'

const PORT = 3000

async function startServer() {
  const app = express()

  // We don't need gzip compression for dev. We use compression just to show
  // that it's properly handled by Vike and react-streaming.
  app.use(compression())

  const viteDevMiddleware = (
    await createServer({
      server: { middlewareMode: true },
    })
  ).middlewares
  app.use(viteDevMiddleware)

  app.get('*', async (req, res, next) => {
    const userAgent = req.headers['user-agent'] || null

    const pageContextInit: CustomPageContext = {
      env: {} as any,
      urlOriginal: req.originalUrl,
      fetch: fetch as any,
      userAgent,
    }
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext

    if (!httpResponse) {
      return next()
    } else {
      const { statusCode, headers } = httpResponse
      headers.forEach(([name, value]) => res.setHeader(name, value))
      res.status(statusCode)
      httpResponse.pipe(res)
    }
  })

  app.listen(PORT)
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${PORT}`)
}

startServer()