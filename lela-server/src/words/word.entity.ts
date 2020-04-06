export class Word {

id: number;
word: string;
description: string;
masculin: boolean;
feminin: boolean;

constructor(word?: Partial<Word>) {
    Object.assign(this, word);
  }
}