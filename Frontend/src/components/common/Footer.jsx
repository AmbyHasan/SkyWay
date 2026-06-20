import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Mail } from 'lucide-react';

const TwitterIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-400 dark:border-slate-800 w-full">
      <div className="mx-auto w-full px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs m-3">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 text-white">
                <Plane className="h-5 w-5" />
              </span>

              <span className="text-xl font-extrabold tracking-tight text-white">
                SKY<span className="text-primary-400">WAY</span>
              </span>
            </Link>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Premium travel experiences built for effortless searching, secure booking,
              and smooth journeys.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
              Book & manage
            </h4>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/flights" className="transition-colors hover:text-primary-400">
                  Search flights
                </Link>
              </li>
              <li>
                <Link to="/login" className="transition-colors hover:text-primary-400">
                  Flight status
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="transition-colors hover:text-primary-400">
                  My bookings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
              Company
            </h4>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <button type="button" className="transition-colors hover:text-primary-400">
                  About us
                </button>
              </li>
              <li>
                <button type="button" className="transition-colors hover:text-primary-400">
                  Careers
                </button>
              </li>
              <li>
                <button type="button" className="transition-colors hover:text-primary-400">
                  Privacy policy
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
              Stay connected
            </h4>

            <div className="mt-5 flex items-center gap-3">
              <button
                type="button"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-slate-300 transition-colors hover:bg-primary-600 hover:text-white"
              >
                <TwitterIcon />
              </button>

              <button
                type="button"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-slate-300 transition-colors hover:bg-primary-600 hover:text-white"
              >
                <LinkedInIcon />
              </button>

              <button
                type="button"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-slate-300 transition-colors hover:bg-primary-600 hover:text-white"
              >
                <GitHubIcon />
              </button>
            </div>

            <a
              href="mailto:support@skyway.com"
              className="mt-5 inline-flex items-center gap-2 text-sm transition-colors hover:text-primary-400"
            >
              <Mail className="h-4 w-4 text-primary-400" />
              support@skyway.com
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-slate-800 pt-8 text-center text-xs sm:flex-row sm:justify-between sm:text-left">
          <p>© {currentYear} SkyWay Airlines. All rights reserved by <span className="font-bold text-white">Amber Hasan</span>.</p>
          <p>Built for a premium flight-booking experience.</p>
        </div>
      </div>
    </footer>
  );
};