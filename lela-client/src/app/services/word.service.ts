import { Word } from '../models/word.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private httpClient: HttpClient) { 
  }

  GetGameWords() {
    return this.httpClient.get<Word[]>
      ("http://localhost:7071/api/words/random");
  }
}
