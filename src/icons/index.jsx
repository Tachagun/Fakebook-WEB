export function FakebookLogo(props) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={16} cy={16} r={14} fill="url(#a)" />
      <path
        d="M21.214 20.282l.622-3.952h-3.89v-2.563c0-1.081.542-2.136 2.284-2.136H22V8.267S20.395 8 18.86 8c-3.205 0-5.298 1.893-5.298 5.318v3.012H10v3.952h3.562v9.552a14.468 14.468 0 004.383 0v-9.552h3.269z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="a"
          x1={16}
          y1={2}
          x2={16}
          y2={29.917}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#18ACFE" />
          <stop offset={1} stopColor="#0163E0" />
        </linearGradient>
      </defs>
    </svg>
  )
}



export const FakebookTitle = (props) => {
 return (
   <svg
     width="300"
     height="50"
     viewBox="0 0 300 50"
     xmlns="http://www.w3.org/2000/svg"
     {...props}
   >
     <text
       x="0"
       y="40"
       fontFamily="Arial, sans-serif"
       fontSize="40"
       fontWeight="bold"
       fill="#1877F2"
     >
       Fakebook CC20
     </text>
   </svg>
 );
};



export function Loading(props) {
  return (
    <svg
      fill="#000"
      viewBox="0 0 24 24"
      data-name="Flat Color"
      xmlns="http://www.w3.org/2000/svg"
      className={`animate-spin ${props.className || ''}`}
      {...props}
    >
      <path
        d="M12 22a1 1 0 01-1-1v-3a1 1 0 012 0v3a1 1 0 01-1 1zm6.36-2.64a1 1 0 01-.7-.29L15.54 17A1 1 0 1117 15.54l2.12 2.12a1 1 0 010 1.41 1 1 0 01-.76.29zM7.05 18a1 1 0 01-.71-.29 1 1 0 010-1.42l.71-.7A1 1 0 118.46 17l-.7.71a1 1 0 01-.71.29zM21 13h-3a1 1 0 010-2h3a1 1 0 010 2zM6 13H4a1 1 0 010-2h2a1 1 0 010 2zm10.24-4.24a1 1 0 01-.7-1.71l2.12-2.12a1 1 0 111.41 1.41L17 8.46a1 1 0 01-.76.3zm-8.48 0a1 1 0 01-.71-.3L4.93 6.34a1 1 0 011.41-1.41l2.12 2.12a1 1 0 01-.7 1.71zM12 7a1 1 0 01-1-1V3a1 1 0 012 0v3a1 1 0 01-1 1z"
        fill="#000"
      />
    </svg>
  );
}



