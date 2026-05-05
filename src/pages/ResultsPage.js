import React, { useEffect, useState, useRef } from 'react';
import './ResultsPage.css';

const CONFETTI_COLORS = ['#0A84FF', '#30D158', '#FF9F0A', '#FF453A', '#BF5AF2'];

function createConfetti(count = 60) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    size: Math.random() * 8 + 4,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
    rotation: Math.random() * 360,
    shape: Math.random() > 0.5 ? 'circle' : 'rect',
  }));
}

export default function ResultsPage({ results, quiz, onHome, onRetry }) {
  const [mounted, setMounted] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [expanded, setExpanded] = useState({});

  const correct = results.filter(r => r.correct).length;
  const total = results.length;
  const pct = Math.round((correct / total) * 100);
  const passed = pct >= 60;

  useEffect(() => {
    setMounted(true);
    if (passed) {
      setConfetti(createConfetti(80));
      const t = setTimeout(() => setConfetti([]), 5000);
      return () => clearTimeout(t);
    }
  }, [passed]);

  const grade = pct >= 90 ? 'S' : pct >= 80 ? 'A' : pct >= 70 ? 'B' : pct >= 60 ? 'C' : pct >= 50 ? 'D' : 'F';
  const gradeColor = pct >= 80 ? 'var(--green)' : pct >= 60 ? 'var(--orange)' : 'var(--red)';
  const message = pct === 100 ? '🏆 Perfect Score!' :
    pct >= 90 ? '🌟 Outstanding!' :
    pct >= 80 ? '🎉 Great Job!' :
    pct >= 70 ? '👍 Good Work!' :
    pct >= 60 ? '✅ You Passed!' :
    pct >= 40 ? '📚 Keep Studying!' : '💪 Try Again!';

  return (
    <div className={`results-page ${mounted ? 'mounted' : ''}`}>
      {/* Confetti */}
      {confetti.map(c => (
        <div
          key={c.id}
          className="confetti-piece"
          style={{
            left: `${c.x}%`,
            backgroundColor: c.color,
            width: c.shape === 'circle' ? c.size : c.size * 1.5,
            height: c.size,
            borderRadius: c.shape === 'circle' ? '50%' : '2px',
            animationDuration: `${c.duration}s`,
            animationDelay: `${c.delay}s`,
            transform: `rotate(${c.rotation}deg)`,
          }}
        />
      ))}

      <div className="results-inner">
        {/* Score hero */}
        <div className="score-hero">
          <div className="score-quiz-name">
            <span>{quiz.emoji}</span> {quiz.title}
          </div>

          <div className="grade-circle" style={{ '--grade-color': gradeColor }}>
            <svg className="grade-ring" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
              <circle
                cx="60" cy="60" r="52"
                fill="none"
                stroke={gradeColor}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 52}`}
                strokeDashoffset={`${2 * Math.PI * 52 * (1 - pct / 100)}`}
                transform="rotate(-90 60 60)"
                style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1) 0.3s' }}
              />
            </svg>
            <div className="grade-inner">
              <span className="grade-letter" style={{ color: gradeColor }}>{grade}</span>
              <span className="grade-pct">{pct}%</span>
            </div>
          </div>

          <div className="score-message">{message}</div>
          <div className="score-fraction">
            <span className="score-correct" style={{ color: gradeColor }}>{correct}</span>
            <span className="score-sep"> out of </span>
            <span className="score-total">{total}</span>
            <span className="score-label"> correct</span>
          </div>
        </div>

        {/* Type breakdown */}
        <TypeBreakdown results={results} />

        {/* Action buttons */}
        <div className="results-actions">
          <button className="action-btn retry" onClick={onRetry}>
            🔄 Retry Quiz
          </button>
          <button className="action-btn home" onClick={onHome}>
            🏠 Home
          </button>
        </div>

        {/* Detailed review */}
        <div className="review-section">
          <h3 className="review-title">📋 Question Review</h3>
          {results.map((r, i) => (
            <ReviewItem
              key={i}
              result={r}
              index={i}
              expanded={expanded[i]}
              onToggle={() => setExpanded(prev => ({ ...prev, [i]: !prev[i] }))}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TypeBreakdown({ results }) {
  const types = ['multiple_choice', 'true_false', 'identification', 'enumeration'];
  const labels = { multiple_choice: 'MCQ', true_false: 'T/F', identification: 'ID', enumeration: 'Enum' };
  const colors = { multiple_choice: 'var(--blue)', true_false: '#BF5AF2', identification: 'var(--orange)', enumeration: 'var(--green)' };

  return (
    <div className="breakdown-card">
      <div className="breakdown-title">Score by Type</div>
      <div className="breakdown-grid">
        {types.map(type => {
          const qs = results.filter(r => r.question.type === type);
          if (qs.length === 0) return null;
          const c = qs.filter(r => r.correct).length;
          const pct = Math.round((c / qs.length) * 100);
          return (
            <div key={type} className="breakdown-item">
              <div className="breakdown-type" style={{ color: colors[type] }}>{labels[type]}</div>
              <div className="breakdown-bar-track">
                <div
                  className="breakdown-bar-fill"
                  style={{ width: `${pct}%`, background: colors[type] }}
                />
              </div>
              <div className="breakdown-score">
                <span style={{ color: colors[type] }}>{c}</span>/{qs.length}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ReviewItem({ result, index, expanded, onToggle }) {
  const { question, userAnswer, correct } = result;
  const typeLabels = { multiple_choice: 'MCQ', true_false: 'T/F', identification: 'ID', enumeration: 'Enum' };

  const formatAnswer = (q, ans) => {
    if (ans === null || ans === undefined) return '(no answer)';
    if (q.type === 'true_false') return ans === true ? 'True' : 'False';
    if (q.type === 'multiple_choice') return q.options[ans] || '?';
    if (q.type === 'enumeration') return Array.isArray(ans) ? ans.join(', ') : ans;
    return ans;
  };

  const correctAnswer = (q) => {
    if (q.type === 'true_false') return q.answer === true ? 'True' : 'False';
    if (q.type === 'multiple_choice') return q.options[q.answer];
    if (q.type === 'enumeration') return (q.answers || []).slice(0, q.minRequired).join(', ');
    return q.answer;
  };

  return (
    <div className={`review-item ${correct ? 'correct' : 'wrong'}`} onClick={onToggle}>
      <div className="review-item-header">
        <div className="review-item-left">
          <span className="review-status">{correct ? '✓' : '✗'}</span>
          <span className="review-qnum">Q{index + 1}</span>
          <span className={`review-type ${question.type === 'multiple_choice' ? 'blue' : question.type === 'true_false' ? 'purple' : question.type === 'identification' ? 'orange' : 'green'}`}>
            {typeLabels[question.type]}
          </span>
        </div>
        <span className="review-toggle">{expanded ? '▲' : '▼'}</span>
      </div>
      <div className="review-question-preview">{question.question}</div>

      {expanded && (
        <div className="review-expanded">
          <div className="review-ans-row">
            <span className="review-ans-label">Your answer:</span>
            <span className={`review-ans-val ${correct ? 'green' : 'red'}`}>
              {formatAnswer(question, userAnswer)}
            </span>
          </div>
          {!correct && (
            <div className="review-ans-row">
              <span className="review-ans-label">Correct answer:</span>
              <span className="review-ans-val green">{correctAnswer(question)}</span>
            </div>
          )}
          <div className="review-explanation">
            💡 {question.explanation}
          </div>
        </div>
      )}
    </div>
  );
}