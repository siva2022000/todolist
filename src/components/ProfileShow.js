import ProfileImage from "../images/ProfileImage.jpg";
function ProfileShow() {
  return (
    <div>
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <img
              src={ProfileImage}
              alt="profile pic"
              height="100%"
              width="78"
            />
          </div>
          <div className="level-item">
            <div>Good Morning, Mohan</div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ProfileShow;
