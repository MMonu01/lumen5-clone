let form = document.querySelector("form");

form.addEventListener("submit",getdata)

let arr = JSON.parse(localStorage.getItem("user-list")) || []
function getdata(event){
    event.preventDefault()
let obj = {
    name:form.name.value,
    email:form.email.value,
    password:form.password.value
}

// let word = "xy";
let x = false;
let y = false;
let a = false;
let b = false;
let c= false;

let sameemail = false;

for(let i =0; i<arr.length; i++){
    if(arr[i].email == obj.email){
  sameemail = true;
  console.log(sameemail)
    }
    }


let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "0123456789"
let symbol = "!@#$%^&*()~`/-_+\|{}[];:<>?.,"

for(let i =0; i<lower.length; i++){
    if(obj.password.includes(lower[i])){
        x = true;
        break;
    }
}


for(let i =0; i<upper.length; i++){
    if(obj.password.includes(upper[i])){
        y = true;
        break;
    }
}

for(let i =0; i<number.length; i++){
    if(obj.password.includes(number[i])){
        a = true;
        break;
    }
}

for(let i =0; i<symbol.length; i++){
    if(obj.password.includes(symbol[i])){
        b = true;
        break;
    }
}

if(a || b){
    c = true;
}



if(obj.name == "" && obj.email == "" && obj.password == ""){
    alert("Please provide the following details")
 
}

else if(obj.name == "" && obj.email == ""){
    alert("Please provide your full name and a valid email")

}

else if(obj.email == "" && obj.password == "")
{
    alert("Please provide a valid email and password")

}

else if(obj.name == "" && obj.password == ""){
alert("Please provide your full name and a valid password")

}


else if(obj.name == ""){
    alert("Please provide your full name")
  
}

else if(obj.email == ""){
    alert("Please provide a valid email")

}
else if(sameemail == true){
alert("This email is already registered")

}
else if(obj.password==""){
    alert("Please a valid password")

    
}

else if(x==false){
    alert("Password must contain a lowercase character")

    }

    else if(y==false){
        alert("Password must contain an uppercase character")

        }

        else if(c==false){
            alert("Password must contain a number or symbol")

        }
    
else if(obj.password.length<8){
    alert("Password must contain atleast 8 characters")

}

else{

    arr.push(obj)
    localStorage.setItem("user-list",JSON.stringify(arr))
    window.open("index.html")
}


}