const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@meghafiles.oiw7y.mongodb.net/LIIBRARYAPP?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
const SignupSchema=new Schema({
    name: String,
   
    email: String,
    username:String,
    password:String,
    confirmPassword:String,
});
var Signupdata=mongoose.model('signupdata',SignupSchema);
module.exports=Signupdata;