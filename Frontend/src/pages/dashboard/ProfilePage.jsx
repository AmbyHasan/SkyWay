import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { fetchCurrentUser } from '../../store/slices/authSlice';
import { userService } from '../../services/userService';
import { User, Phone, Lock, Save, KeyRound } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import toast from 'react-hot-toast';

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  // Profile form state
  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [lastName, setLastName] = useState(user?.lastName || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [profileLoading, setProfileLoading] = useState(false);

  // Password change state
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordLoading, setPasswordLoading] = useState(false);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setProfileLoading(true);

    try {
      await userService.updateMe({ firstName, lastName, phone });
      toast.success('Profile details updated successfully.');
      dispatch(fetchCurrentUser()); // Reload profile state in redux
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to update profile.');
    } finally {
      setProfileLoading(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error('New passwords do not match.');
      return;
    }

    setPasswordLoading(true);
    try {
      await userService.changePassword({ currentPassword: oldPassword, newPassword });
      toast.success('Password updated successfully.');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to change password.');
    } finally {
      setPasswordLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Overview left column */}
      <div className="space-y-6">
        <Card className="p-6 text-center bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="w-20 h-20 rounded-2xl bg-primary-100 dark:bg-primary-950 flex items-center justify-center text-primary-700 dark:text-primary-300 font-extrabold text-2xl border border-primary-200/50 dark:border-primary-800/30 mx-auto mb-4">
            {user?.firstName?.[0]}
          </div>
          <h3 className="font-extrabold text-slate-800 dark:text-white text-lg">
            {user?.firstName} {user?.lastName}
          </h3>
          <p className="text-xs text-slate-400 font-medium mb-4">{user?.email}</p>
          <span className="text-xs font-bold uppercase tracking-wider bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 px-3 py-1 rounded-full text-slate-500">
            {user?.role} Account
          </span>
        </Card>
      </div>

      {/* Main Form Fields */}
      <div className="lg:col-span-2 space-y-6">
        {/* Basic Details Form */}
        <Card className="p-6 bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800">
          <h3 className="text-base font-bold mb-4 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <User className="h-5 w-5 text-slate-400" /> Basic Details
          </h3>

          <form onSubmit={handleProfileSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <Input
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <Input
              label="Phone Number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              icon={Phone}
              required
            />

            <div className="flex justify-end pt-2">
              <Button type="submit" isLoading={profileLoading} icon={Save}>
                Save Changes
              </Button>
            </div>
          </form>
        </Card>

        {/* Change Password Form */}
        <Card className="p-6 bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800">
          <h3 className="text-base font-bold mb-4 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <KeyRound className="h-5 w-5 text-slate-400" /> Change Password
          </h3>

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <Input
              label="Current Password"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              icon={Lock}
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="New Password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                icon={Lock}
                required
              />
              <Input
                label="Confirm New Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                icon={Lock}
                required
              />
            </div>

            <div className="flex justify-end pt-2">
              <Button type="submit" variant="outline" isLoading={passwordLoading} icon={Save}>
                Update Password
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};
