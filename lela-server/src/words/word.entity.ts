import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

//@Entity({name: "word"})
@Entity()
export class Word {

@PrimaryGeneratedColumn()
id: number;

@Column({ length: 200 })
word: string;

@Column({ nullable: true })
description: string;

@Column()
masculin: boolean;

@Column()
feminin: boolean;

constructor(word?: Partial<Word>) {
    Object.assign(this, word);
  }
}