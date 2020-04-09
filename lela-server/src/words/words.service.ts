import { Injectable, Inject } from '@nestjs/common';
import { Word } from './word.entity';
import { Repository } from 'typeorm';
import { WordDto } from './word.dto';

@Injectable()
export class WordsService {
    
    constructor(
        @Inject('WORD_REPOSITORY')
        private readonly wordsRepository: Repository<Word> ) {
    }

    async getWord(id?: number): Promise<Word> {
        return await this.wordsRepository.findOne(id);
    }

    async getWords(): Promise<Word[]> {
        return await this.wordsRepository.find();;
    }

    async getRandomWords(): Promise<Word[]> {
        return this.wordsRepository.createQueryBuilder("word")
        .getMany();
    }

    async createGameWord(wordData: Partial<WordDto>): Promise<Word> {
        let word = new Word();
        word.word = wordData.word;
        word.description = wordData.description;
        word.masculin = wordData.masculin;
        word.feminin = wordData.feminin;

        return await this.wordsRepository.save(word);
    }
}
