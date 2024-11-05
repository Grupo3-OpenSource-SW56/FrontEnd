import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {Repository} from "../model/repository.entity";

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService extends BaseService<Repository>{
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/repositories'
  }
}
