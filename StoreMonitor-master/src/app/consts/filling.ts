import { filterList } from "../interfaces/filter-list";

export const img: string[] = [
  '/assets/img1.jpeg',
  '/assets/img2.jpeg',
  '/assets/img3.jpeg',
  '/assets/img4.jpeg',
  '/assets/img5.jpeg',
  '/assets/img6.jpeg',
  '/assets/img7.jpeg',
];

export const name: string[] = [
  'монитор F27T700QQI',
  'UHD-монитор U28R550UQI',
  'UHD-монитор U32J590UQI',
  'Игровой монитор Odyssey G5 [S32AG550EI]',
  'Игровой монитор CRG5 [C24RG50FZI]',
  'Игровой монитор Odyssey Neo G9',
  'CURVED-монитор C24F390FHI',
  'GAMING-монитор Odyssey G5 C27G55TQW (R1000, 144Hz)',
  'UHD SMART-монитор S32AM700UI (ОС Tizen)',
  'SMART-монитор S32AM500NI (ОС Tizen)',
];

export const diagonal: string[] = [
'34',
'31.5',
'32',
'43',
'29',
'30'
]

export const resolution: filterList[] = [
  {name: '1920x1080 Full HD', checked: true},
  {name: '2560x1440 2К', checked: true},
  {name: '3840x2160 4K UHD', checked: true},
  {name: '3440x1440', checked: true},
  {name: '1920x1200', checked: true},
]

export const purpose: filterList[] = [
  { name: 'Для дома и офиса', checked: true},
  { name: 'Для игр', checked: true},
  { name: 'Для дизайна', checked: true},
  { name: 'Для работы с графикой', checked: true},
]

export const resolutions = [
  '1920x1080 Full HD',
  '2560x1440 2К',
  '3840x2160 4K UHD',
  '3440x1440',
  '1920x1200',
]

export const purposes = [
  'Для дома и офиса',
  'Для игр',
  'Для дизайна',
  'Для работы с графикой',
]
