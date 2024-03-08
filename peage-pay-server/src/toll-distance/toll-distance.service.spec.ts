import { Test, TestingModule } from '@nestjs/testing';
import { TollDistanceService } from './toll-distance.service';

describe('TollDistanceService', () => {
  let service: TollDistanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TollDistanceService],
    }).compile();

    service = module.get<TollDistanceService>(TollDistanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
