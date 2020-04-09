import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { Word } from './word.entity';
import { WordsService } from './words.service';
import { WordDto } from './word.dto';

@Controller('words')
export class WordsController {
  
  constructor(
    private readonly wordsService: WordsService,
  ) {    
  }

  @Get()
  async getWords(): Promise<Word[]> {
    return await this.wordsService.getWords();
  }

  @Get('random')
  async getTenWords(): Promise<Word[]> {
    return await this.wordsService.getRandomWords();
  }

  @Get(':id')
  async getWord(@Param('id') id): Promise<Word> {
    try {
      return await this.wordsService.getWord(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Post()
  async postWord(@Body() wordData: Partial<WordDto>) {
    return await this.wordsService.createGameWord(wordData);
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