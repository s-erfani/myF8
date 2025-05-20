export type LevelState = 'notCompleted' | 'completed' | 'halfCompleted';

export interface Level {
  id: number;
  title: string;
  difficulty: number;
  hint: string;
  description: string;
  order: number;
  assets: {
    background: string;
    icon: string;
  },
  isHidden?: boolean;
  state?: LevelState;
}
