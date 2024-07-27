import mongoose from 'mongoose';
import {genSalt, hash} from 'bcrypt';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  }, 
  password: {
    type: String,
    required: [true, "Password is required"],
  }, 
  firstName: {
    type: String,
    required: false,
  }, 
  lastName: {
    type: String,
    required: false,
  }, 
  image: {
    type: String,
    required: false,
  }, 
  color: {
    type: Number,
    required: false,
  }, 
  profileSetup: { // 사용자가 프로필 설정을 완료했는지를 나타내는 불리언 값
    type: Boolean,
    default: false // 사용자가 처음 생성될 때 profileSetup 필드는 기본적으로 false로 설정
  }
});


userSchema.pre("save", async function(next) {
  const salt = await genSalt();
  this.password = await hash(this.password, salt);
  next();
});

const User = mongoose.model("Users", userSchema);

export default User;