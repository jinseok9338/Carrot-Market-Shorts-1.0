import { Test, TestingModule } from '@nestjs/testing';
import { CommentResolver } from './comments.resolver';
import { CommentService } from './comments.service';

describe('CommentResolver', () => {
  let resolver: CommentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentResolver, CommentService],
    }).compile();

    resolver = module.get<CommentResolver>(CommentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
