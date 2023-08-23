const usercontroller=require("../controllers/user.controller")


const express=require("express")
const router =express.Router()
router.get("/",usercontroller.getusers)

router.post('/create', usercontroller.createUser);
router.post('/sendFriendRequest', usercontroller.sendFriendRequest);
router.post('/acceptFriendRequest', usercontroller.acceptFriendRequest);

export default router
