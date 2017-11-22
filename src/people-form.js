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
      // TODO: Figure out a better structure for passing traits, so I can traverse them by traits they have
      // the chekedTraits only has values, so no way to map it against config.traits
      // Ideal result should look like this, where I can explicitly tell who has what trait
    //   let traits = [
    //         {name: 'super-power', displayName: 'Super Power', hasIt: true},
    //         {name: 'rich', displayName: 'Rich', hasIt: false},
    //         {name: 'genius', displayName: 'Genius', hasIt: true}
    //     ];
      this.people.push(new Person(this.personName, this.checkedTraits));
      this.personName = '';
      this.checkedTraits = [];
    }
  }
}
