const router = require("express").Router();
const validate = require("../validation/user");

const asyncMiddleware = require("../middleware/asyncMiddleware");
/* What is the role of AsyncMiddleware? 
  TO avoid repeatedly using try catch block  we can use asyncMiddleware;
*/
router.get(
  "/",
  asyncMiddleware(async (req, res) => {
    console.log("product");
  })
);
router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    let { error } = validate(req.body);
    if (error) {
      return res
        .send("request failed!!! reason" + error.details[0].message)
        .status(400);
    }
  })
);
module.exports = router;
