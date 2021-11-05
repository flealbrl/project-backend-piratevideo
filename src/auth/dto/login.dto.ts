import { IsString, Length, IsEmail, IsNotEmpty } from 'class-validator';
import { User } from '.prisma/client';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: 'Informe um e-mail válido.' })
  email: string;

  @IsString({ message: 'Informe uma senha válida.' })
  @Length(6, 12)
  password: string;
}

export class AuthResponse {
  token: string;
  user: User;
}
