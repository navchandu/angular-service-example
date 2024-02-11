import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HelloComponent } from './hello/hello.component';

import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HelloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-service-example';
  memberData=[
    {name:'amol',email:'amol@test.com',age:'46'},
    {name:'spnu',email:'sonu@test.com',age:'43'},
    {name:'sonal',email:'sonall@test.com',age:'24'},
    {name:'anil',email:'anil@test.com',age:'23'},


  ]
  
}

