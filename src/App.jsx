import React from 'react';

import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import { ProtectedRoute, PublicRoute, MainContainer } from './components/index.jsx';
import { LoginPage, ProfilePage, RequestsPage } from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MainContainer>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/" element={<LoginPage />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/help-request" element={<HelpRequest />} />
              <Route path="/requests" element={<RequestsPage />} />
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
        </MainContainer>
      </AuthProvider>
    </BrowserRouter>
  );
}
