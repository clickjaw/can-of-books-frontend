const Book = require('../models/Book')

const bookData = async () => {
    try {
      const book1 = Book.create({
        title: "1984",
        image: "https://images-na.ssl-images-amazon.com/images/I/71NvkZxn-fL.jpg",
        description: "",
      })
      const book2 = Book.create({
        title: "Neuromancer",
        image: "https://images-na.ssl-images-amazon.com/images/I/91Bx5ilP+EL.jpg",
        description: "",
      })
      const book3 = Book.create({
        title: "Tarzan",
        image: "https://images-na.ssl-images-amazon.com/images/I/61v3CIXB7sL.jpg",
        description: "",
      })
      await book1.save()
      await book2.save()
      await book3.save()
    } catch (error) {
      console.log(error);
  }
  }
