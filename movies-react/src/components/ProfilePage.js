import React from "react";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert

const ProfilePage = () => {
  const handleDeleteAccount = () => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your account will be permanently deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete my account!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // You can add the logic for deleting the account, e.g., call an API
        Swal.fire('Deleted!', 'Your account has been successfully deleted.', 'success');
      }
    });
  };

  const handleUpdateProfile = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Logic for updating the profile can go here, for example, sending data to an API

    // Show SweetAlert success message
    Swal.fire({
      title: 'Data Updated',
      text: 'Your data has been successfully updated!',
      icon: 'success',
      confirmButtonColor: '#3085d6'
    });
    
  };

  return (
    <div className="container">
      <h2 style={{ fontSize: '30px', padding: '15px' }}>User Profile </h2>
      <form style={{ padding: '60px' }} onSubmit={handleUpdateProfile}>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label" style={{ fontSize: '24px' }}>Name :</label>
          <input
            type="text"
            id="Name"
            style={{ borderBottom: '1px solid rgb(255, 255, 255)', fontSize: '18px' }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{ fontSize: '24px' }}>Email :</label>
          <input
            type="email"
            id="email"
            style={{ borderBottom: '1px solid rgb(255, 255, 255)', fontSize: '18px' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <Link to="/ProfilePass">
            <button type="button" className="btn btn-primary" style={{ margin: '5px', fontSize: '12px' }}>
              Change Password
            </button>
          </Link>
          <button type="submit" className="btn btn-success" style={{ margin: '5px', fontSize: '12px' }}>
            Update Profile
          </button>
        </div>

        <button onClick={handleDeleteAccount} type="button" className="btn btn-danger" style={{ margin: '5px', fontSize: '12px' }}>
          Delete Account
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
