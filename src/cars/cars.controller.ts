import { Controller, Get, Post, Req } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Request } from 'express';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll(@Req() request: Request): string {
    console.log('Request URL:', request.url);
    return 'This action returns all cars';
  }

  @Post()
  create(): string {
    return 'This action adds a new car';
  }
}
