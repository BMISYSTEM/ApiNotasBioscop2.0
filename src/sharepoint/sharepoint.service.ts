import { Injectable } from '@nestjs/common';
import { CreateSharepointDto } from './dto/create-sharepoint.dto';
import { UpdateSharepointDto } from './dto/update-sharepoint.dto';

@Injectable()
export class SharepointService {
  create(createSharepointDto: CreateSharepointDto) {
    return 'This action adds a new sharepoint';
  }

  findAll() {
    return `This action returns all sharepoint`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sharepoint`;
  }

  update(id: number, updateSharepointDto: UpdateSharepointDto) {
    return `This action updates a #${id} sharepoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} sharepoint`;
  }
}
