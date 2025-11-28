import React from 'react'

interface QuestionCardProps {
  questionNumber: number
  question: string
  options: {
    text: string
    score: number
    trait: string
  }[]
  onSelectOption: (score: number, trait: string) => void
  isAnswered: boolean
}

export function QuestionCard({
  questionNumber,
  question,
  options,
  onSelectOption,
  isAnswered,
}: QuestionCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-gray-800">Pregunta {questionNumber}</h2>
          <div className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            {questionNumber}/12
          </div>
        </div>
        <p className="text-xl text-gray-700 leading-relaxed">{question}</p>
      </div>

      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectOption(option.score, option.trait)}
            className="w-full p-4 text-left bg-gradient-to-r from-gray-50 to-gray-100 hover:from-indigo-50 hover:to-pink-50 border-2 border-gray-200 hover:border-indigo-500 rounded-xl transition-all duration-300 transform hover:scale-102 active:scale-98"
          >
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full border-2 border-indigo-500 mr-4 flex items-center justify-center group-hover:bg-indigo-500"></div>
              <span className="text-lg text-gray-800 font-medium">{option.text}</span>
            </div>
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
          <p className="text-green-700 font-semibold">✓ Respuesta registrada</p>
        </div>
      )}
    </div>
  )
}