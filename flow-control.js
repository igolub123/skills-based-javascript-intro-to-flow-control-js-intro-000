function basicTeenager(age) {
  var msg = 'You are a teenager!'
  if(age >= 13 && age <=19){
    return console.log(msg)
  }
  return undefined

}

function teenager(age) {
  var msg = 'NO MSG!!!'
  if(age >= 13 && age <=19){
    msg ='You are a teenager!'
  }
  else{
    msg ="You are not a teenager"
  }
  return console.log(msg)
}

function ageChecker(age) {
  var msg = "You are not a teenager"
  if(age >= 13 && age <=19){
    msg ='You are a teenager!'
  }
  else if(age<=12){
    msg ="You are a kid"
  }
  else if(age>19){
    msg ="You are a grownup"
  }

  return console.log(msg)

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
