// TODO: https://github.com/auth0/angular2-authentication-sample/tree/master/src

import {Component} from '@angular/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated'; //Router

import { Home } from './components/home/home.ts';
import { Demo } from './components/demo/demo.ts';
import Logger from './utils/logger.service.ts';

import AppConfig from './app.config.ts';

@Component({
  selector: 'app',
  providers: [],
  template: require('./app.html'),
  styles: [require('./app.scss').toString()],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})

@RouteConfig([
  new Route({ path: '/home', component: Home, name: 'Home', useAsDefault: true }),
  new Route({ path: '/demo/...', component: Demo, name: 'Demo' })
])

export class AppComponent {

  private _log: Logger = new Logger('AppComponent');

  constructor() {
    this._log.info('constructor')(AppConfig);
  }

  public sayHello(): string {
    return 'hello';
  }

}
