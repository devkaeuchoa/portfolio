export interface GeoLocation {
  city: string;
  lat: number;
  lng: number;
}

export const locations = {
  florianopolis: { city: 'Florianópolis, SC, Brasil', lat: -27.5954, lng: -48.548 },
  belo_horizonte: { city: 'Belo Horizonte, MG, Brasil', lat: -19.9167, lng: -43.9345 },
  recife: { city: 'Recife, PE, Brasil', lat: -8.0476, lng: -34.877 },
  belem: { city: 'Belém, PA, Brasil', lat: -1.4558, lng: -48.4902 },
  chicago: { city: 'Chicago, IL, EUA', lat: 41.8781, lng: -87.6298 },
  fredonia: { city: 'Fredonia, NY, EUA', lat: 42.4401, lng: -79.332 },
} satisfies Record<string, GeoLocation>;

export type LocationKey = keyof typeof locations;

// Índice i corresponde a content[lang].experience[i] / .education[i] em resume.ts.
// Se a ordem dessas listas mudar, estes arrays precisam ser reordenados junto.
export const experienceLocations: LocationKey[] = [
  'florianopolis',
  'belo_horizonte',
  'recife',
  'belo_horizonte',
  'belem',
  'belem',
  'belem',
  'chicago',
];

export const educationLocations: LocationKey[] = ['belem', 'fredonia'];

export const AMERICAS_BOUNDS = { latMin: -32, latMax: 60, lngMin: -130, lngMax: -30 };
export const MAP_VIEWBOX = { width: 500, height: 460 };

export function project(lat: number, lng: number) {
  const { latMin, latMax, lngMin, lngMax } = AMERICAS_BOUNDS;
  const { width, height } = MAP_VIEWBOX;
  return {
    x: ((lng - lngMin) / (lngMax - lngMin)) * width,
    y: ((latMax - lat) / (latMax - latMin)) * height,
  };
}
