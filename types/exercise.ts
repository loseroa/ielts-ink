export interface Exercise {
  id: number;
  title: string;
  category: string;
  description?: string;
  imageUrl?: string;
  questionText: string;
}

export type NewExercise = Omit<Exercise, 'id'>;
