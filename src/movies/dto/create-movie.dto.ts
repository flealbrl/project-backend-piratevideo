import { IsString, Length } from 'class-validator';
export class CreateMovieDto {
  @IsString({ message: 'O nome deve ter entre 2 a 70 caracteres.' })
  @Length(2, 70)
  name: string;

  @IsString({ message: 'O ano deve ter entre 5 a 50 caracteres.' })
  @Length(5, 50)
  year: Date;

  @IsString({ message: 'A duração deve ter entre 5 a 50 caracteres.' })
  @Length(5, 50)
  length: Date;

  @IsString({ message: 'A sinopse deve ter entre 20 a 800 caracteres.' })
  @Length(3, 800)
  storyline: string;

  @IsString({ message: 'A URL da imagem deve ter entre 3 a 800 caracteres.' })
  @Length(3, 800)
  image: string;
}
