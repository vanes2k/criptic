import React from 'react';
import { useState } from 'react';
import NextAuth from 'next-auth';
import type { NextPageWithLayout } from '@/types';
import './dark.module.css';
import './style.module.css';
import { useRouter } from 'next/router';

const LoginPage: NextPageWithLayout = () => {
  const routerr = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://62.113.117.150:8000/users/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        routerr.push('/');
      } else {
        console.error('Ошибка при отправке запроса');
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса');
    }
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-content subscribe">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-md-4 col-lg-6 d-none d-md-flex d-lg-flex theme-bg align-items-center justify-content-center"></div>
            <div className="col-md-8 col-lg-6">
              <div className="card-body text-center">
                <div className="row justify-content-center">
                  <div className="col-sm-10">
                    <h3 className="mb-4">Sign up</h3>
                    {/* {error && <div>{error}</div>} */}
                    <form>
                      <div className="input-group mb-3">
                        <input
                          type="email"
                          required
                          name="email"
                          className="form-control"
                          placeholder="Электронная почта"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="input-group mb-4">
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Пароль"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-group text-left">
                        <div className="checkbox checkbox-fill d-inline"></div>
                      </div>
                      <button
                        className="btn btn-primary shadow-2 mb-4"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Войти
                      </button>
                    </form>
                    <p className="text-muted mb-0">
                      У вас ещё нету аккаунта
                      <a href="auth-signin-v4.html" className="{styles.red}">
                        Зарегистрировать
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
