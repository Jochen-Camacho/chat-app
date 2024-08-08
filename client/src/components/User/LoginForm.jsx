import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="border mx-auto max-w-[400px] w-full flex flex-col p-4 rounded-md gap-6 items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input {...register("username")} placeholder="Username" />
      <Input {...register("password")} placeholder="Password" type="password" />
      <Button className="max-w-[250px] w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
