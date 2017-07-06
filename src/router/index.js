import App from '../App'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/score/score')), 'score')
const item = r => require.ensure([], () => r(require('../page/item/item')), 'item')
const item1 = r => require.ensure([], () => r(require('../page/home/children/item1')), 'item1')
const item2 = r => require.ensure([], () => r(require('../page/home/children/item2')), 'item2')
export default [{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '',
          redirect: '/item1'
        },
        {
          path: '/item1',
          component: item1
        },
        {
          path: '/item2',
          component: item2
        }
      ]
    },
    {
      path: '/score',
      component: login
    },
    {
      path: '/item',
      component: item
    }
  ]
}]
