import{u as o,t as e,N as j,r as p,k as $,a as v,b as k,d as y,j as s,s as I,B as z,n as E,C as S}from"./index-l9NxtX84.js";import{T as W}from"./index-BvQ6eaZU.js";import{A as L,a as P,l as T}from"./pets-CAZQwPc0.js";import{F,a as d,E as x}from"./formik.esm-BGBxsEyj.js";import{c as q,a as m}from"./index.esm-DLZeDAFe.js";import{P as A}from"./index-Cb1ELDTe.js";import"./iconBase-BgI1sEu4.js";import"./hoist-non-react-statics.cjs-1kEXkMD-.js";const B=o.div`
  padding: 77px 84px;
  border-radius: 60px;
  background-color: ${e.colors.white};
`,C=o.div`
  margin-bottom: 16px;
`,N=o.p`
  font-size: ${e.fontSizes.s};
  font-weight: ${e.fontWeight.medium};
  line-height: 1.222;
  letter-spacing: -0.16px;
  color: ${e.colors.black};
  margin-bottom: 32px;
`,O=o.div`
  margin-bottom: 16px;
`,h=o.div`
  margin-bottom: 16px;
  max-width: 424px;
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: 16px;
    font-size: ${e.fontSizes.xs};
    color: ${e.colors.black};
    font-weight: ${e.fontWeight.medium};
    line-height: 1.25;
    border: 1px solid
      ${i=>i.haserror?e.colors.red:i.hassuccess?e.colors.green:e.colors.lightGrey};
    border-radius: 30px;
    box-sizing: border-box;
    outline: none;
    transition: border-color ${e.transition};

    &:focus {
      border-color: ${e.colors.accent};
    }

    .error {
      border: 1px solid ${e.colors.red};
    }
  }
`,g=o.div`
  color: ${e.colors.red};
  font-size: ${e.fontSizes.xxxs};
  font-weight: ${e.fontWeight.medium};
  line-height: 1.1667;
  letter-spacing: -0.36px;
  margin-top: 4px;
  margin-bottom: 12px;
`,V=o.div`
  color: ${e.colors.green};
  font-size: ${e.fontSizes.xxxs};
  font-weight: ${e.fontWeight.medium};
  line-height: 1.1667;
  letter-spacing: -0.36px;
  margin-top: 4px;
  margin-bottom: 12px;
`,f=o.span`
  position: absolute;
  top: 15px;
  right: ${i=>i.erroriconright?"50px":"16px"};
  font-size: 22px;
  font-size: ${e.fontWeight.bold};
  color: ${e.colors.red};
  display: ${i=>i.haserror?"block":"none"};
`,G=o(L)`
  position: absolute;
  top: 26px;
  right: 16px;
  width: 22px;
  height: 22px;
  fill: ${e.colors.accent};
  transform: translateY(-50%);
`,R=o(P)`
  position: absolute;
  top: 26px;
  right: 16px;
  width: 22px;
  height: 22px;
  fill: ${e.colors.accent};
  transform: translateY(-50%);
`,D=o.div`
  display: inline-block;
  margin-top: 16px;
  margin-bottom: 48px;
`,M=o.svg`
  position: absolute;
  top: 15px;
  right: 50px;
  width: 22px;
  height: 22px;
`,Y=o(j)`
  color: ${e.colors.accent};
  transition: color ${e.transition};

  &:hover,
  :focus {
    color: ${e.colors.beige};
  }
`,Q=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: ${e.fontSizes.xxs};
  font-weight: ${e.fontWeight.medium};
  line-height: 1.428;
  letter-spacing: -0.42px;
  color: ${e.colors.mediumGrey};
`,X=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,Z=q().shape({email:m().matches(X,{message:"Please enter a valid email"}).required("Email is required"),password:m().min(7).required("Required")}),H={email:"",password:""},J=()=>{const[i,u]=p.useState(!1),a=$(),b=v(),l=k(y),w=({email:n,password:t},{resetForm:r})=>{b(E({email:n,password:t})),r()},c=()=>{u(n=>!n)};return p.useEffect(()=>{l&&a("/profile")},[a,l]),s.jsxs(B,{children:[s.jsx(C,{children:s.jsx(W,{name:"Log in"})}),s.jsx(N,{children:"Welcome! Please enter your credentials to login to the platform:"}),s.jsx(F,{initialValues:H,onSubmit:w,validationSchema:Z,children:({handleSubmit:n,errors:t,touched:r})=>s.jsxs("form",{children:[s.jsxs(O,{children:[s.jsx(h,{haserror:r.email&&t.email,children:s.jsxs("label",{children:[s.jsx(d,{type:"email",name:"email",placeholder:" Email"}),s.jsx(f,{haserror:r.email&&t.email,children:"✕"}),s.jsx(x,{name:"email",component:g})]})}),s.jsx(h,{haserror:r.password&&t.password,hassuccess:r.password&&!t.password,children:s.jsxs("label",{children:[s.jsx(d,{type:i?"text":"password",name:"password",placeholder:" Password"}),i?s.jsx(R,{onClick:c}):s.jsx(G,{onClick:c}),s.jsx(f,{haserror:r.password&&t.password,erroriconright:"true",children:"✕"}),r.password&&!t.password&&s.jsx(V,{children:"Password is secure"}),r.password&&!t.password&&s.jsx(M,{children:s.jsx("use",{href:I+"#icon-check"})}),s.jsx(x,{name:"password",component:g})]})})]}),s.jsx(D,{children:s.jsx(z,{width:"424px",height:"52px",text:"LOG IN",type:"submit",handleClick:n})})]})}),s.jsxs(Q,{children:[s.jsx("p",{children:"Don’t have an account?"}),s.jsx(Y,{to:"/register",children:"Register"})]})]})},K=o.div`
  display: flex;
  gap: 32px;
`,U="/assets/loginImg-BAXTqO8Q.png",as=()=>s.jsx(S,{children:s.jsxs(K,{children:[s.jsx(A,{img:U,pet:T}),s.jsx(J,{})]})});export{as as default};
