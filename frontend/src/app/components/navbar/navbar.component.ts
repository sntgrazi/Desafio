import { Component, Input } from '@angular/core';
import { authService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() user: string | null = null;

  isDropdownOpen: boolean = false;

  constructor(private authService: authService, private router: Router) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    // Use o SweetAlert2 para confirmar a saída
    Swal.fire({
      title: 'Tem certeza que deseja sair?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      // Se o usuário confirmar a saída
      if (result.isConfirmed) {
        // Realize o logout
        this.authService.logout();
        
        // Remova o token do localStorage
        localStorage.removeItem('token');

        // Navegue para a página de login
        this.router.navigate(['/']);
      }
    });
  }
}
