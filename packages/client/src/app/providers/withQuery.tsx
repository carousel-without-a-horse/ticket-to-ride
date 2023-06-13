import type { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()
export const withQuery = (component: () => ReactNode) => () => {
  return (
    <QueryClientProvider client={queryClient}>
      {component()}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
