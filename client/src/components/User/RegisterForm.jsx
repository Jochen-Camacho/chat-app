import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const RegisterForm = () => {
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
      <div className="flex gap-2 w-full">
        <Input {...register("firstname")} placeholder="First Name" />
        <Input {...register("lastname")} placeholder="Last Name" />
      </div>

      <Input {...register("password")} placeholder="Password" type="password" />
      <Input
        {...register("retype-password")}
        placeholder="Retype-Password"
        type="password"
      />
      <Button className="max-w-[250px] w-full" type="submit">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
