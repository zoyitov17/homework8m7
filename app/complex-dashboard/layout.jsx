import React from "react";

export default function Layout({ users, statistics, children, products }) {
  return (
    <div className="flex min-h-screen">
      {children}
      <div className="flex-1 h-[100vh] flex flex-col">
        {users}
        {statistics}
      </div>
      {products}
    </div>
  );
}
