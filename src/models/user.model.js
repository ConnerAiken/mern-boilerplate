import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // add token as string
  token: {
    type: String,
    required: true,
  },

  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}],

  // this 
//   friends: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User'
//   }],
//   spotifyPlaylists: [{
//     type: String
//   }]
});

const User = mongoose.model('User', UserSchema);

export default User;
