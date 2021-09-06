const { Router } = require("express")
const { usersController } = require("../controllers/users.controller")
const { check } = require("express-validator")
const middleware = require("../middlewares/auth.middleware")

const router = Router()

router.post("/users", [
  check("login", "Логин должен быть").notEmpty(),
  check("password", "пароль должен быть минимум 5 символов и максимум 10 символов").isLength({min: 5, max: 10})
], usersController.registration)
router.post("/login", usersController.login)
router.patch("/addCoffeeToCart", middleware, usersController.addCoffeeToCart)

module.exports = router