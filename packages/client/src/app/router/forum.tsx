import { withSuspense } from '@/shared/hocs'
import { ROUTES } from '@/app/router/config'

const Forum = withSuspense(() => import('@/pages/ForumPage'))
const DetailTheme = withSuspense(
  () => import('@/pages/ForumPage/pages/DetailThemePage')
)
const CreateTheme = withSuspense(
  () => import('@/pages/ForumPage/pages/CreateThemePage')
)
const EditTheme = withSuspense(
  () => import('@/pages/ForumPage/pages/EditThemePage')
)

export const forumRoutes = [
  {
    path: ROUTES.forum,
    element: <Forum />,
  },
  {
    path: ROUTES.themeDetail,
    element: <DetailTheme />,
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
