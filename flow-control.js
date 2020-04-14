function basicTeenager(age) {
  var msg = 'NO MSG!!!'
  if(age >= 13 && age <=19){
    msg ='You are a teenager!'
  }
  return console.log(msg)

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

}

function switchAge(age) {

}
