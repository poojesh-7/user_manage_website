import { useState, useCallback } from "react";

const Httphook = (apiFn) => {
  const [httpObj, setHttpObj] = useState({
    status: "idle",
    data: null,
    error: null,
  });
  const sendReq = useCallback(
    async (userObj, param) => {
      setHttpObj({ status: "loading", data: null, error: null });
      try {
        const resData = await apiFn(userObj, param);
        setHttpObj({
          status: "Completed",
          data: resData,
          error: null,
        });
        return resData;
      } catch (e) {
        setHttpObj({
          status: "Completed",
          data: null,
          error: { status: e.status, message: e.message },
        });
      }
    },
    [apiFn]
  );
  return [sendReq, httpObj];
};

export default Httphook;
