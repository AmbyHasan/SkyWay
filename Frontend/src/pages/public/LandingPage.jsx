import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import {

  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  HeartHandshake,
  Plane,
  PlaneLanding,
  PlaneTakeoff,
  Search,
  ShieldCheck,
  Users,
} from 'lucide-react';

import { getFeaturedFlights } from '../../store/slices/flightSlice';
import { AIRPORTS } from '../../constants';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { formatPrice } from '../../utils';
import { useAuth } from '../../hooks/useAuth';

export const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { featuredFlights, isLoading } = useSelector((state) => state.flights);
  const {isAuthenticated}=useAuth();

  const [searchParams, setSearchParams] = useState({
    origin: 'DEL',
    destination: 'BOM',
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],    //current day + 2 days -> 2026-06-25T07:30:00.000Z , split and only get the date part
    passengers: 1,
    seatClass: 'economy',
  });

  useEffect(() => {
    dispatch(getFeaturedFlights());
  }, [dispatch]);

  const updateSearchParam = (key, value) => {
    setSearchParams((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchParams.origin === searchParams.destination) {
      return;
    }

    if(isAuthenticated){
    navigate(`/flights?${new URLSearchParams(searchParams).toString()}`);
    }
    else{
         toast.error('Please log in to search for flights.');
         navigate(`/login`)
    }
  };

  const features = [
    {
      icon: ShieldCheck,
      title: 'Safe and secure',
      description: 'Reliable booking, protected payments, and a smooth travel experience.',
    },
    {
      icon: Award,
      title: 'Premium comfort',
      description: 'Compare travel options clearly and choose the cabin experience that fits you.',
    },
    {
      icon: HeartHandshake,
      title: 'Support when needed',
      description: 'Manage bookings with confidence and get help whenever plans change.',
    },
  ];

  return (
    <div className=" dark:bg-slate-800 bg-slate-100">

      {/* ================= hero ================= */}
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-950">

      <div className="relative w-full mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
          {/* hero heading */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary-300/20 dark:bg-primary-400/10 bg-primary-200 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] dark:text-primary-200 text-blue-950"
            >
              <Plane className="h-4 w-4" />
              Premium flight booking platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-6 text-3xl font-extrabold tracking-[-0.05em] dark:text-white text-blue-950 sm:text-5xl lg:text-7xl lg:leading-[1.04]"
            >
              Fly beyond boundaries
              <br />
              with{' '}
              <span className="bg-gradient-to-r dark:from-primary-300 bg-primary-500 dark:via-cyan-300 via-cyan-600  dark:to-primary-400 to-primary-700 bg-clip-text text-transparent">
                SkyWay
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-6 max-w-2xl text-base leading-7 dark:text-slate-300 text-secondary-700 sm:text-lg"
            >
              Search routes, compare travel options, and manage every booking through
              one polished flight-booking experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-slate-200"
            >
              <span className="inline-flex items-center gap-2 text-blue-950 dark:text-slate-200">
                <CheckCircle2 className="h-4 w-4 dark:text-green-300 text-green-800" />
                Secure booking
              </span>

              <span className="inline-flex items-center gap-2 text-blue-950 dark:text-slate-200">
                <CheckCircle2 className="h-4 w-4 dark:text-green-300 text-green-800" />
                Flexible travel choices
              </span>

              <span className="inline-flex items-center gap-2 text-blue-950 dark:text-slate-200">
                <CheckCircle2 className="h-4 w-4 dark:text-green-300 text-green-800" />
                Instant confirmation
              </span>
            </motion.div>
          </div>

          {/* ================= SEARCH CARD ================= */}
          <motion.form
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            onSubmit={handleSearch}
            className="relative z-10 mt-12 rounded-3xl border dark:border-white/20 border-blue-500 dark:bg-white bg-cyan-500 p-5 shadow-2xl shadow-black/40 sm:p-6 lg:p-7"
          >
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-base font-extrabold text-slate-900">
                  Find your next flight
                </h2>
                <p className="mt-1 text-sm dark:text-slate-500 text-blue-900 ">
                  Choose your route and travel preferences.
                </p>
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-green-300 px-3 py-1.5 text-xs font-bold text-green-950">
                <ShieldCheck className="h-4 w-4" />
                Secure booking
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-[1.15fr_1.15fr_1fr_.9fr_.95fr_1.15fr] xl:items-end">
              {/* From */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-slate-500">
                  <PlaneTakeoff className="h-4 w-4 dark:text-primary-600 text-primary-800" />
                  From
                </label>

                <select
                  value={searchParams.origin}
                  onChange={(event) => updateSearchParam('origin', event.target.value)}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10"
                >
                  {AIRPORTS.map((airport) => (
                    <option key={airport.code} value={airport.code}>
                      {airport.city} ({airport.code})
                    </option>
                  ))}
                </select>
              </div>

              {/* To */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-slate-500">
                  <PlaneLanding className="h-4 w-4 dark:text-primary-600 text-primary-800" />
                  To
                </label>

                <select
                  value={searchParams.destination}
                  onChange={(event) =>
                    updateSearchParam('destination', event.target.value)
                  }
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10"
                >
                  {AIRPORTS.map((airport) => (
                    <option key={airport.code} value={airport.code}>
                      {airport.city} ({airport.code})
                    </option>
                  ))}
                </select>
              </div>

              {/* Departure */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-slate-500">
                  <Calendar className="h-4 w-4 dark:text-primary-600 text-primary-900" />
                  Departure
                </label>

                <input
                  type="date"
                  value={searchParams.date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(event) => updateSearchParam('date', event.target.value)}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10"
                />
              </div>

              {/* Travellers */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-slate-500">
                  <Users className="h-4 w-4 dark:text-primary-600 text-primary-900" />
                  Travellers
                </label>

                <select
                  value={searchParams.passengers}
                  onChange={(event) =>
                    updateSearchParam('passengers', Number(event.target.value))
                  }
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10"
                >
                  {[1, 2, 3, 4, 5, 6].map((number) => (
                    <option key={number} value={number}>
                      {number} {number === 1 ? 'Traveller' : 'Travellers'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Cabin */}
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-slate-500">
                  Cabin
                </label>

                <select
                  value={searchParams.seatClass}
                  onChange={(event) => updateSearchParam('seatClass', event.target.value)}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10"
                >
                  <option value="economy">Economy</option>
                  <option value="business">Business</option>
                </select>
              </div>

              {/* Button */}
              <Button
                type="submit"
                size="lg"
                className="h-12 w-full cursor-pointer rounded-xl px-5 shadow-lg shadow-primary-600/30"
              >
                <Search className="h-5 w-5" />
                Search flights
              </Button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* ================= FEATURED FLIGHTS ================= */}
      <section className="dark:bg-slate-950 bg-slate-100 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] dark:text-primary-400 text-primary-700 ">
                Popular choices
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight dark:text-white text-primary-800 sm:text-4xl">
                Popular routes this week
              </h2>

              <p className="mt-3 dark:text-slate-400  text-primary-700 ">
                Discover available flights and start planning your next journey.
              </p>
            </div>

            <Link
              to="/flights"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold dark:text-primary-400 text-primary-600 transition  dark:hover:text-primary-300 hover:text-primary-700"
            >
              Explore all flights
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-9">
            {isLoading ? (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="h-56 animate-pulse rounded-2xl bg-slate-900"
                  />
                ))}
              </div>
            ) : featuredFlights?.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {featuredFlights.slice(0, 4).map((flight) => (
                  <Card
                    key={flight._id}
                    hoverEffect
                    onClick={() => navigate(`/flights/${flight._id}`)}
                    className="cursor-pointer border-slate-800 bg-slate-900 p-0 shadow-sm"
                  >
                    <div className="p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-slate-300">
                          {flight.airline}
                        </span>

                        <span className="text-xs font-bold text-primary-400">
                          Featured
                        </span>
                      </div>

                      <div className="mt-8 flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-extrabold text-white">
                            {flight.origin.code}
                          </p>
                          <p className="mt-1 text-xs text-slate-400">
                            {flight.origin.city}
                          </p>
                        </div>

                        <div className="mx-4 flex flex-1 flex-col items-center">
                          <Plane className="h-5 w-5 rotate-90 text-primary-400" />
                          <div className="mt-2 h-px w-full bg-slate-700" />
                        </div>

                        <div className="text-right">
                          <p className="text-2xl font-extrabold text-white">
                            {flight.destination.code}
                          </p>
                          <p className="mt-1 text-xs text-slate-400">
                            {flight.destination.city}
                          </p>
                        </div>
                      </div>



                      <div className="mt-7 flex items-end justify-between border-t border-slate-800 pt-5">
                        <div>
                          <p className="text-xs font-medium text-slate-400">
                            Starting from
                          </p>
                          <p className="mt-1 text-lg font-extrabold text-white">
                            {formatPrice(flight.seats.economy.price)}
                          </p>
                        </div>

                        <ArrowRight className="h-5 w-5 text-primary-400" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/60 px-6 py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-primary-400">
                  <Plane className="h-7 w-7" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">
                  Flights are being refreshed
                </h3>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-400">
                  Search all available routes to find the best option for your travel dates.
                </p>

                <Link to="/flights" className="mt-6 inline-block">
                  <Button variant="outline">Browse all flights</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="dark:bg-slate-950 bg-slate-100 pb-20 pt-4 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-9">
            <p className="text-sm font-bold uppercase tracking-[0.15em] dark:text-primary-400 text-primary-500">
              Why SkyWay
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight dark:text-white text-primary-800 sm:text-4xl">
              Travel planning that feels effortless
            </h2>

            <p className="mt-3 dark:text-slate-400 text-blue-950">
              Everything you need to search, book, and manage your journey in one place.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-5 bg-cyan-600 rounded-2xl border dark:border-slate-800 dark:bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-primary-500/40 hover:bg-slate-900"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white hover:text-green-400 ">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white hover:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};