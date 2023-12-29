import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { isAuthorized: boolean } {
    return { isAuthorized: false };
  }
}
