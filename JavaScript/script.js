const form = document.querySelector("form");
const Name = document.querySelector("#exampleFormControlInput1");
const Email = document.querySelector("#EexampleFormControlInput1");
const subject = document.querySelector("#exampleFormControlInput1")
const message = document.querySelector("#exampleFormControlTextarea1")
console.log(message);






form.addEventListener("Submit", formhandler);
function formhandler(e){
    e.preventDefault();
    
const forminfo = {
    Name: Name.value,
    Email: Email.value,
    subject: subject.value,
    message: message.value,

}


console.log(forminfo);
}


