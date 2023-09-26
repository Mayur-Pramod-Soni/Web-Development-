const questions = [
    {
        question:"Which is the largest animal in the world ?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false}            
        ]

    },
    {
        question:"Who invented Java ?",
        answers:[
            {text:"James -Gosling",correct:true},
            {text:"Dennis-Ritchie",correct:false},
            {text:"A.Ruffelo",correct:false},
            {text:"Meera Murcury",correct:false}            
        ]

    },
    {
        question:"Javascript language other name ?",
        answers:[
            {text:"Java-8",correct:false},
            {text:"Nextscript",correct:false},
            {text:"Livescript",correct:true},
            {text:"Nodescript",correct:false}            
        ]

    },
];
const questionElement = document.getElementById("question");
questionElement.innerHTML="question"
const answerButton = document.getElementById("answerbuttons");
const nextButton = document.getElementById("nbtn");

let currentQueIndex = 0;
let score = 0;

function startQuiz()
{
    currentQueIndex= 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions()
{
    resetState();
    let currentQuestion = questions[currentQueIndex];
    let questionNo = currentQueIndex + 1 ;
    questionElement.innerHTML = questionNo+ ". "+currentQuestion.question;

    currentQuestion.answers.forEach(answers=>{
        const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer);
        })
        
}


// function load(v)
// {
//     alert(v)
// }

function resetState()
{
    nextButton.style.display = "none" ; 
    while(answerButton.firstChild){
        answerButton.appendChild(button)
    };
}

function selectAnswer()
{
     const selectedBtn = e.target;
     const isCorrect = selectedBtn.dataset.correct === "true"
     if(isCorrect)
     {
        selectedBtn.classList.add("correct");
     }
     else{
        selectedBtn.classList.add("incorrect")
     }
     Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true")
        {
            button.classList.add("correct");
            score++;
        }
        button.disabled = true ;
     });
     nextButton.style.display = "block" ;

}

function ShowScore()
{
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block" ;
}


function handleNextButton()
{
    currentQueIndex++;
    if(currentQueIndex < questions.length)
    {
        showQuestions();
     }
     else{
        ShowScore();
     }
}


nextButton.addEventListener("click",()=>{
    if(currentQueIndex < questions.length)
    {
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();