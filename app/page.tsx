"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import { pay } from '@base-org/account';
import Image from "next/image";
import { ExpressionSvg, MeditationSvg, YogaSvg } from "@/lib/svgs";
import { cardInfos } from "@/lib/card-info";

const AUTHOR_ADDRESS = "0x6DFbC8dBCF4b96130536EE234AcD79Cd4064Ef3C";

function getRandomIndex(): number {
  const totalCards = 22;
  const randomIndex = Math.floor(Math.random() * totalCards);
  return randomIndex;
}

// Preload image utility
function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

export default function App() {
  const [isCardClicked, setIsCardClicked] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [randomIndex, setRandomIndex] = useState<number>(0);
  const [cardSrc, setCardSrc] = useState<string | null>(null);
  const [isCardReversed, setIsCardReversed] = useState<boolean>(false);
  const [isImagePreloaded, setIsImagePreloaded] = useState(false);

  // Preload the card image on component mount
  useEffect(() => {
    const randomIndx = getRandomIndex()
    const selectedCardSrc = `/cards/${randomIndx}.png`;
    const isReversed = Math.random() < 0.5;

    setRandomIndex(randomIndx);
    setCardSrc(selectedCardSrc);
    setIsCardReversed(isReversed);

    // Preload the image
    preloadImage(selectedCardSrc)
      .then(() => {
        setIsImagePreloaded(true);
      })
      .catch((error) => {
        console.error('Failed to preload image:', error);
        // Still allow the animation to proceed even if preload fails
        setIsImagePreloaded(true);
      });
  }, []);

  async function onCardClick() {
    if (isCardClicked || !isImagePreloaded) return; // Prevent multiple clicks and ensure image is loaded

    // Start the flip animation
    setIsFlipped(true);

    // After flip animation completes, show the content
    setTimeout(() => {
      setIsCardClicked(true);
    }, 600); // Match the flip duration

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 1000);
  }

  const handleSubscription = async () => {
    try {
      const payment = await pay({
        amount: '20.00',
        to: AUTHOR_ADDRESS,
        testnet: true
      }) as any;
      console.log('Payment sent:', payment)
    } catch (error) {
      console.error('Payment failed:', error)
    }
  }

  const handleExpressionPayment = async () => {
    try {
      const payment = await pay({
        amount: '1.00',
        to: AUTHOR_ADDRESS,
        testnet: true
      }) as any;
      console.log('Payment sent:', payment)
    } catch (error) {
      console.error('Payment failed:', error)
    }
  }

  const handleYogaPayment = async () => {
    try {
      const payment = await pay({
        amount: '3.00',
        to: AUTHOR_ADDRESS,
        testnet: true
      }) as any;
      console.log('Payment sent:', payment)
    } catch (error) {
      console.error('Payment failed:', error)
    }
  }

  const handleMeditationPayment = async () => {
    try {
      const payment = await pay({
        amount: '2.00',
        to: AUTHOR_ADDRESS,
        testnet: true
      }) as any;
      console.log('Payment sent:', payment)
    } catch (error) {
      console.error('Payment failed:', error)
    }
  }

  const paymentOptions = [
    {
      id: 1,
      label: "Tarot Expression",
      describtion: "your daily journal",
      svg: ExpressionSvg,
      price: 1,
      handler: handleExpressionPayment,
    },
    {
      id: 2,
      label: "Tarot Yoga",
      describtion: "your daily Asana",
      svg: YogaSvg,
      price: 3,
      handler: handleYogaPayment,
    },
    {
      id: 3,
      label: "Tarot Meditation",
      describtion: "be guided within",
      svg: MeditationSvg,
      price: 2,
      handler: handleMeditationPayment,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen text-[var(--app-foreground)] mini-app-theme from-[var(--app-background)] to-[var(--app-gray)]">
      <div className="w-full max-w-md mx-auto px-4 py-3">
        <Header />
        <main className="flex-1 pt-8 items-center flex flex-col text-center relative">

          <AnimatePresence>
            {!isCardClicked && (
              <motion.div
                key="welcome-text"
                initial={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }} // move UP
                transition={{ duration: 0.5 }}
                className=""
              >
                <div className="relative w-full w-full h-[720px] overflow-hidden">
                  <iframe
                    className="absolute top-1/2 left-1/2 w-[177.78%] h-[177.78%] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
                    src="https://www.youtube.com/embed/k5pvKPD_9fc?autoplay=1&mute=1&loop=1&controls=0&playlist=k5pvKPD_9fc&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0"
                    frameBorder="0"
                    allow="autoplay;"
                    allowFullScreen
                  ></iframe>
                </div>

                <Image width={240} height={240} alt="Circular Logo" src={"/circle-logo.png"} className="mx-auto" />

                <p className="mb-8 text-xl">
                  Welcome to your daily TarotFlow practice
                </p>
                <p className="mb-8 text-lg">Start by taking a breath ...</p>
                <p className="">Then click to draw your card</p>
              </motion.div>
            )}

            {/* Card Container */}
            <motion.div
              className="perspective-1000 mt-8"
              animate={{
                scale: 1,
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                duration: 2,
              }}
              layout
            >
              {/* Card Flip Container */}
              <motion.div
                className={`relative preserve-3d ${isImagePreloaded ? 'cursor-pointer' : 'cursor-wait'}`}
                animate={{
                  rotateY: isFlipped ? 180 : 0,
                  y: isCardClicked ? -36 : 0,
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                onClick={onCardClick}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Card Back (initial side) */}
                <motion.div
                  className={`absolute inset-0 backface-hidden mb-12 transition-all duration-200 ${isImagePreloaded ? "brightness-100" : "brightness-50"}`}
                  initial={{
                    width: 240,
                    height: 360,
                  }}
                  animate={{
                    width: isCardClicked ? 300 : 240,
                    height: isCardClicked ? 450 : 360,
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Image className="rounded-2xl" alt="Back side of card" fill src={"/cards/back-side.png"}></Image>
                </motion.div>

                {/* Card Front (revealed side) - Now preloaded */}
                <motion.div
                  className="backface-hidden"
                  initial={{
                    width: 240,
                    height: 360,
                  }}
                  animate={{
                    width: isCardClicked ? 300 : 240,
                    height: isCardClicked ? 450 : 360,
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: `rotateY(180deg) rotateZ(${isCardReversed ? 180 : 0}deg)`
                  }}
                >
                  {cardSrc && (
                    <Image
                      className="rounded-3xl"
                      alt="Front side of card"
                      fill
                      src={cardSrc}
                      priority
                      onLoad={() => setIsImagePreloaded(true)}
                      onError={() => setIsImagePreloaded(true)}
                    />
                  )}
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
                  {(() => {
                    const keywords = isCardReversed
                      ? cardInfos[randomIndex].reversedKeywords
                      : cardInfos[randomIndex].uprightKeywords;

                    return keywords.charAt(0).toUpperCase() + keywords.slice(1);
                  })()}
                </motion.p>

                <motion.p
                  className="mt-2 text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  {isCardReversed ? cardInfos[randomIndex].reversedMean : cardInfos[randomIndex].uprightMean}
                </motion.p>

                <motion.hr
                  className="my-8 w-full bg-gray-300"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                />

                <motion.div
                  className="flex flex-col gap-4 mt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0, duration: 0.6 }}
                >
                  {paymentOptions.map((opt, index) => (
                    <motion.div
                      key={opt.id}
                      className="flex flex-col w-fit mx-auto items-center justify-center p-4 border-2 border-white rounded-2xl aspect-square bg-color-2 transition-colors cursor-pointer shadow-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.2 + index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={opt.handler}
                    >
                      <p className="text-base">{opt.label}</p>
                      <p className="font-extralight text-base">{opt.describtion}</p>
                      <div className="w-40 h-40 bg-gradient-to-br rounded-full flex items-center justify-center text-2xl">
                        {opt.svg({ className: "w-64 h-64" })}
                      </div>
                      <span className="font-semibold text-base mt-4">{opt.price} USDC</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p
                  className="mt-16 text-base font-medium text-gray-700"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                >
                  Unlimited access
                </motion.p>

                <motion.p
                  className="text-gray-500 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                >
                  3 days free, then 20USDC/month
                </motion.p>

                <motion.button
                  className="border-2 py-2 px-6 rounded-2xl mb-12 shadow-md w-fit hover:text-black transition-colors bg-color-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubscription}
                >
                  <p className="text-xl">Accept free trial</p>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}