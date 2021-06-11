const saveToken = (data) => {
  localStorage.setItem('token', data.token);
};

const parseToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(atob(base64));
  }

  return null;
};

export { saveToken, parseToken };
