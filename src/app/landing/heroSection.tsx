"use client";
import Hero from "@/app/components/Hero";

const HeroSection = () => {
    const details = { 
        title: "Unlock exponential growth with our next-level digital expertise.",
        subTitle: "Empowering businesses through innovative digital marketing solutions. Your trusted partner in boosting online visibility and growth. Expert services that drive results, one click at a time.",
        CTA1: "Explore Services",
        CTA2: "Read More",
        img: "https://plus.unsplash.com/premium_photo-1683583961436-fa9efb9f72d7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D"
    };

  return (
    <div>
      <Hero 
        title={details.title} 
        subTitle={details.subTitle} 
        CTA1={details.CTA1}
        CTA2={details.CTA2}
        img={details.img}
     />
    </div>
  );
};

export default HeroSection;