import { Connection } from 'typeorm';
import { Word } from './word.entity';

export const wordsProviders = [
  {
    provide: 'WORD_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Word),
    inject: ['DATABASE_CONNECTION'],
  },
];