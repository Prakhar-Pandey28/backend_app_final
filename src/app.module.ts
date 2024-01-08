import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from '../tasks/task.module'; // Ensure the path is correct


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://prakhar2811:03122811@cluster0.6c2zrzq.mongodb.net/I'),
    TasksModule,
  ],
})
export class AppModule {}
