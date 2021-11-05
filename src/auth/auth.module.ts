import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'kEGfekT5gUUin5869Urk3UY3mnL3k',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [PrismaService, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
