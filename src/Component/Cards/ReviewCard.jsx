"use client";

import Image from "next/image";
import { useState } from "react";

const ReviewCard = ({ review }) => {
  const { user, photo, rating, review: reviewText, likes, date } = review;

  const [likeCount, setLikeCount] = useState(likes.length);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) return;

    setLikeCount((prev) => prev + 1);
    setLiked(true);
  };

  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body space-y-3">
        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image src={photo} alt={user} fill className="object-cover" />
          </div>

          <div>
            <h3 className="font-semibold">{user}</h3>
            <p className="text-xs text-gray-500">
              {new Date(date).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-yellow-500">
              ★
            </span>
          ))}
          <span className="text-sm text-gray-500 ml-2">({rating}/5)</span>
        </div>

        {/* Review Text */}
        <p className="text-sm leading-relaxed">{reviewText}</p>

        {/* Like Section */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={handleLike}
            disabled={liked}
            className={`btn btn-sm ${liked ? "btn-success" : "btn-outline"}`}
          >
            👍 Like
          </button>

          <span className="text-sm text-gray-500">
            {likeCount} people liked this
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
