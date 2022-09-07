
export const apiOptions = (method: string, body?: string) => {
  return {
    method: method,
    headers: {
    'X-API-Key': '###',
    'Content-Type': 'application/json'
    },
    body: body
  }
};

export const API_URL = 'https://nbsxk3.deta.dev';
