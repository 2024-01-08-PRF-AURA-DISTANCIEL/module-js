class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  findBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  }

  findBookByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }

  findBookByGenre(genre) {
    return this.books.filter((book) => book.genre === genre);
  }

  borrowBook(title) {
    const book = this.findBookByTitle(title);
    if (book && !book.isBorrowed) {
      book.isBorrowed = true;
    }
  }
}

const bookJs = new Book("JS Ninja", "John Resig", "Tech");
const bookPhp = new Book("PHP Mysteries", "Chris Lis", "Tech");

const lib = new Library();

lib.addBook(bookJs);
lib.addBook(bookPhp);
