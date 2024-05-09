"use client";

import { useRouter } from "next/navigation";

const ShowIds = () => {
  console.log("hello");
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/")}>Click to go back</button>ShowIds
    </div>
  );
};

export default ShowIds;
