import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form 
        className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-400 w-[400px]"
        onSubmit={onSubmitHandler}
      >
        {/* Heading */}
        <p className="text-2xl font-semibold text-gray-900">{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p className="text-gray-600 mt-1">
          Please {state === 'Sign Up' ? "sign up" : "login"} to book appointment
        </p>

        {/* Full Name (Only for Sign Up) */}
        {state === 'Sign Up' && (
          <div className="mt-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>
        )}

        {/* Email */}
        <div className="mt-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-5 text-lg font-medium hover:bg-blue-700 transition">
          {state === 'Sign Up' ? "Create account" : "Login"}
        </button>

        {/* Toggle Login / Sign Up */}
        <p className="text-gray-600 mt-4 text-center">
          {state === 'Sign Up' ? "Already have an account?" : "Don't have an account?"} 
          <span 
            className="text-blue-600 cursor-pointer ml-1"
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
          >
            {state === 'Sign Up' ? "Login here" : "Sign up here"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
