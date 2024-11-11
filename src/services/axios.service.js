import axios from 'axios';

export const fetcher = (...args) => axios.get(...args);
export const fetchPost = (url, { arg }) => {
  console.log({ arg });
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ ...arg }),
    headers: {
      'Content-Type': 'application/json', // Asegúrate de incluir este encabezado
    },
  }).then((resp) => resp.json());
};

export const addUserDB = async (data) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/api/users/create',
      data,
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
