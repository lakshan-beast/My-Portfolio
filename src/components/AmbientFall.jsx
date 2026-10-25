// import { FaReact, FaGitAlt, FaFigma } from "react-icons/fa";
// import { SiTailwindcss, SiTypescript, SiFramer } from "react-icons/si";

// const items = [
//   { icon: <FaReact />, left: "8%", delay: 0, duration: 14 },
//   { icon: <SiTailwindcss />, left: "22%", delay: 3, duration: 18 },
//   { icon: <SiTypescript />, left: "38%", delay: 6, duration: 16 },
//   { icon: <FaGitAlt />, left: "55%", delay: 1.5, duration: 20 },
//   { icon: <SiFramer />, left: "70%", delay: 4.5, duration: 15 },
//   { icon: <FaFigma />, left: "86%", delay: 7.5, duration: 19 },
//   { icon: null, left: "15%", delay: 2, duration: 12 }, // star
//   { icon: null, left: "45%", delay: 5, duration: 17 },
//   { icon: null, left: "63%", delay: 8, duration: 13 },
//   { icon: null, left: "92%", delay: 3.5, duration: 21 },
//   { icon: null, left: "30%", delay: 9, duration: 15 },
//   { icon: null, left: "78%", delay: 6.5, duration: 18 },
// ];

// export default function AmbientFall() {
//   return (
//     <div
//       className="pointer-events-none absolute inset-0 overflow-hidden"
//       aria-hidden="true">
//       {items.map((item, index) => (
//         <span
//           key={index}
//           className="absolute top-[-10%] animate-fall"
//           style={{
//             left: item.left,
//             animationDelay: `${item.delay}s`,
//             animationDuration: `${item.duration}s`,
//           }}>
//           {item.icon ? (
//             <span className="text-2xl text-violet-brand/25">{item.icon}</span>
//           ) : (
//             <span className="block size-1 rounded-full bg-violet-soft/40" />
//           )}
//         </span>
//       ))}
//     </div>
//   );
// }

import { FaReact, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbSparkles } from "react-icons/tb";

const items = [
  { icon: <FaReact />, left: "8%", delay: 0, duration: 14 },
  { icon: <SiTailwindcss />, left: "22%", delay: 3, duration: 18 },
  { icon: <SiTypescript />, left: "38%", delay: 6, duration: 16 },
  { icon: <FaGitAlt />, left: "55%", delay: 1.5, duration: 20 },
  { icon: <TbSparkles />, left: "70%", delay: 4.5, duration: 15 },
  { icon: <FaFigma />, left: "86%", delay: 7.5, duration: 19 },
  { icon: null, left: "15%", delay: 2, duration: 12 },
  { icon: null, left: "45%", delay: 5, duration: 17 },
  { icon: null, left: "63%", delay: 8, duration: 13 },
  { icon: null, left: "92%", delay: 3.5, duration: 21 },
  { icon: null, left: "30%", delay: 9, duration: 15 },
  { icon: null, left: "78%", delay: 6.5, duration: 18 },
];

export default function AmbientFall() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true">
      {items.map((item, index) => (
        <span
          key={index}
          className="absolute top-[-10%] animate-fall"
          style={{
            left: item.left,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}>
          {item.icon ? (
            <span className="text-2xl text-violet-brand/25">{item.icon}</span>
          ) : (
            <span className="block size-1 rounded-full bg-violet-soft/40" />
          )}
        </span>
      ))}
    </div>
  );
}
