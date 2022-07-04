function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b) => 
    a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
    return total + book.borrows.filter(borrow => borrow.id === account.id).length
  }, 0)
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = [];
  books.forEach(book => {
    if (book.borrows.find(borrow => borrow.id === account.id && !borrow.returned)) 
      borrowedBooks.push(book);
      borrowedBooks.forEach(book => {
        book.author = authors.find(author => book.authorId === author.id)
      })
  })
  return borrowedBooks
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
