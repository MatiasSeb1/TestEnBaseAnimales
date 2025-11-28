import React from 'react'

interface WelcomeScreenProps {
  onStart: () => void
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="w-full max-w-2xl animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-12 text-center text-white">
          <div className="text-8xl mb-4 animate-bounce">🐾</div>
          <h1 className="text-5xl font-bold mb-4">Test de Personalidad: Animales Domésticos</h1>
          <p className="text-xl opacity-90">Descubre qué mascota es perfecta para ti según tu personalidad</p>
        </div>

        <div className="p-12">
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🎯</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">¿Cómo Funciona?</h3>
                <p className="text-gray-600">Responde 12 preguntas sencillas sobre tus preferencias, estilo de vida y personalidad.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-4xl">📊</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Análisis Personalizado</h3>
                <p className="text-gray-600">Obtén un perfil detallado de tu personalidad como dueño de mascota potencial.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-4xl">🐈</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Recomendación de Mascota</h3>
                <p className="text-gray-600">Descubre qué tipo de animal doméstico es ideal para tu estilo de vida.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-4xl">⏱️</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Solo Toma 5 Minutos</h3>
                <p className="text-gray-600">Un test rápido y divertido que puedes completar en cualquier momento.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-pink-50 rounded-2xl p-6 mb-8 border border-indigo-100">
            <h4 className="font-bold text-gray-800 mb-3">Lo que Descubrirás:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Tu tipo de personalidad como dueño de mascota</li>
              <li>✓ Qué animal doméstico se adapta mejor a ti</li>
              <li>✓ Tus características principales como cuidador</li>
              <li>✓ Consejos personalizados para tu futuro con mascotas</li>
            </ul>
          </div>

          <button
            onClick={onStart}
            className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold text-xl py-6 px-8 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4"
          >
            🚀 Comenzar Test Ahora
          </button>

          <p className="text-center text-gray-500 text-sm">No se recopila información personal • Resultado privado</p>
        </div>
      </div>

      <div className="text-center mt-8 text-white text-opacity-50">
        <p className="mb-2">Hecho con ❤️ para amantes de animales</p>
        <div className="flex justify-center gap-4 text-3xl">
          <span className="animate-bounce" style={{ animationDelay: '0s' }}>🐕</span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🐈</span>
          <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🐦</span>
        </div>
      </div>
    </div>
  )
}