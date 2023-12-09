# NadTech
#### Live: [https://nadtech-86358.web.app/](https://nadtech-86358.web.app/)

#### Server Side: [https://github.com/nadiaS11/assignment-12-server](https://github.com/nadiaS11/assignment-12-server)

#### 💻This is A Tech Brand Based Website
- **Description:** A tech brand-based website to add , update , delete or order a product
- **Technologies Used:**
  - Frontend: JavaScript, React.js, Tailwind CSS
  - Backend: Node.js, Express.js
  - Database: MongoDB,
  - Authentication: Firebase Authentication 

## Key Features of NadTech
- Brands data are saved in Mongo DB and we fetch the data using the GET method in the server side and the route is made using the brand name. By clicking a brand we get directed to its page where there is a swiper of brand ads and only that brand's specific products.
-  All brands' products are posted using Add Product page info and the data gets saved in productsDB in MongoDB. All the products have an Update button and a Details button.
- The update button route is taken using product ID to specifically get the default value of that product while we update. The detail button route is also found using product ID and there's an add-to-cart button in the details page of a product. By clicking on Add to Cart HandleAddToCart gets triggered which takes the product object as a parameter and creates another object that has email and product as property. This handle uses the POST  method to add products to the user's cart and send the info and email to the MongoDB database called cartDB.
- In the My Cart Page there is a delete button that triggers a handler to delete a product from the cart and uses the DELETE method of CRUD operation to remove the products from the database as well. Additionally, the shown products on My Cart are user-specific.
- In the Newsletter component whenever a visitor submits their email, the email gets Posted to the MongoDB database called emailDB which also uses the POST method to send the data to the server side.
