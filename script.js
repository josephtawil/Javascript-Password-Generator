// // // Assignment Code
var generateBtn = document.body.querySelector("#generate");

// // // // Write password to the #password input
// // // function writePassword() {

// // //   var password = generatePassword(10, [lowercase, uppercase, numbers]);
// // //   var passwordText = document.querySelector("#password");

// // //   passwordText.value = password;

// // // }

// // // Add event listener to generate button

 generateBtn.addEventListener("click", function(e)
 {
     e.preventDefault();
     var prompts = prompt("Answer the following questions to generate a password.")
     var length = prompt("Choose length from 8 to 128 characters");
var chartype = prompt("Choose lowercase,uppercase,numbers, or special");
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var special = ["!","#","*",")"];
var numbers = [];    
for(var i = 8; i <= 128; i++)
{
    numbers.push(i);
}
var array = [];
   
       if(chartype === "lowercase")
       {
            array = [lowercase];
            
       }
       else if (chartype === "uppercase")
       {
        array = [uppercase];
       }
       else if(chartype === "special")
       {
            array = [special];
       }
       else if(chartype === "numbers")
       {
        
            array = [numbers];
           
       }
       else
       {
           alert("Please enter the type of character types you want.");
       }
     
    
    var password =  generatePassword(length, array);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
   
    });

function generatePassword(num, arr)
{
    var possibilityIndex = 0;
    var password = "";
    var targetArray =[];

    for(var i = 0; i < num; i++)
    {
        targetArray = arr[possibilityIndex];
        possibilityIndex++;

        password += targetArray[Math.floor(Math.random() * targetArray.length)];
        
        if(possibilityIndex === arr.length)
        {
            possibilityIndex = 0;
        }
    }
    var passwordArray = password.split("");
    var arrayLength = passwordArray.length;
    var scrambledPassword = "";
    var random = 0;

    for(var i = 0; i < arrayLength; i++)
    {
        random = Math.floor(Math.random() * passwordArray.length);
        scrambledPassword += passwordArray.splice(random,1);
    }
    // return {betterPassword : scrambledPassword , lamePass: password};
    alert("Your password is " + scrambledPassword);
 };

//  console.log(generatePassword(10, [lowercase, uppercase, numbers]));
// console.log([lowercase,uppercase,special,numbers]);
