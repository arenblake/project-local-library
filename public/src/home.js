function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, {borrows}) => {
    if(!borrows[0].returned) acc++
    return acc
  }, 0)
}

function getMostCommonGenres(books) {
  return _getTopFive(books.reduce((acc, {genre}) => {
    !acc.find(({name}) => name === genre) ? 
    acc.push({
      name: genre,
      count: 1
    }) :
    acc[acc.findIndex(({name}) => name === genre)].count++;
    return acc
  }, []))
}

function getMostPopularBooks(books) {
  return _getTopFive(books.reduce((acc, {title, borrows}) => {
    acc.push({
      name: title,
      count: borrows.length
    })
    return acc
  }, []))
}

function getMostPopularAuthors(books, authors) {
  return _getTopFive(books.reduce((acc, {authorId, borrows}) => {
    const {first, last} = authors.find(({id}) => id === authorId).name
    const authorName = `${first} ${last}`
    !acc.find(({name}) => name === authorName) ?
    acc.push({
      name: authorName,
      count: borrows.length
    }) :
    acc[acc.findIndex(({name}) => name === authorName)].count += borrows.length
    return acc
  }, []))
}

function _getTopFive(arr) {
  arr.sort((elementA, elementB) => {
    return elementB.count - elementA.count;
  })
  return arr.slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
