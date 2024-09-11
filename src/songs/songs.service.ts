import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local array
  private songs = [];

  findAll() {
    return this.songs;
  }

  findOne(id: string) {
    return this.songs[Number(id)];
  }

  create(v: any) {
    return this.songs.push(v);
  }

  update(id: string) {
    console.log(id);

    this.songs[Number(id)] = 'updated song';
  }

  delete(id: string) {
    this.songs.splice(Number(id), 1);
  }
}
