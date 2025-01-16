import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
export const CARS_SEED: Car[] = [
  {
    id: uuidv4(),
    make: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuidv4(),
    make: 'Toyota',
    model: 'Camry',
  },
];
