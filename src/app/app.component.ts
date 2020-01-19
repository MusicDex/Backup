import { Component } from "@angular/core";
import { ApiserviceService } from "./apiservice.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "skeleton";
  constructor(private apiService: ApiserviceService) {}
  searchterm;
  artistName;
  artistBio;
  onFrontPage = true;
  buttonclick() {
    this.onFrontPage = false;
    this.apiService.getArtistInfo(this.searchterm.toLowerCase()).subscribe(
      data => {
        this.artistName = data["artist"]["name"];
        let bio: string = data["artist"]["bio"]["summary"];
        //filtering out the href in the bio
        this.artistBio = bio.substring(0, bio.indexOf("<"));
      },
      err => {
        this.artistName = "We could not find any artists for the given search.";
      }
    );
  }
}
