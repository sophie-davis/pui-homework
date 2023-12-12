function initializeConfetti() {
  particlesJS('confetti-container', {
      particles: {
          number: { value: 200 },
          color: { value: '#dcb482'},
          shape: { type: 'circle'  },
          opacity: { value: 0.9, random: true },
          size: { value: 10, random: true },
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
      interactivity: { detect_on: 'window', events: { onhover: { enable: false } } },
  });
}

// Call the function to initialize confetti when the quiz is completed
function confettiOnQuizComplete() {
  initializeConfetti();
}






// Define an array of quiz questions
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

  // Variables to track quiz state
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
  // Hide the start button and display the first question
  document.getElementById("start-button").style.display = "none";
  displayQuestion();
}

// Function to display a question and its options
function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");

  // Clear previous question and answer options
  questionText.innerHTML = "";
  answerButtons.innerHTML = "";

  // Display the current question
  questionText.innerHTML = currentQuestion.question;

  // Create answer buttons for each option
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("answer-button");
    answerButtons.appendChild(button);

    // Add click event listener to check the answer
    button.addEventListener("click", function() {
      checkAnswer(option);
    });
  });
}


function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const answerButtons = document.getElementsByClassName("answer-button");

  // Disable all buttons to prevent further interaction
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].disabled = true;
  }

  // Find the button corresponding to the selected answer
  const selectedButton = Array.from(answerButtons).find(button => button.innerText === selectedOption);

  // Check if the selected answer is correct
  if (selectedOption === currentQuestion.correctAnswer) {
    selectedButton.classList.add("correct-answer");
    score++; // Increment the score for correct answers
  } else {
    selectedButton.classList.add("wrong-answer");
    // Find the button corresponding to the correct answer and highlight it
    const correctButton = Array.from(answerButtons).find(button => button.innerText === currentQuestion.correctAnswer);
    correctButton.classList.add("correct-answer");
  }

  // Move to the next question or end the quiz if all questions are answered
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    // Delay before displaying the next question
    setTimeout(displayQuestion, 1000);
  } else {
    // Delay before ending the quiz
    setTimeout(endQuiz, 1000);
  }
}


// Function to end the quiz
function endQuiz() {
  // Calculate the score percentage
  const scorePercentage = (score / quizQuestions.length) * 100;

  // Display the final score
  const questionContainer = document.getElementById('question-container');
  questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
  `;

  // Trigger confetti
  confettiOnQuizComplete();
}

// Add event listener to start the quiz when the start button is clicked
document.getElementById("start-button").addEventListener("click", startQuiz);



















