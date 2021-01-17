export const formatDate = (date: Date) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  [date.getFullYear(), `00${date.getMonth()}`.slice(-2), `00${date.getDate()}`.slice(-2)].join('-');
