
export interface TextSegment {
  english: string;
  portuguese: string;
  alternatives?: string[]; // List of other valid translations
}

export interface PracticeText {
  id: number;
  title: string;
  englishContent: string;
  portugueseContent: string;
  segments: TextSegment[]; // Phrase-by-phrase breakdown
}

export type AppStatus = 'translating' | 'viewing_results';
