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

 return (age >= 13 && age <=19) ? console.log("You are a teenager") : console.log("You are not a teenager")

}

function switchAge(age) {
  var msg = "You are a teenager";
  switch (age){
    case 13:
      //console.log(msg);
      break;
    case 14:
      //console.log(msg);
      break;
    case 15:
      //console.log(msg);
      break;
    case 16:
      //console.log(msg);
      break;
    case 17:
      //console.log(msg);
      break;
    case 18:
      //console.log(msg);
      break;
    case 19:
      //console.log(msg);
      break;
    default:
      msg="You have an age";


    return console.log(msg);
  }

}
