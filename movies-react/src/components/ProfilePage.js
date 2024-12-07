import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert

const ProfilePage = () => {
  // Fetch user data from API or local state based on your application setup
  const [email,setEmail]=useState();
  const [name,setName]=useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });
        setName(response.data.data.name);
        setEmail(response.data.data.email);
      } catch (error) {
        console.error('Error fetching profile:', error);
        
      }
    };

    fetchProfile();
  }, []); 
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
    event.preventDefault();

    if (!name || !email) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter both Name and Email!',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    setIsLoading(true); // Set loading state
    axios
      .put(
        'http://localhost:8000/api/profile',
        { name, email },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        }
      )
      .then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Your data has been successfully updated!',
          icon: 'success',
          confirmButtonColor: '#3085d6',
        });
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong while updating your data.',
          icon: 'error',
          confirmButtonColor: '#3085d6',
        });
        console.error('Error updating profile:', error);
      })
      .finally(() => {
        setIsLoading(false); // Reset loading state
      });
  };

  return (
    <div className="container">
      <h2 style={{ fontSize: '30px', padding: '15px' }}>User Profile</h2>
      <form style={{ padding: '60px' }} onSubmit={handleUpdateProfile}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={{ fontSize: '24px' }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            style={{ borderBottom: '1px solid rgb(255, 255, 255)', fontSize: '18px' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{ fontSize: '24px' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            style={{ borderBottom: '1px solid rgb(255, 255, 255)', fontSize: '18px' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <button
            type="submit"
            className="btn btn-success"
            style={{ margin: '5px', fontSize: '12px' }}
          >
            Update The Info
          </button>

        <div style={{ display: 'flex', gap: '10px' }}>
          <Link to="/ProfilePass">
            <button
              type="button"
              className="btn btn-primary"
              style={{ margin: '5px', fontSize: '12px' }}
            >
              Change Password
            </button>
          </Link>
       
        </div>

        <button
          onClick={handleDeleteAccount}
          type="button"
          className="btn btn-danger"
          style={{ margin: '5px', fontSize: '12px' }}
        >
          Delete Account
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
