import{u as n,t as i,j as e,a as m,b as f,r as u,i as j,C as b}from"./index-Y9_HngNO.js";import{T as $}from"./index-pMQ5Hx3_.js";import{T as w}from"./Notices.styled-DftjP_R4.js";const k=t=>t&&t.length>0&&"from"in t[0]&&"to"in t[0]?t.map(o=>{const{from:r,to:s}=o;return`${r} - ${s}`}):["Day and night"],W=n.li`
  position: relative;
  display: flex;
  gap: 20px;
  width: 371px;
  height: 196px;
  padding: 40px 40px 40px 20px;
  background-color: ${i.colors.white};
  border-radius: 15px;
  box-shadow: ${i.boxShadow.friends};
`,T=n.div`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 8px;
  font-size: ${i.fontSizes.xxs};
  font-weight: ${i.fontWeight.medium};
  line-height: 1.28571;
  letter-spacing: -0.28px;
  color: ${i.colors.accent};
  border-radius: 30px;
  background-color: ${i.colors.beige};
`,v=n.img`
  width: 90px;
  height: 90px;
`,z=n.div``,F=n.h3`
  margin-bottom: 20px;
  font-size: ${i.fontSizes.m};
  font-weight: ${i.fontWeight.bold};
  line-height: 1.3;
  letter-spacing: -0.8px;
  color: ${i.colors.black};
`,l=n.div`
  display: flex;
  gap: 2px;
  font-size: ${i.fontSizes.xxs};
  font-weight: ${i.fontWeight.medium};
  line-height: 1.28571;
  letter-spacing: -0.28px;
`,p=n.p`
  margin-bottom: 8px;
  color: ${i.colors.mediumGrey};
`,c=n.a`
  margin-bottom: 8px;
  color: ${i.colors.black};
`,S=n.p`
  max-width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,x=n.p`
  margin-bottom: 8px;
  color: ${i.colors.black};
`,y=({item:t})=>{const{title:o,imageUrl:r,email:s,address:d,addressUrl:h,phone:a,workDays:g}=t;return e.jsxs(W,{children:[e.jsx(T,{children:e.jsx("p",{children:k(g)[0]})}),e.jsx(v,{src:r,alt:o}),e.jsxs(z,{children:[e.jsx(F,{children:o}),e.jsxs(l,{children:[e.jsx(p,{children:"Email:"}),s?e.jsx(c,{href:`mailto:${s}`,children:s}):e.jsx(x,{children:"unknown"})]}),e.jsxs(l,{children:[e.jsx(p,{children:"Address:"}),d?e.jsx(c,{href:h,target:"_blank",children:e.jsxs(S,{children:[" ",d]})}):e.jsx(x,{children:"unknown"})]}),e.jsxs(l,{children:[e.jsx(p,{children:"Phone:"}),a?e.jsx(c,{href:`tel:${a}`,children:a}):e.jsx(x,{children:"unknown"})]})]})]})},E=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 28px 20px;
`,I=({friends:t})=>e.jsx(E,{children:t==null?void 0:t.map(o=>e.jsx(y,{item:o},o._id))}),D=t=>t.friends.newsData,L=n.section`
  margin: 0 auto;
  padding-top: 64px;
  padding-bottom: 80px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
`;n.div`
  margin-bottom: 60px;
`;const A=()=>{const t=m(),o=f(D);return u.useEffect(()=>{t(j())},[t]),e.jsx(L,{children:e.jsxs(b,{children:[e.jsx(w,{children:e.jsx($,{name:"Our friends"})}),e.jsx(I,{friends:o})]})})};export{A as default};
