import type { Training } from '@/db'

export function calculatePoints(training: Training): number {
  if (!training || !training.exercises || training.exercises.length === 0) {
    return 0
  }
  return training.exercises.flatMap(e => e.sets).reduce((sum, set) => {
    return sum + (set.weight * set.reps)
  }, 0)
}
