import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { Comment } from './entities/comment.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment) private commentRepository: Repository<Comment>,
  ) {}

  create(createCommentInput: CreateCommentInput) {
    return 'This action adds a new comment';
  }

  async findAll() {
    return await this.commentRepository.find();
  }

  async findProductComments(product_id: string): Promise<Comment[]> {
    return await getRepository(Comment)
      .createQueryBuilder('comment')
      .where('comment.product_id = :product_id', { product_id })
      .getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentInput: UpdateCommentInput) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
