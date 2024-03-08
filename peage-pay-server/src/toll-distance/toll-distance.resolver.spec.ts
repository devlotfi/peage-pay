import { Test, TestingModule } from '@nestjs/testing';
import { TollDistanceResolver } from './toll-distance.resolver';

describe('TollDistanceResolver', () => {
  let resolver: TollDistanceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TollDistanceResolver],
    }).compile();

    resolver = module.get<TollDistanceResolver>(TollDistanceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
