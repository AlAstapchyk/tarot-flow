"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [isCardClicked, setIsCardClicked] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  async function onCardClick() {
    if (isCardClicked) return; // Prevent multiple clicks

    // Start the flip animation
    setIsFlipped(true);

    // After flip animation completes, show the content
    setTimeout(() => {
      setIsCardClicked(true);
    }, 600); // Match the flip duration
  }

  return (
    <div className="flex flex-col min-h-screen font-sans text-[var(--app-foreground)] mini-app-theme from-[var(--app-background)] to-[var(--app-gray)]">
      <div className="w-full max-w-md mx-auto px-4 py-3">
        <main className="flex-1 pt-8 items-center flex flex-col text-center relative">
          <AnimatePresence>
            {!isCardClicked && (
              <motion.div
                key="welcome-text"
                initial={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }} // move UP
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <p className="mb-8 text-3xl">
                  Welcome to your daily <span className="bg-yellow-300">Tarot flow</span> practice
                </p>
                <p className="mb-8 text-2xl">Start by taking a breath ...</p>
                <p className="mb-8 text-xl">Then click to draw your card</p>
              </motion.div>
            )}


            {/* Card Container */}
            <motion.div
              className="perspective-1000"
              animate={{
                // y: 0,
                scale: 1,
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                duration: 0.8,
              }}
              layout
            >
              {/* Card Flip Container */}
              <motion.div
                className="relative preserve-3d cursor-pointer"
                animate={{
                  rotateY: isFlipped ? 180 : 0,
                  y: isCardClicked ? -36 : 0,
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                onClick={onCardClick}
                style={{
                  transformStyle: "preserve-3d",
                }}
              // layout
              >
                {/* Card Back (initial side) */}
                <motion.div
                  className="absolute inset-0 backface-hidden"
                  initial={{
                    width: 200,
                    height: 360,
                  }}
                  animate={{
                    width: isCardClicked ? 240 : 200, // 80% of container approximation
                    height: isCardClicked ? 432 : 360,
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                // layout
                >
                  <div
                    className="w-full h-full bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-yellow-400"
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    }}
                  >
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">🌙</div>
                      <div className="text-lg font-bold">TAROT</div>
                      <div className="text-sm">Click to reveal</div>
                    </div>
                  </div>
                </motion.div>

                {/* Card Front (revealed side) */}
                <motion.div
                  className="backface-hidden"
                  initial={{
                    width: 200,
                    height: 360,
                  }}
                  animate={{
                    width: isCardClicked ? 240 : 200,
                    height: isCardClicked ? 432 : 360,
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                // layout
                >
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-purple-600 relative overflow-hidden">
                    {/* Mystical background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 text-2xl">⭐</div>
                      <div className="absolute top-4 right-4 text-2xl">🌟</div>
                      <div className="absolute bottom-4 left-4 text-2xl">✨</div>
                      <div className="absolute bottom-4 right-4 text-2xl">💫</div>
                    </div>

                    <div className="text-center text-white z-10">
                      <div className="text-6xl mb-4">🔮</div>
                      <div className="text-xl font-bold mb-2">The Mystic</div>
                      <div className="text-sm">Your card is revealed</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            {/* Content that appears after card flip */}
            {isCardClicked && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="w-full mt-8"
              >
                <motion.p
                  className="mt-4 text-lg font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  Intuition, Mystery, Wisdom
                </motion.p>

                <motion.p
                  className="mt-2 text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  Trust your inner voice and embrace the unknown. Your intuition will guide you through any uncertainty.
                </motion.p>

                <motion.hr
                  className="my-8 w-full bg-gray-300"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                />

                <motion.button
                  className="border-2 border-white p-2 rounded-xl w-full hover:bg-white hover:text-black transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <p className="text-xl">Subscribe</p>
                  <span>monthly $10</span>
                </motion.button>

                <motion.div
                  className="grid grid-cols-3 gap-4 mt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0, duration: 0.6 }}
                >
                  {[1, 2, 3].map((price, index) => (
                    <motion.div
                      key={price}
                      className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg hover:border-yellow-400 transition-colors cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.2 + index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mb-2 flex items-center justify-center text-2xl">
                        {index === 0 ? '🌙' : index === 1 ? '⭐' : '🔮'}
                      </div>
                      <span className="font-semibold">${price}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}