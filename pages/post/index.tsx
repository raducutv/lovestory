// pages/subscribe.tsx
import React from "react";
const SubscribePage = () => {
  return (
    <div className="text-center">
      <h1 className="text-xl">Posteaza</h1>
      <form className="mt-10" method="POST" action="/api/subscribe">
        <input
          className="rounded p-2 mt-2 text-xl text-black"
          placeholder="Numele tau"
          name="name"
        />
        <br />
        <textarea
          className="rounded mt-2 p-2 text-xl text-black"
          placeholder="Scrie ceva..."
          name="text"
        />
        <br />

        <button
          className="mt-5 font-bold bg-red-400 rounded px-5 py-2"
          type="submit"
        >
          Posteaza ✅
        </button>
      </form>
    </div>
  );
};
export default SubscribePage;
