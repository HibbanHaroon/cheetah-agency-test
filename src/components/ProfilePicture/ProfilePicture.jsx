import React from "react";
import Image from "next/image";

function ProfilePicture() {
  return (
    <div className="flex flex-row">
      <Image
        className="w-24 h-24 object-cover object-top rounded-full border-2 border-white"
        src="/images/profile.jpg"
        width={96}
        height={96}
        loading="eager"
        alt="Profile Picture"
      />
    </div>
  );
}

export default ProfilePicture;
