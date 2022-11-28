import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
        console.log('inside useTOken',email)
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("token", data.accessToken);
            setToken(data.accessToken);
            console.log(data);
          }
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
