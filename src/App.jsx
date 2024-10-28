import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import { AuthProvider } from './context/AuthContext';

import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './components/Layout';

import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import Requests from './pages/requests';

import HelpRequest from './pages/helpRequest';
import NotFound from './pages/notFound/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/" element={<LoginPage />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/help-request" element={<HelpRequest />} />
              <Route path="/requests" element={<Requests />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
