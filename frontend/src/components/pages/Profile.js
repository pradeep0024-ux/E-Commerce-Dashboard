import {useParams} from 'react-router-dom'
import ProfilePhoto from '../../assets/profile/profileimg.jpg'
function Profile() {

  const auth = localStorage.getItem('user');
  // let details  = {JSON.parse(auth).name}
  console.log("details",auth)
  return (
    <div className="card-container">
      <div className="profile-card">

        <div className="profile">
        <img src={ProfilePhoto} alt="Photo" />
        </div>
        
        <div className="details">
        <h6>Name: {JSON.parse(auth).name}</h6>
        <h6>Email: {JSON.parse(auth).email}</h6>
        <h6>Mobile: 8840638766</h6>
       </div>

      </div>
    </div>
  );
}
export default Profile;
