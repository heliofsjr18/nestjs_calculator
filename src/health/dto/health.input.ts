import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HealthInput {
  @Field(() => String, { nullable: true })
  name?: string;
}
