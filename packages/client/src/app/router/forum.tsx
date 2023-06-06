import { withSuspense } from '@/shared/hocs'
import { ROUTES } from '@/app/router/config'

const Forum = withSuspense(() => import('@/pages/ForumPage'))
const Theme = withSuspense(() => import('@/pages/ThemePage'))
const CreateTheme = withSuspense(
  () => import('@/pages/ThemePage/pages/CreateThemePage')
)
const EditTheme = withSuspense(
  () => import('@/pages/ThemePage/pages/EditThemePage')
)

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
