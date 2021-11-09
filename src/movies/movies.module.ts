import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PassportModule } from '@nestjs/passport';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [MoviesService, PrismaService],
  controllers: [MoviesController],
})
export class MoviesModule {}
