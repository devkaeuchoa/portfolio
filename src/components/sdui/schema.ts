export type SduiNode =
  | { type: 'card'; title?: string; children: SduiNode[] }
  | { type: 'heading'; text: string }
  | { type: 'text'; text: string }
  | { type: 'button'; label: string; variant?: 'primary' | 'secondary' | 'ghost' }
  | { type: 'badge'; text: string; tone?: 'neutral' | 'accent' | 'selected' }
  | { type: 'list'; items: string[] };
