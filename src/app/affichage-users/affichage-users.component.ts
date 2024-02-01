import { Component } from '@angular/core';
import { GestionDatasService } from '../services/gestion-datas.service';
import { EntrerMessage } from '../models/entrer-message';

@Component({
  selector: 'app-affichage-users',
  templateUrl: './affichage-users.component.html',
  styleUrl: './affichage-users.component.css'
})
export class AffichageUsersComponent {
  messageEntrant: EntrerMessage[] = [];

  constructor(private gestionDatasService: GestionDatasService) {}

  ngOnInit(): void {
   
    this.gestionDatasService.messageEntries$.subscribe(entrer => {
      this.messageEntrant = entrer;
    });
  
    
  }
}
