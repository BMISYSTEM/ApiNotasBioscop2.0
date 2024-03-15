import { Module } from '@nestjs/common';
import { SharepointService } from './sharepoint.service';
import { SharepointController } from './sharepoint.controller';

@Module({
  controllers: [SharepointController],
  providers: [SharepointService],
})
export class SharepointModule {}
