import React from 'react';

const svgString = `
<g>
  <path d="M425.48,409.57c-0.311,4.02-2.11,7.87-5.08,10.83c-3.25,3.26-7.641,5.119-12.03,5.119c-3.99,0-7.68-1.5-10.41-4.22
    L256,279.33L114.03,421.3c-2.72,2.72-6.41,4.22-10.39,4.22c-4.4,0-8.79-1.859-12.04-5.119c-2.97-2.96-4.77-6.811-5.08-10.83
    c-0.33-4.391,1.19-8.62,4.18-11.601L232.67,256L90.7,114.03c-5.94-5.93-5.53-16,0.9-22.43c3.25-3.26,7.64-5.12,12.04-5.12
    c3.98,0,7.67,1.5,10.4,4.22L256,232.67L397.97,90.7c2.721-2.72,6.41-4.22,10.4-4.22c4.39,0,8.78,1.86,12.03,5.12
    c6.439,6.43,6.84,16.49,0.899,22.43L279.33,256L421.3,397.97C424.29,400.95,425.81,405.18,425.48,409.57z"/>
</g>
`;

const IconRemove = ({ onFilterChange }) => (
  <svg
    onClick={() => onFilterChange([])}
    className="absolute cursor-pointer right-2 top-2 fill-gray-500"
    viewBox="0 0 512 512"
    height="22px"
    width="22px"
    x="0px"
    y="0px"
    dangerouslySetInnerHTML={{ __html: svgString }}
  />
);

export default IconRemove;