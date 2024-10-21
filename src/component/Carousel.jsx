"use client"
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
        Resolve Every Problem With Best
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
        Astrologer Love Back Specialist Guru Ji
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
        Astrologer Aghori Baba Ji is well known spiritual astrologer who is much famous for helping people around the world with his services. He knows that his services could help a person to get rid of all the troubles of the life.
        </p>
        
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Call Now
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwY291cGxlfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    src: "https://plus.unsplash.com/premium_photo-1664303675595-e4d315e77146?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwY291cGxlfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    src: "https://plus.unsplash.com/premium_photo-1661964395296-f12beabaff73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwY291cGxlfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1505428215601-90f0007b9e83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600685890506-593fdf55949b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1542042161784-26ab9e041e89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGluZGlhbiUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    src: "https://plus.unsplash.com/premium_photo-1682090792229-4e488ab5c43a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGluZGlhbiUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1611106211090-8f3c79eb8552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGluZGlhbiUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGluZGlhbiUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGluZGlhbiUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1515766024017-689e434ef22b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGluZGlhbiUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXN0cm9sb2d5fGVufDB8fDB8fHww",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1637757969279-c4d028905131?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFzdHJvbG9neXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1521920592574-49e0b121c964?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFzdHJvbG9neXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 15,
    src: "https://plus.unsplash.com/premium_photo-1699968040330-93f35b218305?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGFzdHJvbG9neXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1581706952227-23fde30735a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGFzdHJvbG9neXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;