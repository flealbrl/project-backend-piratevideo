import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Movie } from '@prisma/client';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Role } from '../auth/role.decorator';
import AuthUser from 'src/auth/auth-user.decorator';
import { MoviesService } from './movies.service';
import { UserRole } from 'src/users/enum/role.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/roles.guard';
import { User } from '@prisma/client';

@Controller('movies')
export class MoviesController {
  constructor(private service: MoviesService) {}

  @Post('create-movie')
  @Role(UserRole.ADMIN)
  @UseGuards(AuthGuard(), RolesGuard)
  createMovie(@Body() data: CreateMovieDto): Promise<Movie> {
    return this.service.create(data);
  }

  @Get('find-all')
  @UseGuards(AuthGuard())
  findMany(): Promise<Movie[]> {
    return this.service.findMany();
  }

  @Get('find-movie/:id')
  @UseGuards(AuthGuard())
  findUnique(@Param('id') id: string): Promise<Movie> {
    return this.service.findUnique(id);
  }

  @Delete('delete-movie/:id')
  @Role(UserRole.ADMIN)
  @UseGuards(AuthGuard(), RolesGuard)
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }

  @Get('rate-movie/:id')
  @UseGuards(AuthGuard())
  likeMovie(
    @AuthUser() user: User,
    @Param('id') movieId: string,
  ): Promise<User> {
    const userId = user.id;
    return this.service.likeMovie(userId, movieId);
  }
}
