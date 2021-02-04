import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { HotelCollectionScene, HotelScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.characterCollection]}
          component={HotelCollectionScene}
        />
        <Route
          exact={true}
          path={switchRoutes.createCharacter}
          component={HotelScene}
        />
        <Route
          exact={true}
          path={switchRoutes.detailsCharacter}
          component={HotelScene}
        />
      </Switch>
    </HashRouter>
  );
};
