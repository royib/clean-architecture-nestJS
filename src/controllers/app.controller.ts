import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor, @typescript-eslint/no-empty-function
  constructor() {}

  @Get()
  getHello(): string {
    return 'hello';
  }
}
