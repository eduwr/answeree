import { Injectable } from '@nestjs/common';
import { Question } from '../graphql';

@Injectable()
export class QuestionsService {
  questions: Question[] = [
    {
      id: '1',
      content: 'Is this a question?',
      votes: 0,
    },
  ];

  async findAll({ userId }: { userId: number }) {
    return this.questions;
  }
}
