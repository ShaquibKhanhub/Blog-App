import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login";
import PostDetails from "./pages/PostDetails.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts/post/:id" element={<PostDetails />} />
          <Route path="create" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
