import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-900 border-t border-slate-800 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} {PROFILE.name}. 基于 React & Tailwind 构建.
      </p>
    </footer>
  );
};

export default Footer;