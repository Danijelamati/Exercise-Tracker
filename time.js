const time = (time) => {
  
  if (time == "") return new Date().toISOString().split('T')[0];
  
  if(new Date(time) == "Invalid Date") return "Invalid Date";
    
  return new Date(time).toISOString().split('T')[0]; 
  
}

module.exports = time;