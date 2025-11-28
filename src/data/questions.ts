interface Question {
  id: number
  question: string
  options: {
    text: string
    score: number
    trait: string
  }[]
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: '¿Qué tipo de animal doméstico te llama más la atención?',
    options: [
      { text: 'Perros (energéticos y leales)', score: 10, trait: 'aventurero' },
      { text: 'Gatos (independientes y misteriosos)', score: 8, trait: 'independiente' },
      { text: 'Pájaros (ágiles y melodiosos)', score: 7, trait: 'artístico' },
      { text: 'Peces o pequeños roedores (tranquilos)', score: 5, trait: 'contemplativo' },
    ],
  },
  {
    id: 2,
    question: '¿Cuánto tiempo diario puedes dedicar a una mascota?',
    options: [
      { text: 'Varias horas, quiero interacción constante', score: 10, trait: 'dedicado' },
      { text: '1-2 horas de calidad', score: 7, trait: 'comprometido' },
      { text: '30 minutos a 1 hora', score: 5, trait: 'ocupado' },
      { text: 'Menos de 30 minutos', score: 3, trait: 'ocupadísimo' },
    ],
  },
  {
    id: 3,
    question: '¿Prefieres un animal que requiera mucha atención o uno independiente?',
    options: [
      { text: 'Mucha atención y interacción', score: 10, trait: 'sociable' },
      { text: 'Equilibrio entre atención e independencia', score: 8, trait: 'equilibrado' },
      { text: 'Preferentemente independiente', score: 6, trait: 'introvertido' },
      { text: 'Lo más independiente posible', score: 3, trait: 'solitario' },
    ],
  },
  {
    id: 4,
    question: '¿Cómo prefieres pasar tiempo con tu mascota?',
    options: [
      { text: 'Actividades activas (paseos, juegos, ejercicio)', score: 9, trait: 'energético' },
      { text: 'Actividades relajantes (caricias, observación)', score: 8, trait: 'tranquilo' },
      { text: 'Entrenamientos y enseñanza', score: 7, trait: 'metódico' },
      { text: 'Simplemente estar en el mismo espacio', score: 5, trait: 'minimalista' },
    ],
  },
  {
    id: 5,
    question: '¿Cuál es tu tolerancia ante comportamientos difíciles?',
    options: [
      { text: 'Muy paciente, busco entender y solucionar', score: 10, trait: 'paciente' },
      { text: 'Bastante paciente, intento mejorar', score: 8, trait: 'perseverante' },
      { text: 'Moderada, busco ayuda profesional si es necesario', score: 6, trait: 'prudente' },
      { text: 'Baja, prefiero animales bien comportados', score: 3, trait: 'exigente' },
    ],
  },
  {
    id: 6,
    question: '¿Qué tan importante es para ti la compañía emocional de tu mascota?',
    options: [
      { text: 'Extremadamente importante, es mi confidente', score: 10, trait: 'emocional' },
      { text: 'Muy importante, nos necesitamos mutuamente', score: 9, trait: 'conectado' },
      { text: 'Importante pero no es mi prioridad', score: 6, trait: 'equilibrado' },
      { text: 'Poco importante, es solo una mascota', score: 3, trait: 'distante' },
    ],
  },
  {
    id: 7,
    question: '¿Cuál es tu actitud hacia los gastos veterinarios y cuidados?',
    options: [
      { text: 'No importa el costo, lo mejor para mi mascota', score: 10, trait: 'protector' },
      { text: 'Invierto lo necesario en su salud', score: 8, trait: 'responsable' },
      { text: 'Gasto lo razonable', score: 6, trait: 'pragmático' },
      { text: 'Solo lo esencial', score: 3, trait: 'económico' },
    ],
  },
  {
    id: 8,
    question: '¿Te gusta o asusta la idea de entrenar a tu mascota?',
    options: [
      { text: 'Me encanta entrenar y enseñar', score: 10, trait: 'pedagógico' },
      { text: 'Me gusta pero sin obsesionarme', score: 7, trait: 'flexible' },
      { text: 'Me es indiferente', score: 5, trait: 'pasivo' },
      { text: 'Me intimida, prefiero algo automático', score: 2, trait: 'aprensivo' },
    ],
  },
  {
    id: 9,
    question: '¿Eres de viajar o prefieres estar en casa?',
    options: [
      { text: 'Me encanta viajar, buscaría una mascota portátil', score: 8, trait: 'aventurero' },
      { text: 'Viajo ocasionalmente', score: 6, trait: 'variable' },
      { text: 'Prefiero estar en casa', score: 7, trait: 'casero' },
      { text: 'Casi nunca viajo', score: 5, trait: 'sedentario' },
    ],
  },
  {
    id: 10,
    question: '¿Cómo es tu espacio vital (departamento, casa, terraza)?',
    options: [
      { text: 'Amplio con jardín o terraza grande', score: 10, trait: 'espacioso' },
      { text: 'Casa mediana con patio pequeño', score: 8, trait: 'confortable' },
      { text: 'Departamento mediano', score: 6, trait: 'urbano' },
      { text: 'Departamento pequeño', score: 4, trait: 'minimalista' },
    ],
  },
  {
    id: 11,
    question: '¿Qué significaría para ti tener una mascota?',
    options: [
      { text: 'Un miembro más de la familia, responsabilidad de por vida', score: 10, trait: 'familiar' },
      { text: 'Un compañero importante pero manejable', score: 8, trait: 'realista' },
      { text: 'Una compañía agradable', score: 6, trait: 'casual' },
      { text: 'Un pasatiempo o diversión temporal', score: 3, trait: 'voluble' },
    ],
  },
  {
    id: 12,
    question: '¿Cómo describes tu personalidad general?',
    options: [
      { text: 'Tranquilo, paciente y compasivo', score: 10, trait: 'sereno' },
      { text: 'Activo, positivo y sociable', score: 9, trait: 'vivaz' },
      { text: 'Equilibrado y versátil', score: 7, trait: 'adaptable' },
      { text: 'Independiente y autosuficiente', score: 6, trait: 'autónomo' },
    ],
  },
]

export interface PersonalityResult {
  title: string
  description: string
  animalRecommended: string
  traits: string[]
  color: string
  emoji: string
  advice: string
}

export const PERSONALITY_RESULTS: Record<number, PersonalityResult> = {
  1: {
    title: '🐕 Amante de Mascotas Comprometido',
    description: 'Eres una persona extraordinariamente dedicada, tranquila y responsable. Tu naturaleza compasiva te hace ideal para animales que necesitan atención constante y establecer lazos emocionales profundos.',
    animalRecommended: 'Perro, Gato o Pájaro',
    traits: ['Dedicado', 'Responsable', 'Paciente', 'Empático', 'Leal'],
    color: 'from-red-500 to-orange-500',
    emoji: '❤️',
    advice: 'Tu compromiso es tu mayor fortaleza. Considera adoptar un animal que necesite rehabilitación o cuidados especiales. Tu paciencia hará una diferencia real.',
  },
  2: {
    title: '🌟 Cuidador Equilibrado',
    description: 'Eres alguien equilibrado, realista y genuinamente preocupado por el bienestar de tus mascotas. Tu enfoque práctico pero cariñoso te convierte en un excelente dueño de mascota.',
    animalRecommended: 'Perro, Gato, Pájaro o Conejo',
    traits: ['Responsable', 'Equilibrado', 'Flexible', 'Cuidador', 'Consciente'],
    color: 'from-blue-500 to-cyan-500',
    emoji: '💙',
    advice: 'Tu equilibrio es tu mayor activo. Mantén ese balance entre diversión y responsabilidad. Eres adecuado para prácticamente cualquier mascota.',
  },
  3: {
    title: '🎨 Dueño Independiente y Flexible',
    description: 'Tienes un espíritu adaptable y flexible. Prefieres animales que no requieran demasiada atención, lo que demuestra autoconocimiento sobre tu estilo de vida.',
    animalRecommended: 'Gato, Peces, Hámster o Pájaro',
    traits: ['Flexible', 'Adaptable', 'Independiente', 'Pragmático', 'Realista'],
    color: 'from-purple-500 to-pink-500',
    emoji: '🌈',
    advice: 'Tu flexibilidad es valiosa. Elige un animal que se adapte a tu ritmo de vida. Los gatos, peces o pequeños roedores serían perfectos para ti.',
  },
}

export function getResult(score: number): PersonalityResult {
  const maxScore = 120
  const percentage = (score / maxScore) * 100

  if (percentage >= 80) {
    return PERSONALITY_RESULTS[1]
  } else if (percentage >= 50) {
    return PERSONALITY_RESULTS[2]
  } else {
    return PERSONALITY_RESULTS[3]
  }
}