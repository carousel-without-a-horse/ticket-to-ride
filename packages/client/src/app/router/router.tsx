import { Navigate } from 'react-router-dom'
import compose from 'compose-function'
import { createBrowserRouter } from 'react-router-dom'

import { ROUTES } from '@/app/router/config'
import { withSuspense } from '@/shared/hocs'
import { withErrorBoundary } from '@/features/ErrorBoundary'
import { forumRoutes } from '@/app/router/forum'

const withCommonWrappers = compose(withErrorBoundary, withSuspense)

const BaseLayout = withCommonWrappers(() => import('@/app/layouts/BaseLayout'))

const Guide = withCommonWrappers(() => import('@/pages/GuidePage'))
const About = withCommonWrappers(() => import('@/pages/AboutPage'))
const Rating = withCommonWrappers(() => import('@/pages/RatingPage'))
const SignIn = withCommonWrappers(() => import('@/pages/SignInPage'))
const SignUp = withCommonWrappers(() => import('@/pages/SignUpPage'))
const Profile = withCommonWrappers(() => import('@/pages/ProfilePage'))
const ErrorPage = withCommonWrappers(() => import('@/pages/ErrorPage'))
const StartGame = withCommonWrappers(() => import('@/pages/StartGamePage'))
const EndGame = withCommonWrappers(() => import('@/pages/EndGamePage'))

const Game = withCommonWrappers(() => import('@/pages/GamePage'))

export const privateRouter = [
  {
    path: ROUTES.game,
    element: <Game />,
  },
  {
    path: ROUTES.root,
    element: <BaseLayout />,
    children: [
      {
        path: ROUTES.startGame,
        element: <StartGame />,
      },
      {
        path: ROUTES.endGame,
        element: <EndGame />,
      },
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
        path: ROUTES.profile,
        element: <Profile />,
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
]

export const publicRouter = [
  {
    path: ROUTES.root,
    element: <BaseLayout />,
    children: [
      {
        path: ROUTES.signIn,
        element: <SignIn />,
      },
      {
        path: ROUTES.signUp,
        element: <SignUp />,
      },
      {
        path: '*',
        element: <Navigate to={ROUTES.signIn} replace />,
      },
    ],
  },
]
