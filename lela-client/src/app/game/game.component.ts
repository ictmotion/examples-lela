import { Component, OnInit } from '@angular/core';
import { WordService } from '../services/word.service';
import { Word } from '../models/word.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  showGame: boolean = false;
  leCorrect: boolean | null = null;
  laCorrect: boolean | null = null;
  shownWord: string;
  showNextButton: boolean = false;
  gameFinished: boolean = false;

  wordsOfTheGame: Word[];
  currentRound: number = 1;
  roundsInGame: number = 10;
  roundsAnsweredCorrectly : number = 0;

  constructor(private wordService: WordService) { 
  }

  ngOnInit() {
  }

  onClickStart() {
    this.wordService.GetGameWords().subscribe(words => {
      this.wordsOfTheGame = words;
      this.shownWord = this.wordsOfTheGame[this.currentRound -1].word;
      this.showGame = true;
    })
  }

  onClickLe() {
    var boolValue = this.wordsOfTheGame[this.currentRound -1].masculin;
    if (boolValue) {
      if (this.laCorrect == null) this.roundsAnsweredCorrectly += 1;
      console.log(this.wordsOfTheGame[this.currentRound -1].word);
      this.leCorrect = true
    }
    else {
      this.leCorrect = false;
    }

    if (this.currentRound == this.roundsInGame) {
      this.gameFinished = true;
    } 
    else {
      this.showNextButton = true;
    }
  }

  onClickLa() {
    var boolValue = this.wordsOfTheGame[this.currentRound -1].feminin;
    if (boolValue) {
      if (this.leCorrect == null) this.roundsAnsweredCorrectly += 1;
      console.log(this.wordsOfTheGame[this.currentRound -1].feminin);
      this.laCorrect = true
    } 
    else {
      this.laCorrect = false;
    }

    if (this.currentRound == this.roundsInGame) {
      this.gameFinished = true;
    } 
    else {
        this.showNextButton = true;
    }
  }

  getClassLeCorrect() {
    if (this.leCorrect == true) {
      return "correct";
    } 
    else if (this.leCorrect == false) {
      return 'incorrect';
    }
    else {
      return "";
    }
  }

  getClassLaCorrect() {
    if (this.laCorrect == true) {
      return "correct";
    } 
    else if (this.laCorrect == false) {
      return 'incorrect';
    }
    else {
      return "";
    }
  }

  onClickNext() {
    this.currentRound = this.currentRound + 1;
    this.shownWord = this.wordsOfTheGame[this.currentRound -1]?.word;
    this.showNextButton = false;
    this.leCorrect = null;
    this.laCorrect = null;
  }

  onClickRestart() {
    this.currentRound = 1;
    this.roundsInGame = this.roundsInGame;
    this.roundsAnsweredCorrectly = 0;
    this.gameFinished = false;

    this.leCorrect = null;
    this.laCorrect = null;
    this.onClickStart();
  }
}
