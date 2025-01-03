import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      make: 'Ford',
      model: 'Fiesta',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: number) {
    const car = this.cars.find(car => car.id === id);
    if (!car) throw new NotFoundException(`Car with ID ${id} not found`);
    return car;
  }
}
