import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  createHotel: string;
  editHotel: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  createHotel: '/characters/create',
  editHotel: '/characters/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editHotel'> {
  editHotel: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editHotel: (id) => generatePath(switchRoutes.editHotel, { id }),
};
