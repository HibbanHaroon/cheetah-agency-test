import ProfilePicture from "@/components/ProfilePicture";
import Textfield from "@/components/Textfield";
import TodoAccordion from "@/components/TodoAccordion";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-md flex-col items-center justify-center">
      <ProfilePicture></ProfilePicture>
      <Textfield></Textfield>
      <TodoAccordion></TodoAccordion>
    </main>
  );
}
