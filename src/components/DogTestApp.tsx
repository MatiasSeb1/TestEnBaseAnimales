import React, { useState } from 'react'
import { QUESTIONS, getResult } from '../data/questions'
import { WelcomeScreen } from './WelcomeScreen'
import { QuestionCard } from './QuestionCard'
import { ResultScreen } from './ResultScreen'

type Screen = 'welcome' | 'questions' | 'results'

export default function DogTestApp() {
  const [screen, setScreen] = useState<Screen>('welcome')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)

  const handleStart = () => {
    setScreen('questions')
    setCurrentQuestion(0)
    setScore(0)
    setAnswered(false)
  }

  const handleSelectOption = (points: number, trait: string) => {
    if (!answered) {
      setScore(score + points)
      setAnswered(true)

      // Pausa antes de ir a la siguiente pregunta
      setTimeout(() => {
        if (currentQuestion < QUESTIONS.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
          setAnswered(false)
        } else {
          setScreen('results')
        }
      }, 500)
    }
  }

  const handleRestart = () => {
    setScreen('welcome')
    setCurrentQuestion(0)
    setScore(0)
    setAnswered(false)
  }

  const result = getResult(score)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center p-4 py-8">
      <div className="w-full">
        {screen === 'welcome' && <WelcomeScreen onStart={handleStart} />}

        {screen === 'questions' && (
          <>
            {/* Barra de progreso */}
            <div className="max-w-2xl mx-auto mb-6">
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-300 to-red-500 transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <QuestionCard
              questionNumber={currentQuestion + 1}
              question={QUESTIONS[currentQuestion].question}
              options={QUESTIONS[currentQuestion].options}
              onSelectOption={handleSelectOption}
              isAnswered={answered}
            />
          </>
        )}

        {screen === 'results' && (
          <ResultScreen
            result={result}
            score={score}
            maxScore={120}
            onRestart={handleRestart}
          />
        )}
      </div>

      {/* Estilos globales adicionales */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }

        @media print {
          body {
            background: white;
          }
        }
      `}</style>
    </div>
  )
}