import {inject} from 'aurelia-framework';
import {Configuration} from './configuration';

@inject(Configuration)
export class TraitsNavigation {
  constructor(config) {
    this.traits = config.traits;
    this.people = config.people;
  }
}
