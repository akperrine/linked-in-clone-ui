import { FaUser } from "react-icons/fa";

type ProfilePictureProps = {
  imageUrl: string | null;
};

function ProfilePicture({ imageUrl }: ProfilePictureProps) {
  return (
    <div className="circle-10 overflow-hidden border-2px border-white">
      <img
        style={{
          objectFit: "cover",
        }}
        className="width-full height-full"
        src={
          imageUrl
            ? imageUrl
            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          // "https://1.bp.blogspot.com/-pzkUACogq0E/X5OcHr5ZnSI/AAAAAAABb5Q/xb-j2PQXgu03_vypUL1XNOYv4bhpWEFgQCNcBGAsYHQ/s788/bird_mameruriha_inko_blue.png"
        }
        alt="pic"
      />
    </div>
  );
}
export default ProfilePicture;
