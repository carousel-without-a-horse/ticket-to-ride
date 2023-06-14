import { createBrowserRouter } from 'react-router-dom'

import { ROUTES } from '@/app/router/config'
import { withSuspense } from '@/shared/hocs'
import { forumRoutes } from '@/app/router/forum'

const BaseLayout = withSuspense(() => import('@/app/layouts/BaseLayout'))
const Guide = withSuspense(() => import('@/pages/GuidePage'))
const About = withSuspense(() => import('@/pages/AboutPage'))
const Rating = withSuspense(() => import('@/pages/RatingPage'))
const SignIn = withSuspense(() => import('@/pages/SignInPage'))
const SignUp = withSuspense(() => import('@/pages/SignUpPage'))
const ErrorPage = withSuspense(() => import('@/pages/ErrorPage'))
const Game = withSuspense(() => import('@/pages/GamePage'))

export const router = createBrowserRouter([
  {
    path: ROUTES.game,
    element: <Game />,
  },
  {
    path: ROUTES.root,
    element: <BaseLayout />,
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
        path: ROUTES.signIn,
        element: <SignIn />,
      },
      {
        path: ROUTES.signUp,
        element: <SignUp />,
      },
      {
        path: ROUTES.error,
        element: <ErrorPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
      ...forumRoutes,
    ],
  },
])
