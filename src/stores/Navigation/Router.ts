
import { observable, computed } from 'mobx';
import { Route } from './types';

import routes from './routes';
import Stores from '../index'
import { AccessControl } from '../Auth/AccessControl';

export const defaultRoutes = routes;

export class Router {
  @observable routes: Route[] = [];

  accessControl: AccessControl;

  constructor(defaultRoutes: Route[] = [], accessControl: AccessControl) {
    this.routes = defaultRoutes;
    this.accessControl = accessControl;
  }

  @computed get allowedRoutes() {
    return this.routes.filter(({ isPublic, key }) => this.accessControl.isAuthenticated
      && this.accessControl.isAuthorized(key)
      || isPublic);
  }
}
