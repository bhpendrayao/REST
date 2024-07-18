const { post } = require("../routes/feed");

exports.getPosts = (req,res,next)=>{
    res.status(200).json({
        posts:[{titles:'First Post',content:'this is the first post!'}]
    });
}; 

exports.createPost =(req,res,next)=>{
   const title = req.body.title;
   const content = req.body.content;
    // create post in db
  res.status(201).json({
    message:'post created succesfully',
    post:{id: new Date().toISOString(),title:title, content:content}
  });
}