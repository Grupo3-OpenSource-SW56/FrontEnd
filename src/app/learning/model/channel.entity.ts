export class Channel {
  id: number;
  category: string;
  author: string;
  files: number;

  constructor() {
    this.id = 0;
    this.category = "";
    this.author = "";
    this.files = 0;
  }
}

export class ChannelEntity {
}
