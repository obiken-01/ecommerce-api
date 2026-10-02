# Capstone 2 - E-Commerce REST API 
 
## Description 
A REST API for managing e-commerce products using Node.js, Express, MongoDB, and Mongoose. 
 
## Technologies - Node.js - Express.js - MongoDB - Mongoose - Postman 
 
## Installation 
1. Clone the repository 
2. Run: npm install 
3. Create .env: 
   PORT=5000 
   MONGO_URI=your_connection_string 
4. Run: npm run dev 
 
## Base URL 
http://localhost:5000 
 
## API Endpoints

### Health Check
GET /

Purpose: Check if the API is running.

Response example:
```json
{
  "message": "E-commerce API is running"
}
```

Success: 200 OK

### Create Product
POST /api/products

Purpose: Create a new product.

Body:
```json
{
   "name": "Mechanical Keyboard",
   "description": "RGB keyboard",
   "price": 1850,
   "category": "Accessories",
   "stock": 12
}
```

Success: 201 Created
Possible errors: 400 Bad Request, 500 Internal Server Error

`name`, `description`, `price`, `category`, and `stock` are required. `isAvailable` is optional and defaults to `true`.

### List Products
GET /api/products

Purpose: Get all products, optionally filtered by category and sorted by a product field.

Query parameters:
- `category` (optional): Filter by exact category, for example `?category=Accessories`.
- `sort` (optional): Sort by a product field, for example `?sort=price` or `?sort=-price` for descending order. Defaults to `name`.

Success: 200 OK
Possible errors: 500 Internal Server Error

### Get Product by ID
GET /api/products/:id

Purpose: Get a product by its MongoDB ID.

Success: 200 OK
Possible errors: 400 Bad Request (invalid ID), 404 Not Found, 500 Internal Server Error

### Update Product
PATCH /api/products/:id

Purpose: Update the provided fields of a product by its MongoDB ID.

Body: Include one or more product fields to update. For example:
```json
{
   "price": 1999,
   "stock": 8
}
```

Success: 200 OK
Possible errors: 400 Bad Request (invalid ID or product data), 404 Not Found, 500 Internal Server Error

### Delete Product
DELETE /api/products/:id

Purpose: Delete a product by its MongoDB ID.

Success: 200 OK
Possible errors: 400 Bad Request (invalid ID), 404 Not Found, 500 Internal Server Error
 
## Testing 
Import/use the Postman collection: MSTCONNECT Capstone 2 API 