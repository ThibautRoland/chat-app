import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedService } from './seed/seed/seed.service';
import { SeedService } from './seed/service/seed.service';
import entities from './typeorm';

@Module({
  imports: [UsersModule, AuthModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: "thibaut",
    password: 'password',
    database: "chat-app",
    entities: entities,
    synchronize: true,
  })],
  controllers: [],
  providers: [SeedService],
})
export class AppModule {}
