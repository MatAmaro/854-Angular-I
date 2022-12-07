import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();
  public searchData!: string;
  @Output() public searchSubmit: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.elementCreated.emit('header');
  }

  public submitSearch(): void {
    this.searchSubmit.emit(this.searchData);

  }

}
