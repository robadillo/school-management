import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonModule } from './lesson/lesson.module';
import { LessonResolver } from './lesson/lesson.resolver';
import { Lesson } from './lesson/lesson.entity';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    LessonModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/school',
      synchronize: true,
      useUnifiedTopology: true, // This is mongodb specific
      entities: [
        Lesson
      ]
    })
  ],
  providers: []
})
export class AppModule {}
