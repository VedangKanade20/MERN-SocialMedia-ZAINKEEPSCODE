import express from 'express'
import { deleteUser, followUser, getAllUsers, getUser, unfollowUser, updateUser, searchUsers } from '../controllers/UserController.js'
import authMiddleWare from '../middleware/AuthMiddleware.js';
import userMiddleWare from '../middleware/UserMiddleware.js';


const router = express.Router()

router.get('/:id', getUser);
router.get('/',getAllUsers)
router.put('/:id',authMiddleWare, updateUser)
router.delete('/:id',authMiddleWare, deleteUser)
router.put('/:id/follow',authMiddleWare, followUser)
router.put('/:id/unfollow',authMiddleWare, unfollowUser)
router.get('/:id/search', userMiddleWare, searchUsers)

export default router