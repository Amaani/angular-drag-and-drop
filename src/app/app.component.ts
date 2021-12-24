import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dragAndDrop';

  todos = [
    { name: "one"},
]
  completed = [
    { name: "four"},
    { name: "five"},
    { name: "six"},
]
  onDrop(event: CdkDragDrop<string[]>){
    if(event.previousContainer===event.container){
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex)
    } else {
      if(event.container.data.length == 1){
        console.log(event.container.element)
        transferArrayItem(event.container.data, event.previousContainer.data, 0, 0)
        //transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
      }
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex+1, event.currentIndex)
    }
  }
}
