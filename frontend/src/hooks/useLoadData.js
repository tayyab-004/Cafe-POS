import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../https";
import { setUser, removeUser } from "../redux/slices/userSlice";

const useLoadData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getUserData();
        const { _id, name, email, phone, role } = data.data;
        dispatch(setUser({ _id, name, email, phone, role }));
      } catch (error) {
        dispatch(removeUser());
        navigate("/auth");
        console.log(error);
      }
    };

    fetchUser();
  }, [dispatch, navigate]);
};

export default useLoadData;
