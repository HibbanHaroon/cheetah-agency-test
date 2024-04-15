import ProfilePicture from "@/components/ProfilePicture";
import Textfield from "@/components/Textfield";
import TodoAccordion from "@/components/TodoAccordion";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-md w-full p-4 flex-col items-center justify-center">
      <div>
        <Toaster />
      </div>
      <ProfilePicture></ProfilePicture>
      <Textfield></Textfield>
      <TodoAccordion></TodoAccordion>
    </main>
  );
}
