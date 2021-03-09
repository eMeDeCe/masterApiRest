import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  createCharacter: string;
  detailsCharacter: string;
  addcommentId: number;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  createCharacter: '/characters/create',
  detailsCharacter: '/characters/:id',
//  addcommentId: '/characters/comment/:id',
};

type NavigationFunction = (id: number) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'detailsCharacter'> {
  detailsCharacter: NavigationFunction;
}



export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  detailsCharacter: (id) => generatePath(switchRoutes.detailsCharacter, { id }),
};
