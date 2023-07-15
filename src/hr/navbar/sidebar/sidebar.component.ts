import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {

  @Input()
  shrink!: boolean

  @Output()
  onDrawerShrink: EventEmitter<boolean> = new EventEmitter();

  @Output()
  selectedNav: EventEmitter<string> = new EventEmitter()
  @Input()
  nav!: string

  onNavSelected(item: string) {
    this.nav = item
    this.selectedNav.emit(item)
  }


  shrinkDrawer() {
    this.shrink = !this.shrink
    this.onDrawerShrink.emit(this.shrink)
  }

}
