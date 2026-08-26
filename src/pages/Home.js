import React, { useState, useEffect } from 'react';
import { quizzes } from '../data/quizzes';
import './Home.css';

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 4,
  delay: Math.random() * 4,
}));

export default function Home({ onStart }) {
  const [hovered, setHovered] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [stats] = useState({
    questions: quizzes.reduce((a, q) => a + q.questions.length, 0),
    units: quizzes.length,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`home ${mounted ? 'mounted' : ''}`}>
      {/* Background particles */}
      <div className="particles">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="orb orb-blue" />
      <div className="orb orb-orange" />
      <div className="orb orb-green" />

      <div className="home-inner">
        {/* Header */}
        <header className="home-header">
          <div className="home-badge">
            <span className="badge-dot" />
            Quiz Arena
          </div>
          <h1 className="home-title">
            XCODE<br />
            <span className="title-accent">Quize Arena</span>
          </h1>
          <p className="home-subtitle">
            Test your knowledge across every quiz set.<br />
            Choose a quiz below to begin your challenge.
          </p>
          <div className="home-stats">
            <div className="stat">
              <span className="stat-num">{stats.units}</span>
              <span className="stat-label">Units</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">{stats.questions}</span>
              <span className="stat-label">Questions</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">4</span>
              <span className="stat-label">Types</span>
            </div>
          </div>
        </header>

        {/* Quiz Cards */}
        <section className="quiz-grid">
          {quizzes.map((quiz, idx) => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
              index={idx}
              hovered={hovered === quiz.id}
              onHover={() => setHovered(quiz.id)}
              onLeave={() => setHovered(null)}
              onStart={() => onStart(quiz)}
            />
          ))}
        </section>

        {/* Footer */}
        <footer className="home-footer">
          <p>XCODE Quize Arena</p>
        </footer>
      </div>
    </div>
  );
}

function QuizCard({ quiz, index, hovered, onHover, onLeave, onStart }) {
  const typeCount = {
    multiple_choice: quiz.questions.filter(q => q.type === 'multiple_choice').length,
    true_false: quiz.questions.filter(q => q.type === 'true_false').length,
    identification: quiz.questions.filter(q => q.type === 'identification').length,
    enumeration: quiz.questions.filter(q => q.type === 'enumeration').length,
  };

  return (
    <div
      className={`quiz-card ${hovered ? 'hovered' : ''}`}
      style={{
        '--card-color': quiz.color,
        '--card-glow': quiz.color + '40',
        animationDelay: `${index * 0.08}s`,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="card-glow-border" />
      <div className="card-inner">
        <div className="card-top">
          <div className="card-emoji">{quiz.emoji}</div>
          <div className="card-meta">
            <span className="card-week">{quiz.week}</span>
            <span className="card-unit">{quiz.subtitle}</span>
          </div>
        </div>

        <h2 className="card-title">{quiz.title}</h2>
        <p className="card-desc">{quiz.description}</p>

        <div className="card-types">
          {typeCount.multiple_choice > 0 && (
            <span className="type-badge blue">{typeCount.multiple_choice} MCQ</span>
          )}
          {typeCount.true_false > 0 && (
            <span className="type-badge purple">{typeCount.true_false} T/F</span>
          )}
          {typeCount.identification > 0 && (
            <span className="type-badge orange">{typeCount.identification} ID</span>
          )}
          {typeCount.enumeration > 0 && (
            <span className="type-badge green">{typeCount.enumeration} ENUM</span>
          )}
        </div>

        <div className="card-footer">
          <span className="card-total">{quiz.questions.length} questions</span>
          <button className="start-btn" onClick={onStart}>
            Start Quiz
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}