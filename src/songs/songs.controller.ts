import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songsService.findOne(id);
  }

  @Post()
  create(@Body() CreateSongDTO: CreateSongDTO) {
    return this.songsService.create(CreateSongDTO);
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return this.songsService.update(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.songsService.delete(id);
  }
}
