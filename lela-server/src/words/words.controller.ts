import { Controller, Get } from '@nestjs/common';
import { Word } from './word.entity';

@Controller('words')
export class WordsController {
  
  @Get('example')
  getExampleWord() {
    return this.createExampleWord();
  }

 	private createExampleWord(): Word {
      var myWord = new Word();
      myWord.word = "coude";
      myWord.description = "French word for elbow";
      myWord.masculin = true;
      myWord.feminin = false;
      return myWord;
    }
}