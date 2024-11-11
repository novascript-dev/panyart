/* React Router */
import { Routes, Route, useLocation } from "react-router-dom";

/* Pages */
import Home from "../pages/Home";
import Queue from "../pages/Queue";
import Prices from "../pages/Prices";

/* Animated Routes */
import { AnimatePresence } from "framer-motion";
import Commissions from "../pages/Prices/components/Commissions";
import RefSheets from "../pages/Prices/components/RefSheets";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/prices" element={<Prices />}>
          <Route path="illustrations" element={<Commissions />} />
          <Route path="refsheets" element={<RefSheets />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
