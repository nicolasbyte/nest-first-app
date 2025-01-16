import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuidv4(),
    //   name: 'Toyota',
    //   createdAt: new Date().getTime(),
    // },
  ];
  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuidv4(),
      ...createBrandDto,
      createdAt: new Date().getTime(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with ID ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);
    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        return {
          ...brand,
          ...updateBrandDto,
          updatedAt: new Date().getTime(),
        };
      }
      return brand;
    });
    return brand;
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter(brand => brand.id !== id);
  }

  fillBrandWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
