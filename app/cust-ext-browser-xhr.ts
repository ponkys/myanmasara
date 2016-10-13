import {Injectable} from "@angular/core";
import {BrowserXhr} from "@angular/http";
@Injectable()
/**
 * Extending the BrowserXhr to support CORS
 */
export class CustExtBrowserXhr extends BrowserXhr {
  constructor() {
      super();
  }
  build(): any {
    let xhr = super.build();
    xhr.withCredentials = true;             // from backend
    return <any>(xhr);
  }
}