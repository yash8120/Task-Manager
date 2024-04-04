const UserService=require('../services/user.services');


exports.register=async(req,res,next)=>{
    try{
        const {email,password,role}=req.body;

        const successRes=await UserService.registerUser(email,password,role);

        res.json({status:true,success:"User Registered Successfully"});
    }catch(error){
        throw error
    }
}
exports.getemp=async(req,res,next)=>{
    try{
        const email=req.params.id;
        console.log({email});
        let todo=await UserService.getEmployee(email);

        res.json({status:true,success:todo});
    }catch(error){
        throw error
    }
}
exports.login=async(req,res,next)=>{
    try{
        const {email,password,role}=req.body;

        const user = await UserService.checkuser(email);
        console.log("--------------user--------------",user);
        if(!user){
            throw new Error('User dont exist');
        }

        const isMatch=await user.comparePassword(password);
        if(isMatch===false){
            throw new Error('Password invalid');
        }

        let tokenData= {_id:user._id,email:user.email};

        const token=await UserService.generateToken(tokenData,"secretKey",'1h')

        res.status(200).json({status:true,token:token,role:user.role})

    }catch(error){
        throw error
        //next(error);
    }
}