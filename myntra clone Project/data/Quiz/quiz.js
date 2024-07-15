// Select all questions
const questions = document.querySelectorAll('.question');

// Add click event listener to each question's options
questions.forEach(question => {
  const options = question.querySelectorAll('.option');

  options.forEach(option => {
    option.addEventListener('click', (e) => {
      const selectedOption = e.target;
      const questionId = selectedOption.getAttribute('data-question');

      // Deselect all options for the current question
      options.forEach(opt => {
        if (opt.getAttribute('data-question') === questionId) {
          opt.classList.remove('selected');
        }
      });

      // Select the clicked option
      selectedOption.classList.add('selected');
    });
  });
});

// Add click event listener to submit button
document.getElementById('submit').addEventListener('click', () => {
  // Check if all questions have been answered
  const allQuestionsAnswered = Array.from(questions).every(question => {
    return question.querySelector('.option.selected');
  });

  if (allQuestionsAnswered) {
    // Show result message after quiz is submitted
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<h2>Check out Myntra's athleisure collection</h2>`;
  } else {
    alert('Please answer all questions before submitting.'); // Optional: Provide feedback if questions are unanswered
  }
});
