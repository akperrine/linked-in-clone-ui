import { FaUser } from "react-icons/fa";

type ProfilePictureProps = {
  imageUrl: string | null;
};

function ProfilePicture({ imageUrl }: ProfilePictureProps) {
  return (
    <div className="circle-10 overflow-hidden border-2px border-white">
      {imageUrl === null ? (
        <img
          style={{
            objectFit: "cover",
          }}
          className="width-full height-full"
          src={imageUrl}
          alt="pic"
        />
      ) : (
        <FaUser />
        // <div></div>
      )}
    </div>
  );
}

export default ProfilePicture;
