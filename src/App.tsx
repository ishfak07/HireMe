import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './pages/firstPage';
import UserType from './pages/userType';
import ServiceProviderRegister from './pages/serviceProvider/register';
import AdminLogin from './pages/admin/login';
import AdminDashboard from './pages/admin/dashboard';
import './App.css';
import ProviderRequests from './pages/admin/serviceProviders';
import ServiceProviderLogin from './pages/serviceProvider/login';
import ServiceProviderHomePage from './pages/serviceProvider/homePage';
import ServiceNeederHomePage from './pages/serviceNeeder/homePage';
import BookService from './pages/serviceNeeder/bookService';
import ServiceNeederRegister from './pages/serviceNeeder/registerN';
import ServiceNeederLogin from './pages/serviceNeeder/loginN';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import ForgotPasswordSP from './pages/serviceProvider/forgotPasswordSP';
import ServicesPage from './pages/admin/services';
import TrackService from './pages/serviceNeeder/trackService';
import ServiceProviderServices from './pages/serviceProvider/services';
import CustomersPage from './pages/admin/customers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/user-type" element={<UserType />} />
        <Route path="/service-provider/register" element={<ServiceProviderRegister />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/service-provider" element={<ProviderRequests />} />
        <Route path="/service-provider/login" element={<ServiceProviderLogin />} />
        <Route path="/service-provider/dashboard" element={<ServiceProviderHomePage />} />
        <Route path="/service-needer/home" element={<ServiceNeederHomePage />} />
        <Route path="/book-service" element={<BookService />} />
        <Route path="/service-needer/register" element={<ServiceNeederRegister />} />
        <Route path="/service-needer/login" element={<ServiceNeederLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/service-provider/forgot-password" element={<ForgotPasswordSP />} />
        <Route path="/admin/services" element={<ServicesPage />} />
        <Route path="/service-needer/track-service" element={<TrackService />} />
        <Route path="/service-provider/services" element={<ServiceProviderServices />} />
        <Route path="/admin/customers" element={<CustomersPage />} />
      </Routes>
    </Router>
  );
}


export default App;