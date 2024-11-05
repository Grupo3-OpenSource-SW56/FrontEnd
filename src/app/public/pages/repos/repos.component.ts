import { Component, OnInit } from '@angular/core';
import {RepositoriesService} from "../../../learning/services/repositories.service";
import {Repository} from "../../../learning/model/repository.entity";

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})

export class ReposComponent implements OnInit {
  reposData: Repository;
  repos: any[];

  constructor(private repositoriesService: RepositoriesService) {
    this.reposData = {} as Repository;
    this.repos = []
  }

  ngOnInit(): void {
    this.repositoriesService.getAll().subscribe((response: any) => {
      this.repos = response;
    })
  }
}
