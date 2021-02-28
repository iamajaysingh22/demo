const router = require("express").Router();
const asyncMiddleware = require("../middleware/asyncMiddleware");
const validateUser = require("../validation/user");
const userService = require("../service/user");

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) {
      return res
        .send("request failed!!! reason" + error.details[0].message)
        .status(400);
    }
    userService.saveUser(req.body);

    return res.send("user has been created successfully!!");
  })
);

module.exports = router;
