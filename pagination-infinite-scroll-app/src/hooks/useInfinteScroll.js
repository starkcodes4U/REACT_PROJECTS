import { useEffect, useRef } from "react";

const useInfiniteScroll = ({ loading, hasMore, onLoadMore }) => {
  const observer = useRef();
  const loaderRef = useRef();

  useEffect(() => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore) {
        onLoadMore();
      }
    });

    if (loaderRef.current) {
      observer.current.observe(loaderRef.current);
    }

    return () => observer.current?.disconnect();
  }, [loading, hasMore, onLoadMore]);

  return loaderRef;
};

export default useInfiniteScroll;
