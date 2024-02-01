import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EntrerMessage } from '../models/entrer-message';

@Injectable({
  providedIn: 'root'
})
export class GestionDatasService {
  private messageEntries: EntrerMessage[] = [];
  messageEntries$ = new BehaviorSubject<EntrerMessage[]>([]);

  constructor() { }

  addMessageEntry(entry: EntrerMessage) {
    this.messageEntries.push(entry);
    this.messageEntries$.next(this.messageEntries);



  // pseudo$ = this.pseudoSource.asObservable();
  // message$ = this.messageSource.asObservable();

  // constructor() { }

  // setPseudo(pseudo: string) {
  //   this.pseudoSource.next(pseudo);
  // }

  // setMessage(message: string) {
  //   this.messageSource.next(message);
  // }
}
}
