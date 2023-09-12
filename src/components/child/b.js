"use client"


// import React, { useState } from 'react';

// const Accordion = ({ items }) => {
//   const [activeItem, setActiveItem] = useState(null);

//   const toggleItem = (index) => {
//     if (activeItem === index) {
//       setActiveItem(null);
//     } else {
//       setActiveItem(index);
//     }
//   };

//   return (
//     <div>
//       {items.map((item, index) => (
//         <div key={index}>
//           <div
//             className="flex justify-between  shadow items-center p-4 cursor-pointer"
//             onClick={() => toggleItem(index)}
//           >
//             <span className="text-xl font-semibold">{item.title}</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className={`h-6 w-6 transition-transform transform ${
//                 activeItem === index ? 'rotate-180' : 'rotate-0'
//               }`}
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </div>
//           {activeItem === index && (
//             <div className="bg-white p-4">
//               {item.content}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;


import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeItems, setActiveItems] = useState([]);

  const toggleItem = (index) => {
    if (activeItems.includes(index)) {
      setActiveItems(activeItems.filter((item) => item !== index));
    } else {
      setActiveItems([...activeItems, index]);
    }
  };

  const isItemActive = (index) => activeItems.includes(index);

  return (
    <div>
      {items.map((item, index) => (
        <div className=' border-b border-red' key={index}>
          <div
            className="flex justify-between items-center  rounded-lg shadow p-4 cursor-pointer"
            onClick={() => toggleItem(index)}
          >
            <span className="text-xl font-semibold">{item.title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform transform ${
                isItemActive(index) ? 'rotate-180' : 'rotate-0'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isItemActive(index) && (
            <div className="bg-white p-4">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
