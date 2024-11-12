// src/components/Testimonials.tsx
import { Star } from "lucide-react";
import Image from "next/image";
import test1 from "../assets/eclipse.png";
import test2 from "../assets/Pic.png";
import test3 from "../assets/user.png";
import test4 from "../assets/usser.png";
import test5 from "../assets/ussser.png";

const testimonialData = [
  {
    name: "Ashley Cooper",
    avatar: test1,
    rating: 5,
    review: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.",
    height: "h-[280px]" // Taller card
  },
  {
    name: "Ashley Cooper",
    avatar: test3,
    rating: 5,
    review: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliables.",
    height: "h-[280px]"
  },
  {
    name: "Gabrile Jackson",
    avatar: test4,
    rating: 5,
    review: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.",
    height: "h-[300px]"
  },
  {
    name: "Ashley Cooper",
    avatar: test5,
    rating: 5,
    review: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. Ashley Cooper",
    height: "h-[350px]"
  },
  {
    name: "William Leo",
    avatar: test2,
    rating: 5,
    review: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.",
    height: "h-[300px]"
  },
  {
    name: "Noah Jack",
    avatar: test2,
    rating: 5,
    review: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. ",
    height: "h-[200px]" // Shorter card
  },
];



export const Testimonials = () => {
  return (
    <section className="pt-20 bg-[#F2F4F5] mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-[2.3rem] leading-10 text-center mb-2 font-[family-name:var(--font-poppins)] font-bold">What Our Customers Say</h2>
        <p className=" text-center mb-8 max-w-[45rem] mx-auto py-7">
          Thank you for choosing our services! We appreciate your feedback and are dedicated to delivering the best service.
          Discover what our clients are saying about their experiences us!
        </p>
        <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar.src}
              rating={testimonial.rating}
              review={testimonial.review}
              height={testimonial.height}
            />
          ))}
        </div>
      </div>
    </section>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, avatar, rating, review, height }: {name:string, avatar:string, rating:number, review:string, height:string}) => {
  return (
    <div className={`bg-white rounded-2xl p-6 ${height} relative flex flex-col`}>
      <p className="text-gray-600 text-sm leading-relaxed mb-auto">
        {review}
      </p>
      
      <div className="flex items-center gap-3 mt-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium text-gray-900 text-sm">{name}</h3>
          <div className="flex gap-0.5">
            {[...Array(rating)].map((_, i) => (
              <Star 
                key={i} 
                size={14}
                className="fill-yellow-400 stroke-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};