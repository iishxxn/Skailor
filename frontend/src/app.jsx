import React, { useState, useEffect } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-black/80 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Logo />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skailor</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {["home", "features", "platform", "pricing"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize hover:text-blue-400 transition-colors ${activeTab === tab ? "text-blue-400" : ""}`}
              >
                {tab}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-md border border-gray-600 hover:border-blue-400 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            <MenuIcon />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/90 backdrop-blur-md p-4 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {["home", "features", "platform", "pricing"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsMenuOpen(false);
                  }}
                  className={`capitalize py-2 ${activeTab === tab ? "text-blue-400" : ""}`}
                >
                  {tab}
                </button>
              ))}
              <div className="pt-4 flex flex-col space-y-2">
                <button className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600">
                  Sign In
                </button>
                <button className="w-full px-4 py-2 rounded-md border border-gray-600">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      {activeTab === "home" && (
        <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              The Future of Learning is{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI-Powered.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
              Skailor redefines education with hyper-personalized learning paths, immersive AR/VR environments, and generative AI tutors that adapt to your goals, pace, and style.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-blue-500/30">
                Start Free Trial
              </button>
              <button className="px-6 py-3 rounded-lg border border-gray-600 hover:border-blue-400 transition-colors">
                Explore Features
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20 transform hover:scale-[1.02] transition-transform duration-300">
              <img src="https://picsum.photos/id/1033/800/600"  alt="Immersive Learning" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold">AI Tutor in Action</h3>
                <p className="text-sm text-gray-300">Real-time explanation using generative AI.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {activeTab === "features" && (
        <section id="features" className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Modern Learners</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Skailor combines the best of AI, gamification, and immersive tech to create a next-gen learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Tutor & Assistant",
                description:
                  "Get instant help with explanations, problem-solving, coding, and content generation tailored to your learning level.",
                icon: <AiTutorIcon />,
              },
              {
                title: "Immersive AR/VR Labs",
                description:
                  "Step into virtual science labs, historical timelines, or interactive 3D anatomy models for hands-on exploration.",
                icon: <ArVrIcon />,
              },
              {
                title: "Personalized Learning Paths",
                description:
                  "Adaptive onboarding creates unique learning journeys based on your goals, strengths, weaknesses, and cognitive style.",
                icon: <PathIcon />,
              },
              {
                title: "Live Mentorship Sessions",
                description:
                  "Connect with experts and industry leaders through live Q&A sessions, personalized coaching, and mentorship programs.",
                icon: <MentorIcon />,
              },
              {
                title: "Gamified Progress",
                description:
                  "Track progress visually with avatars, achievements, badges, and leaderboard-driven motivation systems.",
                icon: <GameIcon />,
              },
              {
                title: "Dynamic Content Library",
                description:
                  "Access an ever-evolving collection of lessons, quizzes, case studies, and micro-courses auto-updated by AI.",
                icon: <LibraryIcon />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Platform Preview */}
      {activeTab === "platform" && (
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Skailor Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A seamless integration of AI, immersive tech, and community learning for a transformative educational journey.
            </p>
          </div>

          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Personalization Engine</h3>
                <p className="text-gray-300 mb-4">
                  Skailor begins with a comprehensive adaptive quiz to understand your learning profile — including goals,
                  interests, pace, and cognitive preferences.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>✅ Adaptive onboarding assessments</li>
                  <li>✅ Dynamic dashboard updates</li>
                  <li>✅ Real-time AI recommendations</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-xl shadow-blue-500/20">
                  <img src="https://picsum.photos/id/1040/600/400"  alt="Dashboard" className="w-full" />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Immersive Learning Environments</h3>
                <p className="text-gray-300 mb-4">
                  Experience real-world simulations and interactive 3D environments powered by AR/VR technologies.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>🔬 Virtual Science Labs</li>
                  <li>🧮 3D Math Visualizations</li>
                  <li>🎓 VR Classrooms & Timelines</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-xl shadow-purple-500/20">
                  <img src="https://picsum.photos/id/1024/600/400"  alt="AR/VR Lab" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {activeTab === "pricing" && (
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Plans for Every Learner</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your learning needs and unlock access to premium features, certifications, and mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Free Tier",
                price: "$0",
                features: ["Basic Content Access", "Community Support", "Limited Quizzes", "Mobile Friendly"],
                cta: "Start Free",
              },
              {
                name: "Pro Plan",
                price: "$19/mo",
                popular: true,
                features: [
                  "Unlimited AI Tutoring",
                  "Premium Content Access",
                  "AR/VR Lab Simulations",
                  "Certifications",
                  "Live Mentor Sessions",
                ],
                cta: "Go Pro",
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: [
                  "Team Accounts",
                  "Corporate Training",
                  "Custom AI Integration",
                  "Advanced Analytics",
                  "Priority Support",
                ],
                cta: "Contact Sales",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border ${
                  plan.popular ? "border-blue-500 scale-105 shadow-lg shadow-blue-500/20" : "border-gray-700"
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-xs uppercase font-semibold tracking-wide px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2 text-gray-400 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 rounded-md ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-500 to-purple-600"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-800 py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo />
              <span className="font-bold text-lg">Skailor</span>
            </div>
            <p className="text-gray-400">
              Redefining education with AI-powered personalization, immersive experiences, and lifelong learning tools.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Demo</li>
              <li>Updates</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Data Security</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Skailor. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

// SVG Icons
function Logo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 17L12 22L22 17" stroke="url(#paint1_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12L12 17L22 12" stroke="url(#paint2_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="paint0_linear" x1="2" y1="2" x2="22" y2="12">
          <stop stopColor="#6EE7B7" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="2" y1="17" x2="22" y2="17">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#A855F7" />
        </linearGradient>
        <linearGradient id="paint2_linear" x1="2" y1="12" x2="22" y2="12">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function AiTutorIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M8 12H16M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ArVrIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 7V5C8 4.44772 8.44772 4 9 4H15C15.5523 4 16 4.44772 16 5V7" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function PathIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L4 7L12 11L20 7L12 3Z" stroke="currentColor" strokeWidth="2" />
      <path d="M12 11L4 15L12 19L20 15" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function MentorIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="7" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="17" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function GameIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M12 8L16 12L12 16L8 12L12 8Z" fill="currentColor" />
    </svg>
  );
}

function LibraryIcon() {
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19.5V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 4V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 4V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 4V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>;
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6H20M4 12H20M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
