export type PartnerFeature = {
  title: string;
  description: string;
  footnote?: string;
};

export const partnerBrand = {
  name: 'Звук',
  handle: '@ZVUK_JOBS',
  tagline: 'Вакансии, митапы и внутрянка команды Звук',
};

export const partnerFeatures: PartnerFeature[] = [
  {
    title: 'СОЗДАЁМ МУЗЫКАЛЬНЫЙ СЕРВИС',
    description: 'Умные алгоритмы и персональные рекомендации',
  },
  {
    title: 'ВСЕГДА РЯДОМ',
    description:
      'В приложении, на zvuk.com, в телевизорах с Okko, колонках SberBoom и в авто с CarPlay и Android Auto',
  },
  {
    title: 'ТОП-2',
    description: 'в рейтинге работодателей HH — 2025.',
    footnote:
      'По данным общего рейтинга hh.ru за 2025 г. в категории средних компаний (от 251 до 1000 чел.)',
  },
  {
    title: 'КОМФОРТНЫЕ И СОВРЕМЕННЫЕ УСЛОВИЯ РАБОТЫ',
    description: 'ДМС со стоматологией, компенсация расходов на спорт и другое',
  },
];

export type RouteMediaItem = {
  kind: 'image' | 'video';
  alt: string;
  src?: string;
  poster?: string;
};

export const directions = {
  address: 'Москва, ул. Поклонная, д. 3',
  hints: [
    '5 минут пешком от ст. м. «Савёловская» (вход со стороны улицы)',
    'На автобусах № 72, 82, 84, 384 до остановки «Башиловская»',
  ],
  routeMediaTitle: 'Фото и видео маршрута: как пройти шагами от метро',
  map: {
    latitude: 55.7367,
    longitude: 37.5214,
    zoom: 16,
    caption: 'Москва, ул. Поклонная, д. 3',
  },
  media: [
    { kind: 'image', alt: 'Фото маршрута 1' },
    { kind: 'video', alt: 'Видео маршрута' },
    { kind: 'image', alt: 'Фото маршрута 2' },
  ] satisfies RouteMediaItem[],
};
