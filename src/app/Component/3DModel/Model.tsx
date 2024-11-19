"use client";
import React, { Suspense, useState, useEffect, useRef } from "react";

type modelProp = {
  scene: string;
};

const Model = ({ scene }: modelProp) => {
  const LazySpline = React.lazy(() => import("@splinetool/react-spline/next"));

  const [visible, setvisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entites) => {
        entites.forEach((entity) => {
          if (entity.isIntersecting) {
            setvisible(true);
          } else {
            setvisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="w-full lg:w-[850px] flex justify-center lg:justify-end relative h-[500px] sm:h-[600px] lg:h-[800px]"
    >
      {visible && (
        <Suspense
          fallback={
            <div className="flex justify-center items-center mr-40 text-2xl">Model is loading, please wait...</div>
          }
        >
          <LazySpline scene={scene} />
        </Suspense>
      )}
      <div className="absolute bottom-0 right-0 w-40 h-12 bg-black border-none hidden lg:block"></div>
    </div>
  );
};

export default Model;
