import mongoose from "mongoose"
import User from '../models/user.model';
import FriendRequest from '../models/FriendRequest.model';



export async function getusers(req, res){
    //logic with mongodb ysers

    //const result = await userService.queryUsers(filter, options);
    //use await 

    const users = await User.find({});
    res.json(users);
}

export async function createUser(req, res){
    const { name, email, password, token } = req.body;
    const user = new User({ name, email, password, token });
    await user.save();
    res.status(201).json(user);
}
//
export async function addFriend(req, res) {
    const { userId, friendId } = req.body;
    const user = await User.findById(userId);
    user.friends.push(friendId);
    await user.save();
    res.json(user);
}

export async function acceptFriendRequest(req, res) {
    const { requestId } = req.body;
    //logging to debug
    console.log("Received requestId:", requestId);
    console.log("Type of requestId:", typeof requestId, "Length:", requestId.length);

    
    const friendRequest = await FriendRequest.findById(requestId);
    if (!friendRequest) {
      return res.status(404).json({ message: 'Friend request not found.' });
    }
  
    if (friendRequest.status !== 'pending') {
      return res.status(400).json({ message: 'This friend request has already been processed.' });
    }
  
    // Updating the status of the friend request
    friendRequest.status = 'accepted';
    await friendRequest.save();
  
    // Adding each user to the other's friends list
    const sender = await User.findById(friendRequest.sender);
    const receiver = await User.findById(friendRequest.receiver);
  
    sender.friends.push(friendRequest.receiver);
    receiver.friends.push(friendRequest.sender);
  
    await sender.save();
    await receiver.save();
  
    res.json({ message: 'Friend request accepted successfully.' });
  }

export async function sendFriendRequest(req, res) {
  const { senderId, receiverId } = req.body;

  if (!senderId || !receiverId) {
    return res.status(400).json({ message: 'Both sender and receiver IDs are required.' });
  }

  // Check if the request already exists
  const existingRequest = await FriendRequest.findOne({ sender: senderId, receiver: receiverId });
  if (existingRequest) {
    return res.status(400).json({ message: 'Friend request already sent.' });
  }

  const friendRequest = new FriendRequest({
    sender: senderId,
    receiver: receiverId,
    status: 'pending'
  });
  await friendRequest.save();

  res.json({ message: 'Friend request sent successfully.' });
}

