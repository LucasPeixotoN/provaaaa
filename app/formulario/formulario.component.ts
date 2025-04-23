import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { evento } from '../models/evento';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  evento = {
    nome: '',
    modalidade: '',
    dataInicio: '',
    dataFim: '',
    quantPart: 1,
    participantes: [
      {
        nome: '',
        email: '',
        cpf: '',
        ingresso: ''
      }
    ]
  };

  adicionarParticipante() {
    const novoParticipante = {
      nome: '',
      email: '',
      cpf: '',
      ingresso: ''
    };
    this.evento.participantes.push(novoParticipante);
  }

  atualizarParticipantes() {
    const quantidade = Number(this.evento.quantPart);
    this.evento.participantes = Array.from({ length: quantidade }, (_, i) =>
      this.evento.participantes[i] || {
        nome: '',
        email: '',
        cpf: '',
        ingresso: ''
      }
    );
  }

  removerParticipante(index: number) {
    if (this.evento.participantes.length > 1) {
      this.evento.participantes.splice(index, 1);
    }
  }

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Dados do evento completo:', this.evento);
    } else {
      console.log('Formulário inválido. Por favor, corrija os erros.');
    }
  }
}
