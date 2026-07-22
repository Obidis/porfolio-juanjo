import React from 'react';

export function SpainFlag({ size = 22 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 512 512" 
      style={{ borderRadius: '50%', display: 'block', objectFit: 'cover' }}
    >
      <circle cx="256" cy="256" r="256" fill="#c60b1e" />
      <rect x="0" y="128" width="512" height="256" fill="#ffc400" />
    </svg>
  );
}

export function UKFlag({ size = 22 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 512 512" 
      style={{ borderRadius: '50%', display: 'block', objectFit: 'cover' }}
    >
      <g clipPath="url(#uk-clip)">
        <path fill="#012169" d="M0 0h512v512H0z"/>
        <path fill="#fff" d="M512 0v60L326 256l186 196v60h-60L256 326 60 512H0v-60l186-196L0 60V0h60l196 186L452 0z"/>
        <path fill="#c8102e" d="M512 0v24L342 204l28 28L512 60V0zM0 512v-24l170-180-28-28L0 452v60zm512 512h-60L280 342l-28 28L452 512h60zM0 0h60l172 170 28-28L60 0H0z"/>
        <path fill="#fff" d="M192 0h128v512H192zM0 192h512v128H0z"/>
        <path fill="#c8102e" d="M216 0h80v512h-80zM0 216h512v80H0z"/>
      </g>
      <defs>
        <clipPath id="uk-clip">
          <circle cx="256" cy="256" r="256"/>
        </clipPath>
      </defs>
    </svg>
  );
}
