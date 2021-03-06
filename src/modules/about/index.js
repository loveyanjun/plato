import { createRoutes } from './routes'

export default (options = {}) => {
  const { name = 'about', prefix = '/about' } = options

  __PROD__ || console.log(`use module "${name}", with prefix "${prefix}"`)

  return (modules, routes, next) => {
    next(modules, routes.concat(createRoutes({ prefix })))
  }
}
