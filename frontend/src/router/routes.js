export default [
  {
    name: 'Home',
    path: '/',
    component: () => import('../views/Home'),
  },
  {
    name: 'Sign in',
    path: '/sign_in',
    component: () => import('../views/SignIn'),
  },
]
