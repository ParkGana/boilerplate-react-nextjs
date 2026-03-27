const BASE_URL = '';

type ParamsType = Record<string, string | number | boolean>;

const request = async (url: string, options: RequestInit & { params?: ParamsType } = {}) => {
  const { params, headers, ...rest } = options;

  const query = params
    ? `?${new URLSearchParams(Object.entries(params).map(([k, v]) => [k, String(v)])).toString()}`
    : '';

  const res = await fetch(`${BASE_URL}${url}${query}`, {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });

  if (!res.ok) throw new Error(`API Error ${res.status}`);

  return res.json();
};

const api = {
  get: (url: string, params?: ParamsType, headers?: HeadersInit) => request(url, { method: 'GET', params, headers }),

  post: (url: string, data?: any, headers?: HeadersInit) =>
    request(url, { method: 'POST', body: JSON.stringify(data), headers }),

  patch: (url: string, data?: any, headers?: HeadersInit) =>
    request(url, { method: 'PATCH', body: JSON.stringify(data), headers }),

  delete: (url: string, headers?: HeadersInit) => request(url, { method: 'DELETE', headers }),
};

export default api;
