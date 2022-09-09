const Book = require("../model/Book");

// Get All Books Function Working
const getAllBooks = async(req, res, next) =>{
    let books;
    try{
        books = await Book.find();
    } catch(err){
        console.log(err);
    }
    if(!books){
        return res.status(404).json({message: "No Products Found"});
    }
    return res.status(200).json({books});
}

// Get By User Id Function Working
const getById = async(req, res, next)=>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findById(id);
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message: "No book Found"});
    }
    return res.status(200).json({book});

}

// Adding Book Function // Working
const addBook = async (req, res, next) => {
    const { name, author, description, price, available, image } = req.body;
    let book;
    try {
      book = new Book({
        name,
        author,
        description,
        price,
        available,
        image,
      });
      await book.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!book) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ book });
  };

//  Update Book Function // Working
const updateBook = async (req, res, next) =>{
    const id = req.params.id;
    const {name, author, description, price, available, image} = req.body;
    let book;
    try{
        book = await Book.findByIdAndUpdate(id, {
            name, author, description, price, available
        });
        book = await book.save();
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message: "Unable To Add"});
    }
    return res.status(201).json({ book });
}

// Delete Book Function Working
const deleteBook = async(req, res, next)=>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndRemove(id);
        await book.save();
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message: "Unable To Delete"});
    }
    return res.status(200).json({message: "Delete Successfully"})
}
exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;