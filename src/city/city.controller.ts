import { Controller, Get, Param,  } from '@nestjs/common';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('/:stateId')
  async getAllCitiesByStateId(@Param() params): Promise<CityEntity[]> {
    return this.cityService.getAllCityByStateId(params.stateId);
  }
}
