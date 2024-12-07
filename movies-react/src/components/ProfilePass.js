import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";

const UpdatePasswordSection = ( ) => {
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
            navigate("/ProfilePage");
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
      <div className="container">
        <h2
          className="text-lg font-medium text-gray-900"
          style={{ fontSize: "30px", padding: "15px" }}
        >
          Update Password
        </h2>

        <form style={{ padding: "60px" }} onSubmit={handleSubmit}>
          

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              style={{ fontSize: "24px" }}
            >
              New Password :
            </label>
            <input
              name="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleChange}
              className="form-control"
              autoComplete="new-password"
              style={{ borderBottom: '1px solid rgb(255, 255, 255)', fontSize: '18px' }}

            />
            {errors.newPassword && (
              <p className="mt-2 text-red-600">{errors.newPassword}</p>
            )}
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              style={{ fontSize: "24px" }}
            >
              Confirm Password :
            </label>
            <input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-control"
              autoComplete="new-password"
              style={{ borderBottom: '1px solid rgb(255, 255, 255)', fontSize: '18px' }}
            />
            {errors.confirmPassword && (
              <p className="mt-2 text-red-600">{errors.confirmPassword}</p>
            )}
          </div>

          <br />
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="btn btn-success"
              style={{ margin: "5px", fontSize: "12px" }}
            >
              Save
            </button>
            
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdatePasswordSection;
