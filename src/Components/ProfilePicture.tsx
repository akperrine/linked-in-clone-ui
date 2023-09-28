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
            : "https://1.bp.blogspot.com/-pzkUACogq0E/X5OcHr5ZnSI/AAAAAAABb5Q/xb-j2PQXgu03_vypUL1XNOYv4bhpWEFgQCNcBGAsYHQ/s788/bird_mameruriha_inko_blue.png"
        }
        alt="pic"
      />
    </div>
  );
}
export default ProfilePicture;
