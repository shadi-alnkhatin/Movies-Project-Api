import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { CiSaveDown2 } from "react-icons/ci";
import { useNavigate ,Link} from "react-router-dom";

const ProfilePass = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  if (!localStorage.getItem('authToken')) {
    window.location.href = "../login";
  }

  const [errors, setErrors] = useState({});
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

    try {
      const response = await axios.put(
        `http://localhost:8000/api/profile`, // Replace with your API endpoint
        {
          password: formData.newPassword,
          password_confirmation: formData.confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Use token for authenticated requests
          },
        }
      );

      if (response.data.success) {
        Swal.fire({
          title: "Success!",
          text: "Your password has been updated successfully.",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/Profile");
          }
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: response.data.message || "Failed to update password.",
          icon: "error",
        });
      }
    } catch (error) {
      // Handle validation errors or other errors
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
        });
      }
    }
  };

  return (
    <section>
      <div className="container" style={{ maxWidth: '800px', margin: 'auto', backgroundColor: '#1c2733', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '30px' }}>
      <h2 style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center', color: '#fff', marginBottom: '20px' }}>

          Update Password
        </h2>

        <form onSubmit={handleSubmit} style={{ padding: '20px', backgroundColor: '#2d3b48', borderRadius: '10px' }}>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label"style={{ fontSize: '20px', color: '#fff' }}>
              New Password:
            </label>
            <input
              name="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleChange}
              className="form-control"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '18px',
                backgroundColor: '#2d3b48',
                border: '1px solid #fff',
                borderRadius: '5px',
                color: '#fff',
              }}
            />
            {errors.newPassword && (
              <p className="text-red-600" style={{ fontSize: '14px' }}>{errors.newPassword}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label" style={{ fontSize: '20px', color: '#fff' }}>
              Confirm Password:
            </label>
            <input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-control"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '18px',
                backgroundColor: '#2d3b48',
                border: '1px solid #fff',
                borderRadius: '5px',
                color: '#fff',
              }}
            />
            {errors.confirmPassword && (
              <p className="text-red-600" style={{ fontSize: '14px' }}>{errors.confirmPassword}</p>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
    <Link to="/profile">
      <button
                   className="btn btn-primary"

        style={{
          fontSize: '12px',
          padding: '10px 20px',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        <i className="fas fa-arrow-left"></i>
        Back to profile
      </button>
    </Link>
  </div>

  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <button
      type="submit"
      className="btn btn-success"
      style={{
        fontSize: '12px',
        padding: '10px 20px',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      {/* <CiSaveDown2 style={{ fontSize: '20px', marginRight: '8px' }} /> */}
      Save Changes
    </button>
  </div>
</div>

        </form>
      </div>
    </section>
  );
};

export default ProfilePass;
