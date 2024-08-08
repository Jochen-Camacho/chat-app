const LoginWrapper = ({ children, title }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center -mt-20">
        <h1 className="text-5xl font-bold p-6">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default LoginWrapper;
