import{u as o,t as e,N as S,r as x,a as E,k as I,b as z,d as W,j as s,s as C,B as T,l as R,C as q,m as A}from"./index-iJ6o1YNz.js";import{P as F}from"./index-BJnO59U9.js";import{T as L}from"./index-DtVAxTnY.js";import{A as V,a as N,r as B}from"./pets-wprca5JR.js";import{F as O,a,E as l}from"./formik.esm-Bt1khe7c.js";import{c as G,a as c,b as M}from"./index.esm-DmfE8B3M.js";import"./iconBase-CRn7K6jH.js";import"./hoist-non-react-statics.cjs-MgjmOZ2M.js";const Y=o.div`
  padding: 77px 84px;
  border-radius: 60px;
  background-color: ${e.colors.white};
`,D=o.div`
  margin-bottom: 16px;
`,U=o.p`
  font-size: ${e.fontSizes.s};
  font-weight: ${e.fontWeight.medium};
  line-height: 1.222;
  letter-spacing: -0.16px;
  color: ${e.colors.black};
  margin-bottom: 32px;
`,Z=o.div`
  margin-bottom: 16px;
`,p=o.div`
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
      ${t=>t.haserror?e.colors.red:t.hassuccess?e.colors.green:e.colors.lightGrey};
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
`,d=o.div`
  color: ${e.colors.red};
  font-size: ${e.fontSizes.xxxs};
  font-weight: ${e.fontWeight.medium};
  line-height: 1.1667;
  letter-spacing: -0.36px;
  margin-top: 4px;
  margin-bottom: 12px;
`,H=o.div`
  color: ${e.colors.green};
  font-size: ${e.fontSizes.xxxs};
  font-weight: ${e.fontWeight.medium};
  line-height: 1.1667;
  letter-spacing: -0.36px;
  margin-top: 4px;
  margin-bottom: 12px;
`,m=o.span`
  position: absolute;
  top: 15px;
  right: ${t=>t.erroriconright?"50px":"16px"};
  font-size: 22px;
  font-size: ${e.fontWeight.bold};
  color: ${e.colors.red};
  display: ${t=>t.haserror?"block":"none"};
`,b=o(V)`
  position: absolute;
  top: 26px;
  right: 16px;
  width: 22px;
  height: 22px;
  fill: ${e.colors.accent};
  transform: translateY(-50%);
`,j=o(N)`
  position: absolute;
  top: 26px;
  right: 16px;
  width: 22px;
  height: 22px;
  fill: ${e.colors.accent};
  transform: translateY(-50%);
`,J=o.div`
  display: inline-block;
  margin-top: 16px;
  margin-bottom: 16px;
`,K=o.svg`
  position: absolute;
  top: 15px;
  right: 50px;
  width: 22px;
  height: 22px;
`,Q=o(S)`
  color: ${e.colors.accent};
  transition: color ${e.transition};

  &:hover,
  :focus {
    color: ${e.colors.beige};
  }
`,X=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: ${e.fontSizes.xxs};
  font-weight: ${e.fontWeight.medium};
  line-height: 1.428;
  letter-spacing: -0.42px;
  color: ${e.colors.mediumGrey};
`,_=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,ss=G().shape({name:c().min(3,"Username must be at least 3 characters long").required("Full name is required"),email:c().matches(_,{message:"Please enter a valid email"}).required("Email is required"),password:c().min(7).required("Required"),confirmPassword:c().oneOf([M("password"),null],"Passwords must match").required("Please confirm your password")}),es={name:"",email:"",password:""},os=()=>{const[t,$]=x.useState(!1),[h,P]=x.useState(!1),v=E(),g=I(),f=z(W),u=()=>{$(n=>!n)},w=()=>{P(n=>!n)},y=({name:n,email:r,password:i},{resetForm:k})=>{v(R({name:n,email:r,password:i})),k()};return x.useEffect(()=>{f&&g("/profile")},[g,f]),s.jsxs(Y,{children:[s.jsx(D,{children:s.jsx(L,{name:"Registration"})}),s.jsx(U,{children:"Thank you for your interest in our platform. "}),s.jsx(O,{initialValues:es,onSubmit:y,validationSchema:ss,children:({handleSubmit:n,errors:r,touched:i})=>s.jsxs("form",{onSubmit:n,children:[s.jsxs(Z,{children:[s.jsx(p,{haserror:i.name&&r.name,children:s.jsxs("label",{children:[s.jsx(a,{type:"text",name:"name",placeholder:"Name"}),s.jsx(m,{haserror:i.name&&r.name,children:"✕"}),s.jsx(l,{name:"name",component:d})]})}),s.jsx(p,{haserror:i.email&&r.email,children:s.jsxs("label",{children:[s.jsx(a,{type:"email",name:"email",placeholder:" Email"}),s.jsx(m,{haserror:i.email&&r.email,children:"✕"}),s.jsx(l,{name:"email",component:d})]})}),s.jsx(p,{haserror:i.password&&r.password,hassuccess:i.password&&!r.password,children:s.jsxs("label",{children:[s.jsx(a,{type:t?"text":"password",name:"password",placeholder:" Password"}),t?s.jsx(j,{onClick:u}):s.jsx(b,{onClick:u}),s.jsx(m,{haserror:i.password&&r.password,erroriconright:"true",children:"✕"}),i.password&&!r.password&&s.jsx(H,{children:"Password is secure"}),i.password&&!r.password&&s.jsx(K,{children:s.jsx("use",{href:C+"#icon-check"})}),s.jsx(l,{name:"password",component:d})]})}),s.jsx(p,{haserror:i.confirmPassword&&r.confirmPassword,children:s.jsxs("label",{children:[s.jsx(a,{type:h?"text":"password",name:"confirmPassword",placeholder:"Confirm Password"}),h?s.jsx(j,{onClick:w}):s.jsx(b,{onClick:w}),s.jsx(m,{haserror:i.confirmPassword&&r.confirmPassword,erroriconright:"true",children:"✕"}),s.jsx(l,{name:"confirmPassword",component:d})]})})]}),s.jsx(J,{children:s.jsx(T,{width:"424px",height:"52px",text:"REGISTRATION",type:"submit"})})]})}),s.jsxs(X,{children:[s.jsx("p",{children:"Already have an account?"}),s.jsx(Q,{to:"/login",children:"Login"})]})]})},rs=o.div`
  display: flex;
  gap: 32px;
`,ms=()=>s.jsx(q,{children:s.jsxs(rs,{children:[s.jsx(F,{img:A,pet:B}),s.jsx(os,{})]})});export{ms as default};
