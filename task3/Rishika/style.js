const num1 = Math.ceil(Math.random() * 10);
// math.rand() -- 0-1 ke beech ke decimal nos deta hai so multiply bu 10 kr diya and math.ceil se sirf integer values ayegi.

// console.log(num1);

const formEl = document.querySelector(".form");
const inputEL = document.querySelector("#input");

const scoreEl = document.querySelector("#score");
// let score = 0;
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score =0;
}

scoreEl.innerHTML = `score : ${score}`;

const num2 = Math.ceil(Math.random() * 10);
const quesEl = document.querySelector("#question");
quesEl.innerHTML = `What is ${num1} multiply by ${num2} ?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
  // user ka ans input m store hoga pr vo ek string hogi to use no m convert krna hoga
  const userAns = +inputEL.value;

  if (userAns === correctAns) {
    score++;
    // console.log(score);
    updateLocalStorage();
  } else {
    score--;
    // console.log(score);
    updateLocalStorage();

  }
});


// but score ko khi store bhi to krna hai kyuki jese hi hum refresh krte hai page ko(new numbers lane k liye) score vapis se zero ho jata hai

function updateLocalStorage(){
    localStorage.setItem("score" , JSON.stringify(score));
}



