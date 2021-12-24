import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import * as confetti from 'canvas-confetti';


@Component({
  selector: 'app-sort-list',
  templateUrl: './sort-list.component.html',
  styleUrls: ['./sort-list.component.css']
})
export class SortListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.numbers = this.shuffle(this.numbers)
  }

  checkOrder(): void {
    console.log(this.numbers)
    if(this.arraysEqual(this.numbers,this.numbersOrdered)){
      this.win()
    }
  }
  
  numbers = [
    'dix',
    'vingt',
    'trente',
    'quarante',
    'cinquante',
    'soixante'
  ];

  numbersOrdered = [
    'dix',
    'vingt',
    'trente',
    'quarante',
    'cinquante',
    'soixante'
  ];

  arraysEqual(a1,a2) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1)==JSON.stringify(a2);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
    this.checkOrder()
  }

  shuffle(array: any[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  async win() {
    var myCanvas = document.createElement('canvas');
    document.body.appendChild(myCanvas);
    myCanvas.style.width = "100%"
    myCanvas.style.height = "100%"
    myCanvas.style.position = "absolute"
    
    var myConfetti = confetti.create(myCanvas, {
      resize: true,
      useWorker: true
    });
      myConfetti({
        particleCount: 200,
        spread: 160
        // any other options from the global
        // confetti function
      });

    console.log("you win")
    myCanvas.style.pointerEvents = "none";
    myCanvas.onmousedown = () => {myCanvas.remove()}
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  
}

