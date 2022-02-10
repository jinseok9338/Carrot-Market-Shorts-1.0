import { Test, TestingModule } from '@nestjs/testing';
import { WatchTimeService } from './watch-time.service';

describe('WatchTimeService', () => {
  let service: WatchTimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WatchTimeService],
    }).compile();

    service = module.get<WatchTimeService>(WatchTimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
