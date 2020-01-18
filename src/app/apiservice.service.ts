import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiserviceService {
  constructor(private httpClient: HttpClient) {}

  public getSummary(searchstring: string) {
    searchstring = searchstring.split(" ").join("_");
    return this.httpClient.get(
      "https://en.wikipedia.org/api/rest_v1/page/summary/" + searchstring
    );
  }
}
