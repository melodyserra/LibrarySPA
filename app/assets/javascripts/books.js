// Namespace
var Library = {};

// Fetch all books
Library.loadBooks = function() { // Fetch all the books
	// var book = $("#book").val();
	$.get('/books').done(function(books){
		$(".myBooks").remove();
		Library.appendBook(books);
		// console.log(books);
	});
  // console.log("Where are all the books")
};

Library.appendBook = function(books) {
  var ul = $("<ul>").attr("id", "books");

  books.forEach(function(book){
  	var bookHTML = HandlebarsTemplates["books/book"](book);
  	ul.append(bookHTML);
  	// var li = $("<li>").text(book.title + " by " + book.author);
  	// ul.append(li);
  });
  
  // for (var key in books) {
  // 	console.log(books[key])
  //   var li = $("<li>").text(books[key].title + " by " + books[key].author);
  //   ul.append(li);
  // }
  
  $("#container").append(ul);
};
// Add a book
Library.addBook = function() {
  var author = $(".authorName").val();
  var title = $(".bookTitle").val();
  $.ajax({
    type:"POST",
    url: "/books",
    data: {book: {title: title, author: author}}
  }).done(function(data){
    console.log(data);
    $(".authorName").val("");
    $(".bookTitle").val("");
    Library.loadBooks();
  });
};

// Delete a book
Library.deleteBook = function() {
};
