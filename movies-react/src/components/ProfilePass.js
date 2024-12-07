import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert

const UpdatePasswordSection = ({ errors, updatePassword, statusMessage }) => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the updatePassword function and show SweetAlert
    const success = await updatePassword(formData); // Assuming updatePassword returns a boolean or success status

    if (success) {
      Swal.fire({
        title: "Success!",
        text: "Your password has been updated successfully.",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/ProfilePage'); 
        }
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "There was an issue updating your password. Please try again.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <section>
      <div className="container " >
        <h2 className="text-lg font-medium text-gray-900" 
        style={{  fontSize:'30px', padding:'15px'}}
        >Update Password</h2>
     
        <form  onSubmit={handleSubmit}
          style={{ padding:'60px'}}
        
        >
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
          style={{  fontSize:'24px'}}

            >
              Current Password :
            </label>
            <input
              name="currentPassword"
              type="password"
              value={formData.currentPassword}
              onChange={handleChange}
              className="mt-1 block w-full"
              autoComplete="current-password"
              style={{  borderBottom: '1px solid rgb(255, 255, 255)' , fontSize:'18px'}}

            />
            {errors.currentPassword && (
              <p className="mt-2 text-red-600">{errors.currentPassword}</p>
            )}
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
          style={{  fontSize:'24px'}}

            >
              New Password :
            </label>
            <input
              name="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleChange}
              className="mt-1 block w-full"
              autoComplete="new-password"
              style={{  borderBottom: '1px solid rgb(255, 255, 255)' , fontSize:'18px'}}

            />
            {errors.newPassword && (
              <p className="mt-2 text-red-600">{errors.newPassword}</p>
            )}
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
          style={{  fontSize:'24px'}}

            >
              Confirm Password :
            </label>
            <input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full"
              autoComplete="new-password"
              style={{  borderBottom: '1px solid rgb(255, 255, 255)' , fontSize:'18px'}}

            />
            {errors.confirmPassword && (
              <p className="mt-2 text-red-600">{errors.confirmPassword}</p>
            )}
          </div>

<br/>
          <div className="flex items-center gap-4">
            <button type="submit" className="btn btn-success" style={{margin:' 5px' , fontSize:'12px'}}>
              Save
            </button>
            <Link to="/ProfilePage">
            <button type="button" className="btn btn-primary"style={{margin:' 5px' , fontSize:'12px'}}>
            Profile Page</button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

// Usage of components in the app
const App = () => {
  return (
    <div>
      <UpdatePasswordSection
        errors={{}}
        updatePassword={() => true} // Simulating the update password function
        statusMessage="Your password has been updated."
      />
    </div>
  );
};

export default App;
