const User = require("./user");

const getUsers = function(req,res){
  
  User.find({}, function(err, docs){
    if (err) return console.log(err);
    
    res.json(docs.map((x) =>{return {_id: x._id, username: x.name} }));
    
  });
}

module.exports = getUsers;

