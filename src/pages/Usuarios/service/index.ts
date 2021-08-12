import { IUsuario } from './../../../shared/types/Usuario';
import axios from 'axios';

import { API } from '../../../services/api';

const CancelToken = axios.CancelToken;

export const buscarUsuarios = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const source = CancelToken.source();
      let response: any = null;
      setTimeout(() => {
        if (response == null) {
          source.cancel();
        }
      }, 15000);
      response = await API.get('/ecommerce/v1/usuarios/', { cancelToken: source.token })
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

export const criarUsuario = async (user: IUsuario) => {
  return new Promise(async (resolve, reject) => {
    try {
      const source = CancelToken.source();
      let response: any = null;
      setTimeout(() => {
        if (response == null) {
          source.cancel();
        }
      }, 15000);
      response = await API.post('/ecommerce/v1/usuarios', user, { cancelToken: source.token })
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

export const atualizarUsuario = async (user: IUsuario) => {
  return new Promise(async (resolve, reject) => {
    try {
      const source = CancelToken.source();
      let response: any = null;
      setTimeout(() => {
        if (response == null) {
          source.cancel();
        }
      }, 15000);
      response = await API.patch('/ecommerce/v1/usuarios', user, { cancelToken: source.token })
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