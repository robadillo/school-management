import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType('Lesson') // we provide the name of our type as an argument if we don't want to use the name of the class as a name
export class LessonType {
  @Field(type => ID)// explicitly we say to nestjs that this will be an ID
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string; // class properties that will be Fields
}