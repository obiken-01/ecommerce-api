const express = require("express");
const products = require("./data/product");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`METHOD: ${req.method} | URL: ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  console.log("root GET endpoint is called.");
  res.send("Hello World! My API is now running");
});

app.get("/test", (req, res) => {
  console.log("~/test GET endpoint is called.");
  res.send("This is a test response! On a different route.");
});

app.get("/api/products", (req, res) => {
  res.json({
    count: products.length,
    data: products
  });
});

app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.json(product);
});

app.post("/api/products", (req, res) => {
    const { name, price, category } = req.body || {};

    if(!name || !price || !category){
        return res.status(400).json({
            message: "Name, Price and Category are required."
        });
    }

    const newProduct = {
        id: products.length + 1,
        name: name,
        price: price,
        category: category
    };

    products.push(newProduct);

    res.status(200).json(newProduct);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});