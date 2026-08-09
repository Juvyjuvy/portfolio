import React, { useState } from "react";
import { FaGamepad, FaTrophy, FaRedo, FaCheckCircle, FaTimesCircle, FaStar, FaPaperPlane, FaUserCheck } from "react-icons/fa";
import "./QuizGame.css";

function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is Juvy's primary core specialization?",
      options: [
        "Combining human-centered UI/UX design in Figma with clean React.js frontend code",
        "3D game physics engine programming exclusively",
        "Legacy mainframe database administration",
        "Hardware repair only"
      ],
      correct: 0,
      explanation: "Juvy bridges creative Figma UI/UX design with responsive React.js web development."
    },
    {
      question: "What score did Juvy achieve on the official TOPCIT Level 2 IT Competency exam?",
      options: [
        "120 Points",
        "256 Points (TOPCIT Level 2 Certified)",
        "50 Points",
        "300 Points"
      ],
      correct: 1,
      explanation: "Juvy earned a TOPCIT score of 256, proving practical competencies in software engineering and IT systems."
    },
    {
      question: "Which web system did Juvy engineer as a capstone project to digitize approvals?",
      options: [
        "Data-Driven Promissory Note Management System (React + Firebase)",
        "Cryptocurrency Exchange Platform",
        "Automated Video Game Emulator",
        "Basic Static Calculator"
      ],
      correct: 0,
      explanation: "Juvy developed the Promissory Note Management System as a capstone project to automate student approvals."
    },
    {
      question: "Where did Juvy gain internship experience in graphic design, IT support, & lead generation?",
      options: [
        "Triangle Outsourcing Corporation",
        "Silicon Valley Garage Inc.",
        "Tokyo Anime Studio",
        "Global Retail Outlet"
      ],
      correct: 0,
      explanation: "During his internship at Triangle Outsourcing Corporation, Juvy designed promotional graphics, generated leads, and handled IT support."
    },
    {
      question: "Which design tool does Juvy use to craft wireframes, Auto Layout systems, & interactive prototypes?",
      options: [
        "Figma",
        "Microsoft Paint",
        "Notepad",
        "Excel Spreadsheets"
      ],
      correct: 0,
      explanation: "Juvy leverages Figma to build responsive design systems, Auto Layout UI components, and clickable prototypes."
    }
  ];

  const handleSelectOption = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowResult(false);
  };

  const getRankBadge = () => {
    if (score === 5) return { title: "👑 Juvy's Ideal Client / Hiring Partner!", color: "#f59e0b" };
    if (score >= 3) return { title: "🌟 Excellent Juvy Portfolio Expert!", color: "#2563eb" };
    return { title: "⚡ Portfolio Explorer", color: "#10b981" };
  };

  return (
    <section className="quiz-game" id="quiz-game">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="game-badge">
            <FaGamepad /> Interactive Mini-Game
          </span>
          <h2 className="section-title">How Well Do You Know Juvy's Work?</h2>
          <p className="section-subtitle">
            Take a 1-minute quick trivia game about Juvy's skills, projects, and certifications!
          </p>
        </div>

        <div className="game-card">

          {!showResult ? (
            <div className="quiz-body">
              
              {/* Progress & Score Bar */}
              <div className="quiz-top-bar">
                <span className="question-count">
                  Trivia Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="current-score">
                  <FaStar className="star-icon" /> Score: {score}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>

              {/* Question Text */}
              <h3 className="question-text">
                {questions[currentQuestion].question}
              </h3>

              {/* Options List */}
              <div className="options-list">
                {questions[currentQuestion].options.map((opt, idx) => {
                  let btnClass = "quiz-option-btn";
                  if (isAnswered) {
                    if (idx === questions[currentQuestion].correct) {
                      btnClass += " correct";
                    } else if (idx === selectedOption) {
                      btnClass += " incorrect";
                    }
                  } else if (idx === selectedOption) {
                    btnClass += " selected";
                  }

                  return (
                    <button
                      key={idx}
                      className={btnClass}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                    >
                      <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                      <span className="option-label">{opt}</span>
                      {isAnswered && idx === questions[currentQuestion].correct && (
                        <FaCheckCircle className="icon-right" />
                      )}
                      {isAnswered && idx === selectedOption && idx !== questions[currentQuestion].correct && (
                        <FaTimesCircle className="icon-wrong" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next Button */}
              {isAnswered && (
                <div className="answer-explanation fade-in">
                  <p>💡 {questions[currentQuestion].explanation}</p>
                  <button className="btn btn-next" onClick={handleNextQuestion}>
                    {currentQuestion < questions.length - 1 ? "Next Trivia Question ➔" : "View Your Score 🏆"}
                  </button>
                </div>
              )}

            </div>
          ) : (
            <div className="result-body fade-in">
              <FaTrophy className="trophy-icon" style={{ color: getRankBadge().color }} />
              <h3>Game Completed!</h3>
              
              <div className="final-score-box">
                <span className="big-score">{score} / {questions.length}</span>
                <span className="rank-title" style={{ color: getRankBadge().color }}>
                  {getRankBadge().title}
                </span>
              </div>

              <p className="result-desc">
                {score >= 4
                  ? "Awesome! You know Juvy's qualifications inside out. Let's build something great together!"
                  : "Thanks for playing the Juvy Portfolio Trivia Game! Ready to hire Juvy for your project?"}
              </p>

              <div className="result-actions">
                <button className="btn btn-outline" onClick={handleRestart}>
                  <FaRedo /> Replay Game
                </button>
                <a href="#contact" className="btn btn-primary">
                  <FaPaperPlane /> Contact Juvy Now
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default QuizGame;
