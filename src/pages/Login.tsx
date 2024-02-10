import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

type TFormData = {
  userId: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0002",
      password: "admin123",
    },
  });

  const [login, { error }] = useLoginMutation();

  if (error) {
    return (
      <p className="" style={{ color: "red", font: "20px" }}>
        SOmething went wrong please try again!!
      </p>
    );
  }

  const onSubmit = async (data: TFormData) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);

    dispatch(setUser({ user: user, token: res.data.accessToken }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register("userId")} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button className="" htmlType="submit">
        Login
      </Button>
    </form>
  );
};

export default Login;
