import { Module } from '@nestjs/common';
import { HealthResolver } from './health.resolver';
import { HealthService } from './health.service';

@Module({
  imports: [],
  providers: [HealthResolver, HealthService],
})
export class HealthModule {}
