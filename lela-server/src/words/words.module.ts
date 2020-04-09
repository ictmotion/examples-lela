import { Module } from '@nestjs/common';
import { WordsController } from './words.controller';
import { WordsService } from './words.service';
import { DatabaseModule } from 'src/database/database.module';
import { wordsProviders } from './words.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [WordsController],
  providers: [
    ...wordsProviders,
    WordsService,
  ]
})
export class WordsModule {}
