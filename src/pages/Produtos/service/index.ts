import axios from 'axios';

import { API } from '../../../services/api';
import { IProduto } from '../../../shared/types/Produto';
import { getUserToStorage } from '../../../utils';

const CancelToken = axios.CancelToken;

export const buscarProdutos = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const source = CancelToken.source();
      let response: any = null;
      setTimeout(() => {
        if (response == null) {
          source.cancel();
        }
      }, 15000);
      response = await API.get('/ecommerce/v1/produtos/', { cancelToken: source.token })
        .then(async dados => {
          resolve(dados.data);
        })
        .catch(err => {
          reject(err);
        });
    } catch (error) {
      reject(error);
    }
  })
}

export const criarProduto = async (produto: IProduto) => {
  return new Promise(async (resolve, reject) => {
    try {
      const source = CancelToken.source();
      let response: any = null;
      setTimeout(() => {
        if (response == null) {
          source.cancel();
        }
      }, 15000);

      let user = getUserToStorage();
      console.log(user)
      response = await API.post('/ecommerce/v1/produtos', produto, { cancelToken: source.token })
        .then(async criado => {
          resolve(true);
        })
        .catch(err => {
          reject(err);
        });
    } catch (error) {
      reject(error);
    }
  })
}

export const atualizarProduto = async (produto: IProduto) => {
  return new Promise(async (resolve, reject) => {
    try {
      const source = CancelToken.source();
      let response: any = null;
      setTimeout(() => {
        if (response == null) {
          source.cancel();
        }
      }, 15000);
      response = await API.patch('/ecommerce/v1/produtos', produto, { cancelToken: source.token })
        .then(async atualizado => {
          resolve(true);
        })
        .catch(err => {
          reject(err);
        });
    } catch (error) {
      reject(error);
    }
  })
}