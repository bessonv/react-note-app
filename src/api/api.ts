import { RestMethod } from "../enums";
const API_URL = 'https://nbsxk3.deta.dev';

export const API = {
  getList: {
    method: RestMethod.GET,
    url: `${API_URL}/todos`
  },
  add: {
    method: RestMethod.POST,
    url: `${API_URL}/todos`
  },
  edit: {
    method: RestMethod.PUT,
    url: (id: number) => `${API_URL}/todos/${id}`
  },
  delete: {
    method: RestMethod.DELETE,
    url: (id: number) => `${API_URL}/todos/${id}`
  },
  search: {
    method: RestMethod.GET,
    url: (query: string) => `${API_URL}/search-by-str/${query}`
  }
};

export const fetchApiData = (method: string, url: string, body?: string) => {
  const options = {
    method: method,
    headers: {
    'X-API-Key': process.env.REACT_APP_API_KEY || '',
    'Content-Type': 'application/json'
    },
    body: body
  }
  return fetch(
    url, options
  ).then(response => {
    if (response) {
      return response.json()
    } else {
      throw new Error('Empty response');
    }
  }).catch(err => console.error(err));
};
