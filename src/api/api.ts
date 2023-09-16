import { RestMethod } from "../enums";
const API_URL = 'https://notesproject-1-h1299757.deta.app/api';

export const API = {
  getList: {
    method: RestMethod.GET,
    url: `${API_URL}/notes`
  },
  add: {
    method: RestMethod.POST,
    url: `${API_URL}/notes`
  },
  edit: {
    method: RestMethod.PUT,
    url: (id: number) => `${API_URL}/notes/${id}`
  },
  delete: {
    method: RestMethod.DELETE,
    url: (id: number) => `${API_URL}/notes/${id}`
  },
  search: {
    method: RestMethod.GET,
    url: (query: string) => `${API_URL}/notes/search/${query}`
  }
};

export const fetchApiData = (method: string, url: string, body?: string) => {
  const options = {
    method: method,
    headers: {
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
