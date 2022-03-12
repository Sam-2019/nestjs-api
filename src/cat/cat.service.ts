import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  getCats() {
    return { msg: 'Opel' };
  }

  getCat() {
    return { msg: 'Honda' };
  }
}
