import { Component, OnInit} from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [NgbCollapseModule,NgbDropdownModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent 
  implements OnInit {
    isCollapsed = false;
    constructor() {}
  
    ngOnInit(): void {
      // Your initialization code here
    }
  
}
