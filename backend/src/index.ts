import express, { json, urlencoded } from "express";
import productsRouter from "./routes/products/index.js";
import authRoutes from "./routes/auth/index.js";

//order defined matters. these are middleware functions to encode data in the url body
const app = express();
app.use(urlencoded({ extended: false }));
app.use(json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/products", productsRouter);
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
