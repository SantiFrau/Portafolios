import{j as e,L as s}from"./index-yM5BN1hL.js";import{p as r}from"./proyectos-6pCDgS95.js";function i(){return e.jsx("section",{className:"w-full h95 flex flex-col items-center justify-center fondo-cont gap-3 rounded-lg",children:e.jsx("div",{className:"grid sm:grid-cols-2 grid-cols-1 p-3 m-5 overflow-auto",children:r.map(o=>e.jsx(s,{to:`/Portafolios/proyectos/${o.id}`,children:e.jsxs("div",{className:`${o.color} hover:scale-110 transition duration-200 m-2  flex flex-col items-center justify-center p-3 rounded-lg`,children:[e.jsx("img",{className:"w-56 rounded-lg",src:`/Portafolios/public/media/${o.id}/1.png`,alt:""}),e.jsx("h4",{className:"text-lg font-bold",children:o.name})]})},o.id))})})}export{i as default};
