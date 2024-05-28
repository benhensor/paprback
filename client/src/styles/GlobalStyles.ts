import { createGlobalStyle } from 'styled-components';

// Poppins Font Imports
import PoppinsRegularTtf from '../assets/fonts/poppins/Poppins-Regular.ttf';
import PoppinsRegularEot from '../assets/fonts/poppins/Poppins-Regular.eot';
import PoppinsRegularWoff from '../assets/fonts/poppins/Poppins-Regular.woff';
import PoppinsRegularWoff2 from '../assets/fonts/poppins/Poppins-Regular.woff2';
import PoppinsRegularSvg from '../assets/fonts/poppins/Poppins-Regular.svg';
import PoppinsBoldTtf from '../assets/fonts/poppins/Poppins-Bold.ttf';
import PoppinsBoldEot from '../assets/fonts/poppins/Poppins-Bold.eot';
import PoppinsBoldWoff from '../assets/fonts/poppins/Poppins-Bold.woff';
import PoppinsBoldWoff2 from '../assets/fonts/poppins/Poppins-Bold.woff2';
import PoppinsBoldSvg from '../assets/fonts/poppins/Poppins-Bold.svg';
import PoppinsLightTtf from '../assets/fonts/poppins/Poppins-Light.ttf';
import PoppinsLightEot from '../assets/fonts/poppins/Poppins-Light.eot';
import PoppinsLightWoff from '../assets/fonts/poppins/Poppins-Light.woff';
import PoppinsLightWoff2 from '../assets/fonts/poppins/Poppins-Light.woff2';
import PoppinsLightSvg from '../assets/fonts/poppins/Poppins-Light.svg';
import PoppinsThinTtf from '../assets/fonts/poppins/Poppins-Thin.ttf';
import PoppinsThinEot from '../assets/fonts/poppins/Poppins-Thin.eot';
import PoppinsThinWoff from '../assets/fonts/poppins/Poppins-Thin.woff';
import PoppinsThinWoff2 from '../assets/fonts/poppins/Poppins-Thin.woff2';
import PoppinsThinSvg from '../assets/fonts/poppins/Poppins-Thin.svg';
import PoppinsExtraLightTtf from '../assets/fonts/poppins/Poppins-ExtraLight.ttf';
import PoppinsExtraLightEot from '../assets/fonts/poppins/Poppins-ExtraLight.eot';
import PoppinsExtraLightWoff from '../assets/fonts/poppins/Poppins-ExtraLight.woff';
import PoppinsExtraLightWoff2 from '../assets/fonts/poppins/Poppins-ExtraLight.woff2';
import PoppinsExtraLightSvg from '../assets/fonts/poppins/Poppins-ExtraLight.svg';

// Sulphur Point Font Imports
import SulphurPointRegularTtf from '../assets/fonts/sulphur_point/SulphurPoint-Regular.ttf';
import SulphurPointRegularEot from '../assets/fonts/sulphur_point/SulphurPoint-Regular.eot';
import SulphurPointRegularWoff from '../assets/fonts/sulphur_point/SulphurPoint-Regular.woff';
import SulphurPointRegularWoff2 from '../assets/fonts/sulphur_point/SulphurPoint-Regular.woff2';
import SulphurPointRegularSvg from '../assets/fonts/sulphur_point/SulphurPoint-Regular.svg';
import SulphurPointBoldTtf from '../assets/fonts/sulphur_point/SulphurPoint-Bold.ttf';
import SulphurPointBoldEot from '../assets/fonts/sulphur_point/SulphurPoint-Bold.eot';
import SulphurPointBoldWoff from '../assets/fonts/sulphur_point/SulphurPoint-Bold.woff';
import SulphurPointBoldWoff2 from '../assets/fonts/sulphur_point/SulphurPoint-Bold.woff2';
import SulphurPointBoldSvg from '../assets/fonts/sulphur_point/SulphurPoint-Bold.svg';
import SulphurPointLightTtf from '../assets/fonts/sulphur_point/SulphurPoint-Light.ttf';
import SulphurPointLightEot from '../assets/fonts/sulphur_point/SulphurPoint-Light.eot';
import SulphurPointLightWoff from '../assets/fonts/sulphur_point/SulphurPoint-Light.woff';
import SulphurPointLightWoff2 from '../assets/fonts/sulphur_point/SulphurPoint-Light.woff2';
import SulphurPointLightSvg from '../assets/fonts/sulphur_point/SulphurPoint-Light.svg';

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Poppins';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${PoppinsRegularEot});
    src: url(${PoppinsRegularEot}?#iefix) format('embedded-opentype'),
         url(${PoppinsRegularWoff2}) format('woff2'),
         url(${PoppinsRegularWoff}) format('woff'),
         url(${PoppinsRegularTtf}) format('truetype'),
         url(${PoppinsRegularSvg}#PoppinsRegular) format('svg');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: bold;
    font-style: normal;
    font-display: swap;
    src: url(${PoppinsBoldEot});
    src: url(${PoppinsBoldEot}?#iefix) format('embedded-opentype'),
         url(${PoppinsBoldWoff2}) format('woff2'),
         url(${PoppinsBoldWoff}) format('woff'),
         url(${PoppinsBoldTtf}) format('truetype'),
         url(${PoppinsBoldSvg}#PoppinsBold) format('svg');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    src: url(${PoppinsLightEot});
    src: url(${PoppinsLightEot}?#iefix) format('embedded-opentype'),
         url(${PoppinsLightWoff2}) format('woff2'),
         url(${PoppinsLightWoff}) format('woff'),
         url(${PoppinsLightTtf}) format('truetype'),
         url(${PoppinsLightSvg}#PoppinsLight) format('svg');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 100;
    font-style: normal;
    font-display: swap;
    src: url(${PoppinsThinEot});
    src: url(${PoppinsThinEot}?#iefix) format('embedded-opentype'),
         url(${PoppinsThinWoff2}) format('woff2'),
         url(${PoppinsThinWoff}) format('woff'),
         url(${PoppinsThinTtf}) format('truetype'),
         url(${PoppinsThinSvg}#PoppinsThin) format('svg');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 200;
    font-style: normal;
    font-display: swap;
    src: url(${PoppinsExtraLightEot});
    src: url(${PoppinsExtraLightEot}?#iefix) format('embedded-opentype'),
         url(${PoppinsExtraLightWoff2}) format('woff2'),
         url(${PoppinsExtraLightWoff}) format('woff'),
         url(${PoppinsExtraLightTtf}) format('truetype'),
         url(${PoppinsExtraLightSvg}#PoppinsExtraLight) format('svg');
  }

  @font-face {
    font-family: 'SulphurPoint';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${SulphurPointRegularEot});
    src: url(${SulphurPointRegularEot}?#iefix) format('embedded-opentype'),
         url(${SulphurPointRegularWoff2}) format('woff2'),
         url(${SulphurPointRegularWoff}) format('woff'),
         url(${SulphurPointRegularTtf}) format('truetype'),
         url(${SulphurPointRegularSvg}#SulphurPointRegular) format('svg');
  }

  @font-face {
    font-family: 'SulphurPoint';
    font-weight: bold;
    font-style: normal;
    font-display: swap;
    src: url(${SulphurPointBoldEot});
    src: url(${SulphurPointBoldEot}?#iefix) format('embedded-opentype'),
         url(${SulphurPointBoldWoff2}) format('woff2'),
         url(${SulphurPointBoldWoff}) format('woff'),
         url(${SulphurPointBoldTtf}) format('truetype'),
         url(${SulphurPointBoldSvg}#SulphurPointBold) format('svg');
  }

  @font-face {
    font-family: 'SulphurPoint';
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    src: url(${SulphurPointLightEot});
    src: url(${SulphurPointLightEot}?#iefix) format('embedded-opentype'),
         url(${SulphurPointLightWoff2}) format('woff2'),
         url(${SulphurPointLightWoff}) format('woff'),
         url(${SulphurPointLightTtf}) format('truetype'),
         url(${SulphurPointLightSvg}#SulphurPointLight) format('svg');
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f7f7f7;
    color: #333;
    font-size: 1.6rem;
  }

  main {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
  }

  section {
    width: 100%;
    max-width: 120rem;
    text-align: center;
    margin: 15rem auto;
  }

  h1 {
    font-size: clamp(${({ theme }) => theme.fontSizes.xxl}, 5vw, ${({ theme }) => theme.fontSizes.xxxxl});
    font-weight: 300;
    margin-bottom: 5rem;
  }

  h2 {
    font-size: clamp(${({ theme }) => theme.fontSizes.xl}, 3vw, ${({ theme }) => theme.fontSizes.xxxl});
    font-weight: 300;
    margin-bottom: 3rem;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    transition: all .12s ease-in;
  }


  @media only screen and (max-width: 1199px) {
    section {
      padding: 0 1rem;
    }
  }
  /* @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 450px) {
  } */
`;
