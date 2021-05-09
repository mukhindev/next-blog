function Logo() {
  return (
    <svg
      className="logo"
      role="img"
      aria-labelledby="logoTitle logoDesc"
      viewBox="0 0 54 15"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinejoin="round"
    >
      <title id="logoTitle">Логотип Mukhin</title>
      <desc id="logoDesc">Логотип, выполненый контурными линиями</desc>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
      >
        <path d="M31.742 13.041v-7.6M17.456 4.479h4.082M35.144 14.003h4.082M47.322 14.003h4.082M1.808 14.003h10.885M.448 14.003V.397h1.36l5.443 5.442L12.693.397h1.361v13.606h-1.361V2.321L7.251 7.764 1.808 2.321v11.682H.448zM22.898 14.003h-6.803V4.479h1.361v8.164h4.082V4.479h1.36v9.524zM30.78 14.003h.962v-.962l-3.8-3.8 3.8-3.8v-.962h-.962l-4.48 4.48V.397h-1.361v13.606H26.3v-3.12l.68-.68 3.8 3.8zM39.226 14.003h1.361V4.479h-5.443V.397h-1.36v13.606h1.36V5.839h4.082v8.164zM42.628 4.479h1.361v9.524h-1.361zM52.832 4.479v9.524h-1.36V5.839H47.39v8.164h-1.361V4.479h6.803z" />
      </g>
      <style jsx>
        {`
          .logo {
            width: 108px;
            height: 30px;
          }
        `}
      </style>
    </svg>
  );
}

export default Logo;
