import { Injectable, ConflictException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UserRole } from './enum/role.enum';

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.UserCreateInput, role: UserRole): Promise<User> {
    const userExits = await this.db.user.findUnique({
      where: { email: data.email },
    });

    if (userExits) {
      throw new ConflictException('Email já cadastrado.');
    }

    const user = await this.db.user.create({
      data,
    });

    return user:
  }
}
