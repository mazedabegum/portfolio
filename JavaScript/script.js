function portfolio(){
    fetch("portfolio.json")
    .then(res => res.json())
    .then(data => console.log(data))
}


portfolio();

const displayportfolio = (data) =>{

const colportfolio = document.getElementById("portfolio");
// console.log(data);

for(const portfolio of data){
    const div = document.createElement("div");
    div.classList.add(portfolio)
    div.innerHTML = `
    <div class="">
    <img src="https://ibb.co/Fq28CkP">

    </div> 
    <h1>${portfolio,Name}</h1>
    `;

colportfolio.appendChild(div);
console.log(portfolio);


};

}




//---------contact area start---------------
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

//---------contact area end-----------------------
