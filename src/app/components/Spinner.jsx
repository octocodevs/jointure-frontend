"use client";

import { BeatLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="spinner mt-20 mb-60">
      <BeatLoader color="#06ABDC" margin={2} size={20} speedMultiplier={1} />
    </div>
  );
}

export default Spinner;
