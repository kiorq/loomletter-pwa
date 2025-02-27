import { Waitlist } from "@clerk/nextjs";

const AuthView = () => {
  return (
    <div className="w-full flex-1 flex justify-center items-center flex-col">
      <div className="w-fit rounded-full bg-foreground/80 text-background text-sm font-medium px-3 py-1 mb-5">
        Coming Soon
      </div>
      <div className="flex flex-col items-center justify-center mb-10 w-fit">
        <img src="/brand.svg" alt="LoomLetter" className="h-10 mb-2" />
        <p className="font-medium text-foreground/80 text-center w-full">
          Newsletter Reader Web App.
        </p>
      </div>
      <Waitlist />
    </div>
  );
};

export default AuthView;
