export default [
  { routerName: 'Dashboard', path: '/', text: 'Dashboard', icon: 'Sunrise' },
  {
    text: 'Quản lý danh mục',
    icon: 'Plus',
    items: [
      {
        routerName: 'OrgLevel',
        path: '/document',
        text: 'Danh mục công nghệ',
      },
      {
        routerName: 'OrgLevel',
        path: '/document',
        text: 'Công nghệ',
      }
    ],
  },
  {
    text: 'Quản trị hệ thống',
    icon: 'Setting',
    items: [
      { routerName: 'UserList', path: '/user', text: 'Quản lý người dùng' },
      { routerName: 'RoleList', path: '/role', text: 'Quản lý nhóm người dùng' },
    ],
  },
]