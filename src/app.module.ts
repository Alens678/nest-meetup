import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './modules/task.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://NestMeetUp:NestMeetUp2023@cluster0.otb7oar.mongodb.net/?retryWrites=true&w=majority',
    ),
    TaskModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
