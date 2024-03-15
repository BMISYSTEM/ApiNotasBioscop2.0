import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SharepointService } from './sharepoint.service';
import { CreateSharepointDto } from './dto/create-sharepoint.dto';
import { UpdateSharepointDto } from './dto/update-sharepoint.dto';

@Controller('sharepoint')
export class SharepointController {
  constructor(private readonly sharepointService: SharepointService) {}

  @Post()
  create(@Body() createSharepointDto: CreateSharepointDto) {
    return this.sharepointService.create(createSharepointDto);
  }

  @Get()
  findAll() {
    return this.sharepointService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sharepointService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSharepointDto: UpdateSharepointDto) {
    return this.sharepointService.update(+id, updateSharepointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sharepointService.remove(+id);
  }
}
