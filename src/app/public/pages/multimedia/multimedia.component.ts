import { Component, OnInit } from '@angular/core';
import {ChannelsService} from "../../../learning/services/channels.service";
import {Channel} from "../../../learning/model/channel.entity";

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrl: './multimedia.component.css'
})

export class MultimediaComponent implements OnInit{
  channelData: Channel;
  channels: any[];

  constructor(private channelService: ChannelsService) {
    this.channelData = {} as Channel;
    this.channels = []
  }

  ngOnInit(): void {
    this.channelService.getAll().subscribe((response: any) => {
      this.channels = response;
    })
  }
}
