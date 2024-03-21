import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from './entities/city.entity';
import { CacheModule } from '../cache/cache.module';

import { CacheModule as CacheModuleNest } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModuleNest.register({
      ttl: 900000000,
    }),
    TypeOrmModule.forFeature([CityEntity]),
    CacheModule,
  ],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
