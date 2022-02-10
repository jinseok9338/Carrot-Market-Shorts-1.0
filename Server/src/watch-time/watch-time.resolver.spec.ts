import { Test, TestingModule } from '@nestjs/testing';
import { WatchTimeResolver } from './watch-time.resolver';
import { WatchTimeService } from './watch-time.service';

describe('WatchTimeResolver', () => {
  let resolver: WatchTimeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WatchTimeResolver, WatchTimeService],
    }).compile();

    resolver = module.get<WatchTimeResolver>(WatchTimeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
