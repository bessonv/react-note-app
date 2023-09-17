import { RestMethod } from "../enums";
const API_URL = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:4200/api'
  : 'https://notesproject-1-h1299757.deta.app/api';

const API = {
  get: {
    method: RestMethod.GET,
    url: `${API_URL}/notes`
  },
  add: {
    method: RestMethod.POST,
    url: `${API_URL}/notes`
  },
  edit: {
    method: RestMethod.PUT,
    url: (key: string) => `${API_URL}/notes/${key}`
  },
  delete: {
    method: RestMethod.DELETE,
    url: (key: string) => `${API_URL}/notes/${key}`
  },
  search: {
    method: RestMethod.GET,
    url: (query: string) => `${API_URL}/notes/search/${query}`
  }
};

const fetchApiData = (method: string, url: string, body?: string) => {
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

export const apiGetNotes = () => {
  return fetchApiData(API.get.method, API.get.url);
}

export const apiAddNote = (body: NewData) => {
  return fetchApiData(API.add.method, API.add.url, JSON.stringify(body));
}

export const apiEditNote = (body: NewData, key: string) => {
  return fetchApiData(API.edit.method, API.edit.url(key), JSON.stringify(body));
}

export const apiDeleteNote = (key: string) => {
  return fetchApiData(API.delete.method, API.delete.url(key));
}

export const apiSearchNotes = (query: string) => {
  return fetchApiData(API.search.method, API.search.url(query));
}
