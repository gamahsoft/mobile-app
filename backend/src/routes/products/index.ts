import {Router} from 'express'

const router = Router()

router.get("/", (req, res) => {
    res.send("List of products");
  });
  
  router.get("/:id", (req, res) => {
    console.log(req.params)
    res.send("A product");
  });
  
  router.post("/", (req, res) => {
    res.send("Product added");
  });

  export default router