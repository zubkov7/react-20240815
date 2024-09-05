import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRequestStatusById } from "../ui/request/request";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const useRequest = (thunk, ...params) => {
  const [request, setRequest] = useState();

  const requestStatus = useSelector((state) => {
    return selectRequestStatusById(state, request?.requestId);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const request = dispatch(thunk(...params));
    setRequest(request);

    return () => {
      request.abort();
      setRequest(null);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, ...params, thunk]);

  return requestStatus;
};
