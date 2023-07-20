import "./assets/css/styles.css";
import { UserProvider } from "./hook/counter/UserProvider";
import { Home } from "./view/Home";

function App() {
  return (
    <div >
      <UserProvider>
        <Home />
      </UserProvider>
    </div>
  );
}

export default App;
