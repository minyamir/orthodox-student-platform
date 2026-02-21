import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const quizData = {
  3: [
    {
      question: "Which is a spiritual practice?",
      options: ["Prayer", "Magic", "Gambling", "None"],
      correct: 0,
      explanation: "Prayer is a key spiritual practice in Orthodox faith."
    },
    {
      question: "What strengthens spiritual discipline?",
      options: ["Fasting", "Fighting", "Sleeping", "Avoiding church"],
      correct: 0,
      explanation: "Fasting helps strengthen spiritual discipline."
    },
    {
      question: "What is important for daily faith?",
      options: ["Prayer", "Shopping", "Gaming", "Sleeping"],
      correct: 0,
      explanation: "Daily prayer maintains and strengthens your faith."
    },
    {
      question: "Which habit deepens spirituality?",
      options: ["Fasting", "Watching TV", "Gossiping", "Ignoring prayers"],
      correct: 0,
      explanation: "Fasting is a disciplined practice that deepens spirituality."
    },
    {
      question: "What is a key Orthodox practice?",
      options: ["Prayer", "Magic", "Gambling", "None"],
      correct: 0,
      explanation: "Prayer is central to Orthodox practice."
    },
    {
      question: "What activity is beneficial for spiritual growth?",
      options: ["Meditation", "Gaming", "Eating sweets", "Sleeping late"],
      correct: 0,
      explanation: "Meditation and prayer help spiritual growth."
    },
  ]
  ,1: [
    {
      question: "Which is a spiritual practice?",
      options: ["Prayer", "Magic", "Gambling", "None"],
      correct: 0,
      explanation: "Prayer is a key spiritual practice in Orthodox faith."
    },
    {
      question: "What strengthens spiritual discipline?",
      options: ["Fasting", "Fighting", "Sleeping", "Avoiding church"],
      correct: 0,
      explanation: "Fasting helps strengthen spiritual discipline."
    },
    {
      question: "What is important for daily faith?",
      options: ["Prayer", "Shopping", "Gaming", "Sleeping"],
      correct: 0,
      explanation: "Daily prayer maintains and strengthens your faith."
    },
    {
      question: "Which habit deepens spirituality?",
      options: ["Fasting", "Watching TV", "Gossiping", "Ignoring prayers"],
      correct: 0,
      explanation: "Fasting is a disciplined practice that deepens spirituality."
    },
    {
      question: "What is a key Orthodox practice?",
      options: ["Prayer", "Magic", "Gambling", "None"],
      correct: 0,
      explanation: "Prayer is central to Orthodox practice."
    },
    {
      question: "What activity is beneficial for spiritual growth?",
      options: ["Meditation", "Gaming", "Eating sweets", "Sleeping late"],
      correct: 0,
      explanation: "Meditation and prayer help spiritual growth."
    },
  ]
  ,
  2: [
    {
      question: "Which is a spiritual practice?",
      options: ["Prayer", "Magic", "Gambling", "None"],
      correct: 0,
      explanation: "Prayer is a key spiritual practice in Orthodox faith."
    },
    {
      question: "What strengthens spiritual discipline?",
      options: ["Fasting", "Fighting", "Sleeping", "Avoiding church"],
      correct: 0,
      explanation: "Fasting helps strengthen spiritual discipline."
    },
    {
      question: "What is important for daily faith?",
      options: ["Prayer", "Shopping", "Gaming", "Sleeping"],
      correct: 0,
      explanation: "Daily prayer maintains and strengthens your faith."
    },
    {
      question: "Which habit deepens spirituality?",
      options: ["Fasting", "Watching TV", "Gossiping", "Ignoring prayers"],
      correct: 0,
      explanation: "Fasting is a disciplined practice that deepens spirituality."
    },
    {
      question: "What is a key Orthodox practice?",
      options: ["Prayer", "Magic", "Gambling", "None"],
      correct: 0,
      explanation: "Prayer is central to Orthodox practice."
    },
    {
      question: "What activity is beneficial for spiritual growth?",
      options: ["Meditation", "Gaming", "Eating sweets", "Sleeping late"],
      correct: 0,
      explanation: "Meditation and prayer help spiritual growth."
    },
  ]
};


export default function Quiz() {
  const navigate = useNavigate();
  const { id } = useParams();
  const questions = quizData[id] || [];

  const [selected, setSelected] = useState(Array(questions.length).fill(null));
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleSelect = (index) => {
    if (selected[currentQ] !== null) return; // Only one answer per question

    const update = [...selected];
    update[currentQ] = index;
    setSelected(update);

    if (index === questions[currentQ].correct) setScore(prev => prev + 1);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) setCurrentQ(prev => prev + 1);
    else setShowScore(true);
  };

  const handlePrev = () => {
    if (currentQ > 0) setCurrentQ(prev => prev - 1);
  };

  if (questions.length === 0) return <p>No quiz available.</p>;

  if (showScore)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 p-6">
        <h1 className="text-4xl  text-black font-bold mb-6">Quiz Completed!</h1>
        <p className="text-2xl text-black font-semibold mb-6">
          Your Score: {score} / {questions.length}
        </p>
        <button
          onClick={() => navigate(`/courses/${id}`)}
          className="px-6 py-3 rounded-lg bg-yellow-500 text-white font-bold"
        >
          Back to Course
        </button>
      </div>
    );

  const q = questions[currentQ];
  const answer = selected[currentQ];

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Quiz for Course #{id}</h1>

      <div className="w-full max-w-3xl">
        <div className="bg-white shadow-xl p-6 rounded-xl mb-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900">{q.question}</h2>

        {q.options.map((opt, i) => {
  const isSelected = i === answer;
  let bgColor = "bg-white hover:bg-gray-100";
  let textColor = "text-gray-900"; // default text black

  if (answer !== null) {
    if (i === q.correct) {
      bgColor = "bg-green-500"; // correct answer green
      textColor = "text-gray-900"; // keep text black
    } else if (isSelected && i !== q.correct) {
      bgColor = "bg-red-500"; // wrong selected red
      textColor = "text-gray-900"; // keep text black
    } else {
      bgColor = "bg-white border-gray-300";
      textColor = "text-gray-600"; // other unselected
    }
  }

  return (
    <label
      key={i}
      className={`flex items-center w-full px-4 py-3 mb-3 border rounded-lg cursor-pointer font-semibold transition-colors ${bgColor} ${textColor} border-gray-400`}
    >
      <input
        type="radio"
        name={`q${currentQ}`}
        checked={isSelected}
        readOnly
        className="mr-2 accent-yellow-500"
        onClick={() => handleSelect(i)}
      />
      {opt}
    </label>
  );
})}


          {answer !== null && (
            <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 text-gray-800 rounded">
              Correct Answer: <strong>{q.options[q.correct]}</strong>
              <br />
              {q.explanation}
            </div>
          )}
        </div>

        <div className="flex justify-between w-full">
          <button
            onClick={handlePrev}
            disabled={currentQ === 0}
            className="px-6 py-3 rounded-lg bg-gray-300 disabled:opacity-40"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={answer === null}
            className={`px-6 py-3 rounded-lg font-bold ${
              currentQ === questions.length - 1 ? "bg-yellow-500 text-white" : "bg-yellow-400 text-white"
            } disabled:opacity-40`}
          >
            {currentQ === questions.length - 1 ? "Finish Quiz" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
