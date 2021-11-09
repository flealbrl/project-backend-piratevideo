import { IsString, Length, IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsString({ message: 'O nome deve conter entre 2 a 70 caracteres.' })
  @Length(2, 70)
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Informe um e-mail válido.' })
  email: string;

  @IsString({
    message: 'Informe uma senha válida.',
  })
  @Length(6, 12)
  password: string;

  @IsString({ message: 'Informe a confirmação de senha válida.' })
  @Length(6, 12)
  passwordConfirmation: string;
}
