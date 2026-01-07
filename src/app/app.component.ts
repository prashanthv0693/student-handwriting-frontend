import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from './shared/components/admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-root',
  imports: [ CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    AdminSidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   constructor(public auth: AuthService) {}
}
