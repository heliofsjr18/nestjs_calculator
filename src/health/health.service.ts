import { Injectable } from '@nestjs/common';
import { HealthInput } from './dto/health.input';

@Injectable()
export class HealthService {
  async healthCheck(healthInput: HealthInput): Promise<string> {
    return Promise.resolve(`Hello World - ${healthInput.name}`);
  }
}
