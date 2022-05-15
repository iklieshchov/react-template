import { Routes, Route } from 'react-router-dom';
import { DashboardPage, ProfilePage } from '../pages';

export const UserRouter = () => (
  <Routes>
    <Route path="/" element={<DashboardPage />} />
    <Route path="/profile" element={<ProfilePage />} />
  </Routes>
);

export default UserRouter;
