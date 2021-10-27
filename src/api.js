import mocks from './mock';

const API_DELAY = 2000;

class Api {
  constructor() {
    this.data = mocks;
  }

  getBalance() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      }, API_DELAY);
    });
  }
}

export default new Api();
