import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex mt-6 mx-auto items-center justify-center">
        <SignUp />
    </div>
  );
}