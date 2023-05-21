import { SHORT_URL_API_URL } from "../constants/constants";
import { UrlObject } from "./interface";
import axios from 'axios';

export const checkNull = function (data: string | undefined, defaultValue?: string): string {
  return data ? data : defaultValue || '';
}

export const getShortUrl = async (urlData: UrlObject, setisLoading: React.Dispatch<React.SetStateAction<boolean>>, seturlData: React.Dispatch<React.SetStateAction<UrlObject>>, seterror: React.Dispatch<React.SetStateAction<string>>) => {
  setisLoading(true);
  
  const response = await axios.post(SHORT_URL_API_URL, {...urlData, authToken: localStorage.getItem('authToken')})
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });

  setisLoading(false);
  if (response.data) {
    seturlData(function setUrlData(urlData: UrlObject) {
      return { ...urlData, shortUrl: response.data.shortUrl }
    });
    seterror('');
  }
  else {
    seturlData(function setUrlData(urlData: UrlObject) {
      return { ...urlData, shortUrl: '' }
    });

    seterror(response.response.data.error);
  }
}