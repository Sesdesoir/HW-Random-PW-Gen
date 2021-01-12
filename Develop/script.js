// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {
  var pwlength = parseInt(prompt('How many chars?'));
  console.log(typeof pwlength);
  console.log();
  while(pwlength <8 || pwlength>128){
    alert("Password length needs to be at least 8 or less than 128.")
    pwlength = parseInt(prompt('How many chars?'));
  }
  var pwoptions = [];
  var pw= "";
  var lowercase = confirm("Would you like to use lowercase letters? \n Ok for Yes Cancle for No");
  var uppercase = confirm("Would you like to use uppercase letters? \n Ok for Yes Cancle for No");
  var numbers = confirm("Would you like to use numbers?\n Ok for Yes Cancle for No");
  var specialCharacters = confirm("Would you like to use special characters?\n Ok for Yes Cancle for No");

  if(lowercase === true){
    for(var i= 97; i<= 122; i++){
      pwoptions.push(String.fromCharCode(i));
    }
    }

if(uppercase === true){
  for(var i =65 ; i<=90; i++){
    pwoptions.push(String.fromCharCode(i));
  }
  }

if(numbers  === true){
  for(var i =48; i<= 57; i++){
    pwoptions.push(String.fromCharCode(i));
  }
  }

if (specialCharacters === true){
  pwoptions.push("@","!","#","$","%","?","&","*","^","~","+","=")
}

for(var i=0; i<pwlength;i++){
pw += String(pwoptions[Math.floor(Math.random() * (Math.floor(pwoptions.length-1) -Math.ceil(0) + 1)+ Math.ceil(0))]);
}
return pw;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
