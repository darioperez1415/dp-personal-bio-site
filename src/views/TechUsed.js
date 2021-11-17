import React from 'react';
import styled from 'styled-components';

const TechUsedStyle = styled.div`
  .container {
    background-color: white;
    display: flex;
    padding: 12%;

  }
`;

export default function TechUsed() {
  return (
    <TechUsedStyle>
      <h5 className="card-title"> Technonlgy </h5>
      <div className="container">
        <>
          <svg
            height="80"
            viewBox="-11.9 -2 1003.9 995.6"
            width="80"
            src="http://www.w3.org/2000/svg"
            className="VisualStudio"
          >
            <path
              d="m12.1 353.9s-24-17.3 4.8-40.4l67.1-60s19.2-20.2 39.5-2.6l619.2 468.8v224.8s-.3 35.3-45.6 31.4z"
              fill="#2489ca"
            />
            <path
              d="m171.7 498.8-159.6 145.1s-16.4 12.2 0 34l74.1 67.4s17.6 18.9 43.6-2.6l169.2-128.3z"
              fill="#1070b3"
            />
            <path
              d="m451.9 500 292.7-223.5-1.9-223.6s-12.5-48.8-54.2-23.4l-389.5 354.5z"
              fill="#0877b9"
            />
            <path
              d="m697.1 976.2c17 17.4 37.6 11.7 37.6 11.7l228.1-112.4c29.2-19.9 25.1-44.6 25.1-44.6v-671.2c0-29.5-30.2-39.7-30.2-39.7l-197.7-95.3c-43.2-26.7-71.5 4.8-71.5 4.8s36.4-26.2 54.2 23.4v887.5c0 6.1-1.3 12.1-3.9 17.5-5.2 10.5-16.5 20.3-43.6 16.2z"
              fill="#3c99d4"
            />
          </svg>
        </>
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="-13.58674873666481 -3.5096047119942106 81.71274873666479 72.05384966725056"
          >
            <path
              d="M57.327 12.44a32 32 0 1 0-5.761 44.88c13.98-10.804 16.56-30.895 5.76-44.88z"
              className="C"
              fill="#ff6c37"
            />
            <path
              d="M42.793 20.388L29.3 33.988l-3.813-3.92c13.28-13.28 14.613-12.08 17.307-9.68z"
              className="D"
              fill="#fff"
            />
            <path
              d="M29.3 34.36a.48.48 0 0 1-.32-.133l-3.84-3.84a.48.48 0 0 1 0-.667c13.093-13.093 14.88-12.48 17.973-9.68a.427.427 0 0 1 .16.347c.02.13-.03.263-.133.347L29.647 34.228a.506.506 0 0 1-.347.133zm-3.147-4.293l3.147 3.147 12.8-12.8a2.88 2.88 0 0 0-3.787-.64c-2.32 1.04-6.053 4.213-12.16 10.293z"
              className="C"
              fill="#ff6c37"
            />
            <path
              d="M33.167 37.748l-3.68-3.76L42.98 20.654c3.627 3.547-1.76 9.467-9.813 17.093z"
              className="D"
              fill="#fff"
            />
            <path
              d="M33.167 38.228a.56.56 0 0 1-.32-.133l-3.76-3.68a.56.56 0 0 1 0-.427.517.517 0 0 1 0-.347L42.58 20.148a.506.506 0 0 1 .693 0 4.136 4.136 0 0 1 1.333 3.173c0 3.6-4.107 8.133-11.093 14.747a.56.56 0 0 1-.347.16zm-2.987-4.24L33.193 37c5.333-5.04 10.427-10.24 10.453-13.76a3.04 3.04 0 0 0-.693-2.053z"
              className="C"
              fill="#ff6c37"
            />
            <path
              d="M25.593 30.148l2.667 2.667a.16.16 0 0 1 0 .24l-5.627 1.2a.533.533 0 0 1-.48-.907l3.28-3.253s.107 0 .16.053z"
              className="D"
              fill="#fff"
            />
            <path
              d="M22.5 34.788a1.04 1.04 0 0 1-.88-.507 1.014 1.014 0 0 1 .187-1.2l3.253-3.28a.64.64 0 0 1 .853 0l2.667 2.667c.158.15.22.377.16.587s-.236.377-.453.427l-5.627 1.2zm2.987-4.053l-3.013 3.013 4.987-1.067zm.24-.24z"
              className="C"
              fill="#ff6c37"
            />
            <path
              d="M49.967 12.894c-1.93-1.862-4.962-1.94-6.986-.183s-2.37 4.773-.794 6.943 4.547 2.778 6.847 1.4l-3.627-3.627z"
              className="D"
              fill="#fff"
            />
            <path
              d="M46.367 22.28a5.65 5.65 0 0 1-5.156-3.508 5.667 5.667 0 0 1 1.2-6.118 5.71 5.71 0 0 1 8 0c.102.086.16.213.16.347a.46.46 0 0 1-.16.347l-4.32 4.08 3.28 3.227a.45.45 0 0 1 .133.4.48.48 0 0 1-.213.347 5.8 5.8 0 0 1-2.933.88zm0-10.347c-1.9.01-3.6 1.153-4.313 2.9s-.325 3.758 1.007 5.1a4.665 4.665 0 0 0 5.173.987l-3.147-3.147a.427.427 0 0 1 0-.667l4.16-4.187a4.785 4.785 0 0 0-2.88-.987z"
              className="C"
              fill="#ff6c37"
            />
            <path
              d="M50.047 12.974l-4.56 4.533 3.627 3.627a5.52 5.52 0 0 0 1.013-.747 5.333 5.333 0 0 0-.08-7.413z"
              className="D"
              fill="#fff"
            />
            <path
              d="M49.033 21.534a.4.4 0 0 1-.32-.133l-3.627-3.627a.427.427 0 0 1 0-.667l4.533-4.453a.48.48 0 0 1 .8 0 5.6 5.6 0 0 1 0 8 4.88 4.88 0 0 1-1.067.853.43.43 0 0 1-.32.027zM46.1 17.428l3.013 3.013a5.12 5.12 0 0 0 .587-.48 4.72 4.72 0 0 0 1.387-3.333 4.58 4.58 0 0 0-1.147-3.04z"
              className="C"
              fill="#ff6c37"
            />
            <path
              d="M43.353 20.948a1.948 1.948 0 0 0-2.667 0L28.607 33l2 2.027 12.773-11.2a1.977 1.977 0 0 0-.027-2.88z"
              className="D"
              fill="#fff"
            />
            <path
              d="M30.5 35.508a.48.48 0 0 1-.32-.133l-2.027-2.027a.48.48 0 0 1 0-.667l12.08-12.027a2.454 2.454 0 0 1 4.187 1.813 2.51 2.51 0 0 1-.827 1.76l-12.773 11.2a.455.455 0 0 1-.32.08zM29.087 33l1.333 1.36 12.533-10.907c.31-.27.495-.656.507-1.067s-.15-.813-.453-1.093a1.493 1.493 0 0 0-2.107 0z"
              className="C"
              fill="#ff6c37"
            />
            <path
              d="M19.247 46.734a.27.27 0 0 0 0 .32l.533 2.32a.688.688 0 0 1-.332.7.65.65 0 0 1-.762-.077l-3.653-3.52L26.42 35h3.947l2.667 2.667a60.54 60.54 0 0 1-13.787 9.067z"
              className="D"
              fill="#fff"
            />
            <path
              d="M19.007 50.654c-.302-.006-.6-.13-.8-.347l-3.493-3.493a.427.427 0 0 1 0-.667L26.18 34.654a.45.45 0 0 1 .24-.133h3.973a.48.48 0 0 1 .32 0l2.667 2.667a.426.426 0 0 1 .133.373.43.43 0 0 1-.16.347l-.213.187a65.33 65.33 0 0 1-13.68 8.773l.507 2.16a1.15 1.15 0 0 1-1.093 1.413zm-3.253-4.187L18.9 49.64a.16.16 0 0 0 .213 0 .16.16 0 0 0 0-.187l-.533-2.32a.744.744 0 0 1 .4-.853 65.56 65.56 0 0 0 13.333-8.587l-2.187-2.187h-3.573zm3.84.48z"
              className="C"
              fill="#ff6c37"
            />
            <path
              d="M12.287 49.214l2.667-2.667 4.107 4.107-6.533-.453a.534.534 0 0 1-.24-.986z"
              className="D"
              fill="#fff"
            />
            <path
              d="M19.14 51.054l-6.507-.453c-.386-.036-.718-.3-.854-.653s-.053-.772.214-1.054l2.667-2.667a.48.48 0 0 1 .667 0l4.08 4.08a.452.452 0 0 1 0 .533.507.507 0 0 1-.267.213zm-6.507-1.493l5.333.347-2.933-2.747z"
              className="C"
              fill="#ff6c37"
            />
            <path
              d="M30.74 35.322l-5.387.827 3.12-3.093z"
              className="D"
              fill="#fff"
            />
            <path
              d="M25.353 36.654a.456.456 0 0 1-.427-.267.45.45 0 0 1 0-.533l3.093-3.12a.506.506 0 0 1 .693 0L30.98 35a.45.45 0 0 1 0 .48.47.47 0 0 1-.373.347l-5.333.827zm3.12-2.907L26.74 35.48l2.987-.453z"
              className="C"
              fill="#ff6c37"
            />
            <path
              d="M30.74 35.32l-3.76.48a.48.48 0 0 1-.453-.8l1.947-1.947z"
              className="D"
              fill="#fff"
            />
            <path
              d="M26.873 36.308a.987.987 0 0 1-.853-.507.96.96 0 0 1 .16-1.147l1.947-1.947a.506.506 0 0 1 .693 0l2.267 2.267a.48.48 0 0 1-.293.827l-3.733.48zm0-.987l2.827-.347-1.253-1.253-1.6 1.6zm23.2-19.28a.4.4 0 0 0-.507-.16.37.37 0 0 0-.186.22.377.377 0 0 0 .026.287c.187.393.135.858-.133 1.2a.338.338 0 0 0-.1.253.38.38 0 0 0 .1.253.29.29 0 0 0 .213 0 .35.35 0 0 0 .347-.107 1.84 1.84 0 0 0 .24-1.947z"
              className="C"
              fill="#ff6c37"
            />
          </svg>
          <>
            <svg
              width="80"
              height="80"
              viewBox="0 0 256 351"
              preserveAspectRatio="xMidYMid"
            >
              <defs>
                <path
                  d="M1.253 280.732l1.605-3.131 99.353-188.518-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188L1.253 280.732z"
                  id="a"
                />
                <filter
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                  filterUnits="objectBoundingBox"
                  id="b"
                >
                  <feGaussianBlur
                    stdDeviation="17.5"
                    in="SourceAlpha"
                    result="shadowBlurInner1"
                  />
                  <feOffset in="shadowBlurInner1" result="shadowOffsetInner1" />
                  <feComposite
                    in="shadowOffsetInner1"
                    in2="SourceAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                    result="shadowInnerInner1"
                  />
                  <feColorMatrix
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                    in="shadowInnerInner1"
                  />
                </filter>
                <path
                  d="M134.417 148.974l32.039-32.812-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109-.53 1.744 31.678 58.556z"
                  id="c"
                />
                <filter
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                  filterUnits="objectBoundingBox"
                  id="d"
                >
                  <feGaussianBlur
                    stdDeviation="3.5"
                    in="SourceAlpha"
                    result="shadowBlurInner1"
                  />
                  <feOffset
                    dx="1"
                    dy="-9"
                    in="shadowBlurInner1"
                    result="shadowOffsetInner1"
                  />
                  <feComposite
                    in="shadowOffsetInner1"
                    in2="SourceAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                    result="shadowInnerInner1"
                  />
                  <feColorMatrix
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                    in="shadowInnerInner1"
                  />
                </filter>
              </defs>
              <path
                d="M0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951L0 282.998z"
                fill="#FFC24A"
              />
              <use fill="#FFA712" fillRule="evenodd" />
              <use filter="url(#b)" />
              <path
                d="M135.005 150.38l32.955-33.75-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86l32.584 60.233z"
                fill="#F4BD62"
              />
              <use fill="#FFA50E" fillRule="evenodd" />
              <use filter="url(#d)" />
              <path
                fill="#F6820C"
                d="M0 282.998l.962-.968 3.496-1.42 128.477-128 1.628-4.431-32.05-61.074z"
              />
              <path
                d="M139.121 347.551l116.275-64.847-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"
                fill="#FDE068"
              />
              <path
                d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006l115.392-64.355z"
                fill="#FCCA3F"
              />
              <path
                d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983 115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847-.285-1.752-115.99 64.689z"
                fill="#EEAB37"
              />
            </svg>
            <>
              <svg
                src="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 999.937 999.937"
              >
                <path
                  d="M0 499.968c0-138.012 48.825-255.843 146.476-353.493C244.125 48.825 361.956 0 499.969 0 637.98
               0 755.811 48.825 853.462 146.475c97.649 97.65 146.475 215.481 146.475 353.493s-48.825 255.843-146.475
               353.493c-97.65 97.65-215.481 146.476-353.493 146.476-138.013 0-255.844-48.825-353.493-146.476C48.825 755.812
               0 637.979 0 499.968zm54.684 0c0 122.389 43.617 227.199 130.851 314.434 87.234 87.233 192.045 130.851 314.434
               130.851 122.388 0 227.199-43.617 314.433-130.851 87.234-87.234 130.851-192.045 130.851-314.434 0-122.388-43.616-227.199-130.851-314.433C727.168 98.301
                622.356 54.684 499.969 54.684c-122.389 0-227.199 43.617-314.434 130.851C98.301 272.769 54.684 377.58 54.684 499.968zm140.617 107.415c-2.604-2.604-2.604-5.208
                 0-7.812 5.207-5.208 11.718-7.161 19.529-5.859 7.812 1.302 12.369 2.604 13.671 3.906 9.114 3.906 19.205 12.694 30.271 26.366 11.066 13.671 19.855 23.11 26.366
                 28.318 31.248 26.04 63.146 27.993 95.696 5.859 2.604-9.114 6.836-16.926 12.694-23.437 5.858-6.51 11.393-11.066 16.601-13.671 5.209-2.604 14.323-6.51
                 27.343-11.718-42.967-3.906-77.795-11.393-104.486-22.46s-47.849-25.063-63.473-41.989c-20.832-23.436-33.527-54.033-38.084-91.791-4.558-37.758-1.628-72.261
                  8.789-103.509 7.812-19.53 18.879-37.106 33.2-52.731-10.416-32.55-8.463-69.657 5.859-111.321 41.664 2.604 79.422 16.926 113.274 42.966 65.1-16.926 132.804-17.577
                   203.111-1.953 9.114-6.51 23.111-14.647 41.989-24.413 18.879-9.765 42.641-15.299 71.285-16.601 5.208 14.322 8.789 31.248 10.742 50.778s.977 37.758-2.929 54.684c29.945
                    31.248 45.569 72.912 46.871 124.992 0 41.664-7.16 76.167-21.482 103.509s-39.711 50.127-76.167 68.354c-24.738 11.719-57.288 18.879-97.65 21.483 18.229 9.114 31.574 18.554
                    40.037 28.319 8.464 9.765 13.997 25.063 16.602 45.895v61.521l1.952 59.566c3.906 6.511 8.464 12.044 13.672 16.602 5.208 4.557 9.765 7.812 13.671 9.765 3.905 1.953 5.208 4.883
                     3.905 8.789-1.302 3.906-6.51 5.859-15.623 5.859-22.135 0-39.711-7.812-52.731-23.437-3.906-6.51-5.859-14.321-5.859-23.436v-93.744c0-10.416-2.604-17.903-7.812-22.46-5.208-4.558-10.416-7.487-15.624-8.789v123.039c0 22.134
                      2.604 36.456 7.812 42.966s8.463 13.021 9.766 19.53c1.302 1.302.325 2.278-2.93 2.929-3.254.65-8.788-.325-16.601-2.929-16.926-3.906-28.644-12.695-35.154-26.366-6.51-13.671-9.765-28.319-9.765-43.943V667.926H488.25v121.086c0
                       15.624-3.256 30.598-9.766 44.919-9.113 18.229-26.04 27.993-50.777 29.295-3.906-1.302-5.859-2.604-5.859-3.905 1.302-1.303 5.208-7.812 11.718-19.53 1.302-2.604 2.93-7.812 4.883-15.624 1.954-7.812 2.93-16.926 2.93-27.342v-123.04c-5.208
                        1.302-10.091 4.231-14.648 8.789s-6.836 12.044-6.836 22.46v93.744c0 9.113-1.953 16.926-5.859 23.436-11.718 15.624-29.295 23.437-52.73 23.437-9.114 0-14.322-1.953-15.624-5.859-1.303-2.604-.977-4.883.977-6.836s4.883-4.232 8.789-6.836c3.906-2.604
                        6.51-4.558 7.812-5.859 5.208-3.906 9.113-9.114 11.718-15.624 3.906-5.208 4.882-18.879 2.929-41.013s-2.279-36.456-.977-42.966c-33.853 11.718-68.355 5.858-103.51-17.577-10.416-10.416-20.832-25.39-31.248-44.919-7.812-14.323-23.436-31.249-46.871-50.779z"
                />
              </svg>
              <>
                <svg
                  fill="none"
                  height="80"
                  width="80"
                  src="http://www.w3.org/2000/svg"
                  viewBox="0 0 124 141.53199999999998"
                >
                  <path
                    d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
                    fill="#e34f26"
                  />
                  <path
                    d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
                    fill="#ef652a"
                  />
                  <path
                    d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
                    fill="#fff"
                  />
                </svg>
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 1052 1052"
                  >
                    <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
                    <path
                      d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6
                    44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399
                    254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
                      fill="#323330"
                    />
                  </svg>
                  <>
                    <svg
                      fill="none"
                      height="80"
                      width="80"
                      src="http://www.w3.org/2000/svg"
                      viewBox="0 0 124 141.53"
                    >
                      <path
                        d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z"
                        fill="#1b73ba"
                      />
                      <path
                        d="M62.468 129.275V12.085l51.064.17-9.106 104.85z"
                        fill="#1c88c7"
                      />
                      <path
                        d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
                        fill="#fff"
                      />
                    </svg>
                    <>
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 512 145"
                        src="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMinYMin meet"
                      >
                        <g fill="#83CD29">
                          <path
                            d="M471.05 51.611c-1.244 0-2.454.257-3.525.863l-33.888 19.57c-2.193 1.264-3.526 3.65-3.526 6.189v39.069c0 2.537 1.333 4.92 3.526 6.187l8.85 5.109c4.3 2.119 5.885 2.086 7.842 2.086 6.366 0 10.001-3.863 10.001-10.576V81.542c0-.545-.472-.935-1.007-.935h-4.245c-.544 0-1.007.39-1.007.935v38.566c0 2.975-3.1
                        5.968-8.13 3.453l-9.21-5.396c-.326-.177-.576-.49-.576-.863v-39.07c0-.37.247-.747.576-.935L470.547 57.8a.998.998 0 0 1 1.007 0l33.817 19.498c.322.194.576.553.576.936v39.069c0 .373-.188.755-.504.935l-33.889 19.498c-.29.173-.69.173-1.007 0l-8.706-5.18a.905.905 0 0 0-.863 0c-2.403 1.362-2.855 1.52-5.109
                        2.302-.555.194-1.398.495.288 1.44l11.368 6.69a6.995 6.995 0 0 0 3.526.936 6.949 6.949 0 0 0 3.525-.935l33.889-19.499c2.193-1.275 3.525-3.65 3.525-6.187v-39.07c0-2.538-1.332-4.92-3.525-6.187l-33.889-19.57c-1.062-.607-2.28-.864-3.525-.864z"
                          />
                          <path
                            d="M480.116 79.528c-9.65 0-15.397 4.107-15.397 10.937 0 7.408 5.704 9.444 14.966 10.36 11.08 1.085 11.943 2.712 11.943 4.893 0 3.783-3.016 5.396-10.144 5.396-8.957 0-10.925-2.236-11.584-6.691-.078-.478-.447-.864-.936-.864h-4.389c-.54 0-1.007.466-1.007 1.008 0 5.703 3.102 12.447 17.916 12.447 10.723
                        0 16.908-4.209 16.908-11.584 0-7.31-4.996-9.273-15.398-10.648-10.51-1.391-11.512-2.072-11.512-4.533 0-2.032.85-4.75 8.634-4.75 6.954 0 9.524 1.5 10.577 6.189.092.44.48.791.935.791h4.39c.27 0 .532-.166.719-.36.184-.207.314-.44.288-.719-.68-8.074-6.064-11.872-16.909-11.872z"
                          />
                        </g>
                        <path
                          d="M271.821.383a2.181 2.181 0 0 0-1.08.287 2.18 2.18 0 0 0-1.079 1.871v55.042c0 .54-.251 1.024-.719 1.295a1.501 1.501 0 0 1-1.511 0l-8.994-5.18a4.31 4.31 0 0 0-4.317 0l-35.903 20.721c-1.342.775-2.158 2.264-2.158 3.814v41.443c0 1.548.817 2.966 2.158 3.741l35.903 20.722a4.3 4.3 0 0 0 4.317 0l35.903-20.722a4.308
                        4.308 0 0 0 2.159-3.741V16.356a4.386 4.386 0 0 0-2.23-3.814L272.9.598c-.335-.187-.707-.22-1.079-.215zM40.861 52.115c-.684.027-1.328.147-1.942.503L3.015 73.34a4.3 4.3 0 0 0-2.158 3.741L.929 132.7c0 .773.399 1.492 1.079 1.87a2.096 2.096 0 0 0 2.159 0l21.297-12.231c1.349-.802 2.23-2.196 2.23-3.742V92.623c0-1.55.815-2.972
                        2.159-3.742l9.065-5.252a4.251 4.251 0 0 1 2.159-.576c.74 0 1.5.185 2.158.576l9.066 5.252a4.296 4.296 0 0 1 2.159 3.742v25.973c0 1.546.89 2.95 2.23 3.742l21.297 12.232a2.096 2.096 0 0 0 2.159 0 2.164 2.164 0 0 0 1.08-1.871l.07-55.618a4.28 4.28 0 0 0-2.158-3.741L43.235 52.618c-.607-.356-1.253-.475-1.942-.503h-.432zm322.624.503c-.75
                        0-1.485.19-2.158.576l-35.903 20.722a4.306 4.306 0 0 0-2.159 3.741V119.1c0 1.559.878 2.971 2.23 3.742l35.616 20.29c1.315.75 2.921.807 4.245.07l21.585-12.015c.685-.38 1.148-1.09 1.151-1.87a2.126 2.126 0 0 0-1.079-1.871l-36.119-20.722c-.676-.386-1.151-1.167-1.151-1.943v-12.95c0-.775.48-1.485 1.151-1.871l11.224-6.476a2.155 2.155 0 0 1
                        2.159 0L375.5 89.96a2.152 2.152 0 0 1 1.08 1.87v10.217a2.15 2.15 0 0 0 1.079 1.87c.673.389 1.487.39 2.158 0L401.331 91.4a4.325 4.325 0 0 0 2.159-3.742v-10c0-1.545-.82-2.966-2.159-3.742l-35.687-20.722a4.279 4.279 0 0 0-2.159-.575zm-107.35 30.939c.188 0 .408.046.576.143l12.304 7.123c.334.193.576.55.576.935v14.246c0 .387-.24.743-.576.936l-12.304
                        7.123a1.088 1.088 0 0 1-1.079 0l-12.303-7.123c-.335-.194-.576-.549-.576-.936V91.758c0-.386.242-.74.576-.935l12.303-7.122a.948.948 0 0 1 .504-.143v-.001z"
                          fill="#404137"
                        />
                        <path
                          d="M148.714 52.402c-.748 0-1.488.19-2.158.576l-35.903 20.65c-1.343.773-2.159 2.265-2.159 3.813v41.443c0 1.55.817 2.966 2.159 3.742l35.903 20.721a4.297 4.297 0 0 0 4.317 0l35.903-20.721a4.308 4.308 0 0 0 2.158-3.742V77.441c0-1.55-.816-3.04-2.158-3.813l-35.903-20.65a4.297 4.297 0 0 0-2.159-.576zM363.413 89.385c-.143
                        0-.302 0-.431.072l-6.907 4.029a.84.84 0 0 0-.432.72v7.914c0 .298.172.571.432.72l6.907 3.957c.259.15.535.15.791 0l6.907-3.958a.846.846 0 0 0 .432-.719v-7.915a.846.846 0 0 0-.432-.719l-6.907-4.03c-.128-.075-.216-.07-.36-.07z"
                          fill="#83CD29"
                        />
                      </svg>
                      <>
                        <svg
                          height="80"
                          viewBox="175.7 78 490.6 436.9"
                          width="80"
                          src="http://www.w3.org/2000/svg"
                        >
                          <g fill="#61dafb">
                            <path
                              d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9
                        11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3
                        63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3
                        49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4
                        66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4
                        33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2
                        2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9
                        7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1
                        3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9
                        3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4
                        23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2
                        60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1
                        67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1
                        22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"
                            />
                            <circle cx="420.9" cy="296.5" r="45.7" />
                          </g>
                        </svg>
                      </>
                    </>
                  </>
                </>
              </>
            </>
          </>
        </>
      </div>
    </TechUsedStyle>
  );
}
