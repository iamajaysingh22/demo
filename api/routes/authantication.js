const router = require("express").Router();
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const asyncMiddleware = require("../middleware/asyncMiddleware");
const validateauth = require("../validation/authantication");
const userService = require("../service/user");
const bcrypt = require("bcrypt");

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    console.log(req.body);
    const { error } = validateauth(req.body);
    if (error) {
      return res
        .send("request failed!!! reason" + error.details[0].message)
        .status(400);
    }

    const result = await userService.userViaEmail(
      _.pick(req.body, ["emailId"])
    );
    console.log(result);
    if (!result) return res.send("Invalid email Id").status(400);

    const validpass = await bcrypt.compare(req.body.password, result.password);
    console.log(validpass);
    if (!validpass) return res.send("Invalid password").status(400);
    const token = jwt.sign(
      { id: result._id, email_id: result.email_id },
      "ng-task-dev"
    );
    return res.send({ token: token });
  })
);

module.exports = router;
