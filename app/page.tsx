"use client";

import { useState } from "react";

// import dynamic from "next/dynamic";
// import HeavyComponent from "./components/HeavyComponent";
// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>

      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;

          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];

          const sorted = _.orderBy(users, ["name"]);

          console.log(sorted);
        }}
      >
        Show
      </button>

      {/* {isVisible && <HeavyComponent />} */}
    </main>
  );
}

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");

//   return {
//     title: product.title,
//     description: "...",
//   };
// }
