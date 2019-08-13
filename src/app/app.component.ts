import { Component } from '@angular/core';
import { post } from './shared/models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projetblog';

  listPosts : post[] = [
     new post('Mon premier Post',
             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec tincidunt sapien. Integer at semper elit. Proin molestie justo eu nibh fermentum, et varius tellus ultrices. Cras euismod eleifend suscipit. Sed sodales mi sed ultricies sollicitudin. Cras ut imperdiet magna. Sed placerat ac lectus a sodales. Pellentesque iaculis velit in sapien semper auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin facilisis semper orci et scelerisque. Duis lacus neque, tempor eget arcu id, dictum porta nunc. Donec commodo nisl justo.',
             10),
     new post('Mon deuxieme Post',
             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec tincidunt sapien. Integer at semper elit. Proin molestie justo eu nibh fermentum, et varius tellus ultrices. Cras euismod eleifend suscipit. Sed sodales mi sed ultricies sollicitudin. Cras ut imperdiet magna. Sed placerat ac lectus a sodales. Pellentesque iaculis velit in sapien semper auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin facilisis semper orci et scelerisque. Duis lacus neque, tempor eget arcu id, dictum porta nunc. Donec commodo nisl justo.',
             -10),
     new post('Encore un Post',
             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec tincidunt sapien. Integer at semper elit. Proin molestie justo eu nibh fermentum, et varius tellus ultrices. Cras euismod eleifend suscipit. Sed sodales mi sed ultricies sollicitudin. Cras ut imperdiet magna. Sed placerat ac lectus a sodales. Pellentesque iaculis velit in sapien semper auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin facilisis semper orci et scelerisque. Duis lacus neque, tempor eget arcu id, dictum porta nunc. Donec commodo nisl justo.',
             0),
     new post('Le dernier Post',
             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec tincidunt sapien. Integer at semper elit. Proin molestie justo eu nibh fermentum, et varius tellus ultrices. Cras euismod eleifend suscipit. Sed sodales mi sed ultricies sollicitudin. Cras ut imperdiet magna. Sed placerat ac lectus a sodales. Pellentesque iaculis velit in sapien semper auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin facilisis semper orci et scelerisque. Duis lacus neque, tempor eget arcu id, dictum porta nunc. Donec commodo nisl justo.',
             -1),
      ];
}
