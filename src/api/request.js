export function serialize(data) {
  const params = [];
  for (let param in data) {
    if (data.hasOwnProperty(param)) {
      const value = data[param];
      if (value != null) {
        params.push(encodeURIComponent(param) + '=' + encodeURIComponent(value));
      }
    }
  }
  return params.join('&');
}

export function request(method, uri, data, ensureToken = true) {
  let promise = new Promise(function(resolve, reject) {
    const client = new XMLHttpRequest();
    let body;

    if (data) {
      if (method.toUpperCase() === 'GET') {
        const queryString = serialize(data);
        if (queryString) {
          uri += `?${queryString}`;
        }
      } else {
        body = JSON.stringify(data);
      }
    }

    client.open(method, uri);

    client.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    client.send(body);

    client.onload = function() {
      if (this.status == 204) {
        resolve();
      } else if (this.status >= 200 && this.status < 300) {
        resolve(JSON.parse(this.response));
      } else {
        try {
          let error = JSON.parse(this.response);
          error = Object.assign({}, error, {status: this.status});
          reject(error);
        } catch (ex) {
          reject({error: this.statusText, code: this.status});
        }
      }
    };

    client.onerror = function() {
      reject({error: this.statusText, code: this.status});
    };
  });

  return promise;
}

export function get(...args) {
  return request('GET', ...args);
}

export function post(...args) {
  return request('POST', ...args);
}

export function del(...args) {
  return request('DELETE', ...args);
}

export function put(...args) {
  return request('PUT', ...args);
}

export function patch(...args) {
  return request('PATCH', ...args);
}


class Api {
  constructor() {
    this.uri = 'http://localhost:8080'; // TODO: Should be configuration
  }

  buildUri(path) {
    return `${this.uri}/${path}`;
  }

  buildRequest(method, path, data) {
    const uri = this.buildUri(path);
    return request(method, uri, data);
  }

  get(...args) {
    return this.buildRequest('GET', ...args);
  }

  post(...args) {
    return this.buildRequest('POST', ...args);
  }

  delete(...args) {
    return this.buildRequest('DELETE', ...args);
  }

  put(...args) {
    return this.buildRequest('PUT', ...args);
  }

  patch(...args) {
    return this.buildRequest('PATCH', ...args);
  }
}

export default Api;
