const usercontroller=require("../controllers/user.controller")


const express=require("express")
const router =express.Router()
router.get("/",usercontroller.getusers)
export default router
