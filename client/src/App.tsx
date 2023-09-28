import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { logo } from './assets/logo.svg';
import { Home, CreatePost } from "./pages";
import Header from "./components/Header";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/createpost"} element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
