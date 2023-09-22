import { Card } from "@trussworks/react-uswds";

function ProfileCard() {
  return (
    <Card className="margin-2 margin-top-0">
      <div>
        <img alt="prof"></img>
        <h3>First Last</h3>
        <p>Software Engineer | Java | Javascript | React | Spring</p>
      </div>
      <p>
        Connections <span>34</span>
      </p>
    </Card>
  );
}

export default ProfileCard;
