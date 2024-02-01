import { Component } from '@angular/core';
import { GestionDatasService } from '../services/gestion-datas.service';
import { EntrerMessage } from '../models/entrer-message';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {

  pseudo: string = '';
  message: string = '';
  form!: FormGroup;

  constructor(private gestionDatasService: GestionDatasService) {}

  submitForm() {
    const newEntry = new EntrerMessage(this.pseudo, this.message);
    this.gestionDatasService.addMessageEntry(newEntry);
    
    this.pseudo='';
    this.message='';
  }

}