import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { authService } from '../../services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void => *', animate(300)),
    ])
  ]
})
export class LoginComponent {
  cadastroAtivo: boolean = false;

  usuario: string = '';
  senha: string = '';

  userCadastro: string = '';
  senhaCadastro: string = '';
  confirmeSenhaCadastro: string = '';

  constructor(private authService: authService, private router: Router) { }

  alternarFormulario() {
    this.cadastroAtivo = !this.cadastroAtivo;
  }    

  realizarLogin() {
    if (!this.usuario || !this.senha) {
      Swal.fire('Por favor, preencha todos os campos.', '', 'warning' );
      return;
    }

    this.authService.login(this.usuario, this.senha)
      .subscribe({
        next: () => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
          });
          Toast.fire({
            icon: 'success',
            title: 'Login feito com sucesso'
          });

         
          setTimeout(() => {
            this.router.navigate(['/inicial']);
          }, 2000);
        },
        error: (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Login incorreto. Por favor, verifique suas credenciais.',
          });
          console.error('Erro ao efetuar login:', error);
        }
      });
  }


  realizarCadastro() {
    if (this.userCadastro && this.senhaCadastro && this.confirmeSenhaCadastro) {
      if (this.senhaCadastro !== this.confirmeSenhaCadastro) {
        Swal.fire('As senhas não coincidem. Por favor, verifique.', '', 'error');
        return;
      }
  
      this.authService.signup(this.userCadastro, this.senhaCadastro)
        .subscribe({
          next: () => {
            this.userCadastro = '';
            this.senhaCadastro = '';
            this.confirmeSenhaCadastro = '';
  
            Swal.fire('Cadastro concluído com sucesso!', '', 'success')
              .then(() => {
                location.reload();
              });
          },
          error: (error) => {
            Swal.fire('Erro ao cadastrar. Por favor, tente novamente.', '', 'error');
            console.error('Erro ao cadastrar:', error);
          }
        });
    } else {
      Swal.fire('Por favor, preencha todos os campos.', '', 'warning' );
    }
  }

  
}
