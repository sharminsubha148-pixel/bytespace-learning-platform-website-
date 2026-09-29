import Link from 'next/link';
import { ArrowRight, Code, Shield, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-slate-100 shadow-sm sticky top-0 bg-white z-50">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 text-white p-2 rounded-lg font-bold text-xl">BS</div>
          <span className="text-xl font-bold tracking-wide text-blue-900">ByteSpace</span>
        </div>
        <nav className="hidden md:flex space-x-8 font-medium text-slate-600">
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#community" className="hover:text-blue-600 transition">Community</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="px-4 py-2 text-blue-600 font-medium hover:underline">
            Login
          </Link>
          <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition">
            Sign Up
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-xl space-y-6">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Discover Your Passion & Build Your Skills
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Elevate Your Professional Career with <span className="text-blue-600">ByteSpace</span>
          </h1>
          <p className="text-lg text-slate-600">
            Join thousands of developers and professionals learning cutting-edge technologies, building real-world projects, and advancing their careers.
          </p>
          <div className="flex space-x-4 pt-4">
            <Link href="/signup" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 flex items-center space-x-2 transition">
              <span>Get Started Free</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/login" className="px-6 py-3 border border-slate-300 rounded-xl font-semibold hover:bg-slate-50 transition">
              Explore Courses
            </Link>
          </div>
        </div>
        <div className="mt-12 md:mt-0">
          <div className="w-80 h-80 md:w-96 md:h-96 bg-blue-600 rounded-3xl shadow-2xl flex items-center justify-center text-white text-3xl font-bold relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-700 opacity-50"></div>
            <span className="z-10 text-center px-6">ByteSpace Learning Platform</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Why Choose ByteSpace?</h2>
          <p className="text-slate-600">Everything you need to master modern software engineering and accelerate your career growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 space-y-4 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Real-World Projects</h3>
            <p className="text-slate-600">Build industry-grade applications using React, Next.js, Node.js, and modern tools.</p>
          </div>
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 space-y-4 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Expert Mentorship</h3>
            <p className="text-slate-600">Learn directly from seasoned software engineers with personalized feedback and code reviews.</p>
          </div>
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 space-y-4 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Active Community</h3>
            <p className="text-slate-600">Collaborate with peers, participate in coding contests, and grow your professional network.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10 px-8 text-center text-slate-500">
        <p>&copy; 2026 ByteSpace. All rights reserved. Built for Doin Tech Limited Assessment.</p>
      </footer>
    </div>
  );
}