import Header from "@/components/layout/Header";
import React from "react";
import { UserProps } from "@/interfaces";
import { UserCard } from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";

function Users() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Users Page
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Here you can see all users.
          </p>
        </div>
      </main>
    </div>
  );
}
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}


export default Users;
export type { UserProps };
export { default as UserCard } from "@/components/common/UserCard";