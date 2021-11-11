import { Length, IsString, IsUrl } from 'class-validator';
export class CreateMovieDto {
  @IsString({ message: 'O nome deve conter entre 2 a 70 caracteres.' })
  @Length(2, 70)
  name: string;

  @IsString({ message: 'O ano deve conter entre 5 a 50 caracteres.' })
  @Length(5, 50)
  year: string;

  @IsString({ message: '' })
  @Length(3, 20)
  genre: string;

  @IsString({
    message: 'A duração do filme deve conter entre 5 a 50 caracteres.',
  })
  @Length(5, 50)
  length: string;

  @IsString({ message: 'A sinopse deve conter entre 20 a 800 caracteres.' })
  @Length(20, 800)
  storyline: string;

  @IsString({
    message: 'A URL da imagem deve conter entre 5 a 800 caracteres.',
  })
  @IsUrl()
  @Length(5, 800)
  image: string;
}
