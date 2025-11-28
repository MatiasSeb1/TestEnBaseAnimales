import React from 'react'
import { PersonalityResult } from '../data/questions'

interface ResultScreenProps {
  result: PersonalityResult
  score: number
  maxScore: number
  onRestart: () => void
}

export function ResultScreen({ result, score, maxScore, onRestart }: ResultScreenProps) {
  const percentage = Math.round((score / maxScore) * 100)

  return (
    <div className="w-full max-w-2xl animate-fade-in">
      <div className={`bg-gradient-to-br ${result.color} rounded-t-3xl shadow-2xl p-12 text-white text-center`}>
        <div className="text-7xl mb-4">{result.emoji}</div>
        <h1 className="text-4xl font-bold mb-2">{result.title}</h1>
        <div className="inline-block bg-white bg-opacity-20 px-6 py-2 rounded-full backdrop-blur">
          <p className="text-xl font-semibold">Puntuación: {score}/{maxScore}</p>
        </div>
      </div>

      <div className="bg-white rounded-b-3xl shadow-2xl p-12">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700 font-semibold">Tu compatibilidad como dueño de mascota</span>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
              {percentage}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${result.color} transition-all duration-1000`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-8 p-6 bg-gradient-to-br from-indigo-50 to-pink-50 rounded-2xl border border-indigo-100">
          <p className="text-lg text-gray-800 leading-relaxed">{result.description}</p>
        </div>

        <div className="mb-8 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border-l-4 border-emerald-500">
          <h4 className="text-xl font-bold text-emerald-900 mb-3">🐾 Mascota Recomendada Para Ti</h4>
          <p className="text-emerald-800 text-lg font-semibold">{result.animalRecommended}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Tus Características</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {result.traits.map((trait, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-100 to-pink-100 text-indigo-900 px-4 py-3 rounded-lg font-semibold text-center border border-indigo-200 hover:shadow-lg transition-shadow"
              >
                {trait}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-l-4 border-amber-500">
          <h4 className="text-xl font-bold text-amber-900 mb-2">💡 Consejo Personalizado</h4>
          <p className="text-amber-800 text-lg leading-relaxed">{result.advice}</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onRestart}
            className="flex-1 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
          >
            🔄 Hacer el Test de Nuevo
          </button>
          <button
            onClick={() => window.print()}
            className="flex-1 bg-gradient-to-r from-gray-400 to-gray-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
          >
            🖨️ Imprimir Resultado
          </button>
        </div>
      </div>

      <div className="text-center mt-8 text-white">
        <p className="text-sm opacity-75">¿Te gustaría compartir tu resultado? 🐾</p>
      </div>
    </div>
  )
}