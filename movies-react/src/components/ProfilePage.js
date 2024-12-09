import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert

const ProfilePage = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [isLoading, setIsLoading] = useState(false);

  if (!localStorage.getItem('authToken')) {
    window.location.href = "../login";
  }

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
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your account will be permanently deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete my account!',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete('http://localhost:8000/api/profile', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            },
          });

          // Clear localStorage
          localStorage.removeItem('authToken');
          localStorage.removeItem('name');

          Swal.fire('Deleted!', 'Your account has been successfully deleted.', 'success').then(() => {
            window.location.href = '/';
          });
        } catch (error) {
          Swal.fire({
            title: 'Error!',
            text: 'Something went wrong while deleting your account.',
            icon: 'error',
            confirmButtonColor: '#3085d6',
          });
          console.error('Error deleting account:', error);
        }
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

    setIsLoading(true);
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
        setIsLoading(false);
      });
  };

  return (
    <div className="container" style={{ maxWidth: '800px', margin: 'auto', backgroundColor: '#1c2733', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '30px' }}>
      <h2 style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center', color: '#fff', marginBottom: '20px' }}>
        User Profile
      </h2>
      <form style={{ padding: '20px', backgroundColor: '#2d3b48', borderRadius: '10px' }} onSubmit={handleUpdateProfile}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={{ fontSize: '20px', color: '#fff' }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '18px',
              backgroundColor: '#2d3b48',
              border: '1px solid #fff',
              borderRadius: '5px',
              color: '#fff',
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{ fontSize: '20px', color: '#fff' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '18px',
              backgroundColor: '#2d3b48',
              border: '1px solid #fff',
              borderRadius: '5px',
              color: '#fff',
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button type="submit" className="btn btn-success" style={{ fontSize: '12px', padding: '12px 20px', color: '#fff', borderRadius: '5px', border: 'none' }}>
          {/* <i class="fa-solid fa-pen-to-square"></i>  */}
          Update Profile
          </button>

          <button
            onClick={handleDeleteAccount}
            type="button"
            className="btn btn-danger"
            style={{ fontSize: '12px', padding: '12px 20px', color: '#fff', borderRadius: '5px', border: 'none' }}
          >
            Delete Account
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <Link to="/change-password">
            <button
              type="button"
              className="btn btn-primary"
              style={{ fontSize: '12px', padding: '12px 20px', color: '#fff', borderRadius: '5px', border: 'none' }}
            >
              Change Password
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;