import { RefObject, useEffect, useState } from "react";

interface Props {
  trackedNode: RefObject<Element>;
  threshold?: number;
  rootMargin?: string;
}

function useIntersected({ trackedNode, threshold, rootMargin }: Props) {
  const [intersected, setIntersected] = useState({});

  useEffect(() => {
    const current = trackedNode;

    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersected(entry.isIntersecting);
        } else {
          setIntersected(entry.isIntersecting);
        }
      },
      {
        threshold: threshold ? threshold : 0.5,
        rootMargin: rootMargin ? rootMargin : "0px",
      }
    );

    observer.observe(<Element>current.current);

    // return () => {
    //   observer.unobserve(current.current);
    // };
  }, [trackedNode]);

  return intersected;
}

export default useIntersected;
