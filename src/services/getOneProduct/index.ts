import axios from '../index';
import { OneProduct } from './getOneProductInterface';

export default class ShoesServices {
  async getOneService(id: string): Promise<OneProduct> {
    return axios.get(`/products/${id}`);
  }
}