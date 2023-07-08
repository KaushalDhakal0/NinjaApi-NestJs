import { Injectable } from '@nestjs/common';
import { CreateNinjaDto, User } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { Ninja } from './entities/ninja.entity';

@Injectable()
export class NinjasService {
  private ninjas = [
    {id:0, name:'Ninja A', weapon: 'stars'},
    {id:1, name:'Ninja B', weapon: 'space'},
  ]
  create(createNinjaDto: CreateNinjaDto) {
    const newData = {
      ...createNinjaDto,
      id:Date.now(),
    }
    this.ninjas.push(newData);
    return createNinjaDto;
  }

  findAll(weapon:string):Ninja[] {
    if(weapon){
      return this.ninjas.filter(dta => dta.weapon === weapon);
    }
    return this.ninjas;
  }

  findOne(id: number):Ninja {
    const ninja = this.ninjas.find(dta => dta.id === id);
    if(!ninja){
      throw new Error('Ninja not found');
    }
    return new User(ninja);
  }

  update(id: number, updateNinjaDto: UpdateNinjaDto):Ninja[]{
    const ninjaToUpdate = this.ninjas.find(dta => dta.id===id);
    if(!ninjaToUpdate){
      throw new Error("Ninja Not Found while Updatinnng");
    }
    return this.ninjas = this.ninjas.map(dta => {
      if(dta.id === id){
        console.log(dta);
        
        return{...dta,...updateNinjaDto};
      }
    })
  }

  remove(id: number):Ninja[] {
    const updatedData  =  this.ninjas.filter(dta => dta.id != id);
    this.ninjas = updatedData;
    return this.ninjas;
  }
}
