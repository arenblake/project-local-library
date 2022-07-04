function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedStatus = [[], []];
  books.forEach(book => book.borrows[0].returned ? 
    borrowedStatus[1].push(book) : 
    borrowedStatus[0].push(book));
  return borrowedStatus;
}

function getBorrowersForBook(book, accounts) {
  const borrowerIds = book.borrows.map(({id}) => id)
    .slice(0, 10)
  const result = []
  for (let id in borrowerIds) {
    const borrower = accounts.find(account => 
      account.id === borrowerIds[id])
    borrower.returned = book.borrows.find(borrow => 
      borrow.id === borrowerIds[id]).returned;
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
