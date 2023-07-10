import { Navigate } from 'react-router-dom'
import compose from 'compose-function'

import { ROUTES } from '@/app/router/config'
import BaseLayout from '@/app/layouts/BaseLayout'
import GuideCmp from '@/pages/GuidePage'
import AboutCmp from '@/pages/AboutPage'
import RatingCmp from '@/pages/RatingPage'
import SignInCmp from '@/pages/SignInPage'
import SignUpCmp from '@/pages/SignUpPage'
import ProfileCmp from '@/pages/ProfilePage'
import ErrorPageCmp from '@/pages/ErrorPage'
import StartGameCmp from '@/pages/StartGamePage'
import EndGameCmp from '@/pages/EndGamePage'
import GameCmp from '@/pages/GamePage'
import { withErrorBoundary } from '@/features/ErrorBoundary'
import { forumRoutes } from '@/app/router/forum'

import type { RouteObject } from 'react-router/dist/lib/context'

const withCommonWrappers = compose(withErrorBoundary)

// TODO: Разобраться как использовать Suspense совместно с SSR(CAR-48)
const Game = withCommonWrappers(() => <GameCmp />)
const Guide = withCommonWrappers(() => <GuideCmp />)
const About = withCommonWrappers(() => <AboutCmp />)
const Rating = withCommonWrappers(() => <RatingCmp />)
const SignIn = withCommonWrappers(() => <SignInCmp />)
const SignUp = withCommonWrappers(() => <SignUpCmp />)
const Profile = withCommonWrappers(() => <ProfileCmp />)
const ErrorPage = withCommonWrappers(() => <ErrorPageCmp />)
const StartGame = withCommonWrappers(() => <StartGameCmp />)
const EndGame = withCommonWrappers(() => <EndGameCmp />)

export const privateRouter: RouteObject[] = [
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
