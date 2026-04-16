let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let shuffledQuestions = [];
let currentCorrectIndex = null;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const currentEl = document.getElementById('current');
const totalEl = document.getElementById('total');
const quizContainer = document.getElementById('quiz-container');
const resultsEl = document.getElementById('results');
const restartBtn = document.getElementById('restart-btn');

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function initQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedOption = null;
    
    // Shuffle questions
    shuffledQuestions = shuffleArray(questions);
    
    totalEl.textContent = shuffledQuestions.length;
    scoreEl.textContent = score;
    currentEl.textContent = currentQuestion + 1;
    quizContainer.style.display = 'block';
    resultsEl.style.display = 'none';
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= shuffledQuestions.length) {
        showResults();
        return;
    }

    const question = shuffledQuestions[currentQuestion];
    questionEl.textContent = question.question;
    optionsEl.innerHTML = '';
    feedbackEl.classList.remove('show', 'correct', 'incorrect');
    submitBtn.style.display = 'inline-block';
    nextBtn.style.display = 'none';
    selectedOption = null;
    submitBtn.disabled = true;

    // Create array of options with their original indices
    const optionsWithIndices = question.options.map((option, index) => ({
        text: option,
        originalIndex: index
    }));
    
    // Shuffle the options
    const shuffledOptions = shuffleArray(optionsWithIndices);
    
    // Find where the correct answer ended up after shuffling
    currentCorrectIndex = shuffledOptions.findIndex(opt => opt.originalIndex === question.correct);

    // Display shuffled options
    shuffledOptions.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.textContent = option.text;
        optionDiv.dataset.index = index;
        
        optionDiv.addEventListener('click', () => selectOption(index));
        optionsEl.appendChild(optionDiv);
    });

    currentEl.textContent = currentQuestion + 1;
}

function selectOption(index) {
    if (submitBtn.style.display === 'none') return;

    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    options[index].classList.add('selected');
    selectedOption = index;
    submitBtn.disabled = false;
}

function submitAnswer() {
    if (selectedOption === null) return;

    const options = document.querySelectorAll('.option');
    
    options.forEach(opt => {
        opt.classList.add('disabled');
        opt.style.cursor = 'not-allowed';
    });

    if (selectedOption === currentCorrectIndex) {
        score++;
        scoreEl.textContent = score;
        options[selectedOption].classList.add('correct');
        feedbackEl.textContent = '✓ Correct!';
        feedbackEl.classList.add('show', 'correct');
    } else {
        options[selectedOption].classList.add('incorrect');
        options[currentCorrectIndex].classList.add('correct');
        feedbackEl.textContent = `✗ Incorrect! The correct answer is: ${options[currentCorrectIndex].textContent}`;
        feedbackEl.classList.add('show', 'incorrect');
    }

    submitBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function showResults() {
    quizContainer.style.display = 'none';
    resultsEl.style.display = 'block';
    
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-total').textContent = shuffledQuestions.length;
    document.getElementById('percentage').textContent = percentage;
}

submitBtn.addEventListener('click', submitAnswer);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', initQuiz);

// Start the quiz
initQuiz();
