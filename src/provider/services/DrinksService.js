
import APIConfig from './APIConfig';

export default class DrinksService {
  static getDrinks() {
    return new Promise(async (resolve, reject) => {
      try {
        const endpoint = APIConfig.getDrinks;
        const response = await APIConfig.APIConnector.get(endpoint, {});

        if (response.code) {
          reject(response);
        } else {
          resolve(response);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}
