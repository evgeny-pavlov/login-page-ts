import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { AuthProvider, useAuth } from './context/AuthContext';
import ErrorBoundary from './components/ErrorBoundry/ErrorBoundry';
import Sidebar from './components/Sidebar/Sidebar';
import LoginPage from './pages/LoginPage';
import NotesPage from './pages/NotesPage/NotesPage';
import TasksPage from './pages/TaskPage/TaskPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import './style.css';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

const AppLayout: React.FC = () => (
  <div className="app-layout">
      <Sidebar />
    <div className="content">
      <Routes>
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  </div>
);

const App: React.FC = () => (
  <Provider store={store}>
    <AuthProvider>
      <ErrorBoundary>
        <Router>
          <div className="app">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/*" element={<ProtectedRoute><AppLayout /></ProtectedRoute>} />
            </Routes>
          </div>
        </Router>
      </ErrorBoundary>
    </AuthProvider>
  </Provider>
);

export default App;
