import compose from 'compose-function'

import { ROUTES } from '@/app/router/config'
import { withErrorBoundary } from '@/features/ErrorBoundary'
import ForumPageCmp from '@/pages/ForumPage'
import ThemePageCmp from '@/pages/ThemePage'
import CreateThemePageCmp from '@/pages/ThemePage/pages/CreateThemePage'
import EditThemePageCmp from '@/pages/ThemePage/pages/EditThemePage'
// TODO: Разобраться как использовать Suspense совместно с SSR(CAR-48)
// import { withSuspense } from '@/shared/hocs'
// const withCommonWrappers = compose(withErrorBoundary, withSuspense)
const withCommonWrappers = compose(withErrorBoundary)

// const Forum = withCommonWrappers(() => import('@/pages/ForumPage'))
// const Theme = withCommonWrappers(() => import('@/pages/ThemePage'))
// const CreateTheme = withCommonWrappers(
//   () => import('@/pages/ThemePage/pages/CreateThemePage')
// )
// const EditTheme = withCommonWrappers(
//   () => import('@/pages/ThemePage/pages/EditThemePage')
// )

const Forum = withCommonWrappers(() => <ForumPageCmp />)
const Theme = withCommonWrappers(() => <ThemePageCmp />)
const CreateTheme = withCommonWrappers(() => <CreateThemePageCmp />)
const EditTheme = withCommonWrappers(() => <EditThemePageCmp />)

export const forumRoutes = [
  {
    path: ROUTES.forum,
    element: <Forum />,
  },
  {
    path: ROUTES.themeDetail,
    element: <Theme />,
  },
  {
    path: ROUTES.themeNew,
    element: <CreateTheme />,
  },
  {
    path: ROUTES.themeEdit,
    element: <EditTheme />,
  },
]
