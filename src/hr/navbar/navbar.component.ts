import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @Input() currentNav!: string
  @Output() onSelectedNavChange: EventEmitter<string> = new EventEmitter()
  @Input()
  headerTitle: string = 'HR Manager Dashboard'
  isShrink!: boolean


  onDrawerShrink(ev: boolean) {
    this.isShrink = ev
  }

  ngOnInit(): void {
    if (window.innerWidth < 720) this.isShrink = true
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (window.innerWidth < 720) {

      this.isShrink = true
    }
    else { this.isShrink = false }
  }

  onNavigationChange(nav: string) {
    this.onSelectedNavChange.emit(nav)
  }
}
