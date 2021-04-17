import React from 'react';
import styled from 'styled-components';
import { Resume } from '../files';

const logoData = [
  {
    href: 'mailto:tyler.siskar@gmail.com',
    path: {
      d: "M467,61H45C20.218,61,0,81.196,0,106v300c0,24.72,20.128,45,45,45h422c24.72,0,45-20.128,45-45V106 C512,81.28,491.872,61,467,61z M460.786,91L256.954,294.833L51.359,91H460.786z M30,399.788V112.069l144.479,143.24L30,399.788z M51.213,421l144.57-144.57l50.657,50.222c5.864,5.814,15.327,5.795,21.167-0.046L317,277.213L460.787,421H51.213z M482,399.787 L338.213,256L482,112.212V399.787z"
    },
  },
  {
    href: 'https://www.linkedin.com/in/tylersiskar/',
    path: {
      d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
    },
  },
  {
    href: 'http://www.github.com/tylersiskar',
    path: {
      d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    }
  }
];

const StyledLink = styled.a`
  margin-left: 15px;
  display: inline-block;
  :first-child {
    margin-left: 0;
  }
  &:hover {
    cursor: pointer;
    svg path {
      fill: #FB4D3D;
    }
    svg polygon {
      fill: #FB4D3D;
    }
    svg rect {
      fill: #FB4D3D;
    }

  }
`;

const StyledList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

const ResumeIcon = props => {
  return (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" x="0px" y="0px" width="20" height="20" >
    <path d="M485.88,512H26.12V0h293L485.88,161.64ZM44.12,494H467.88V169.26L311.82,18H44.12Z" fill="white"/>
    <polygon points="477.08 174.17 306.66 174.17 306.66 8.96 324.66 8.96 324.66 156.17 477.08 156.17 477.08 174.17" fill="white"/>
    <path d="M170,182a68,68,0,1,1,68-68A68.08,68.08,0,0,1,170,182Zm0-118a50,50,0,1,0,50,50A50.06,50.06,0,0,0,170,64Z" fill="white"/>
    <path d="M257.83,230h-18V209.67a35,35,0,0,0-35-35h-5.17l-6.1-10.46,11.27-6.58v-1l1.6,0,2.67-1.56,1,1.8a53.07,53.07,0,0,1,47.68,52.73Z" fill="white"/>
    <path d="M104.83,230h-18V209.67a53.07,53.07,0,0,1,48.85-52.84l2.87-3.18,13.38,12-8.08,9h-4a35,35,0,0,0-35,35Z" fill="white"/>
    <rect x="87" y="261.5" width="338" height="18"fill="white"/>
    <rect x="87" y="315.83" width="338" height="18"fill="white"/>
    <rect x="87" y="370.17" width="338" height="18"fill="white"/>
    <rect x="87" y="424.5" width="176.67" height="18"fill="white"/>
    </svg>
    )
}

const LogoMenu = props => {
  return(
    <StyledList>
   {logoData.map((item, index) => {
       return (
         <StyledLink key={index} href={logoData[index].href} target="_blank">
           <svg xmlns="http://www.w3.org/2000/svg"  version="1.0" x="0px" y="0px" width="20" height="20" viewBox={index === 1 || index === 2 ? "0 0 24 24" : index === 0 ? "0 0 512 512" : "0 0 200 200"}>    
             <path d={logoData[index].path.d} fill="white"/>
           </svg>
         </StyledLink>  
         )
     })}
     <StyledLink href={Resume} target="_blank">
      <ResumeIcon {...props} />
     </StyledLink>
    </StyledList>
  )
};

export default LogoMenu;