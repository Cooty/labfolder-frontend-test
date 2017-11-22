import {inject} from 'aurelia-framework';
import {Configuration} from './configuration';

@inject(Configuration)
export class PeopleTable {
  constructor(config) {
    this.traits = config.traits;
    this.people = config.people;
  }

  sortByName(name, direction) {
    // TODO: Implement sorting the this.people by the name property on the Person object
  }

  sortByTrait(trait, direction) {
    // TODO: Implement a generic sorter for any Boolean property
  }

  deletePerson(index) {
    // TODO: Find the person object with the given index (paased from the view) and remove it from the this.people array
  }

  showDeleteConfirm(index) {
    // TODO: Implemenet the displaying for the confirm bubble that hold the actual delete button on the UI for each row
  }

  cancelDelete() {
    // TODO: Hide the currently opened delete confirm panel
  }
}
