import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalStrategy } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //POST ==> Login
  @UseGuards(LocalStrategy)
  @Post('login')
  login(@Request() req):any {
    return req.user;
  }

  @Get('protected')
  getHello():string {
    return this.appService.getHello();
  }
}
