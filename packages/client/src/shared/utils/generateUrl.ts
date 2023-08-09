import { generatePath } from 'react-router-dom'

export const generateUrl = (
  pattern: string,
  params: Record<string, string>
): string => {
  const encodeURIParams = Object.fromEntries(
    Object.entries(params).map(([key, value]) => [key, encodeURI(value)])
  )
  return generatePath(pattern, encodeURIParams)
}
