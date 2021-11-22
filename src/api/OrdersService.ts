import axios from 'axios';
import { orderType, responceType } from '../types';

const authRequestTokenURL = "http://api.pixlpark.com/oauth/requesttoken";
const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;

const sha1 = async (text: string) => {
  const msgUint8 = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-1', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

const auth = async () => {
  const responceRequestToken = await axios.get(authRequestTokenURL);
  const requestToken = responceRequestToken?.data?.RequestToken;
  const password = await sha1(requestToken + privateKey);
  
  const authURL = `http://api.pixlpark.com/oauth/accesstoken?oauth_token=${requestToken}&grant_type=api&username=${publicKey}&password=${password}`; 
  const responceAccessToken = await axios.get(authURL);
  const accessToken = responceAccessToken?.data?.AccessToken;
  
  return accessToken;
}

export const fetchOrders = async () => {
  const authToken = await auth();
  const ordersURL = `http://api.pixlpark.com/orders?oauth_token=${authToken}`;
  const responce = await axios.get<responceType>(ordersURL);
  return responce?.data?.Result;
}