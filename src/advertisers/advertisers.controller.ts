import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdvertisersService } from './advertisers.service';
import { CreateAdvertiserDto } from './dto/create-advertiser.dto';
import { UpdateAdvertiserDto } from './dto/update-advertiser.dto';

@Controller('advertisers')
export class AdvertisersController {
  constructor(private readonly advertisersService: AdvertisersService) {}

  @Post()
  create(@Body() createAdvertiserDto: CreateAdvertiserDto) {
    return this.advertisersService.create(createAdvertiserDto);
  }

  @Get()
  findAll() {
    return this.advertisersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.advertisersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdvertiserDto: UpdateAdvertiserDto) {
    return this.advertisersService.update(+id, updateAdvertiserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.advertisersService.remove(+id);
  }
}
