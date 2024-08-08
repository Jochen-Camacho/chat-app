import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import loginService from "../../services/user";
import { useRef } from "react";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async (data) => {
    const resp = await loginService.register({
      ...data,
    });
    console.log(resp);
  };

  return (
    <form
      className="border mx-auto max-w-[400px] w-full flex flex-col p-4 rounded-md gap-8 items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input {...register("username")} placeholder="Username" />
      <div className="flex gap-2 w-full">
        <Input {...register("firstName")} placeholder="First Name" />
        <Input {...register("lastName")} placeholder="Last Name" />
      </div>

      <Input {...register("password")} placeholder="Password" type="password" />
      <div className="w-full relative">
        <p
          className={`text-sm text-red-500 absolute -top-[50%] transition-all duration-150 ease-in-out ${
            errors.retypePassword ? "opacity-100" : " opacity-0"
          }`}
        >
          {errors.retypePassword?.message || "sd"}
        </p>

        <Input
          {...register("retypePassword", {
            validate: (value) =>
              value === password.current || "Password do not match.",
          })}
          placeholder="Retype-Password"
          type="password"
        />
      </div>

      <Button className="max-w-[250px] w-full" type="submit">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
