const {Router} = require("express");
const router = Router();
const usersCtrl = require("../controllers/users.controller");

router.get("/users/signup", usersCtrl.renderSignupForm);

router.post("/users/signup", usersCtrl.signup);

router.get("/users/signin", usersCtrl.renderSigninForm);

router.post("/users/signin", usersCtrl.signin);

router.get("/users/logout", usersCtrl.logout);

module.exports = router;