import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-900 border-t border-slate-800 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} {PROFILE.name}. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;