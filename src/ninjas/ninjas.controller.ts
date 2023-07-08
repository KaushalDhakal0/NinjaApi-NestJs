import { Controller, Get, Post, Body, Patch, Param, Delete, Query, NotFoundException, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto, User } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Post()
  create(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.create(createNinjaDto);
  }

  @Get()
  findAll(@Query('weapon') weapon: string) {
    return this.ninjasService.findAll(weapon);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
     try {
      return this.ninjasService.findOne(id);
     } catch (error) {
      return new NotFoundException(error);
     }
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateNinjaDto: UpdateNinjaDto) {
    try {
      return this.ninjasService.update(+id, updateNinjaDto);
    } catch (error) {
      return new NotFoundException(error); 
    }
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ninjasService.remove(id);
  }
}
