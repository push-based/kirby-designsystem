import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'kirby-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Output() menuToggled = new EventEmitter<boolean>();
  @Input() isMenuOpen = false;

  constructor() { }

  ngOnInit() {
  }

  onToggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuToggled.emit(this.isMenuOpen);
    console.log('Fra app-menu - isMenuOpen: ' + this.isMenuOpen);
  }

}
