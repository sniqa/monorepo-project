import { RouterPath } from './routerPath'

export const routerPathToBreadcrumb = {
  [RouterPath.ROOT_MANAGE + RouterPath.ROOT_USER_MANAGE]: [
    { title: '系统管理' },
    { title: '用户管理' }
  ]
}