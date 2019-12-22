const time = require("./time");
const User = require("./user");
const find = require("./find");

const add = async function(req,res){
  try{
    const {userId,description,duration} = req.body;
    
    let date = time(req.body.date);
    
    const info = {userId: userId,description: description,duration: duration,date: date};
  
    if(date == "Invalid Date" ) return res.json("Invalid date");  
  
    let finder = await find(User,"_id",userId);
    
    if(finder === undefined) return res.send(`Cant find user with userId: ${userId}`);
    
    
    finder[0].exercises.push({
      description: description,
      duration: duration,
      date: date
    });
    
    finder[0].save(err => {if(err) return console.log(err)}); 
    
    return res.json({_id:userId, username: finder[0].name, description: description, duration: duration, date: date});
    
  }catch(err){
    console.log(err);
    res.send("error");
  }
  

}
module.exports = add;