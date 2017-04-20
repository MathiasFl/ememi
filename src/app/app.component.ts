import { Component, OnInit} from '@angular/core';
import {ProfileService} from "./profile.service";
import {Profile} from "./profile/profile";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  profile:Profile;

  constructor(private ps: ProfileService){}

  ngOnInit(): void {
    this.ps.user_profile.subscribe(profile => {
        this.profile = profile;
    })
  }
}
