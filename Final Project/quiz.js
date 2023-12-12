//function to enable confetti
function initializeConfetti() {
  particlesJS('confetti-container', {
    //styling the confetti particles that will fall
    particles: {
          number: { value: 200 },
          color: { value: '#dcb482'},
          shape: { type: 'circle'  },
          opacity: { value: 0.9, random: true },
          size: { value: 10, random: true },
          //styling the specifics for how the confetti will fall
          move: {
              enable: true,
              speed: 5,
              direction: 'bottom',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
          },
      },
      //preventing confetti from interacting with the mouse
      interactivity: { detect_on: 'window', events: { onhover: { enable: false } } },
  });
}
//calling the confetti to play when the quiz is done
function confettiOnQuizComplete() {
  initializeConfetti();
}
//array of quiz questions
const quizQuestions = [
    {
      question: "What is the capital of Washington?",
      options: ["Olympia", "Phoenix", "Trenton", "Louisville"],
      correctAnswer: "Olympia"
    },
    {
      question: "What is the state flower of Kansas?",
      options: ["Yellow Jessamine", "Rose", "Mountain Laurel", "Red Clover"],
      correctAnswer: "Rose"
    },
    {
      question: "What is the capital of Florida?",
      options: ["Charleston", "Lincoln", "Concord", "Tallahassee"],
      correctAnswer: "Tallahassee"
    },
    {
      question: "In what year did Pennsylvania become a state?",
      options: ["1776", "1812", "1787", "1852"],
      correctAnswer: "1787"
    },
    {
      question: "What is the state bird of Texas?",
      options: ["Scissor-Tailed Flycatcher", "Mockingbird", "Ring-Necked Pheasant", "Goldfinch"],
      correctAnswer: "Mockingbird"
    },
    {
      question: "What is the largest city in South Dakota?",
      options: ["Manchester", "Columbus", "Omaha", "Sioux Falls"],
      correctAnswer: "Sioux Falls"
    },
    {
      question: "What is the official state food of Connecticut?",
      options: ["Pizza", "Gumbo", "Popcorn", "Blueberry Muffin"],
      correctAnswer: "Pizza"
    },
    {
      question: "What state is singer Chris Stapleton from?",
      options: ["Ohio", "Alabama", "West Virginia", "Kentucky"],
      correctAnswer: "Kentucky"
    },
    {
      question: "What is the state abbreviation of Arkansas?",
      options: ["AK", "AZ", "AR", "AL"],
      correctAnswer: "AR"
    },
    {
      question: "What is the nickname of Michigan?",
      options: ["The Bluegrass State", "The Sunshine State", "The Wolverine State", "The Hoosier State"],
      correctAnswer: "The Wolverine State"
    },
  ];
//tracking the state of the quiz
let currentQuestionIndex = 0;
let score = 0;
//starting the quiz
function startQuiz() {
  //after the start button goes away the question will appear
  document.getElementById("start-button").style.display = "none";
  displayQuestion();
}
//display question and possible answers
function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");
  questionText.innerHTML = "";
  answerButtons.innerHTML = "";
  //show current question
  questionText.innerHTML = currentQuestion.question;
  //make answer buttons
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("answer-button");
    answerButtons.appendChild(button);
    //checking the answer on click
    button.addEventListener("click", function() {
      checkAnswer(option);
    });
  });
}
//checking the answer
function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const answerButtons = document.getElementsByClassName("answer-button");
  //disabling buttons other than the button selected
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].disabled = true;
  }
  //locating button that was selected
  const selectedButton = Array.from(answerButtons).find(button => button.innerText === selectedOption);
  //if correct button was selected add to score and highlight
  if (selectedOption === currentQuestion.correctAnswer) {
    selectedButton.classList.add("correct-answer");
    score++; 
  } else {
    //else do not add to score and highlight
    selectedButton.classList.add("wrong-answer");
    //highlight correct answer
    const correctButton = Array.from(answerButtons).find(button => button.innerText === currentQuestion.correctAnswer);
    correctButton.classList.add("correct-answer");
  }
  //see next question or end the quiz
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    setTimeout(displayQuestion, 1000);
  } else {
    setTimeout(endQuiz, 1000);
  }
}
//ending the quiz
function endQuiz() {
  //calculate score percentage
  const scorePercentage = (score / quizQuestions.length) * 100;
  const questionContainer = document.getElementById('question-container');
  //display completion quote and score
  questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
  `;
  //when quiz ends start confetti
  confettiOnQuizComplete();
}
//start quiz when start button is clicked
document.getElementById("start-button").addEventListener("click", startQuiz);