import{u as o,t as r,j as e,s,C as a}from"./index-Y9_HngNO.js";import{P as c}from"./index-CKtldw9x.js";import{a as i,F as d,b as p}from"./formik.esm-B9ghsEPK.js";import"./hoist-non-react-statics.cjs-CNjmKvmM.js";const x=o.section`
  margin-bottom: 32px;
`,h=o.div`
  display: flex;
  gap: 32px;
`,g="/petLove/assets/addPetImg-DOXZPNl4.png",b=o.div`
  padding: 60px 80px;
  border-radius: 60px;
  background-color: ${r.colors.white};
`,m=o.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 40px;
`,u=o.h2`
  font-size: ${r.fontSizes.xxl};
  font-weight: ${r.fontWeight.bold};
  line-height: 1;
  letter-spacing: -0.96px;
  color: ${r.colors.black};
`,j=o.p`
  font-size: ${r.fontSizes.xs};
  font-weight: ${r.fontWeight.bold};
  line-height: 1.25;
  color: ${r.colors.semiGrey};
`;o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 86px;
  height: 86px;
  background-color: ${r.colors.beige};
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 12px;
`;o.img`
  width: 100%;
  height: 100%;
`;o.svg`
  width: 44px;
  height: 44px;
  fill: ${r.colors.accent};
`;const f=o.div`
  display: flex;
  gap: 8px;
`,n=o.div`
  span {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  input[type="radio"] {
    /* position: absolute;
    opacity: 0; */
    display: none;
  }

  input[type="radio"] + span {
    position: relative;
    background-color: ${t=>t.backgroundcolor||"transparent"};
  }

  input[type="radio"]:checked + span::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 38px;
    height: 38px;
    border: 2px solid grey;
    border-color: ${t=>t.bordercolor};
    background-color: transparent;
    border-radius: 50%;
    /* border-color: ${t=>t.checkedbordercolor||"transparent"}; */
  }
`,y=o.svg`
  width: 24px;
  height: 24px;
  stroke: ${r.colors.white};
  fill: transparent;
`,k=o.svg`
  width: 24px;
  height: 24px;
  stroke: ${r.colors.blue};
  fill: transparent;
`,v=o.svg`
  width: 24px;
  height: 24px;
  stroke: ${r.colors.accent};
  fill: transparent;
`,$=()=>e.jsxs(f,{children:[e.jsx(n,{backgroundcolor:"#eb1035",bordercolor:"#892d3e",children:e.jsxs("label",{children:[e.jsx(i,{type:"radio",name:"sex",value:"female"}),e.jsx("span",{children:e.jsx(y,{children:e.jsx("use",{href:s+"#icon-female"})})})]})}),e.jsx(n,{backgroundcolor:"rgba(84, 173, 255, 0.1)",bordercolor:"rgba(49, 87, 125, 0.3)",children:e.jsxs("label",{children:[e.jsx(i,{type:"radio",name:"sex",value:"male"}),e.jsx("span",{children:e.jsx(k,{children:e.jsx("use",{href:s+"#icon-male"})})})]})}),e.jsx(n,{backgroundcolor:"#FFF4DF",bordercolor:"#e1c184",children:e.jsxs("label",{children:[e.jsx(i,{type:"radio",name:"sex",value:"mixed"}),e.jsx("span",{children:e.jsx(v,{children:e.jsx("use",{href:s+"#icon-multiple"})})})]})})]}),w={sex:""},F=()=>{const t=l=>{console.log(l)};return e.jsxs(b,{children:[e.jsxs(m,{children:[e.jsx(u,{children:"Add my pet /"}),e.jsx(j,{children:"Personal details"})]}),e.jsx(d,{initialValues:w,onSubmit:t,children:e.jsx(p,{children:e.jsx($,{})})})]})},z=()=>e.jsx(x,{children:e.jsx(a,{children:e.jsxs(h,{children:[e.jsx(c,{img:g}),e.jsx(F,{})]})})});export{z as default};
