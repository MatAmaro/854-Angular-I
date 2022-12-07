import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.elementCreated.emit('footer');
  }

}
