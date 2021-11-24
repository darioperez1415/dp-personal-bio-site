import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getMessage = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/message.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createMessage = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/message.json`, obj)
    .then((response) => {
      axios
        .patch(`${baseURL}/message/${response.data.name}.json`, {
          firebaseKey: response.data.name,
        })
        .then(resolve);
    })
    .catch(reject);
});

const deleteMessage = (messageObj) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/message/${messageObj.firebaseKey}.json`)
    .then(() => getMessage(messageObj.uid).then(resolve))
    .catch(reject);
});

export {
  getMessage,
  createMessage,
  deleteMessage,
};
