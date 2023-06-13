const firstNames = ['Иван', 'Петр', 'Семен', 'Степан', 'Вася']
const lastNames = ['Иванов', 'Петров', 'Сидоров']
const generateName = () =>
  [
    firstNames[Math.floor(firstNames.length * Math.random())],
    lastNames[Math.floor(lastNames.length * Math.random())],
  ].join(' ')

const generateCommentsCount = () => Math.floor(Math.random() * 500)
const pageSize = 10
export const getMockThemes = (id?: number) => {
  const cursor = id || 0

  const data = Array(pageSize)
    .fill(0)
    .map((_, i) => {
      return {
        id: i + cursor,
        name: 'Theme ' + (i + cursor) + ` (server time: ${Date.now()})`,
        author: generateName(),
        commentsCount: generateCommentsCount(),
      }
    })

  const nextId = cursor < 20 ? data[data.length - 1].id + 1 : null
  const previousId = cursor > -10 ? data[0].id - pageSize : null
  return { data, nextId, previousId }
}

export const getMockTheme = () => ({
  id: Date.now(),
  author: {
    name: generateName(),
    id: Date.now(),
  },
  name: 'Lorem',
  tags: ['tag 1', 'tag 2'],
  content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi
      deleniti eius eum explicabo in incidunt ipsam itaque molestias nemo neque
      nisi possimus, quas recusandae reprehenderit saepe ullam unde voluptatum?`,
})
