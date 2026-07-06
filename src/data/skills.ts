import { techIcons, type TechKey } from './techIcons';

export type ConceptSkillKey = 'design-systems' | 'sdui' | 'accessibility' | 'seo';
export type SkillKey = TechKey | ConceptSkillKey;

export function isConceptSkill(key: SkillKey): key is ConceptSkillKey {
  return !(key in techIcons);
}
