import {
  siReact,
  siTypescript,
  siJavascript,
  siNextdotjs,
  siSass,
  siAngular,
  siPhp,
  siAndroid,
  siOpenjdk,
  siKotlin,
  siBootstrap,
  siNodedotjs,
  siGit,
} from 'simple-icons';

export interface TechIcon {
  label: string;
  path: string;
}

export const techIcons = {
  react: { label: 'React', path: siReact.path },
  typescript: { label: 'TypeScript', path: siTypescript.path },
  javascript: { label: 'JavaScript', path: siJavascript.path },
  nextjs: { label: 'Next.js', path: siNextdotjs.path },
  sass: { label: 'Sass / CSS', path: siSass.path },
  angular: { label: 'Angular / AngularJS', path: siAngular.path },
  php: { label: 'PHP', path: siPhp.path },
  android: { label: 'Android', path: siAndroid.path },
  java: { label: 'Java', path: siOpenjdk.path },
  kotlin: { label: 'Kotlin', path: siKotlin.path },
  bootstrap: { label: 'Bootstrap', path: siBootstrap.path },
  nodejs: { label: 'Node.js', path: siNodedotjs.path },
  git: { label: 'Git', path: siGit.path },
} satisfies Record<string, TechIcon>;

export type TechKey = keyof typeof techIcons;
