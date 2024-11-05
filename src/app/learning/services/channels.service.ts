import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {Channel} from "../model/channel.entity";

@Injectable({
  providedIn: 'root'
})
export class ChannelsService extends BaseService<Channel>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/channels';
  }
}
