export const setUser = () => {
  localStorage.setItem(
    "person",
    JSON.stringify({
      userName: "steve.jobs@example.com",
      password: "password",
    })
  );
};

export const getUser = () => {
  const person = JSON.parse(localStorage.getItem("person") || "false");
  return person;
};

export const deleteUser = () => {
  localStorage.removeItem("person");
};
