function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let count = 0;
  books.forEach(book => {
    if(!book.borrows[0].returned) count++})
  return count
}

function getMostCommonGenres(books) {
  const count = []
  const genres = books.map(book => book.genre)
  genres.forEach(genre => {
    if(!count.find(entry => entry.name === genre)) {
      count.push({
        name: genre,
        count: 1})
    } else {
      let index = count.findIndex(entry => entry.name === genre)
      count[index].count++
    }
  })
  count.sort((a, b) => {
    return b.count-a.count
  })
  return count.slice(0, 5)
}

function getMostPopularBooks(books) {
  const popBooks = []
  books.forEach(book => {
    popBooks.push({
      name: book.title,
      count: book.borrows.length
    })
  })
  popBooks.sort((a, b) => {
    return b.count-a.count
  })
  return popBooks.slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  const popAuthors = []

  // Make helper functions
  const popBooks = []
  books.forEach(book => {
    let authorName = authors.find(author => author.id === book.authorId).name
    popBooks.push({
      author: `${authorName.first} ${authorName.last}`,
      borrows: book.borrows.length
    })
  })

  popBooks.forEach(book => {
    if(!popAuthors.find(entry => entry.name === book.author)) {
      popAuthors.push({
        name: book.author,
        count: book.borrows
      })
    } else {
      let index = popAuthors.findIndex(entry => entry.name === book.author)
      popAuthors[index].count += book.borrows
    }
  })
  popAuthors.sort((a,b) => {
    return b.count - a.count;
  })
  return popAuthors.slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
