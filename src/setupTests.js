const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock the request issued by the react app to get the client configuration parameters.
window.fetch = () => {
  return Promise.resolve(
    {
      ok: true,
      json: () => Promise.resolve({
        "authority": "https://theaterlaakback.azurewebsites.net",
        "client_id": "theaterlaak",
        "redirect_uri": "https://theaterlaakback.azurewebsites.net/authentication/login-callback",
        "post_logout_redirect_uri": "https://theaterlaakback.azurewebsites.net/authentication/logout-callback",
        "response_type": "id_token token",
        "scope": "theaterlaakAPI openid profile"
     })
    });
};
