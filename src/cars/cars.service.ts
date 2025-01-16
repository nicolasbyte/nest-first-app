import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid4 } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car-dto';
@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid4(),
    //   make: 'Toyota',
    //   model: 'Corolla',
    // },
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    const car = this.cars.find(car => car.id === id);
    if (!car) throw new NotFoundException(`Car with ID ${id} not found`);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar = {
      id: uuid4(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    const existingCar = this.findOne(id);

    this.cars = this.cars.map(car => {
      if (car.id === id) {
        return {
          ...existingCar,
          ...updateCarDto,
          id,
        };
      }
      return car;
    });

    return existingCar;
  }

  delete(id: string) {
    this.findOne(id);
    this.cars = this.cars.filter(car => car.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
