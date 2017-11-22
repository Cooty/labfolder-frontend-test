import {inject} from 'aurelia-framework';
import {Configuration} from './configuration';

@inject(Configuration)
export class Sidebar {
  constructor(config) {
    this.people = config.people;
    this.empty = 'Noone added yet';
    this.single = 'Person';
    this.plural = 'People';
  }
}
