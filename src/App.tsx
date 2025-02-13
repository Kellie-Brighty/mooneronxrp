import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { useState, useRef, useCallback } from "react";
import moonerBg from "./assets/mooner 6.jpg";
import moonerAbout from "./assets/mooner 2.jpg";

// Add these icons for social media
import { FaRocket, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Import X icon from fa6

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);
  const [copied, setCopied] = useState(false);

  // Generate random stars
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  const tokenomics = [
    {
      label: "Liquidity Pool",
      value: "90%",
      color: "from-blue-400 to-purple-500",
    },
    {
      label: "Development & Marketing",
      value: "5%",
      color: "from-green-400 to-blue-500",
    },
    { label: "Team", value: "5%", color: "from-orange-400 to-red-500" },
  ];

  const roadmap = [
    {
      phase: "Phase 1",
      title: "Launch",
      items: ["Token Launch", "Community Building", "Initial Marketing"],
    },
    {
      phase: "Phase 2",
      title: "Growth",
      items: [
        "Exchange Listings",
        "Partnership Development",
        "Platform Integration",
      ],
    },
    {
      phase: "Phase 3",
      title: "Expansion",
      items: [
        "Global Marketing",
        "Major Partnerships",
        "Ecosystem Development",
      ],
    },
    {
      phase: "Phase 4",
      title: "Innovation",
      items: ["New Features", "Platform Upgrades", "Community Governance"],
    },
  ];

  const faqs = [
    {
      question: "What is Mooner?",
      answer: "Mooner is a revolutionary token in the XRP ecosystem...",
    },
    {
      question: "How can I buy Mooner?",
      answer:
        "You can buy Mooner through our official website or supported exchanges...",
    },
    {
      question: "What makes Mooner unique?",
      answer:
        "Mooner combines innovative technology with community-driven development...",
    },
  ];

  // Add mouse movement animation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set((clientX - left - width / 2) * 0.1);
    mouseY.set((clientY - top - height / 2) * 0.1);
  };

  // Parallax effect for stars
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -400]);

  // Add copy function
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText("rNENDZy5Mhq7dgJfKWMzenwxAFCiE2qiyL");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" ref={containerRef}>
      {/* Update the stars section with parallax */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ y: y1 }}
      >
        {stars.slice(0, 25).map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              top: `${star.top}%`,
              backgroundColor: "white",
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </motion.div>
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ y: y2 }}
      >
        {stars.slice(25).map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              top: `${star.top}%`,
              backgroundColor: "white",
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Update the Hero Section's background and content */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            y: useTransform(scrollY, [0, 500], [0, 150]),
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${moonerBg})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900" />
        </motion.div>

        {/* Animated Overlay */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            background: [
              "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 60% 40%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 60%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 z-0">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="star"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2 + star.delay,
                repeat: Infinity,
                ease: "linear",
                delay: star.delay,
              }}
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `${star.left}%`,
                top: `${star.top}%`,
                background: "linear-gradient(to right, #7dd3fc, #0ea5e9)",
              }}
            />
          ))}
        </div>

        {/* Content Container */}
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
          onMouseMove={handleMouseMove}
        >
          {/* Main Content */}
          <div className="text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-8 relative"
            >
              {/* Glowing Effect behind title */}
              <motion.div
                className="absolute inset-0 blur-3xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-full h-full bg-mooner-500/20 rounded-full" />
              </motion.div>

              <motion.h1
                className="text-5xl md:text-8xl font-bold mb-6 inline-block relative"
                style={{
                  x: useSpring(mouseX, { stiffness: 50, damping: 10 }),
                  y: useSpring(mouseY, { stiffness: 50, damping: 10 }),
                }}
              >
                <span className="bg-gradient-to-r from-mooner-300 via-mooner-500 to-mooner-300 text-transparent bg-clip-text bg-300% animate-gradient">
                  $MOONER
                </span>
              </motion.h1>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Bringing hope to the XRP ecosystem
                </p>
                <p className="text-lg md:text-xl text-mooner-400 max-w-2xl mx-auto italic">
                  Regardless of the current market conditions, XRP will be a
                  Mooner among other altcoins.
                </p>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="https://t.me/MOONERonXRP"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-mooner-500 hover:bg-mooner-600 text-white font-bold py-3 px-8 rounded-full 
                  shadow-lg shadow-mooner-500/30 backdrop-blur-sm"
              >
                Join Now
              </motion.a>

              <motion.a
                href="https://dexscreener.com/xrpl/4D4F4F4E45520000000000000000000000000000.rNENDZy5Mhq7dgJfKWMzenwxAFCiE2qiyL_xrp"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-mooner-500 text-mooner-500 hover:bg-mooner-500/10 
                  font-bold py-3 px-8 rounded-full backdrop-blur-sm"
              >
                Chart
              </motion.a>
            </motion.div>

            {/* Enhanced Moon Animation */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-16 relative"
              style={{
                x: useSpring(mouseX, { stiffness: 100, damping: 30 }),
                y: useSpring(mouseY, { stiffness: 100, damping: 30 }),
              }}
            >
              <div
                className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gray-200 rounded-full relative overflow-hidden
                shadow-[0_0_100px_rgba(14,165,233,0.3)]"
              >
                <div className="moon-glow animate-pulse" />
                {/* Moon Craters */}
                <div className="absolute w-6 h-6 bg-gray-300 rounded-full top-4 left-4 opacity-80" />
                <div className="absolute w-4 h-4 bg-gray-300 rounded-full bottom-6 right-8 opacity-60" />
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full top-12 right-4 opacity-70" />

                {/* Moon Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20" />
              </div>
            </motion.div>

            {/* Copy Contract Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-8"
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm text-gray-400">Contract Address</span>
                <div
                  onClick={handleCopy}
                  className="group relative flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700/50 cursor-pointer hover:bg-gray-700/50 transition-colors"
                >
                  <span className="text-sm md:text-base font-mono text-gray-300">
                    rNENDZy5Mhq7dgJfKWMzenwxAFCiE2qiyL
                  </span>
                  <motion.div
                    animate={copied ? { scale: [1, 1.2, 1] } : {}}
                    className="text-mooner-500"
                  >
                    {copied ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                    )}
                  </motion.div>

                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: copied ? 1 : 0, y: copied ? 0 : 20 }}
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-mooner-500 text-white text-sm px-2 py-1 rounded"
                  >
                    Copied!
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New About Section - Add this before Tokenomics */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="relative"
          >
            {/* Decorative Elements */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Moon Visualization */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div className="aspect-square relative">
                  {/* Large Image Container */}
                  <motion.div
                    className="relative w-full h-full rounded-2xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Flipped Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-x-[-1]"
                      style={{
                        backgroundImage: `url(${moonerAbout})`,
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent" />

                    {/* Glowing Effect */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        boxShadow: [
                          "inset 0 0 50px rgba(14, 165, 233, 0.3)",
                          "inset 0 0 100px rgba(14, 165, 233, 0.2)",
                          "inset 0 0 50px rgba(14, 165, 233, 0.3)",
                        ],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Side - Content */}
              <div className="relative z-10 order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-mooner-300 to-mooner-500 text-transparent bg-clip-text">
                    About Mooner
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Join the Mooner movement today and be part of a
                    revolutionary project in the XRP ecosystem. We're building
                    more than just a token - we're creating a community-driven
                    platform that brings real value to our holders.
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Community First",
                        description:
                          "Built by the community, for the community",
                      },
                      {
                        title: "Innovation",
                        description:
                          "Pushing the boundaries of what's possible in the XRP ecosystem",
                      },
                      {
                        title: "Transparency",
                        description:
                          "Open and honest communication with our community",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-2 h-2 mt-2 rounded-full bg-mooner-500" />
                        <div>
                          <h3 className="text-xl font-semibold text-mooner-400">
                            {item.title}
                          </h3>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
            >
              <ChartBarIcon className="w-12 h-12 text-mooner-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Strong Performance</h3>
              <p className="text-gray-400">
                Leading the charge in the XRP ecosystem with revolutionary
                technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
            >
              <GlobeAltIcon className="w-12 h-12 text-mooner-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Community</h3>
              <p className="text-gray-400">
                Join a worldwide community of believers in the future of
                cryptocurrency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
            >
              <CurrencyDollarIcon className="w-12 h-12 text-mooner-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Economic Growth</h3>
              <p className="text-gray-400">
                Experience the potential for significant returns in the growing
                market.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Tokenomics
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
            {/* Pie Chart Visualization */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square max-w-[300px] mx-auto md:max-w-none"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-[250px] md:w-64 h-full max-h-[250px] md:h-64 rounded-full border-8 border-mooner-500/30 relative">
                  {tokenomics.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ rotate: -90 + index * 72, scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 }}
                      className={`absolute top-1/2 left-1/2 w-1 h-[45%] origin-bottom 
                        bg-gradient-to-t ${item.color}`}
                      style={{
                        transform: `rotate(${index * 72}deg) translateY(-50%)`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tokenomics Details */}
            <div className="space-y-4 px-4 md:px-0">
              {tokenomics.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div
                    className={`w-12 md:w-16 h-2 rounded bg-gradient-to-r ${item.color}`}
                  />
                  <span className="text-base md:text-lg">{item.label}</span>
                  <span className="text-base md:text-lg font-bold">
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Roadmap
          </motion.h2>
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-mooner-500/30" />

            {/* Timeline Items */}
            {roadmap.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } mb-12`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
                    <h3 className="text-lg md:text-xl font-bold mb-2">
                      {phase.phase}
                    </h3>
                    <h4 className="text-mooner-500 mb-4">{phase.title}</h4>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center space-x-2 text-sm md:text-base"
                        >
                          <FaRocket className="text-mooner-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            FAQ
          </motion.h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-4 md:p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50"
              >
                <button
                  onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                  className="w-full flex justify-between items-center"
                >
                  <span className="text-base md:text-lg font-semibold text-left pr-4">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: activeTab === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    ▼
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeTab === index ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-gray-400 text-sm md:text-base">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <footer className="py-8 md:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6 md:space-x-8">
            {[
              { Icon: FaXTwitter, url: "https://x.com/mooneronxrp" },
              { Icon: FaTelegram, url: "https://t.me/MOONERonXRP" },
            ].map(({ Icon, url }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl md:text-3xl text-mooner-500 hover:text-mooner-400"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
