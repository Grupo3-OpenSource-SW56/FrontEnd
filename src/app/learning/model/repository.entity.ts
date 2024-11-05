export class Repository {
  id: number;
  name: string;
  description: string;
  lastUpdated: string;

  constructor() {
    this.id = 0;
    this.name = "";
    this.description = "";
    this.lastUpdated = "";
  }
}

export class RepositoryEntity {
}
