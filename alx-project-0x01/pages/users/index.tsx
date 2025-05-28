import Header from "@/components/layout/Header";

const UsersPage: React.FC = () => {
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

export default UsersPage;