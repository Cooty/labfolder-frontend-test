import {inject} from 'aurelia-framework';
import {Configuration} from './configuration';
import {Person} from './person';

@inject(Configuration)
export class PeopleForm {
  constructor(config) {
    this.traits = config.traits;
    this.checkedTraits = [];
    this.people = config.people;
    this.label = 'Add a new person!';
    this.placeholder = 'ex.: Jane Doe';
    this.personName = '';
  }

  add() {
    if (this.personName.length) {
      this.people.push(new Person(this.personName, this.checkedTraits));
      this.personName = '';
      this.checkedTraits = [];
    }
  }
}
