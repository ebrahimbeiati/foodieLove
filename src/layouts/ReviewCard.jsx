// import boy1 from "../assets/img/boy1.jpeg";
// import boy2 from "../assets/img/boy2.jpeg";
// import boy3 from "../assets/img/boy3.jpeg";
// import girl1 from "../assets/img/girl1.jpeg";
// import girl2 from "../assets/img/girl2.jpeg";

// const ReviewCard = () => {
//   // Sample data for reviews
//   const reviews = [
//     {
//       reviewerName: "John Doe",
//       reviewText:
//         "The food here is absolutely amazing! I had the pleasure of trying out several dishes, and each one was a delight. The flavors were perfectly balanced, and the presentation was impeccable.",
//       reviewDate: "January 1, 2024",
//       rating: 5,
//       profileImg: boy1,
//     },
//     {
//       reviewerName: "Jane Smith",
//       reviewText:
//         "I recently visited this restaurant with my family, and we had a fantastic experience. The staff was friendly and attentive, and the food was delicious. I highly recommend the seafood pasta!",
//       reviewDate: "February 15, 2024",
//       rating: 4,
//       profileImg: girl1,
//     },
//     {
//       reviewerName: "David Johnson",
//       reviewText:
//         "This place exceeded all my expectations! From the moment we walked in, we were greeted with warmth and hospitality. The ambiance was lovely, and the dishes were bursting with flavor. A must-visit!",
//       reviewDate: "March 10, 2024",
//       rating: 5,
//       profileImg: boy2,
//     },
//     {
//       reviewerName: "Emily Brown",
//       reviewText:
//         "I've been a regular at this restaurant for years, and it never disappoints. The menu offers a wide variety of options to suit every palate, and the quality of the food is consistently top-notch. Keep up the great work!",
//       reviewDate: "April 5, 2024",
//       rating: 5,
//       profileImg: girl2,
//     },
//     {
//       reviewerName: "Michael Wilson",
//       reviewText:
//         "I stumbled upon this gem of a restaurant while exploring the neighborhood, and I'm so glad I did! The food was divine, and the service was exceptional. I'll definitely be coming back for more!",
//       reviewDate: "May 20, 2024",
//       rating: 4,
//       profileImg: boy3,
//     },
//     // Add more reviews here if needed
//   ];

//   // Function to generate stars based on the rating
//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 0; i < 5; i++) {
//       if (i < rating) {
//         stars.push(
//           <span key={i} className="text-yellow-400">
//             &#9733;
//           </span>
//         );
//       } else {
//         stars.push(
//           <span key={i} className="text-gray-400">
//             &#9733;
//           </span>
//         );
//       }
//     }
//     return stars;
//   };

//   return (
//     <div className="md:px-32 px-5 flex items-center flex-wrap justify-center gap-4">
//       {reviews.map((review, index) => (
//         <div
//           key={index}
//           className="w-full md:w-80 p-4 bg-white rounded-lg shadow-lg"
//         >
//           <div className="flex items-center mb-4">
//             <img
//               src={review.profileImg}
//               alt="Reviewer"
//               className="w-12 h-12 rounded-full mr-4"
//             />
//             <div>
//               <h3 className="text-lg font-semibold">{review.reviewerName}</h3>
//               <p className="text-gray-600">{review.reviewDate}</p>
//             </div>
//           </div>
//           <div className="flex items-center mb-2">
//             {renderStars(review.rating)}
//           </div>
//           <p className="text-gray-800">{review.reviewText}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReviewCard;
import boy1 from "../assets/img/boy1.jpeg";
import boy2 from "../assets/img/boy2.jpeg";
import boy3 from "../assets/img/boy3.jpeg";
import girl1 from "../assets/img/girl1.jpeg";
import girl2 from "../assets/img/girl2.jpeg";

const ReviewCard = () => {
  // Sample data for reviews
  const reviews = [
    {
      reviewerName: "Farzad",
      reviewText:
        "The food here is absolutely amazing! I had the pleasure of trying out several dishes, and each one was a delight. The flavors were perfectly balanced, and the presentation was impeccable.",
      reviewDate: "January 1, 2024",
      rating: 5,
      profileImg: boy1,
    },
    {
      reviewerName: "Jane Lin",
      reviewText:
        "I recently visited this restaurant with my family, and we had a fantastic experience. The staff was friendly and attentive, and the food was delicious. I highly recommend the seafood pasta!",
      reviewDate: "February 15, 2024",
      rating: 4,
      profileImg: girl1,
    },
    {
      reviewerName: "Dave Johnson",
      reviewText:
        "This place exceeded all my expectations! From the moment we walked in, we were greeted with warmth and hospitality. The ambiance was lovely, and the dishes were bursting with flavor. A must-visit!",
      reviewDate: "March 10, 2024",
      rating: 5,
      profileImg: boy2,
    },
    {
      reviewerName: "Emily Browny",
      reviewText:
        "I've been a regular at this restaurant for years, and it never disappoints. The menu offers a wide variety of options to suit every palate, and the quality of the food is consistently top-notch. Keep up the great work!",
      reviewDate: "April 5, 2024",
      rating: 5,
      profileImg: girl2,
    },
    {
      reviewerName: "Michael Wilson",
      reviewText:
        "I stumbled upon this gem of a restaurant while exploring the neighborhood, and I'm so glad I did! The food was divine, and the service was exceptional. I'll definitely be coming back for more!",
      reviewDate: "May 20, 2024",
      rating: 4,
      profileImg: boy3,
    },
    // Add more reviews here if needed
  ];

  // Function to generate stars based on the rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <span key={i} className="text-yellow-400">
            &#9733;
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-400">
            &#9733;
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="grid  grid-cols-4 gap-2">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="w-full md:w-80 h-96 p-4 bg-white rounded-lg shadow-lg"
        >
          <div className="flex items-center mb-4">
            <img
              src={review.profileImg}
              alt="Reviewer"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{review.reviewerName}</h3>
              <p className="text-gray-600">{review.reviewDate}</p>
            </div>
          </div>
          <div className="flex items-center mb-2">
            {renderStars(review.rating)}
          </div>
          <p className="text-gray-800">{review.reviewText}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewCard;
