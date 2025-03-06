import  { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (credentials) => {
    console.log('Login credentials:', credentials);
    // Ajoutez ici la logique pour gérer la connexion
  };

  const handleSignup = (credentials) => {
    console.log('Signup credentials:', credentials);
    // Ajoutez ici la logique pour gérer l'inscription
  };

  return (
    <div>
      {isLogin ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <SignupForm onSignup={handleSignup} />
      )}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Créer un compte" : "Se connecter"}
      </button>
    </div>
  );
};

export default AuthPage;