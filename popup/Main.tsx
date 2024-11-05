
import "./main.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import TopicPage from "./pages/TopicPage";
import { ArrowLeft, Youtube } from "lucide-react";
import FeedFilterPage from "./pages/FeedFilterPage";

export default function Main() {
  const location = useLocation();
  return (
    <>
      <header className="headerContainer">
        <div className="headerContent">
          <div className="headerwrapper">
          <div className="headerIcon">
          <Youtube size={32} color="#ababab" strokeWidth={1.25} />
          </div>
          <div className="headerTitle">
            <h3>Feed Enhancer</h3>
          </div>
          </div>
          
          {location.pathname === "/" ? null : (
            <div className="ButtonContainer" >
              <Link  to="/" className="Button ButtonBack"><ArrowLeft size={16} color="#ababab" strokeWidth={3} />Back</Link>
            </div>
          )}
        </div>
      </header>

      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/feedfilter" element={<FeedFilterPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/topic" element={<TopicPage />} />
      </Routes>
      <footer className="footer">
        <div className="footerContainer">
          <p>
            Created by{" "}
            <a href="https://github.com/jagadeeshk" target="_blank">
              Jagadeesh
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
