// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TopNav from "./components/TopNav";
import JavaLayout from "./layouts/JavaLayout";
import AWSLayout from "./layouts/AWSLayout";
import Arrays from "./pages/java/Arrays";
import StreamAPI from "./pages/java/StreamAPI";
import Multithreading from "./pages/java/Multithreading";
import EC2 from "./pages/aws/EC2";
import S3 from "./pages/aws/S3";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<Navigate to="/java/StreamAPI" />} />
        
        <Route path="/java/*" element={<JavaLayout />}>
          <Route path="arrays" element={<Arrays />} />
          <Route path="multithreading" element={<Multithreading />} />
          <Route path="streamAPI" element={<StreamAPI />} />
        </Route>

        <Route path="/aws/*" element={<AWSLayout />}>
          <Route path="ec2" element={<EC2 />} />
          <Route path="s3" element={<S3 />} />
        </Route>

        {/* Add more top-level routes like /react, /sql, etc. here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
