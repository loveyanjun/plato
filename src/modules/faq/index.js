import store from './store'
import { createRoutes } from './routes'

export default (options = {}) => {
  const { name = 'faq', prefix = '/faq' } = options

  __PROD__ || console.log(`use module "${name}", with prefix "${prefix}"`)

  return (modules, routes, next) => {
    modules[name] = store
    next(modules, routes.concat(createRoutes({ prefix })))
  }
}
