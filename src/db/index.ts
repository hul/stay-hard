import { openDB } from 'idb'

export interface Training {
  id: string
  name: string
  date: string
  exercises: Exercise[]
}

export interface Exercise {
  name: string
  category: string
  notes?: string
  sets: ExerciseSet[]
}

export interface ExerciseSet {
  type: 'warmup' | 'work'
  weight: number
  reps: number
}

export interface TrainingTemplate {
  id: string
  name: string
  exercises: Exercise[]
}

const DB_VERSION = 2

const dbPromise = openDB('stay-hard-db', DB_VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('trainings')) {
      db.createObjectStore('trainings', { keyPath: 'id' })
    }
    if (!db.objectStoreNames.contains('templates')) {
      db.createObjectStore('templates', { keyPath: 'id' })
    }    
  }
})

export async function saveTraining(training: Training) {
  const db = await dbPromise
  await db.put('trainings', training)
}

export async function getAllTrainings(): Promise<Training[]> {
  const db = await dbPromise
  return await db.getAll('trainings')
}

export async function deleteTraining(id: string) {
  const db = await dbPromise
  await db.delete('trainings', id)
}

export async function saveTemplate(template: Omit<Training, 'id' | 'date'>) {
  const db = await dbPromise
  const id = `template-${Date.now()}`
  await db.put('templates', { ...template, id })
}

export async function getTemplates(): Promise<Omit<Training, 'date'>[]> {
  const db = await dbPromise
  return await db.getAll('templates')
}

export async function deleteTemplate(id: string) {
  const db = await dbPromise
  await db.delete('templates', id)
}
