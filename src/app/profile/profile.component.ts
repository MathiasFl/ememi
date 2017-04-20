import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ProfileService} from "../profile.service";
import {Profile} from "./profile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile: Profile;
  constructor(private activatedRoute: ActivatedRoute, private ps: ProfileService) {
    this.ps.curr_profile.subscribe(data => {
      this.profile = data;
    });
  }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      let userId = params['id'];
      this.ps.setCurrProfile(userId);
    });

  }

}
