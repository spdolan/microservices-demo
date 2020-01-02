// got is a request library, similar to axios
import got from "got"
const LISTINGS_SERVICE_URI = "http://listings-service:7100"

export default class ListingsService {
  static async fetchAllListings(){
    const body = await got.get(`${LISTINGS_SERVICE_URI}/listings`).json();
    return body;
  }
}