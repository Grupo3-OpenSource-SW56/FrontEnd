export class Forum {
  id: number;
  title: string;
  description: string;
  threads: number;
  posts: number;
  image: string;
  lastPoster: string;
  lastPostTime: string;

  constructor() {
    this.id = 0;
    this.title = "";
    this.description = "";
    this.threads = 0;
    this.posts = 0;
    this.image = "";
    this.lastPoster = "";
    this.lastPostTime = "";
  }
}
