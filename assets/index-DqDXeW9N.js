import{u as o,t as s,N as j,r as p,k as $,a as v,b as k,d as y,j as e,s as I,B as z,n as E,C as S}from"./index-Y9_HngNO.js";import{T as W}from"./index-pMQ5Hx3_.js";import{A as L,a as P,l as T}from"./pets-DZvLJXqN.js";import{F,a as d,E as x}from"./formik.esm-B9ghsEPK.js";import{c as q,a as m}from"./index.esm-3kk29Q4o.js";import{P as A}from"./index-CKtldw9x.js";import"./iconBase-CeP8eV7K.js";import"./hoist-non-react-statics.cjs-CNjmKvmM.js";const B=o.div`
  padding: 77px 84px;
  border-radius: 60px;
  background-color: ${s.colors.white};
`,C=o.div`
  margin-bottom: 16px;
`,N=o.p`
  font-size: ${s.fontSizes.s};
  font-weight: ${s.fontWeight.medium};
  line-height: 1.222;
  letter-spacing: -0.16px;
  color: ${s.colors.black};
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
    font-size: ${s.fontSizes.xs};
    color: ${s.colors.black};
    font-weight: ${s.fontWeight.medium};
    line-height: 1.25;
    border: 1px solid
      ${i=>i.haserror?s.colors.red:i.hassuccess?s.colors.green:s.colors.lightGrey};
    border-radius: 30px;
    box-sizing: border-box;
    outline: none;
    transition: border-color ${s.transition};

    &:focus {
      border-color: ${s.colors.accent};
    }

    .error {
      border: 1px solid ${s.colors.red};
    }
  }
`,g=o.div`
  color: ${s.colors.red};
  font-size: ${s.fontSizes.xxxs};
  font-weight: ${s.fontWeight.medium};
  line-height: 1.1667;
  letter-spacing: -0.36px;
  margin-top: 4px;
  margin-bottom: 12px;
`,V=o.div`
  color: ${s.colors.green};
  font-size: ${s.fontSizes.xxxs};
  font-weight: ${s.fontWeight.medium};
  line-height: 1.1667;
  letter-spacing: -0.36px;
  margin-top: 4px;
  margin-bottom: 12px;
`,f=o.span`
  position: absolute;
  top: 15px;
  right: ${i=>i.erroriconright?"50px":"16px"};
  font-size: 22px;
  font-size: ${s.fontWeight.bold};
  color: ${s.colors.red};
  display: ${i=>i.haserror?"block":"none"};
`,G=o(L)`
  position: absolute;
  top: 26px;
  right: 16px;
  width: 22px;
  height: 22px;
  fill: ${s.colors.accent};
  transform: translateY(-50%);
`,R=o(P)`
  position: absolute;
  top: 26px;
  right: 16px;
  width: 22px;
  height: 22px;
  fill: ${s.colors.accent};
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
  color: ${s.colors.accent};
  transition: color ${s.transition};

  &:hover,
  :focus {
    color: ${s.colors.beige};
  }
`,Q=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: ${s.fontSizes.xxs};
  font-weight: ${s.fontWeight.medium};
  line-height: 1.428;
  letter-spacing: -0.42px;
  color: ${s.colors.mediumGrey};
`,X=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,Z=q().shape({email:m().matches(X,{message:"Please enter a valid email"}).required("Email is required"),password:m().min(7).required("Required")}),H={email:"",password:""},J=()=>{const[i,u]=p.useState(!1),a=$(),b=v(),l=k(y),w=({email:n,password:t},{resetForm:r})=>{b(E({email:n,password:t})),r()},c=()=>{u(n=>!n)};return p.useEffect(()=>{l&&a("/profile")},[a,l]),e.jsxs(B,{children:[e.jsx(C,{children:e.jsx(W,{name:"Log in"})}),e.jsx(N,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsx(F,{initialValues:H,onSubmit:w,validationSchema:Z,children:({handleSubmit:n,errors:t,touched:r})=>e.jsxs("form",{children:[e.jsxs(O,{children:[e.jsx(h,{haserror:r.email&&t.email,children:e.jsxs("label",{children:[e.jsx(d,{type:"email",name:"email",placeholder:" Email"}),e.jsx(f,{haserror:r.email&&t.email,children:"✕"}),e.jsx(x,{name:"email",component:g})]})}),e.jsx(h,{haserror:r.password&&t.password,hassuccess:r.password&&!t.password,children:e.jsxs("label",{children:[e.jsx(d,{type:i?"text":"password",name:"password",placeholder:" Password"}),i?e.jsx(R,{onClick:c}):e.jsx(G,{onClick:c}),e.jsx(f,{haserror:r.password&&t.password,erroriconright:"true",children:"✕"}),r.password&&!t.password&&e.jsx(V,{children:"Password is secure"}),r.password&&!t.password&&e.jsx(M,{children:e.jsx("use",{href:I+"#icon-check"})}),e.jsx(x,{name:"password",component:g})]})})]}),e.jsx(D,{children:e.jsx(z,{width:"424px",height:"52px",text:"LOG IN",type:"submit",handleClick:n})})]})}),e.jsxs(Q,{children:[e.jsx("p",{children:"Don’t have an account?"}),e.jsx(Y,{to:"/register",children:"Register"})]})]})},K=o.div`
  display: flex;
  gap: 32px;
`,U="/petLove/assets/loginImg-BAXTqO8Q.png",ae=()=>e.jsx(S,{children:e.jsxs(K,{children:[e.jsx(A,{img:U,pet:T}),e.jsx(J,{})]})});export{ae as default};
