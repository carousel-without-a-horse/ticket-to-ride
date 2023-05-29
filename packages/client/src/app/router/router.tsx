import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '@/app/router/config'
import { withSuspense } from '@/shared/hocs'

const App = withSuspense(() => import('@/app'))
const Guide = withSuspense(() => import('@/pages/GuidePage'))
const About = withSuspense(() => import('@/pages/AboutPage'))
const Rating = withSuspense(() => import('@/pages/RatingPage'))
const Forum = withSuspense(() => import('@/pages/ForumPage'))

export const router = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <App />,
    children: [
      {
        index: true,
        element: <Guide />,
      },
      {
        path: ROUTES.about,
        element: <About />,
      },
      {
        path: ROUTES.rating,
        element: <Rating />,
      },
      {
        path: ROUTES.forum,
        element: <Forum />,
      },
    ],
  },
])
