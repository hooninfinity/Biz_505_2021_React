const fetchLogin = async (userid, password) => {
  const res = await fetch("http://localhost:8080/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    credentials: "include",
    body: JSON.stringify({
      userid,
      password,
    }),
  });

  if (res?.ok) {
    const resultUser = res.json();
    return resultUser;
  } else {
    return [];
  }
};

const fetchJoin = (joinData) => {
  const response = await fetch("http://localhost:8080/users/join", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(joinData),
  });

  if (response.ok) {
    const result = await response.json();
    // alert(JSON.stringify(json));
    return result;
  }
};

const fetchUser = () => {
  const response = await fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    credentials: "include",
  });
  return response.json();
};

const fetchLogout = () => {
  const res = await fetch("http://localhost:8080/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    credentials: "include",
  });
  return res.json();
};
