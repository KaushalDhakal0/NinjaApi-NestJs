import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  create(createNinjaDto: CreateNinjaDto) {
    return {
      name:createNinjaDto.name,
    };
  }

  findAll(type:string) {
    return `This action returns all ninjas with type = ${type}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ninja`;
  }

  update(id: number, updateNinjaDto: UpdateNinjaDto) {
    return `This action updates a #${id} ninja : ${updateNinjaDto.name} and mY age is ${updateNinjaDto.age}`;
  }

  remove(id: number) {
    return `This action removes a #${id} ninja`;
  }
}
