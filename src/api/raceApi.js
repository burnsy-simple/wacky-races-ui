import Api from './request';

const api = new Api();

class RaceApi {
  static getRaces() {
    return api.get('races');
  }
}

export default RaceApi;
