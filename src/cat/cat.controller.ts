import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cats')
export class CatController {
  constructor(private catService: CatService) {}

  // Get /cats
  @Get('/')
  getCars() {
    this.catService.getCats;
  }

  // Get /cat
  @Get('/wow')
  getCar() {
    this.catService.getCat;
  }
}
