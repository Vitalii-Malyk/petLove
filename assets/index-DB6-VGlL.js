import{u as s,t,N as x,j as e,s as h,r as l,a as g,b as p,f as m,C as f}from"./index-l9NxtX84.js";import{P as u,t as b}from"./topScroll-C-sBuuSV.js";import{G as $}from"./iconBase-BgI1sEu4.js";import{T as j}from"./index-BvQ6eaZU.js";const w=o=>{const n=new Date(o),i=n.getDate(),r=n.getMonth()+1,a=n.getFullYear();return`${String(i).padStart(2,"0")}/${String(r).padStart(2,"0")}/${a}`},S=s.li`
  width: 361px;
`,z=s.div`
  width: 361px;
  height: 226px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 28px;
`,v=s.img`
  width: 100%;
  height: 100%;
`,y=s.h3`
  margin-bottom: 14px;
  font-size: ${t.fontSizes.m};
  font-weight: ${t.fontWeight.bold};
  line-height: 1.3;
  letter-spacing: -0.6px;
  color: ${t.colors.black};
`,k=s.p`
  margin-bottom: 28px;
  font-size: ${t.fontSizes.xs};
  font-weight: ${t.fontWeight.medium};
  line-height: 1.25;
  letter-spacing: -0.32px;
  color: ${t.colors.black};
`,N=s.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`,P=s.p`
  font-size: ${t.fontSizes.xs};
  font-weight: ${t.fontWeight.medium};
  line-height: 1.25;
  letter-spacing: -0.32px;
  color: ${t.colors.mediumGrey};
`,W=s(x)`
  margin-bottom: 32px;
  text-decoration: underline;
  font-size: ${t.fontSizes.xs};
  font-weight: ${t.fontWeight.medium};
  line-height: 1.25;
  letter-spacing: -0.32px;
  color: ${t.colors.accent};

  padding: 4px 12px;
  border-radius: 15px;
  border: 1px solid transparent;
  transition: border ${t.transitionTiming};

  &:hover,
  &:focus {
    border: 1px solid ${t.colors.accent};
  }
`,C=({item:o})=>{const{title:n,text:i,imgUrl:r,url:a,date:c}=o;return e.jsxs(S,{children:[e.jsx(z,{children:e.jsx(v,{src:r,alt:n})}),e.jsx(y,{children:n}),e.jsx(k,{children:i}),e.jsxs(N,{children:[e.jsx(P,{children:w(c)}),e.jsx(W,{to:a,target:"_blank",rel:"noopener noreferrer",children:"Read more"})]})]})},D=s.ul`
  margin-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
`,I=({news:o})=>e.jsx(D,{children:o==null?void 0:o.map(n=>e.jsx(C,{item:n},n._id))});function L(o){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"},child:[]}]})(o)}const T=s.form`
  position: relative;

  ${t.mq.tablet} {
    width: 230px;
  }
`,F=s.input`
  width: 100%;
  height: 48px;
  padding: 14px;
  border-radius: 30px;
  border: 1px solid ${t.colors.grey};
  font-size: ${t.fontSizes.xs};
  font-weight: ${t.fontWeight.medium};
  line-height: 1.25;
  letter-spacing: -0.48px;
  color: ${t.colors.black};

  /* ${t.mq.tablet} {
    height: 44px;
    font-size: ${t.fontSizes.m};
    padding: 8px 36px 9px 20px;
  } */
`,q=s.svg`
  width: 18px;
  height: 18px;
  fill: transparent;
  stroke: ${t.colors.black};
`,E=s.button`
  border: none;
  position: absolute;
  background-color: ${t.colors.white};
  bottom: 10px;
  right: 14px;
  cursor: pointer;
  &:hover,
  &:focus {
    scale: 1.05;
  }
`,G=s.button`
  border: none;
  position: absolute;
  background-color: ${t.colors.white};
  bottom: 8px;
  right: 40px;
  cursor: pointer;
  &:hover,
  &:focus {
    scale: 1.05;
  }
`,M=s(L)`
  font-size: 20px;

  ${t.mq.tablet} {
    font-size: 24px;
  }
`,B=({handleSubmit:o,isSearching:n,handleChange:i})=>e.jsxs(T,{onSubmit:o,children:[e.jsx(F,{name:"search",type:"text",onChange:i,placeholder:"Search"}),e.jsx(E,{type:"submit",children:e.jsx(q,{children:e.jsx("use",{href:h+"#icon-search"})})}),!n&&e.jsx(G,{type:"submit",name:"clear",children:e.jsx(M,{})})]}),R=s.section`
  margin: 0 auto;
  padding-top: 64px;
  padding-bottom: 80px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
`,_=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`,O=o=>o.news.newsData,U=o=>o.news.totalPages,K=()=>{const[o,n]=l.useState(1),i=g(),r=p(O),a=p(U),c=d=>{n(d.selected+1),b()};return l.useEffect(()=>{i(m(o))},[i,o]),e.jsx(R,{children:e.jsxs(f,{children:[e.jsxs(_,{children:[e.jsx(j,{name:"News"}),e.jsx(B,{})]}),e.jsx(I,{news:r}),e.jsx(u,{totalPages:a,onPageChange:c})]})})};export{K as default};
