///<reference path="profile/profile.ts"/>
import { Injectable } from '@angular/core';
import {Profile} from "./profile/profile";
import {PROFILES} from "./profile/profiles";
import {ReplaySubject} from "rxjs";

@Injectable()
export class ProfileService {
  public user_profile: ReplaySubject<Profile> = new ReplaySubject<Profile> (1);
  public curr_profile: ReplaySubject<Profile> = new ReplaySubject<Profile> (1);
  public profile_list: ReplaySubject<Profile[]> = new ReplaySubject<Profile[]>(1);
  private temp_profile: Profile;

  constructor(){
    this.setList();
    this.setUserProfile(11);
  }

  setList(): void{
    this.profile_list.next(PROFILES);
  }

  setUserProfile(id): void{
    this.temp_profile = PROFILES.find(profile => profile.id === id)
    this.user_profile.next(this.temp_profile);
  }

  setCurrProfile(id): void{
    this.profile_list.subscribe(data => {
      this.curr_profile.next(data.find(x => x.id == id));
    });
  }


  setActive(id){
    this.temp_profile.active_competition_id = id;
    this.user_profile.next(this.temp_profile);
  }

  isActive(id, callback: (data) => void) {
    return this.user_profile
      .subscribe(
        res => {
          callback(res.active_competition_id == id);
        },
        err => {
          console.error(err);
        }
      );
  }

  getActiveProfiles(id, callback: (data) => void) {
    return this.profile_list
      .subscribe(
        res => {
          callback(res.filter(profile => profile.active_competition_id == id));
        },
        err => {
          console.error(err);
        }
      );
  }

}
