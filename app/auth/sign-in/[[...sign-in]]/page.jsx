import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <section className="flex mt-6 mx-auto items-center justify-center">
        <SignIn />
    </section>
  );
}