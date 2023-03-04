const endpoint = "http://localhost:3456/api/users";

export async function checkEmaiil(email) {
  return await fetch(`${endpoint}/${email}    `);
}

export async function createUser({ fname, lname, email, password }) {
  const user = {
    fname,
    lname,
    email,
    password,
  };

  console.log(JSON.stringify(user));

  return await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}
