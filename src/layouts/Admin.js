import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Footer from "../componets/Footer/Footer";
import Sidebar from "../componets/Sidebar/Sidebar";
import FixedPlugin from "../componets/FixedPlugin/FixedPlugin";
import routes from "../routes.js";
import sidebarImage from "../assets/images/sidebar-3.jpg";
import Header from "../common/header/Header";

function Admin() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <Header />
          <div className="content">
            <Routes>
              {routes.map((prop, key) => {
                if (prop.layout === "/admin") {
                  return (
                    <Route
                      exact
                      path={prop.path}
                      element={<prop.component />}
                      key={key}
                    />
                  );
                }
              })}
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
      <FixedPlugin
        hasImage={hasImage}
        setHasImage={() => setHasImage(!hasImage)}
        color={color}
        setColor={(color) => setColor(color)}
        image={image}
        setImage={(image) => setImage(image)}
      />
    </>
  );
}

export default Admin;
