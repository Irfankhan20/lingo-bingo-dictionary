import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";

const UpdateProfile = () => {
  const { user, setUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUserProfile({
      displayName: name,
      photoURL: photo,
    }).then(() => {
      setUser((prevUser) => {
        return { ...prevUser, displayName: name, photoURL: photo };
      });
    });

    toast("Profile Updated");

    setTimeout(() => {
      navigate("/profile");
    }, 2000);
  };

  return (
    <div className="flex flex-col mt-10 md:mt-16 justify-center items-center py-6">
      <form onSubmit={handleSubmit}>
        <div className="my-4 px-4 md:px-0">
          <label className="font-medium text-lg">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={user.displayName}
            placeholder="Enter Your Name"
            className="input input-bordered input-info w-full"
          />
        </div>
        <div className="my-4 px-4 md:px-0">
          <label className="font-medium text-lg">Photo URL</label>
          <input
            type="text"
            name="photo"
            defaultValue={user.photoURL}
            placeholder="Enter Your Photo URL"
            className="input input-bordered input-info w-full"
          />
        </div>
        <div className="px-4 md:px-0">
          <button
            type="submit"
            className="btn bg-primary rounded-md w-full text-white py-2 hover:bg-button "
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
