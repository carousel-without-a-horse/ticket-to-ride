import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '@/app/router/config'
import { withSuspense } from '@/shared/hocs'

const BaseLayout = withSuspense(() => import('@/app/layouts/BaseLayout'))
const Guide = withSuspense(() => import('@/pages/GuidePage'))
const About = withSuspense(() => import('@/pages/AboutPage'))
const Rating = withSuspense(() => import('@/pages/RatingPage'))
const Forum = withSuspense(() => import('@/pages/ForumPage'))
const SignIn = withSuspense(() => import('@/pages/SignInPage'))
const SignUp = withSuspense(() => import('@/pages/SignUpPage'))

export const router = createBrowserRouter([
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
        path: ROUTES.forum,
        element: <Forum />,
      },
      {
        path: ROUTES.signIn,
        element: <SignIn />,
      },
      {
        path: ROUTES.signUp,
        element: <SignUp />,
      },
    ],
  },
])
