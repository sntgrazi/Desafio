import { Component } from '@angular/core';
import { CepService } from '../../services/cep.service';


@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent {
  visivel = false;
  cepBase: any;
  km:any;
  ceps: any[] = [];
  historico: any[] = [];

  userId: number  = parseInt(localStorage.getItem('userId')!, 10);
  nomeUser: string | null = localStorage.getItem('usuario');
  

  constructor(private cepService: CepService) {}

  ngOnInit(): void {
    this.nomeUser = localStorage.getItem('usuario');
  }

  abrirOffCanvas() {
    this.visivel = true;

    this.getHistorico(Number(this.userId));
  }

  fecharOffCanvas(){
    this.visivel = false;
  }

  realizarPesquisa() {
    this.cepService.getCepsInRadius(this.cepBase, this.km).subscribe((ceps) => {
      this.ceps = ceps;
    });
 
    this.km = parseInt(this.km ,10)
    this.cepService.saveSearch(this.userId, this.cepBase, this.km).subscribe(
      () => {
        console.log('Pesquisa salva com sucesso!');
      },
      (error) => {
        console.error('Erro ao salvar pesquisa:', error);
      }
    );
  }

  getHistorico(userId:number) {
    this.cepService.getHistoricoByUser(userId).subscribe(
      (historico) => {
        this.historico = historico;
        console.log('Histórico obtido com sucesso!', historico);
      },
      (error) => {
        console.error('Erro ao obter histórico:', error);
      }
    );
  }

}
