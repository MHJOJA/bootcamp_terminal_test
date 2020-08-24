module.exports =function (registration,location){
    if (registration.endsWith(location)){
      return true;
    }
  else return false;
  }