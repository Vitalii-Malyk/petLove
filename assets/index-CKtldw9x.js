import{u as o,t,j as e}from"./index-Y9_HngNO.js";const a=o.div`
  position: absolute;
  left: 61px;
  bottom: 97px;
  width: 294px;
  height: 121px;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  background-color: ${t.colors.white};
  border-radius: 20px;
  z-index: 10;
`,l=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  background-color: ${t.colors.beige};
  border-radius: 50%;
`,p=o.img`
  width: 32px;
  height: 32px;
`,x=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`,d=o.p`
  font-size: ${t.fontSizes.xs};
  font-weight: ${t.fontWeight.bold};
  line-height: 1.25;
  letter-spacing: -0.48px;
  color: ${t.colors.accent};
`,g=o.p`
  font-size: ${t.fontSizes.xxxs};
  font-weight: ${t.fontWeight.medium};
  line-height: 1.16667;
  letter-spacing: -0.24px;
  color: ${t.colors.mediumGrey};
`,h=o.span`
  color: ${t.colors.black};
`,f=o.p`
  font-size: ${t.fontSizes.xxxs};
  font-weight: ${t.fontWeight.medium};
  line-height: 1.16667;
  letter-spacing: -0.24px;
  color: ${t.colors.darkGrey};
`,m=({pet:i})=>{const{avatar:n,name:s,birthday:r,description:c}=i;return e.jsxs(a,{children:[e.jsx(l,{children:e.jsx(p,{src:n,alt:"Avatar"})}),e.jsxs("div",{children:[e.jsxs(x,{children:[e.jsx(d,{children:s}),e.jsxs(g,{children:["Birthday: ",e.jsx(h,{children:r})]})]}),e.jsx(f,{children:c})]})]})},u="/petLove/assets/rectangle-CEqwXGS_.png",b=o.div`
  position: relative;
  background-color: ${t.colors.accent};
  background-image: url(${u});
  background-repeat: no-repeat;
  background-position: center bottom;
  width: 592px;
  height: 654px;
  border-radius: 60px;
`,j=o.img`
  position: absolute;
  bottom: 0;
  left: 30px;
`,v=({img:i,pet:n=null})=>e.jsxs(b,{children:[e.jsx(j,{src:i,alt:"Pet"}),n&&e.jsx(m,{pet:n})]});export{v as P};
