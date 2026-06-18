import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({
    firstName:{
      type: String,
      required: [true, "First name is required"],
      trim: true,
      maxlength: 50,

    } ,
    lastName:{
        type: String,
      required: [true, "Last name is required"],
      trim: true,
      maxlength: 50,  
    } ,
     email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\S+@\S+\.\S+$/,
        "Please enter a valid email address",
      ],
    },
   
       password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false,
    },

    role: {
      type: String,
      enum: ["user", "admin"], 
      default: "user",
    },

    phone: {
      type: String,
      default: null,
    },

    avatar: {
      type: String,
      default: null,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
     passwordChangedAt: {
      type: Date,
      select: false,
    },
} , {
    timestamps:true
})


//this will run automatically 
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return ;
  }

  this.password = await bcrypt.hash(this.password, 12);


});



userSchema.methods.comparePassword = async function (
  candidatePassword
) {
  return await bcrypt.compare(
    candidatePassword,
    this.password
  );
};






const User = mongoose.model("User", userSchema);

export default User;