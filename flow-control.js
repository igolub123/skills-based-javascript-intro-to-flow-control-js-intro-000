function basicTeenager(age) {

  if(age >= 13 && age <=19){
    return "You are a teenager!"
  }
  return undefined

}

function teenager(age) {

  if(age >= 13 && age <=19){
    return 'You are a teenager!'
  }
  else{
    return "You are not a teenager"
  }

}

function ageChecker(age) {
  //var msg = "You are not a teenager"
  if(age >= 13 && age <=19){
    return 'You are a teenager!'
  }
  else if(age<=12){
    return "You are a kid"
  }
  else if(age>19){
    return "You are a grownup"
  }

  return undefined

}

function ternaryTeenager(age) {

 return (age >= 13 && age <=19) ? "You are a teenager" : "You are not a teenager"

}

function switchAge(age) {
  var msg = "You are a teenager";
  switch (age){
    case 13:
      return msg;
      break;
    case 14:
      return msg;
      break;
    case 15:
      return msg;
      break;
    case 16:
      return msg;
      break;
    case 17:
      return msg;
      break;
    case 18:
      return msg;
      break;
    case 19:
      return msg;
      break;
    default:
      msg="You have an age";
      return msg;


    //return u;
  }

}
