const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("hello step 2");
  return res.send("application is up!!!!");
});

module.exports = router;
