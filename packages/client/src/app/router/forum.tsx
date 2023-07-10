import compose from 'compose-function'

import { ROUTES } from '@/app/router/config'
import { withErrorBoundary } from '@/features/ErrorBoundary'
import ForumPageCmp from '@/pages/ForumPage'
import ThemePageCmp from '@/pages/ThemePage'
import CreateThemePageCmp from '@/pages/ThemePage/pages/CreateThemePage'
import EditThemePageCmp from '@/pages/ThemePage/pages/EditThemePage'

const withCommonWrappers = compose(withErrorBoundary)

// TODO: Разобраться как использовать Suspense совместно с SSR(CAR-48)
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
