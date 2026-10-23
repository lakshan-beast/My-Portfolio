// import { Outlet, useLocation } from "react-router";
// import { useEffect } from "react";
// import { MotionConfig } from "framer-motion";

// import MenuButton from "./MenuButton";
// import Footer from "./Footer";

// export default function Layout() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "instant" });
//   }, [pathname]);

//   return (
//     <MotionConfig reducedMotion="user">
//       <div id="top" className="relative min-h-screen bg-ink text-paper">
//         <Outlet />

//         <MenuButton />
//         <Footer />
//       </div>
//     </MotionConfig>
//   );
// }

import { Analytics } from "@vercel/analytics/react";
import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { MotionConfig } from "framer-motion";

import MenuButton from "./MenuButton";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <MotionConfig reducedMotion="user">
      <div id="top" className="relative min-h-screen bg-ink text-paper">
        <Outlet />

        <MenuButton />
        <Footer />

        <Analytics />
      </div>
    </MotionConfig>
  );
}
