import { useEffect, useState } from "react";
import { fetchUsers } from "./services/fetchUsers";
import { User } from "./types";
import { UserCard } from "./components/UserCard";
import { Pagination } from "./components/Pagination";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetchUsers(currentPage);
        setUsers(response || []);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setUsers([]);
        setLoading(false);
      }
    })();
  }, [currentPage]);

  console.log(users, "userF");

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold text-violet-900 pb-8">Employee Data</h1>
      <div className="flex items-center flex-wrap space-y-6 gap-6">
        {users?.map((user) => {
          return <UserCard user={user} />;
        })}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
