import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { upperDirectiveTransformer } from './common/directives/upper-case.directive';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    HealthModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
