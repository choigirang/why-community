import mongoose from 'mongoose';
import { UserType } from '../../type/type';

const userSchema = new mongoose.Schema({
  // userNum: {
  //   type: Number,
  //   unique: true,
  //   required: true,
  // },
  id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
  super: {
    type: Boolean,
  },
  likes: [
    {
      author: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
      postNumber: {
        type: Number,
        required: true,
      },
    },
  ],
});

userSchema.methods.comparePassword = function (password: string) {
  return password === this.password;
};

const User = mongoose.model<UserType>('User', userSchema);

export default User;
