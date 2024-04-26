import React from "react";

const Spinner = ({styles}) => {
  return (
    <div
      className={`${styles} animate-spin inline-block m-auto w-8 h-8 border-[3px] border-current border-t-transparent text-yellow rounded-full`}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
