import React, { useState, useEffect, useRef } from "react";
import getTrendingTerms from "services/getTrendingTermsService";
import Category from "../Category";

function TrendingSearches() {
  const [trends, setTrends] = useState([]);
  useEffect(function () {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Category name="Tendencias" options={trends} />;
}

export default function LazyTrending() {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(function () {
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    Promise.resolve(
      typeof IntersectionObserver != "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: "100px",
      });
      observer.observe(elementRef.current);
    });

    return () => observer.disconnect();
  });
  return <div ref={elementRef}>{show ? <TrendingSearches /> : null}</div>;
}
