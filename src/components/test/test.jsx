import { useEffect } from "react";

export const Test = () => {
  useEffect(() => {
    console.log("mount");

    // cleanup function
    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>Test</div>;
};
