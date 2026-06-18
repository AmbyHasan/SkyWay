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
} , {
    timestamps:true
})


//this will run automatically 
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 12);

  next();
});



userSchema.methods.comparePassword = async function (
  candidatePassword
) {
  return await bcrypt.compare(
    candidatePassword,
    this.password
  );
};



//it will be helpful in login lookups and admin user lisiing
userSchema.index({ email: 1 });
userSchema.index({ createdAt: -1 });


const User = mongoose.model("User", userSchema);

export default User;