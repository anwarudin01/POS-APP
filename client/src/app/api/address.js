import { config } from '../../config';
import axios from 'axios';

export const getAddress = async () => {
  const { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

  return await axios.get(`${config.api_host}/api/delivery-addresses?limit=`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const getLocation = async (lokasi, kodeInduk) => {
  // return await axios.get(`https://regions-indonesia.herokuapp.com/api/${lokasi}?kode_induk=${kodeInduk}`);
  // return await axios.get('https://dev.farizdotid.com/api/daerahindonesia/provinsi');
  var link = `https://dev.farizdotid.com/api/daerahindonesia/${lokasi}${kodeInduk}`;
  console.log(link);
  return await axios.get(link);
  // return await axios.get('https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=3214');
  // return await axios.get('https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=3214010');
};
export const createAddress = async (data) => {
  const { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

  return await axios.post(`${config.api_host}/api/delivery-addresses`, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
