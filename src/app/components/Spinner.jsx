"use client";

import { PuffLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="spinner mt-60 mb-60">
      <PuffLoader color="#46A9B6" margin={2} size={16} speedMultiplier={1} />
    </div>
  );
}

export default Spinner;
