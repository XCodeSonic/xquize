import React, { useState } from 'react';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizResults, setQuizResults] = useState(null);

  const goHome = () => {
    setPage('home');
    setSelectedQuiz(null);
    setQuizResults(null);
  };

  const startQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setPage('quiz');
  };

  const finishQuiz = (results) => {
    setQuizResults(results);
    setPage('results');
  };

  return (
    <div className="app">
      {page === 'home' && <Home onStart={startQuiz} />}
      {page === 'quiz' && (
        <QuizPage quiz={selectedQuiz} onFinish={finishQuiz} onHome={goHome} />
      )}
      {page === 'results' && (
        <ResultsPage results={quizResults} quiz={selectedQuiz} onHome={goHome} onRetry={() => startQuiz(selectedQuiz)} />
      )}
    </div>
  );
}

export default App;
