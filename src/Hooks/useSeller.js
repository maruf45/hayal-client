import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/user/seller?email=${email}`)
        .then((res) => res.json())
        .then((data) => setIsSeller(data));
    }
  }, [email]);
  return [isSeller];
};
export default useSeller;
