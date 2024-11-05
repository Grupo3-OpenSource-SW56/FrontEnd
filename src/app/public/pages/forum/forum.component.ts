import { Component, OnInit } from '@angular/core';
import {ForumsService} from "../../../learning/services/forums.service";
import {Forum} from "../../../learning/model/forum.entity";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css'
})

export class ForumComponent implements OnInit {
  forumData: Forum;
  forums: any[];

  constructor(private forumsService: ForumsService) {
    this.forumData = {} as Forum;
    this.forums = []
  }

  ngOnInit(): void {
    this.forumsService.getAll().subscribe((response: any) => {
      this.forums = response;
    })
  }
}
