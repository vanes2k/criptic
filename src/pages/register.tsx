import React from 'react';
import { useState } from 'react';
import NextAuth from "next-auth"
import type { NextPageWithLayout } from '@/types';
import  './dark.module.css';
import './style.module.css';
import { useRouter } from 'next/router';

const RegisterPage: NextPageWithLayout = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
      name: '',
      surname: '',
      email: '',
      password: '',
    });

    const [error, setError] = useState('');

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      try {
        const response = await fetch('http://62.113.117.150:8000/users/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          router.push('/login');
        } else {
          const data = await response.json();
          setError(data.message);
        }
      } catch (error) {
        console.error('An error occurred while registering:', error);
        setError('An error occurred while registering');
      }
    };
  
    const handleChange = (event: { target: { name: any; value: any; }; }) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };







return(


<>
  
  
  <div className="auth-wrapper">
    <div className="auth-content subscribe">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4 col-lg-6 d-none d-md-flex d-lg-flex theme-bg align-items-center justify-content-center">
           
          </div>
          <div className="col-md-8 col-lg-6">
            <div className="card-body text-center">
              <div className="row justify-content-center">
                <div className="col-sm-10">
                  <h3 className="mb-4">Sign up</h3>
                  {/* {error && <div>{error}</div>} */}
                  <form  onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <input
                  id="name"       type="text"
                  name="name"
                  value={formData.name} onChange={handleChange} required
                      className="form-control"
                      placeholder="Имя"
                    />
                  </div>


                  <div className="input-group mb-3">
                    <input
                 id="surname"      type="text"
                 name="surname"
                 value={formData.surname}  onChange={handleChange} required
                      className="form-control"
                      placeholder="Фамилия"
                    />
                  </div>


                  <div className="input-group mb-3">
                    <input
                 id="email"     type="email"
                 value={formData.email} onChange={handleChange} required
                 name="email"
                      className="form-control"
                      placeholder="Электронная почта"
                    />
                  </div>
                  <div className="input-group mb-4">
                    <input
                    id="password"
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Пароль"
                      value={formData.password} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-group text-left">
                    <div className="checkbox checkbox-fill d-inline">
                 
                   
                    </div>
                  </div>
                  <button className="btn btn-primary shadow-2 mb-4" type="submit" >
                    Sign up
                  </button></form>
                  <p className="mb-0 text-muted">
                    Allready have an account?{" "}
                    <a href="auth-signin-v4.html" className='{styles.red}'> Log in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
 
</>



)


};

export default RegisterPage;




