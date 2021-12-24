import { FormControl } from '@angular/forms';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @ViewChild('focusInput') focusInput: ElementRef;
  @HostListener('focusout', ['$event']) public onListenerTriggered(event: any): void {
    this.setFocusToInput();
  }

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    
  }

  closeResult = '';
  students = [] as string[];
  studentName = new FormControl('')


  open(content) {
    this.modalService.open(content,
      {ariaLabelledBy: 'modal-basic-title'}).result.then(
        (result) => {
          console.log(this.closeResult = `Closed with: ${result}`);
          this.students.push(this.studentName.value);
          this.studentName.reset();
          console.log(this.students)
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  setFocusToInput() {
    //TODO
    // this.focusInput = getElement
    this.focusInput.nativeElement.focus();
  }
}
