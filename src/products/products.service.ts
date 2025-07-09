import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  create(createProductDto: CreateProductDto) {
    return this.products.push({
      id: this.products.length + 1,
      ...createProductDto,
    });
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    if (productIndex === -1) {
      throw new Error(`Product with id ${id} not found`);
    }
    this.products[productIndex] = {
      ...this.products[productIndex],
      ...updateProductDto,
    };
    return this.products[productIndex];
  }

  remove(id: number) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    if (productIndex === -1) {
      throw new Error(`Product with id ${id} not found`);
    }
    const removedProduct = this.products.splice(productIndex, 1);
    return removedProduct[0];
  }
}
