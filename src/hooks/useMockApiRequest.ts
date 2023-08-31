import { useState, useEffect } from "react";
import { statuses, stories } from "../dummyData";
import { Story } from "../types/Story";
import { Status } from "../types/Status";

export const useMockApiRequest = (requestedData: string) => {
  const [data, setData] = useState<Story[] | Status[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      if (requestedData === "statuses") {
        setData(statuses);
      } else if (requestedData === "stories") {
        setData(stories);
      }

      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return { data, isLoading };
};
