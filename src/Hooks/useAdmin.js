import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://backend-alpha-six.vercel.app/user/admin?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          console.log(data.isAdmin)
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
