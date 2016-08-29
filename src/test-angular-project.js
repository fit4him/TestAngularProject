import {Component, View} from 'angular2/core';

@Component({
  selector: 'test-angular-project'
})

@View({
  templateUrl: 'test-angular-project.html'
})

export class TestAngularProject {

  constructor() {
    console.info('TestAngularProject Component Mounted Successfully');
  }

}
