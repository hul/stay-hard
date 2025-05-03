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

const dbPromise = openDB('stay-hard-db', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('trainings')) {
      db.createObjectStore('trainings', { keyPath: 'id' })
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
