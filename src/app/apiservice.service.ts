import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiserviceService {
  constructor(private httpClient: HttpClient) {}

  public getArtistInfo(searchstring: string) {
    //searchstring = searchstring.split(" ").join("_");
    return this.httpClient.get(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" +
        searchstring +
        "&api_key=31f19e05aea69434ff83331932cab2e2&format=json"
    );
  }
  public getAlbums(searchstring: string) {
    //searchstring = searchstring.split(" ").join("_");
    return this.httpClient.get(
      "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" +
        searchstring +
        "&api_key=31f19e05aea69434ff83331932cab2e2&format=json"
    );
  }
}
