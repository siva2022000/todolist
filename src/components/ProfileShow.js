import ProfileImage from "../images/ProfileImage.jpg";
function ProfileShow() {
  return (
    <div>
      <img src={ProfileImage} alt="profile pic" height="78" width="78" />
      <div>Good Morning, Mohan</div>
    </div>
  );
}

export default ProfileShow;
