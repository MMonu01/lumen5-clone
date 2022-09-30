let form = document.querySelector("form");
form.addEventListener("submit",check);

let arr = JSON.parse(localStorage.getItem("user-list")) || [];

function check(event){
event.preventDefault();

let email = document.getElementById("email").value;
let password  = document.getElementById("password").value;


let x = false;
let y = false;
for(let i =0; i<arr.length; i++){
if(arr[i].email == email){
x = true;
}
}

for(let i =0; i<arr.length; i++){
    if(arr[i].password == password){
    y = true;
    }
    }


    

if(email=="" && password == ""){
    alert("Please provide an email and a valid password")
}
if(email==""){
    alert("Please provide an email")
}
else if(password==""){
   alert("Please provide a valid password")
}
else{    
if(y & x){
  
    window.open("index.html")
}

else {
    alert("Either email or password is incorrect")
}
}
}