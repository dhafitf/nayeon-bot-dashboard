import { AiFillSetting, AiFillEye } from "react-icons/ai";
import { FaBookOpen, FaChartBar, FaTiktok, FaYoutube } from "react-icons/fa";
import { BsChatRightDotsFill } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { VscListSelection } from "react-icons/vsc";

const VliveIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="14.000000pt" height="14.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fafafa" stroke="none">
        <path d="M944 5100 c-305 -80 -514 -350 -514 -665 0 -117 1 -119 219 -817 100 -318 181 -580 181 -583 0 -3 -20 -5 -44 -5 -52 0 -101 -30 -130 -80 -20 -34 -21 -52 -24 -535 -4 -713 11 -900 94 -1154 180 -548 611 -984 1156 -1166 611 -204 1278 -69 1770 360 234 203 434 506 532 806 33 100 76 294 76 341 0 11 20 42 44 68 24 26 54 66 66 89 12 24 87 235 167 469 125 370 145 438 150 507 10 149 -31 260 -137 365 -123 123 -264 162 -455 124 l-30 -5 0 88 c-1 188 -95 358 -260 470 -95 64 -272 103 -382 85 -29 -5 -53 -6 -53 -3 0 3 31 98 70 211 45 135 73 232 79 285 47 392 -241 738 -635 762 -262 16 -528 -137 -642 -370 -17 -34 -83 -217 -147 -407 -64 -190 -120 -351 -124 -358 -4 -7 -54 138 -115 335 -130 424 -158 485 -271 599 -66 66 -98 89 -175 128 -155 76 -316 96 -466 56z m308 -333 c75 -37 129 -86 163 -148 16 -29 110 -315 211 -642 101 -323 191 -603 201 -620 52 -89 222 -87 268 4 9 17 108 301 220 631 223 658 231 676 328 742 179 121 416 65 515 -121 39 -74 54 -155 42 -226 -4 -29 -99 -321 -210 -648 -112 -327 -216 -634 -232 -682 -24 -71 -34 -88 -47 -83 -9 3 -43 15 -76 28 l-60 23 -705 5 -704 5 -205 650 -204 650 -1 100 c-1 83 3 108 21 147 22 49 87 125 135 159 91 65 238 76 340 26z m2317 -1233 c61 -18 123 -70 154 -128 16 -31 21 -58 21 -111 0 -65 -17 -118 -212 -689 -137 -401 -221 -631 -237 -652 -14 -18 -40 -44 -58 -57 -124 -92 -306 -44 -374 99 -15 31 -15 32 31 88 117 144 161 322 122 490 l-14 59 52 146 c29 80 87 252 130 382 42 129 88 253 102 275 30 47 76 81 136 99 57 18 84 18 147 -1z m729 -634 c44 -27 72 -76 72 -126 0 -26 -50 -189 -141 -455 -162 -479 -163 -480 -266 -486 -46 -3 -65 0 -91 17 -34 21 -71 87 -72 127 0 28 274 836 297 876 37 63 136 86 201 47z m-1727 -218 c152 -79 186 -280 69 -401 -77 -79 -54 -75 -530 -81 -402 -5 -427 -6 -459 -25 -56 -33 -76 -68 -76 -135 0 -65 18 -99 73 -136 24 -17 51 -22 134 -26 160 -9 255 -53 323 -152 56 -82 76 -159 84 -321 7 -152 18 -187 73 -228 41 -31 118 -34 166 -7 70 39 82 75 82 242 0 172 -19 261 -80 382 -22 44 -39 81 -37 82 1 1 39 4 85 5 l84 3 31 -59 c92 -173 299 -295 498 -295 153 0 276 50 391 158 61 58 67 61 73 41 4 -12 35 -50 69 -84 70 -69 148 -111 238 -129 58 -11 59 -11 52 -41 -15 -75 -69 -219 -119 -320 -265 -531 -827 -863 -1410 -831 -686 37 -1250 518 -1396 1190 -30 135 -38 304 -39 774 l0 422 784 0 784 0 53 -28z" />
      </g>
    </svg>
  );
};

const sidebarMenu = [
  {
    category: "general",
    items: [
      {
        icon: <AiFillEye />,
        label: "Overview",
        link: "",
        disable: false,
      },
      {
        icon: <AiFillSetting />,
        label: "Server Settings",
        link: "settings",
        disable: false,
      },
    ],
  },
  {
    category: "message settings",
    items: [
      {
        icon: <BsChatRightDotsFill />,
        label: "Auto Response",
        link: "response",
        disable: true,
      },
      {
        icon: <FaBookOpen />,
        label: "Embed Messages",
        link: "embeds",
        disable: true,
      },
    ],
  },
  {
    category: "modules",
    items: [
      {
        icon: <IoLogoInstagram />,
        label: "Instagram",
        link: "instagram",
        disable: false,
      },
      {
        icon: <FaYoutube />,
        label: "Youtube",
        link: "youtube",
        disable: false,
      },
      {
        icon: <FaTiktok />,
        label: "Tiktok",
        link: "tiktok",
        disable: false,
      },
      {
        icon: <VliveIcon />,
        label: "Vlive",
        link: "vlive",
        disable: false,
      },
    ],
  },
  {
    category: "other",
    items: [
      {
        icon: <FaChartBar />,
        label: "Leveling",
        link: "leveling",
        disable: true,
      },
      {
        icon: <VscListSelection />,
        label: "Logs",
        link: "logs",
        disable: true,
      },
    ],
  },
];

export default sidebarMenu;
