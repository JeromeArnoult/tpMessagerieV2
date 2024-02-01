import { Component, OnInit } from '@angular/core';
import { GestionDatasService } from '../services/gestion-datas.service';
import { EntrerMessage } from '../models/entrer-message';

@Component({
  selector: 'app-affichage-messages',
  templateUrl: './affichage-messages.component.html',
  styleUrl: './affichage-messages.component.css'
})
export class AffichageMessagesComponent implements OnInit {
  
  messageEntrant: EntrerMessage[] = [];

  constructor(private gestionDatasService: GestionDatasService) {}

  ngOnInit(): void {
   
    this.gestionDatasService.messageEntries$.subscribe(entrer => {
      this.messageEntrant = entrer;
    });
  
    
  }
}
