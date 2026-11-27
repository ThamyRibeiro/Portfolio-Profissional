export function MolecularScene() {
  return (
    <svg
      viewBox="0 60 600 450"
      fill="none"
      className="h-full w-full"
      role="img"
      aria-label="Composição gráfica de uma molécula de água em vidro azul"
    >
      <defs>
        <radialGradient id="molecule-oxygen" cx=".28" cy=".22" r=".85">
          <stop stopColor="#f1fbff" stopOpacity=".95" />
          <stop offset=".15" stopColor="#c1e9ff" stopOpacity=".8" />
          <stop offset=".42" stopColor="#3f9cdb" stopOpacity=".52" />
          <stop offset=".8" stopColor="#0d477f" stopOpacity=".3" />
          <stop offset="1" stopColor="#9bdaff" stopOpacity=".85" />
        </radialGradient>
        <radialGradient id="molecule-hydrogen" cx=".3" cy=".2" r=".86">
          <stop stopColor="white" stopOpacity=".95" />
          <stop offset=".25" stopColor="#c5edff" stopOpacity=".8" />
          <stop offset=".65" stopColor="#58b0ed" stopOpacity=".18" />
          <stop offset="1" stopColor="#9ddaff" stopOpacity=".75" />
        </radialGradient>
        <linearGradient
          id="molecule-bond"
          x1="160"
          y1="250"
          x2="460"
          y2="370"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#d5f3ff" stopOpacity=".9" />
          <stop offset=".5" stopColor="#408fce" stopOpacity=".3" />
          <stop offset="1" stopColor="#b9e9ff" stopOpacity=".95" />
        </linearGradient>
        <radialGradient id="molecule-halo">
          <stop stopColor="#2f94da" stopOpacity=".32" />
          <stop offset="1" stopColor="#2f94da" stopOpacity="0" />
        </radialGradient>
        <filter id="molecule-blur">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>
      <ellipse cx="300" cy="285" rx="275" ry="250" fill="url(#molecule-halo)" />
      <ellipse
        cx="300"
        cy="464"
        rx="215"
        ry="28"
        fill="#62bdff"
        fillOpacity=".13"
        filter="url(#molecule-blur)"
      />
      <ellipse
        cx="300"
        cy="464"
        rx="190"
        ry="18"
        stroke="#84d1ff"
        strokeOpacity=".18"
      />
      <path
        d="M85 260C44 186 125 77 289 70C439 63 558 160 525 282"
        stroke="#91ceff"
        strokeOpacity=".16"
      />
      <path
        d="M94 283C152 415 426 482 522 347"
        stroke="#91ceff"
        strokeOpacity=".2"
      />
      <circle cx="85" cy="260" r="4" fill="#a5d6ff" />
      <circle cx="525" cy="282" r="3" fill="#a5d6ff" />
      <path
        d="M239 274L173 331M361 274L427 331"
        stroke="#153d68"
        strokeWidth="34"
        strokeLinecap="round"
      />
      <path
        d="M239 268L173 325M361 268L427 325"
        stroke="url(#molecule-bond)"
        strokeWidth="25"
        strokeLinecap="round"
      />
      <path
        d="M235 262L169 319M365 262L431 319"
        stroke="#d7f3ff"
        strokeOpacity=".75"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle
        cx="300"
        cy="218"
        r="105"
        fill="url(#molecule-oxygen)"
        stroke="var(--scene-rim)"
        strokeOpacity=".6"
        strokeWidth="1.3"
      />
      <ellipse
        cx="273"
        cy="155"
        rx="44"
        ry="17"
        transform="rotate(-28 273 155)"
        fill="white"
        fillOpacity=".55"
      />
      <path
        d="M213 211C218 274 269 318 330 307"
        stroke="#c7efff"
        strokeOpacity=".6"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle
        cx="131"
        cy="362"
        r="68"
        fill="url(#molecule-hydrogen)"
        stroke="var(--scene-rim)"
        strokeOpacity=".65"
      />
      <ellipse
        cx="111"
        cy="326"
        rx="25"
        ry="10"
        transform="rotate(-30 111 326)"
        fill="white"
        fillOpacity=".6"
      />
      <circle
        cx="469"
        cy="362"
        r="68"
        fill="url(#molecule-hydrogen)"
        stroke="var(--scene-rim)"
        strokeOpacity=".65"
      />
      <ellipse
        cx="449"
        cy="326"
        rx="25"
        ry="10"
        transform="rotate(-30 449 326)"
        fill="white"
        fillOpacity=".6"
      />
      <g fill="var(--scene-label)" fontFamily="sans-serif" textAnchor="middle">
        <text x="300" y="240" fontSize="60" fontWeight="300" opacity=".85">
          O
        </text>
        <text x="131" y="377" fontSize="38" fontWeight="300" opacity=".85">
          H
        </text>
        <text x="469" y="377" fontSize="38" fontWeight="300" opacity=".85">
          H
        </text>
      </g>
      <circle
        cx="490"
        cy="122"
        r="12"
        fill="url(#molecule-hydrogen)"
        stroke="#a5d6ff"
        strokeOpacity=".5"
      />
      <circle cx="125" cy="127" r="6" fill="url(#molecule-hydrogen)" />
      <path
        d="M63 116H81M72 107V125M525 434H543M534 425V443"
        stroke="#a5d6ff"
        strokeOpacity=".4"
      />
    </svg>
  );
}
