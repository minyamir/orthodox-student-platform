import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp, ThumbsDown, MessageCircle, Share2, Search } from "lucide-react";
import n1 from "../assets/news1.png";
import n2 from "../assets/news2.png";
import n3 from "../assets/news3.png";

// Dates setup
const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
const twoDaysAgo = new Date();
twoDaysAgo.setDate(today.getDate() - 2);

const sample = [
  {
    id: 1,
    img: n1,
    title: "Campus Prayer Gathering",
    desc:
      "Highlights from last week's gathering. Powerful prayer, reflection, and community unity. Students shared testimonies, choir led worship beautifully. Next week's evening session is special!",
    date: today.toISOString(),
  },
  {
    id: 2,
    img: n2,
    title: "Student Leadership Workshop",
    desc:
      "A full-day leadership and service training for students focusing on communication, teamwork, and ethical leadership in campus life.",
    date: yesterday.toISOString(),
  },
  {
    id: 3,
    img: n3,
    title: "Holiday Charity Drive",
    desc:
      "Our Orthodox student community organized a charity event that supported over 200 families in need. Thank you for your generosity!",
    date: twoDaysAgo.toISOString(),
  },
];

const getDateLabel = (dateStr) => {
  const newsDate = new Date(dateStr);
  if (newsDate.toDateString() === today.toDateString()) return "Today";
  if (newsDate.toDateString() === yesterday.toDateString()) return "Yesterday";
  return "Old";
};

export default function NewsSection() {
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});
  const [liked, setLiked] = useState({});
  const [disliked, setDisliked] = useState({});
  const [comments, setComments] = useState({});
  const [expanded, setExpanded] = useState({});
  const [showComments, setShowComments] = useState({});
  const [visibleCount, setVisibleCount] = useState(2);
  const [newComment, setNewComment] = useState({});
  const [search, setSearch] = useState("");

  // Sticky Today > Yesterday > Old
  const sortedNews = [...sample]
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const labelA = getDateLabel(a.date);
      const labelB = getDateLabel(b.date);
      if (labelA === "Today" && labelB !== "Today") return -1;
      if (labelB === "Today" && labelA !== "Today") return 1;
      if (labelA === "Yesterday" && labelB === "Old") return -1;
      if (labelA === "Old" && labelB === "Yesterday") return 1;
      return new Date(b.date) - new Date(a.date);
    });

  const toggleLike = (id) => {
    if (liked[id]) {
      setLiked((prev) => ({ ...prev, [id]: false }));
      setLikes((prev) => ({ ...prev, [id]: (prev[id] || 1) - 1 }));
    } else {
      setLiked((prev) => ({ ...prev, [id]: true }));
      setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
      if (disliked[id]) {
        setDisliked((prev) => ({ ...prev, [id]: false }));
        setDislikes((prev) => ({ ...prev, [id]: (prev[id] || 1) - 1 }));
      }
    }
  };

  const toggleDislike = (id) => {
    if (disliked[id]) {
      setDisliked((prev) => ({ ...prev, [id]: false }));
      setDislikes((prev) => ({ ...prev, [id]: (prev[id] || 1) - 1 }));
    } else {
      setDisliked((prev) => ({ ...prev, [id]: true }));
      setDislikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
      if (liked[id]) {
        setLiked((prev) => ({ ...prev, [id]: false }));
        setLikes((prev) => ({ ...prev, [id]: (prev[id] || 1) - 1 }));
      }
    }
  };

  const handleAddComment = (id, text) => {
    if (!text.trim()) return;
    setComments((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), text],
    }));
    setNewComment((prev) => ({ ...prev, [id]: "" }));
  };

  const shareNews = (title) => {
    if (navigator.share) {
      navigator.share({
        title,
        text: `Check this out: ${title}`,
        url: window.location.href,
      });
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleComments = (id) => {
    setShowComments((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const showMore = () => setVisibleCount((prev) => prev + 2);

  return (
    <section
      id="news"
      className="py-20 bg-gradient-to-b from-yellow-100 via-yellow-200/60 to-yellow-100 min-h-screen relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,220,80,0.25),_transparent_70%)] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-yellow-800 mb-10 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]"
        >
          ✨ Campus Orthodox News
        </motion.h2>

        {/* Search */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-md">
            <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-yellow-700" size={18} />
            <input
              type="text"
              placeholder="Search news by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 text-gray-800 placeholder-gray-500 text-sm shadow-md bg-white/90"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedNews.slice(0, visibleCount).map((item, index) => {
            const label = getDateLabel(item.date);
            const isExpanded = expanded[item.id];

            return (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 215, 0, 0.25)",
                }}
                className="rounded-2xl overflow-hidden bg-white/90 border border-yellow-300 shadow-md relative hover:shadow-yellow-400/50"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full font-semibold text-xs text-white ${
                      label === "Today"
                        ? "bg-yellow-600"
                        : label === "Yesterday"
                        ? "bg-yellow-500"
                        : "bg-yellow-400"
                    }`}
                  >
                    {label}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-yellow-800 text-lg mb-2">{item.title}</h3>

                  <motion.p layout className="text-gray-700 text-sm leading-relaxed">
                    {isExpanded ? item.desc : item.desc.slice(0, 100) + "..."}
                  </motion.p>

                  {/* See More / See Less */}
                  <motion.button
                    whileHover={{ scale: 1.07, boxShadow: "0px 6px 20px rgba(255, 230, 100, 0.7)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleExpand(item.id)}
                    className="mt-3 flex items-center justify-center gap-2 
                               bg-gradient-to-r from-yellow-100 via-white to-yellow-50
                               text-yellow-800 font-bold px-5 py-2 rounded-lg text-sm 
                               border border-yellow-400 shadow-md transition-all 
                               hover:from-yellow-50 hover:to-white"
                  >
                    <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.4 }} className="inline-block">
                      ⬇️
                    </motion.span>
                    {isExpanded ? "See Less" : "See More"}
                  </motion.button>

                  {/* Like / Dislike / Comment / Share */}
                  <div className="flex justify-between mt-4 border-t pt-3 flex-wrap gap-2">
                    {[
                      {
                        icon: <ThumbsUp size={18} />,
                        handler: () => toggleLike(item.id),
                        count: likes[item.id] || 0,
                        isActive: liked[item.id] || false,
                      },
                      {
                        icon: <ThumbsDown size={18} />,
                        handler: () => toggleDislike(item.id),
                        count: dislikes[item.id] || 0,
                        isActive: disliked[item.id] || false,
                      },
                      {
                        icon: <MessageCircle size={18} />,
                        handler: () => toggleComments(item.id),
                        count: comments[item.id]?.length || 0,
                        isActive: false,
                      },
                      {
                        icon: <Share2 size={18} />,
                        handler: () => shareNews(item.title),
                        isActive: false,
                      },
                    ].map((btn, i) => (
                      <motion.button
                        key={i}
                        onClick={btn.handler}
                        whileHover={{ scale: 1.05, boxShadow: "0px 6px 18px rgba(255, 215, 0, 0.6)" }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-1 px-4 py-2 rounded-lg font-semibold text-sm
                                    border border-yellow-600 shadow-md transition-all duration-300
                                    ${
                                      btn.isActive
                                        ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-white"
                                        : "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 text-black"
                                    }
                                    hover:from-yellow-400 hover:to-yellow-200`}
                      >
                        {btn.icon}
                        {btn.count > 0 && <span>{btn.count}</span>}
                      </motion.button>
                    ))}
                  </div>

                  {/* Comments */}
                  <AnimatePresence>
                    {showComments[item.id] && (
                      <motion.div
                        key="comments"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="bg-yellow-50 p-3 mt-3 rounded-lg border border-yellow-200"
                      >
                        <div className="flex flex-wrap items-center gap-2 w-full">
                          <input
                            type="text"
                            value={newComment[item.id] || ""}
                            onChange={(e) =>
                              setNewComment((prev) => ({ ...prev, [item.id]: e.target.value }))
                            }
                            placeholder="Write a comment..."
                            className="flex-1 min-w-[150px] border rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          />
                          <button
                            onClick={() => handleAddComment(item.id, newComment[item.id])}
                            className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 
                                       text-black font-semibold px-4 py-2 rounded-lg text-sm 
                                       border border-yellow-600 shadow-md 
                                       hover:from-yellow-400 hover:to-yellow-200"
                          >
                            Post
                          </button>
                        </div>

                        <ul className="text-sm text-gray-700 space-y-2 mt-3 max-h-32 overflow-y-auto">
                          {comments[item.id]?.map((c, i) => (
                            <li key={i} className="bg-white border border-yellow-200 rounded-lg p-2">
                              {c}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Load More */}
        {visibleCount < sortedNews.length && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mt-10">
           <motion.button
  whileHover={{ scale: 1.05, boxShadow: "0px 6px 18px rgba(255, 215, 0, 0.6)" }}
  whileTap={{ scale: 0.95 }}
  onClick={showMore}
  animate={{
    y: [0, -5, 0],      // moves up 5px and back
    scale: [1, 1.03, 1]  // subtle pulse
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut"
  }}
  className="px-8 py-3 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300
             text-black font-extrabold rounded-full uppercase tracking-wider
             shadow-lg hover:from-yellow-400 hover:to-yellow-200 border border-yellow-600
             transition-all duration-500 ease-in-out"
>
  ⬇️ Load More
</motion.button>

          </motion.div>
        )}
      </div>
    </section>
  );
}
