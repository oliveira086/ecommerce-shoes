import axios from '../index';
import { payloadShoes } from './getAllProductsInterface';

export default class ShoesServices {
  async getAllServices(): Promise<payloadShoes> {
    return axios.get('/products');
  }
}