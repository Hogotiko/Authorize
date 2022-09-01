export const setUser = () => {
  localStorage.setItem(
    "person",
    JSON.stringify({
      userName: "steve.jobs@example.com",
      password: "password",
    })
  );
};

export const setToken = () => {
  localStorage.setItem(
    "token",
    JSON.stringify({
      token: "cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ",
    })
  );
};

export const getUser = () => {
  const person = JSON.parse(localStorage.getItem("person") || "false");
  return person;
};

export const getToken = () => {
  const token = JSON.parse(localStorage.getItem("token") || "false");
  return token;
};

export const deleteUser = () => {
  localStorage.removeItem("person");
};

export const deleteToken = () => {
  localStorage.removeItem("token");
};
