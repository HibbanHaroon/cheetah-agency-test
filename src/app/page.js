import ProfilePicture from "@/components/ProfilePicture";
import Textfield from "@/components/Textfield";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center jusitfy-center">
      <ProfilePicture></ProfilePicture>
      <Textfield></Textfield>
    </main>
  );
}
