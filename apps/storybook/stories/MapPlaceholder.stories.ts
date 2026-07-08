import MapPlaceholder from '@moscowcss/ui/components/MapPlaceholder';

export default {
  title: 'Components/MapPlaceholder',
  component: MapPlaceholder,
};

export const Empty = {
  args: {},
};

export const WithCoords = {
  args: {
    latitude: 55.7367,
    longitude: 37.5214,
    zoom: 16,
    caption: 'Москва, ул. Поклонная, д. 3',
  },
};
