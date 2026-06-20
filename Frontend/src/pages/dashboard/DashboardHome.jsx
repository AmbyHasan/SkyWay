import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMyBookings } from '../../store/slices/bookingSlice';
import { useAuth } from '../../hooks/useAuth';
import { Calendar, Ticket, Compass, ShieldAlert, ArrowRight, User } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { formatPrice, formatDate, formatTime } from '../../utils';

export const DashboardHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { bookings, isLoading } = useSelector((state) => state.bookings);

  useEffect(() => {
    dispatch(getMyBookings({ limit: 3 }));
  }, [dispatch]);

  const upcomingBookings = bookings?.filter((b) => b.status === 'confirmed' || b.status === 'pending') || [];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <section className="bg-gradient-to-r from-primary-600 to-cyan-500 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-primary-500/10">
        <div className="max-w-xl space-y-3">
          <h1 className="text-3xl font-extrabold tracking-tight">Welcome back, {user?.firstName}!</h1>
          <p className="text-sm text-primary-105">
            Manage your airline tickets, customize your profile, and search for your next adventure.
          </p>
          <div className="pt-2">
            <Link to="/flights">
              <Button variant="glass" size="sm" className="font-bold">
                Book Next Flight <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 rounded-xl">
            <Ticket className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Total Bookings</p>
            <p className="text-2xl font-bold">{bookings?.length || 0}</p>
          </div>
        </Card>

        <Card className="p-6 bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl">
            <Calendar className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Upcoming Trips</p>
            <p className="text-2xl font-bold">{upcomingBookings.length}</p>
          </div>
        </Card>

        <Card className="p-6 bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-xl">
            <User className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Account Type</p>
            <p className="text-lg font-bold capitalize">{user?.role} Portal</p>
          </div>
        </Card>
      </section>

      {/* Upcoming Trips List */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Upcoming Flights</h2>
          <Link to="/dashboard/bookings" className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline">
            View All Bookings
          </Link>
        </div>

        {isLoading ? (
          <div className="h-32 bg-slate-100 dark:bg-slate-900 rounded-2xl animate-pulse" />
        ) : upcomingBookings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingBookings.map((booking) => {
              const flight = booking.flight;
              if (!flight) return null;
              return (
                <Card
                  key={booking._id}
                  className="p-6 bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all cursor-pointer"
                  onClick={() => navigate('/dashboard/bookings')}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono bg-slate-50 dark:bg-slate-950 border px-2 py-0.5 rounded text-slate-500 font-semibold uppercase">
                        Ref: {booking.bookingRef}
                      </span>
                      <Badge variant={booking.status === 'confirmed' ? 'success' : 'warning'}>
                        {booking.status}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="text-left">
                        <p className="text-base font-bold">{flight.origin?.code}</p>
                        <p className="text-[10px] text-slate-400">{flight.origin?.city}</p>
                      </div>
                      <div className="flex flex-col items-center flex-1 px-4 text-xs text-slate-400">
                        <span>{formatDate(flight.flightDate)}</span>
                        <div className="h-[1px] w-full bg-slate-100 dark:bg-slate-800 my-1" />
                        <span>{formatTime(flight.departureTime)}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-base font-bold">{flight.destination?.code}</p>
                        <p className="text-[10px] text-slate-400">{flight.destination?.city}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-8 bg-slate-50 dark:bg-slate-900/10 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-sm text-slate-500">
            No upcoming trips booked yet. Let's find your next adventure!
          </div>
        )}
      </section>
    </div>
  );
};
