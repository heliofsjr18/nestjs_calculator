import { Args, Resolver, Query } from '@nestjs/graphql';
import { HealthInput } from './dto/health.input';
import { HealthService } from './health.service';

@Resolver(() => String)
export class HealthResolver {
  constructor(private readonly healthService: HealthService) {}
  @Query(() => String, { name: 'health' })
  async health(@Args('data') data: HealthInput) {
    return await this.healthService.healthCheck(data);
  }
}
