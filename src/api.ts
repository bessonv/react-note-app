const API_URL = 'https://nbsxk3.deta.dev';

export const fetchApiData = (method: string, action: string, body?: string) => {
  const options = {
    method: method,
    headers: {
    'X-API-Key': process.env.REACT_APP_API_KEY || '',
    'Content-Type': 'application/json'
    },
    body: body
  }
  return fetch(
    `${API_URL}/${action}`, options
  ).then(response => {
    if (response) {
      return response.json()
    } else {
      throw new Error('Empty response');
    }
  }).catch(err => console.error());
};
