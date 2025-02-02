import { useEffect } from "react";
import { logout } from "./auth";
import { connectWithSocketServer } from "../../realtimeCommunication/socketConnection";

const useUserDetails = (setUserDetails, setIsLoading) => {
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      logout();
    } else {
      const parsedUserDetails = JSON.parse(userDetails);
      setUserDetails(parsedUserDetails);
      connectWithSocketServer(parsedUserDetails);
      setIsLoading(false);
    }
  }, [setUserDetails, setIsLoading]);
};

export default useUserDetails;
