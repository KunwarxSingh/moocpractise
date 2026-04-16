# Smart Grid Quiz Practice

An interactive quiz application for practicing Smart Grid: Basics to Advanced Technologies course questions.

## Features

- 🎲 **Randomized Questions** - Questions appear in random order every time
- 🔀 **Shuffled Options** - Answer options are randomized to prevent pattern memorization
- 📊 **Score Tracking** - Real-time score updates as you progress
- ✅ **Instant Feedback** - Know immediately if your answer is correct
- 🎯 **Final Results** - See your total score and percentage at the end
- 🔄 **Restart Anytime** - Practice as many times as you want

## How to Use

1. Open `index.html` in your web browser
2. Read each question carefully
3. Select one of the four options
4. Click "Submit Answer" to check if you're correct
5. Click "Next Question" to continue
6. Review your final score and restart to practice again

## Adding More Questions

Edit the `questions.js` file and add questions in this format:

```javascript
{
    question: "Your question text?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 0  // Index of correct answer (0-3)
}
```

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

## Course

Questions are from the NPTEL course: **Smart Grid: Basics to Advanced Technologies**

---

Made for quiz practice and learning 📚
