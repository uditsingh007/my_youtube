import React from "react";

const Sidebar = () => {
  const geners = [
    { title: "Music" },
    { title: "Sports" },
    { title: "Gaming" },
    { title: "Movies" },
  ];
  return (
    <div className="p-5 shadow-lg basis-1/4">
      <h1>Subscriptions</h1>
      <ul>
        {geners.map(({ title }) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
