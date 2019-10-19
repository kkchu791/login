import React, { useState, useEffect, lazy, Suspense } from 'react';

import { isLoggedIn } from './api/userAuth.api';

const AuthForm = lazy(() => import('./components/authentication/AuthForm.js'));
const SuccessTemplate = lazy(() => import('./components/authentication/SuccessTemplate.js'));

const App = () => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    isLoggedIn().then(({ logged_in, user }) => {
      setUser(user);
      setLoggedIn(logged_in);
    });
  }, []);

  const handleSuccessfulAuth = ({ logged_in, user }) => {
    setLoggedIn(logged_in);
    setUser(user);
  };

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        {
          loggedIn ? (
            <SuccessTemplate
              user={user}
              handleSuccessfulAuth={handleSuccessfulAuth}
            />
          ) : (
            <AuthForm
              handleSuccessfulAuth={handleSuccessfulAuth}
            />
          )
        }
      </Suspense>
    </div>
  );
}

export default App;
