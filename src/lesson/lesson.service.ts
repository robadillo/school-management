import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private readonly lessonRepository: Repository<Lesson>
  ) {}

  public async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate } = createLessonInput;
    const lesson = this.lessonRepository.create({
      id: uuid(), name, startDate, endDate
    });

    return this.lessonRepository.save(lesson);
  }

  public async getLesson(id: string): Promise<Lesson> {
    return this.lessonRepository.findOne({ id });
  }
}
