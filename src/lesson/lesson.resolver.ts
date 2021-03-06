import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService
  ) {}

  @Query(returns => LessonType)
  lesson(
    @Args('id') id: string
  ) {
    return this.lessonService.getLesson(id);
  }

  @Mutation(returns => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput // It works just as our regular DTOs
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }
}