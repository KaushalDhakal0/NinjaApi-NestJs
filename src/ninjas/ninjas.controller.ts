import { Controller, Get, Post, Body, Patch, Param, Delete, Query, NotFoundException, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto, User } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { Ninja } from './entities/ninja.entity';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Post()
  create(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto):Ninja {
    return this.ninjasService.create(createNinjaDto);
  }

  @Get()
  findAll(@Query('weapon') weapon: string):Ninja[] {
    return this.ninjasService.findAll(weapon);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number):Ninja {
      return this.ninjasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateNinjaDto: UpdateNinjaDto):Ninja[] {
      return this.ninjasService.update(id, updateNinjaDto);
    
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ninjasService.remove(id);
  }
}
