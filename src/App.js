import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Features from "./components/Feauters/Features";
import Forms from "../src/components/Forms";
import Loading from "../src/components/Loading";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const res = await fetch(
        "https://dummyjson.com/users?skip=0&limit=8"
      ).then((res) => res.json());
      setUsers(res.users);
    };
    FetchData();
  }, []);

  return (
    <div>
      {users ? (
        <div>
          <Header />

          <div id="features">
            <Features users={users} />
          </div>

          <div id="contacts">
            <Forms />
          </div>

          <Footer />
        </div>
      ) : (
        <Loading />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
