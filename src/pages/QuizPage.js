import React, { useState, useEffect, useRef, useCallback } from 'react';
import './QuizPage.css';

const CHANGE_WINDOW = 5; // seconds to change answer

export default function QuizPage({ quiz, onFinish, onHome }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showAnswer, setShowAnswer] = useState({});
  const [changeTimers, setChangeTimers] = useState({}); // { qIdx: secondsLeft }
  const [timerRunning, setTimerRunning] = useState({}); // { qIdx: bool }
  const [inputValues, setInputValues] = useState({});
  const [enumInputs, setEnumInputs] = useState({});
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState('forward');
  const intervalRef = useRef({});

  const question = quiz.questions[currentIdx];
  const totalQ = quiz.questions.length;
  const revealed = showAnswer[currentIdx];

  // Start countdown only once per question (not per answer change)
  const startCountdownIfNeeded = useCallback((idx) => {
    if (timerRunning[idx]) return; // already running, don't restart
    setTimerRunning(prev => ({ ...prev, [idx]: true }));
    setChangeTimers(prev => ({ ...prev, [idx]: CHANGE_WINDOW }));

    intervalRef.current[idx] = setInterval(() => {
      setChangeTimers(prev => {
        const next = (prev[idx] ?? CHANGE_WINDOW) - 1;
        if (next <= 0) {
          clearInterval(intervalRef.current[idx]);
          setShowAnswer(sa => ({ ...sa, [idx]: true }));
          return { ...prev, [idx]: 0 };
        }
        return { ...prev, [idx]: next };
      });
    }, 1000);
  }, [timerRunning]);

  // Cleanup intervals
  useEffect(() => {
    const intervals = intervalRef.current;
    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, []);

  const handleTFAnswer = (val) => {
    if (revealed) return;
    const wasAnswered = answers[currentIdx] !== undefined;
    setAnswers(prev => ({ ...prev, [currentIdx]: val }));
    if (!wasAnswered) {
      startCountdownIfNeeded(currentIdx);
    }
  };

  const handleMCQAnswer = (optionIdx) => {
    if (revealed) return;
    const wasAnswered = answers[currentIdx] !== undefined;
    setAnswers(prev => ({ ...prev, [currentIdx]: optionIdx }));
    if (!wasAnswered) {
      // First answer — start the countdown
      startCountdownIfNeeded(currentIdx);
    }
    // If already answered and timer running, user is just changing — don't restart timer
  };

  const handleIDSubmit = () => {
    if (revealed) return;
    const val = (inputValues[currentIdx] || '').trim();
    if (!val) return;
    const wasAnswered = answers[currentIdx] !== undefined;
    setAnswers(prev => ({ ...prev, [currentIdx]: val }));
    if (!wasAnswered) {
      startCountdownIfNeeded(currentIdx);
    }
  };

  const handleEnumSubmit = () => {
    if (revealed) return;
    const entries = enumInputs[currentIdx] || [''];
    const vals = entries.map(e => e.trim()).filter(Boolean);
    if (vals.length === 0) return;
    const wasAnswered = answers[currentIdx] !== undefined;
    setAnswers(prev => ({ ...prev, [currentIdx]: vals }));
    if (!wasAnswered) {
      startCountdownIfNeeded(currentIdx);
    }
  };

  const navigate = (delta) => {
    if (transitioning) return;
    const next = currentIdx + delta;
    if (next < 0 || next >= totalQ) return;
    setDirection(delta > 0 ? 'forward' : 'backward');
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIdx(next);
      setTransitioning(false);
    }, 280);
  };

  const handleFinish = () => {
    // Build results
    const results = quiz.questions.map((q, i) => {
      const ans = answers[i];
      let correct = false;
      if (q.type === 'multiple_choice') {
        correct = ans === q.answer;
      } else if (q.type === 'true_false') {
        correct = ans === q.answer;
      } else if (q.type === 'identification') {
        const accepted = q.acceptedAnswers || [q.answer];
        correct = accepted.some(a => a.toLowerCase() === (ans || '').toLowerCase());
      } else if (q.type === 'enumeration') {
        const userAnswers = (ans || []).map(a => a.toLowerCase());
        const accepted = (q.answers || []).map(a => a.toLowerCase());
        const matched = userAnswers.filter(u => accepted.some(a => a.includes(u) || u.includes(a)));
        correct = matched.length >= (q.minRequired || q.answers.length);
      }
      return { question: q, userAnswer: ans, correct, revealed: showAnswer[i] };
    });
    onFinish(results);
  };

  const progress = ((Object.keys(answers).length) / totalQ) * 100;

  // Determine correctness for a given question index (mirrors handleFinish logic)
  const isQuestionCorrect = (i) => {
    const q = quiz.questions[i];
    const ans = answers[i];
    if (ans === undefined) return false;
    if (q.type === 'multiple_choice') {
      return ans === q.answer;
    } else if (q.type === 'true_false') {
      return ans === q.answer;
    } else if (q.type === 'identification') {
      const accepted = q.acceptedAnswers || [q.answer];
      return accepted.some(a => a.toLowerCase() === (ans || '').toLowerCase());
    } else if (q.type === 'enumeration') {
      const userAnswers = (ans || []).map(a => a.toLowerCase());
      const accepted = (q.answers || []).map(a => a.toLowerCase());
      const matched = userAnswers.filter(u => accepted.some(a => a.includes(u) || u.includes(a)));
      return matched.length >= (q.minRequired || q.answers.length);
    }
    return false;
  };

  return (
    <div className="quiz-page" style={{ '--quiz-color': quiz.color }}>
      {/* Top bar */}
      <div className="quiz-topbar">
        <button className="back-home-btn" onClick={onHome}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Home
        </button>
        <div className="quiz-topbar-center">
          <span className="quiz-emoji-sm">{quiz.emoji}</span>
          <span className="quiz-title-sm">{quiz.title}</span>
        </div>
        <div className="quiz-counter">
          <span className="counter-current">{currentIdx + 1}</span>
          <span className="counter-sep">/</span>
          <span className="counter-total">{totalQ}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Main content */}
      <div className="quiz-main">
        <div className={`question-container ${transitioning ? (direction === 'forward' ? 'exit-left' : 'exit-right') : 'enter'}`}>
          <QuestionHeader question={question} index={currentIdx} total={totalQ} />

          <div className="question-body">
            {question.type === 'true_false' && (
              <TFQuestion
                question={question}
                answer={answers[currentIdx]}
                revealed={revealed}
                onSelect={handleTFAnswer}
                timerLeft={changeTimers[currentIdx]}
                timerRunning={timerRunning[currentIdx]}
              />
            )}
            {question.type === 'multiple_choice' && (
              <MCQQuestion
                question={question}
                answer={answers[currentIdx]}
                revealed={revealed}
                onSelect={handleMCQAnswer}
                timerLeft={changeTimers[currentIdx]}
                timerRunning={timerRunning[currentIdx]}
              />
            )}
            {question.type === 'identification' && (
              <IDQuestion
                question={question}
                answer={answers[currentIdx]}
                revealed={revealed}
                inputValue={inputValues[currentIdx] || ''}
                onInput={(v) => setInputValues(prev => ({ ...prev, [currentIdx]: v }))}
                onSubmit={handleIDSubmit}
                timerLeft={changeTimers[currentIdx]}
                timerRunning={timerRunning[currentIdx]}
              />
            )}
            {question.type === 'enumeration' && (
              <EnumQuestion
                question={question}
                answer={answers[currentIdx]}
                revealed={revealed}
                inputs={enumInputs[currentIdx] || ['']}
                onInputChange={(i, v) => {
                  setEnumInputs(prev => {
                    const arr = [...(prev[currentIdx] || [''])];
                    arr[i] = v;
                    return { ...prev, [currentIdx]: arr };
                  });
                }}
                onAddInput={() => {
                  setEnumInputs(prev => {
                    const arr = [...(prev[currentIdx] || [''])];
                    arr.push('');
                    return { ...prev, [currentIdx]: arr };
                  });
                }}
                onRemoveInput={(i) => {
                  setEnumInputs(prev => {
                    const arr = [...(prev[currentIdx] || [''])].filter((_, idx) => idx !== i);
                    return { ...prev, [currentIdx]: arr.length ? arr : [''] };
                  });
                }}
                onSubmit={handleEnumSubmit}
                timerLeft={changeTimers[currentIdx]}
                timerRunning={timerRunning[currentIdx]}
              />
            )}

            {/* Explanation box */}
            {revealed && (
              <div className="explanation-box">
                <div className="explanation-icon">💡</div>
                <div>
                  <div className="explanation-label">Explanation</div>
                  <div className="explanation-text">{question.explanation}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="nav-bar">
          <button
            className="nav-btn"
            onClick={() => navigate(-1)}
            disabled={currentIdx === 0}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Previous
          </button>

          <div className="dot-nav">
            {quiz.questions.map((_, i) => {
              const revealedI = showAnswer[i];
              const correctI = revealedI && isQuestionCorrect(i);
              const dotState = revealedI ? (correctI ? 'correct' : 'wrong') : '';
              return (
              <button
                key={i}
                className={`dot ${i === currentIdx ? 'active' : ''} ${answers[i] !== undefined ? 'answered' : ''} ${dotState}`}
                onClick={() => {
                  if (i === currentIdx) return;
                  setDirection(i > currentIdx ? 'forward' : 'backward');
                  setTransitioning(true);
                  setTimeout(() => { setCurrentIdx(i); setTransitioning(false); }, 280);
                }}
                title={`Q${i + 1}`}
              />
              );
            })}
          </div>

          {currentIdx < totalQ - 1 ? (
            <button
              className="nav-btn nav-btn-next"
              onClick={() => navigate(1)}
            >
              Next
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ) : (
            <button
              className="nav-btn nav-btn-finish"
              onClick={handleFinish}
            >
              Finish
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ===== QUESTION HEADER ===== */
function QuestionHeader({ question, index, total }) {
  const typeLabels = {
    multiple_choice: { label: 'Multiple Choice', color: 'blue' },
    true_false: { label: 'True or False', color: 'purple' },
    identification: { label: 'Identification', color: 'orange' },
    enumeration: { label: 'Enumeration', color: 'green' },
  };
  const { label, color } = typeLabels[question.type] || {};

  return (
    <div className="question-header">
      <div className="question-meta">
        <span className={`qtype-badge ${color}`}>{label}</span>
        <span className="qnum">Question {index + 1}</span>
      </div>
      <h2 className="question-text">{question.question}</h2>
    </div>
  );
}

/* ===== MCQ QUESTION ===== */
function MCQQuestion({ question, answer, revealed, onSelect, timerLeft, timerRunning }) {
  return (
    <div className="mcq-options">
      {question.options.map((opt, i) => {
        const isSelected = answer === i;
        const isCorrect = i === question.answer;
        let state = '';
        if (revealed) {
          if (isCorrect) state = 'correct';
          else if (isSelected && !isCorrect) state = 'wrong';
          else state = 'dim';
        } else if (isSelected) {
          state = 'selected';
        }

        return (
          <button
            key={i}
            className={`option-btn ${state}`}
            onClick={() => onSelect(i)}
            disabled={revealed}
          >
            <span className="option-letter">{String.fromCharCode(65 + i)}</span>
            <span className="option-text">{opt}</span>
            {revealed && isCorrect && <span className="option-icon">✓</span>}
            {revealed && isSelected && !isCorrect && <span className="option-icon">✗</span>}
          </button>
        );
      })}
      {timerRunning && !revealed && (
        <ChangeTimer seconds={timerLeft ?? CHANGE_WINDOW} />
      )}
    </div>
  );
}

/* ===== ID QUESTION ===== */
function IDQuestion({ question, answer, revealed, inputValue, onInput, onSubmit, timerLeft, timerRunning }) {
  const accepted = question.acceptedAnswers || [question.answer];
  const isCorrect = revealed && accepted.some(a => a.toLowerCase() === (answer || '').toLowerCase());

  return (
    <div className="id-question">
      {!revealed && (
        <div className="id-input-wrap">
          <input
            className="id-input"
            type="text"
            value={inputValue}
            onChange={e => onInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && onSubmit()}
            placeholder="Type your answer here..."
            disabled={revealed}
          />
          <button className="submit-btn" onClick={onSubmit} disabled={!inputValue.trim()}>
            Submit
          </button>
        </div>
      )}
      {answer && !revealed && (
        <div className="id-submitted">
          <span className="submitted-label">Your answer:</span>
          <span className="submitted-val">"{answer}"</span>
        </div>
      )}
      {revealed && (
        <div className={`id-result ${isCorrect ? 'correct' : 'wrong'}`}>
          <div className="id-result-row">
            <span className="id-result-label">Your answer:</span>
            <span className={`id-result-val ${isCorrect ? 'text-green' : 'text-red'}`}>
              {isCorrect ? '✓' : '✗'} {answer || '(no answer)'}
            </span>
          </div>
          {!isCorrect && (
            <div className="id-result-row">
              <span className="id-result-label">Correct answer:</span>
              <span className="id-result-val text-green">✓ {question.answer}</span>
            </div>
          )}
        </div>
      )}
      {timerRunning && !revealed && (
        <ChangeTimer seconds={timerLeft ?? CHANGE_WINDOW} />
      )}
    </div>
  );
}

/* ===== ENUMERATION QUESTION ===== */
function EnumQuestion({ question, answer, revealed, inputs, onInputChange, onAddInput, onRemoveInput, onSubmit, timerLeft, timerRunning }) {
  if (revealed) {
    const accepted = (question.answers || []).map(a => a.toLowerCase());
    const matched = (answer || []).filter((_, i) =>
      accepted.some(a => {
        const u = (answer[i] || '').toLowerCase();
        return a.includes(u) || u.includes(a);
      })
    );
    const isCorrect = matched.length >= (question.minRequired || question.answers.length);

    return (
      <div className={`enum-result ${isCorrect ? 'correct' : 'wrong'}`}>
        <div className="enum-result-header">
          {isCorrect ? '✓ Correct!' : '✗ Incomplete'}
          <span className="enum-score">{matched.length}/{question.minRequired || question.answers.length} required</span>
        </div>
        <div className="enum-your-answers">
          <div className="enum-section-label">Your answers:</div>
          {(answer || []).map((a, i) => {
            const ok = accepted.some(acc => acc.includes(a.toLowerCase()) || a.toLowerCase().includes(acc));
            return (
              <div key={i} className={`enum-ans-item ${ok ? 'ok' : 'miss'}`}>
                {ok ? '✓' : '✗'} {a}
              </div>
            );
          })}
        </div>
        <div className="enum-correct-answers">
          <div className="enum-section-label">All accepted answers:</div>
          <div className="enum-tags">
            {question.answers.map((a, i) => (
              <span key={i} className="enum-tag">{a}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="enum-question">
      <div className="enum-hint">
        Enter at least {question.minRequired} answer{question.minRequired !== 1 ? 's' : ''}.
        Add more lines as needed.
      </div>
      {inputs.map((val, i) => (
        <div key={i} className="enum-input-row">
          <span className="enum-num">{i + 1}.</span>
          <input
            className="enum-input"
            type="text"
            value={val}
            onChange={e => onInputChange(i, e.target.value)}
            placeholder={`Answer ${i + 1}...`}
          />
          {inputs.length > 1 && (
            <button className="enum-remove-btn" onClick={() => onRemoveInput(i)}>✕</button>
          )}
        </div>
      ))}
      <div className="enum-actions">
        <button className="add-input-btn" onClick={onAddInput}>+ Add answer</button>
        <button className="submit-btn" onClick={onSubmit} disabled={!inputs.some(v => v.trim())}>
          Submit All
        </button>
      </div>
      {answer && (
        <div className="id-submitted">
          <span className="submitted-label">✓ Submitted {answer.length} answer(s)</span>
        </div>
      )}
      {timerRunning && <ChangeTimer seconds={timerLeft ?? CHANGE_WINDOW} />}
    </div>
  );
}

/* ===== TRUE/FALSE QUESTION ===== */
function TFQuestion({ question, answer, revealed, onSelect, timerLeft, timerRunning }) {
  const options = [
    { val: true, label: 'True', icon: '✓' },
    { val: false, label: 'False', icon: '✗' },
  ];

  return (
    <div className="tf-options">
      {options.map(({ val, label, icon }) => {
        const isSelected = answer === val;
        const isCorrect = val === question.answer;
        let state = '';
        if (revealed) {
          if (isCorrect) state = 'correct';
          else if (isSelected && !isCorrect) state = 'wrong';
          else state = 'dim';
        } else if (isSelected) {
          state = 'selected';
        }

        return (
          <button
            key={String(val)}
            className={`tf-btn ${state}`}
            onClick={() => onSelect(val)}
            disabled={revealed}
          >
            <span className="tf-icon">{icon}</span>
            <span className="tf-label">{label}</span>
            {revealed && isCorrect && <span className="option-icon">✓</span>}
            {revealed && isSelected && !isCorrect && <span className="option-icon">✗</span>}
          </button>
        );
      })}
      {timerRunning && !revealed && (
        <ChangeTimer seconds={timerLeft ?? CHANGE_WINDOW} />
      )}
    </div>
  );
}

/* ===== CHANGE TIMER ===== */
const CIRCUMFERENCE = 2 * Math.PI * 18; // r=18

function ChangeTimer({ seconds }) {
  const progress = seconds / CHANGE_WINDOW;
  const dashOffset = CIRCUMFERENCE * (1 - progress);
  const urgent = seconds <= 2;

  return (
    <div className={`change-timer ${urgent ? 'urgent' : ''}`}>
      <svg width="44" height="44" viewBox="0 0 44 44">
        <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
        <circle
          cx="22" cy="22" r="18"
          fill="none"
          stroke={urgent ? 'var(--red)' : 'var(--orange)'}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
          transform="rotate(-90 22 22)"
          style={{ transition: 'stroke-dashoffset 0.9s linear, stroke 0.3s' }}
        />
        <text x="22" y="27" textAnchor="middle" fill={urgent ? 'var(--red)' : 'var(--orange)'} fontSize="13" fontWeight="700" fontFamily="var(--font-mono)">
          {seconds}
        </text>
      </svg>
      <span className={`timer-label ${urgent ? 'urgent' : ''}`}>
        {seconds > 0 ? 'Change window' : 'Time up!'}
      </span>
    </div>
  );
}