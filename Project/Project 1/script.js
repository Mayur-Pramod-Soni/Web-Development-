document.getElementById("submitBtn").addEventListener("click", submitQuiz);

function submitQuiz() {
  var q1 = document.querySelector('input[name="q1"]:checked');
  var q2 = document.querySelector('input[name="q2"]:checked');
  var q3 = document.querySelector('input[name="q3"]:checked');
  var scoreValue = document.getElementById('scoreValue');
  var score = 0;
  
  if (q1.value === "a") {
    score += 1;
  }
  
  if (q2.value === "a") {
    score += 1;
  }
  
  if (q3.value === "a") {
    score += 1;
  }
  
  scoreValue.textContent = score;
  
  // You can add more logic here to display different messages based on the score
  
  // For example:
  if (score === 3) {
    //alert("Congratulations! You got a perfect score!");
    document.write("winner.html");
  } else if (score >= 2) {
    alert("Great job! You almost got a perfect score!");
  } else {
    alert("Better luck next time!");
  }
}
