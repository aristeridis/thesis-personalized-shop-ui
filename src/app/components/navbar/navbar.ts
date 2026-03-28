import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ΠΡΟΣΘΗΚΗ

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // ΠΡΟΣΘΗΚΗ ΕΔΩ
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent { }