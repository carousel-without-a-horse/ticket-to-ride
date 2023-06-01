export const data = [
  {
    id: '1',
    author: {
      id: '1',
      name: 'Ivan Ivanov',
      avatar: 'http://placekitten.com/g/200/200',
    },
    date: new Date().toDateString(),
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi
      deleniti eius eum explicabo in incidunt ipsam itaque molestias nemo neque
      nisi possimus, quas recusandae reprehenderit saepe ullam unde voluptatum?`,
    vote: {
      vote: true,
      countLikes: 5,
      countDislikes: 1,
    },
  },
  {
    id: '2',
    author: {
      id: '2',
      name: 'Semen Ivanov',
      avatar: 'http://placekitten.com/g/200/200',
    },
    date: new Date().toDateString(),
    content: `111 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi
      deleniti eius eum explicabo in incidunt ipsam itaque molestias nemo neque
      nisi possimus, quas recusandae reprehenderit saepe ullam unde voluptatum?`,
    vote: {
      vote: false,
      countLikes: 12,
      countDislikes: 4,
    },
  },
]
