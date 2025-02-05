class Book {
    #ownerName = "";
    pages = 0;

    constructor(pages=0) {
        this.pages = pages;
    }

    getPageCount() {
        return `This book has ${this.pages } pages.`;
    }
    setOwner(newOwnerName) {
        this.#ownerName = newOwnerName;
      }
    
      getOwner() {
        return `This book belongs to ${this.#ownerName}`;
      }
}

const myBook = new Book(200);
console.log("My Book Pages:", myBook.pages);

console.log("My Book Page Count:", myBook.getPageCount());

console.log("My Book Owner:", myBook.getOwner());

