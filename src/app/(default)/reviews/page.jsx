import ReviewCard from "@/Component/Cards/ReviewCard";
import React from "react";
import { resolve } from "styled-jsx/css";

const allReviews = async () => {
  const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews");
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.reviews;
};

const Reviews = async () => {
  const reviews = await allReviews();
  return (
    <section className="my-5">
      <h1 className="my-3 text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Customer Reviews
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
