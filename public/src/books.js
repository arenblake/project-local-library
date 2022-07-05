function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  return books.reduce((acc, book) => {
    book.borrows[0].returned ? 
    acc[1].push(book) : 
    acc[0].push(book)
    return acc
  }, [[], []]);
}

function getBorrowersForBook(book, accounts) {
  const userIds = book.borrows.map(({id}) => id)
    .slice(0, 10)
  const result = []
  for (let userId in userIds) {
    const borrower = accounts.find(({id}) => 
      id === userIds[userId])
    borrower.returned = book.borrows.find(({id}) => 
      id === userIds[userId]).returned;
    result.push(borrower)
  }
  return result
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
