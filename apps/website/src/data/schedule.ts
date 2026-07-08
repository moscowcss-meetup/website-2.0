export type ScheduleTalk = {
  type: 'talk';
  time: string;
  title: string;
  speaker: {
    name: string;
    role: string;
    avatarSrc?: string;
    avatarAlt: string;
  };
  description: string;
};

export type ScheduleActivity = {
  type: 'break' | 'activity';
  timeRange: string;
  title: string;
};

export type ScheduleItem = ScheduleTalk | ScheduleActivity;

export const scheduleHint =
  'Задай вопрос спикеру на митапе в чате MoscowCSS, обязательно укажи тег #вопросспикеру';

export const scheduleItems: ScheduleItem[] = [
  {
    type: 'talk',
    time: '19:10',
    title: 'ЕСЛИ БИЗНЕС НЕ ИГРАЕТ — ЕМУ КАПЕЦ',
    speaker: {
      name: 'Дарья Егорова',
      role:
        'Дизайн-директор UI/UX, ЦЕХ. Куратор программы «Дизайн и проектирование цифровых сервисов (UI/UX) B&D»',
      avatarAlt: 'Дарья Егорова',
      avatarSrc: '/assets/daria-egorova.jpg',
    },
    description:
      'Геймификация в бизнесе: как игровые механики помогают удерживать пользователей, повышать вовлечённость и превращать рутину в опыт, за который возвращаются.',
  },
  {
    type: 'activity',
    timeRange: '19:40—20:00',
    title: 'СЕКРЕТНАЯ АКТИВНОСТЬ',
  },
  {
    type: 'break',
    timeRange: '20:00—20:15',
    title: 'ПЕРЕРЫВ',
  },
  {
    type: 'talk',
    time: '20:15',
    title: 'CSS КОТОРЫЙ ВЫ ПРОПУСТИЛ — А ЗРЯ. 8 НАТИВНЫХ ФИЧ, КОТОРЫЕ ЗАМЕНЯТ КОСТЫЛИ',
    speaker: {
      name: 'Денис Макушин',
      role: 'Независимый frontend-разработчик',
      avatarAlt: 'Денис Макушин',
      avatarSrc: '/assets/denis-makushin.jpg',
    },
    description:
      'Обзор новых нативных возможностей CSS по итогам State of CSS 2025: что уже можно использовать в продакшене вместо JS и сторонних библиотек.',
  },
  {
    type: 'talk',
    time: '21:00',
    title: 'БРОСАЕМ ЯКОРЬ. НОВАЯ ЭРА НАТИВНЫХ ТУЛТИПОВ И ПОПОВЕРОВ',
    speaker: {
      name: 'Анна Расторгуева',
      role: 'Frontend-разработчик из бигтеха',
      avatarAlt: 'Анна Расторгуева',
      avatarSrc: '/assets/anna-rastorgueva.jpg',
    },
    description:
      'Anchor Positioning API и Popover API: как позиционировать тултипы и поповеры нативно, без тяжёлых оверлеев и ручного расчёта координат.',
  },
];
