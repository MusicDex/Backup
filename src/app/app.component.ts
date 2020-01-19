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
  //information about the ARTIST
  artistName;
  artistBio;
  //information about an ALBUM
  albumList;
  albumName;
  albumBio;
  albumCoverArt;
  //booleans
  onFrontPage: boolean = true;
  showAlbums: boolean = true;
  buttonclick() {
    this.artistName = this.searchterm;
    this.onFrontPage = false;
    //get the artist's name and bio
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
    //get a list of all the artist's albums
    this.apiService.getAlbums(this.searchterm.toLowerCase()).subscribe(
      data => {
        this.albumList = data["topalbums"]["album"];
        console.log("hello world");
      },
      err => {
        this.artistName = "We could not find any artists for the given search.";
      }
    );
  }
  hideAlbums() {
    this.showAlbums = this.showAlbums ? false : true;
  }
}
