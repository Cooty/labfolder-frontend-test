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

  // TODO: Figure out a way how o loop thorugh the people and disect them by the traits they have
}
