import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
@Module({
    imports:[PassportModule,UsersModule],
    providers : [AuthService,LocalStrategy],
})
export class AuthModule {}
