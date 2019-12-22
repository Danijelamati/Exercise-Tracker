const find = async (Model,name,value) => {  
  try{
    
    let obj = {};
    obj[name] = value;    
    
    const findRes = await Model.find(obj);
    
    return findRes;    
  }catch(error){
    console.log("error");
  }
}


module.exports = find;