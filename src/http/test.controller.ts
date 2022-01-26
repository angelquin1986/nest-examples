import { Controller, Get, Logger, Req, Res } from '@nestjs/common';
import { ApiExcludeEndpoint, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';

@Controller('/')
export class HealthController {
  private readonly logger = new Logger();

  @ApiExcludeEndpoint()
  @Get('/health')
  @ApiTags('health status by Rappi Cargo')
  @ApiResponse({ status: 201, description: 'Created' })
  @ApiResponse({ status: 400, description: 'Invalid request' })
  @ApiResponse({ status: 401, description: 'unauthorized' })
  @ApiResponse({ status: 404, description: 'Not found' })
  /* istanbul ignore next */
  async testGet(@Req() req: Request, @Res() res: Response) {
    try {
      this.logger.debug('health endpoint');
      res.status(200).send({ message: 'ok', version: 13 });
    } catch (ex) {
      this.logger.error(ex);
      res.status(400).send(ex);
      return;
    }
  }
}
