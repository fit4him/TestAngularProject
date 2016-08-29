import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {TestAngularProject} from 'test-angular-project';

@Component({
  selector: 'main'
})

@View({
  directives: [TestAngularProject],
  template: `
    <test-angular-project></test-angular-project>
  `
})

class Main {

}

bootstrap(Main);
