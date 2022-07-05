function findAccountById(accounts, givenId) {
  return accounts.find(({id}) => id === givenId)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort(({name: {last: lastA}}, {name: {last: lastB}}) => 
    lastA.toLowerCase() > lastB.toLowerCase() ? 1 : -1)
}

function getTotalNumberOfBorrows({id: userId}, books) {
  return books.reduce((total, {borrows}) => {
    return total + borrows.filter(({id}) => id === userId).length
  }, 0)
}

function getBooksPossessedByAccount({id}, books, authors) {
  return books.reduce((acc, book) => {
    if (book.borrows[0].id === id) 
      acc.push({
        ...book,
        author: authors.find(({id}) => book.authorId === id)
      });
    return acc
  }, [])
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
