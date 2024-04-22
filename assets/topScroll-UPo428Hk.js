import{r as ue,g as ge,h as de,u as fe,t as C,j as $,s as oe}from"./index-Y9_HngNO.js";var le={exports:{}};(function(Y,te){(function(ne,Q){Y.exports=Q(ue)})(ge,ne=>(()=>{var Q={703:(u,g,x)=>{var a=x(414);function H(){}function J(){}J.resetWarningCache=H,u.exports=function(){function m(ie,R,U,F,se,G){if(G!==a){var W=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw W.name="Invariant Violation",W}}function w(){return m}m.isRequired=m;var q={array:m,bigint:m,bool:m,func:m,number:m,object:m,string:m,symbol:m,any:m,arrayOf:w,element:m,elementType:m,instanceOf:w,node:m,objectOf:w,oneOf:w,oneOfType:w,shape:w,exact:w,checkPropTypes:J,resetWarningCache:H};return q.PropTypes=q,q}},697:(u,g,x)=>{u.exports=x(703)()},414:u=>{u.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:u=>{u.exports=ne}},re={};function v(u){var g=re[u];if(g!==void 0)return g.exports;var x=re[u]={exports:{}};return Q[u](x,x.exports,v),x.exports}v.n=u=>{var g=u&&u.__esModule?()=>u.default:()=>u;return v.d(g,{a:g}),g},v.d=(u,g)=>{for(var x in g)v.o(g,x)&&!v.o(u,x)&&Object.defineProperty(u,x,{enumerable:!0,get:g[x]})},v.o=(u,g)=>Object.prototype.hasOwnProperty.call(u,g),v.r=u=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})};var X={};return(()=>{v.r(X),v.d(X,{default:()=>ce});var u=v(98),g=v.n(u),x=v(697),a=v.n(x);function H(){return H=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},H.apply(this,arguments)}var J=function(n){var i=n.pageClassName,o=n.pageLinkClassName,l=n.page,D=n.selected,_=n.activeClassName,E=n.activeLinkClassName,t=n.getEventListener,e=n.pageSelectedHandler,p=n.href,r=n.extraAriaContext,s=n.pageLabelBuilder,c=n.rel,f=n.ariaLabel||"Page "+l+(r?" "+r:""),h=null;return D&&(h="page",f=n.ariaLabel||"Page "+l+" is your current page",i=i!==void 0?i+" "+_:_,o!==void 0?E!==void 0&&(o=o+" "+E):o=E),g().createElement("li",{className:i},g().createElement("a",H({rel:c,role:p?void 0:"button",className:o,href:p,tabIndex:D?"-1":"0","aria-label":f,"aria-current":h,onKeyPress:e},t(e)),s(l)))};J.propTypes={pageSelectedHandler:a().func.isRequired,selected:a().bool.isRequired,pageClassName:a().string,pageLinkClassName:a().string,activeClassName:a().string,activeLinkClassName:a().string,extraAriaContext:a().string,href:a().string,ariaLabel:a().string,page:a().number.isRequired,getEventListener:a().func.isRequired,pageLabelBuilder:a().func.isRequired,rel:a().string};const m=J;function w(){return w=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},w.apply(this,arguments)}var q=function(n){var i=n.breakLabel,o=n.breakAriaLabel,l=n.breakClassName,D=n.breakLinkClassName,_=n.breakHandler,E=n.getEventListener,t=l||"break";return g().createElement("li",{className:t},g().createElement("a",w({className:D,role:"button",tabIndex:"0","aria-label":o,onKeyPress:_},E(_)),i))};q.propTypes={breakLabel:a().oneOfType([a().string,a().node]),breakAriaLabel:a().string,breakClassName:a().string,breakLinkClassName:a().string,breakHandler:a().func.isRequired,getEventListener:a().func.isRequired};const ie=q;function R(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n??i}function U(n){return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},U(n)}function F(){return F=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},F.apply(this,arguments)}function se(n,i){for(var o=0;o<i.length;o++){var l=i[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}function G(n,i){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,l){return o.__proto__=l,o},G(n,i)}function W(n,i){if(i&&(U(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return k(n)}function k(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Z(n){return Z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},Z(n)}function y(n,i,o){return i in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n}var ee=function(n){(function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&G(t,e)})(E,n);var i,o,l,D,_=(l=E,D=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,e=Z(l);if(D){var p=Z(this).constructor;t=Reflect.construct(e,arguments,p)}else t=e.apply(this,arguments);return W(this,t)});function E(t){var e,p;return function(r,s){if(!(r instanceof s))throw new TypeError("Cannot call a class as a function")}(this,E),y(k(e=_.call(this,t)),"handlePreviousPage",function(r){var s=e.state.selected;e.handleClick(r,null,s>0?s-1:void 0,{isPrevious:!0})}),y(k(e),"handleNextPage",function(r){var s=e.state.selected,c=e.props.pageCount;e.handleClick(r,null,s<c-1?s+1:void 0,{isNext:!0})}),y(k(e),"handlePageSelected",function(r,s){if(e.state.selected===r)return e.callActiveCallback(r),void e.handleClick(s,null,void 0,{isActive:!0});e.handleClick(s,null,r)}),y(k(e),"handlePageChange",function(r){e.state.selected!==r&&(e.setState({selected:r}),e.callCallback(r))}),y(k(e),"getEventListener",function(r){return y({},e.props.eventListener,r)}),y(k(e),"handleClick",function(r,s,c){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},h=f.isPrevious,O=h!==void 0&&h,M=f.isNext,K=M!==void 0&&M,I=f.isBreak,L=I!==void 0&&I,j=f.isActive,A=j!==void 0&&j;r.preventDefault?r.preventDefault():r.returnValue=!1;var T=e.state.selected,d=e.props.onClick,N=c;if(d){var P=d({index:s,selected:T,nextSelectedPage:c,event:r,isPrevious:O,isNext:K,isBreak:L,isActive:A});if(P===!1)return;Number.isInteger(P)&&(N=P)}N!==void 0&&e.handlePageChange(N)}),y(k(e),"handleBreakClick",function(r,s){var c=e.state.selected;e.handleClick(s,r,c<r?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),y(k(e),"callCallback",function(r){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:r})}),y(k(e),"callActiveCallback",function(r){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:r})}),y(k(e),"getElementPageRel",function(r){var s=e.state.selected,c=e.props,f=c.nextPageRel,h=c.prevPageRel,O=c.selectedPageRel;return s-1===r?h:s===r?O:s+1===r?f:void 0}),y(k(e),"pagination",function(){var r=[],s=e.props,c=s.pageRangeDisplayed,f=s.pageCount,h=s.marginPagesDisplayed,O=s.breakLabel,M=s.breakClassName,K=s.breakLinkClassName,I=s.breakAriaLabels,L=e.state.selected;if(f<=c)for(var j=0;j<f;j++)r.push(e.getPageElement(j));else{var A=c/2,T=c-A;L>f-c/2?A=c-(T=f-L):L<c/2&&(T=c-(A=L));var d,N,P=function(S){return e.getPageElement(S)},b=[];for(d=0;d<f;d++){var z=d+1;if(z<=h)b.push({type:"page",index:d,display:P(d)});else if(z>f-h)b.push({type:"page",index:d,display:P(d)});else if(d>=L-A&&d<=L+(L===0&&c>1?T-1:T))b.push({type:"page",index:d,display:P(d)});else if(O&&b.length>0&&b[b.length-1].display!==N&&(c>0||h>0)){var ae=d<L?I.backward:I.forward;N=g().createElement(ie,{key:d,breakAriaLabel:ae,breakLabel:O,breakClassName:M,breakLinkClassName:K,breakHandler:e.handleBreakClick.bind(null,d),getEventListener:e.getEventListener}),b.push({type:"break",index:d,display:N})}}b.forEach(function(S,B){var V=S;S.type==="break"&&b[B-1]&&b[B-1].type==="page"&&b[B+1]&&b[B+1].type==="page"&&b[B+1].index-b[B-1].index<=2&&(V={type:"page",index:S.index,display:P(S.index)}),r.push(V.display)})}return r}),t.initialPage!==void 0&&t.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(t.initialPage,") and forcePage (").concat(t.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),p=t.initialPage?t.initialPage:t.forcePage?t.forcePage:0,e.state={selected:p},e}return i=E,(o=[{key:"componentDidMount",value:function(){var t=this.props,e=t.initialPage,p=t.disableInitialCallback,r=t.extraAriaContext,s=t.pageCount,c=t.forcePage;e===void 0||p||this.callCallback(e),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(s)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(s,"). Did you forget a Math.ceil()?")),e!==void 0&&e>s-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(s-1,").")),c!==void 0&&c>s-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(c," > ").concat(s-1,")."))}},{key:"componentDidUpdate",value:function(t){this.props.forcePage!==void 0&&this.props.forcePage!==t.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(t.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var t=this.state.selected,e=this.props,p=e.pageCount,r=t+e.pageRangeDisplayed;return r>=p?p-1:r}},{key:"getBackwardJump",value:function(){var t=this.state.selected-this.props.pageRangeDisplayed;return t<0?0:t}},{key:"getElementHref",value:function(t){var e=this.props,p=e.hrefBuilder,r=e.pageCount,s=e.hrefAllControls;if(p)return s||t>=0&&t<r?p(t+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(t){var e=t===this.state.selected;if(this.props.ariaLabelBuilder&&t>=0&&t<this.props.pageCount){var p=this.props.ariaLabelBuilder(t+1,e);return this.props.extraAriaContext&&!e&&(p=p+" "+this.props.extraAriaContext),p}}},{key:"getPageElement",value:function(t){var e=this.state.selected,p=this.props,r=p.pageClassName,s=p.pageLinkClassName,c=p.activeClassName,f=p.activeLinkClassName,h=p.extraAriaContext,O=p.pageLabelBuilder;return g().createElement(m,{key:t,pageSelectedHandler:this.handlePageSelected.bind(null,t),selected:e===t,rel:this.getElementPageRel(t),pageClassName:r,pageLinkClassName:s,activeClassName:c,activeLinkClassName:f,extraAriaContext:h,href:this.getElementHref(t),ariaLabel:this.ariaLabelBuilder(t),page:t+1,pageLabelBuilder:O,getEventListener:this.getEventListener})}},{key:"render",value:function(){var t=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&t!==void 0)return t&&t(this.props);var e=this.props,p=e.disabledClassName,r=e.disabledLinkClassName,s=e.pageCount,c=e.className,f=e.containerClassName,h=e.previousLabel,O=e.previousClassName,M=e.previousLinkClassName,K=e.previousAriaLabel,I=e.prevRel,L=e.nextLabel,j=e.nextClassName,A=e.nextLinkClassName,T=e.nextAriaLabel,d=e.nextRel,N=this.state.selected,P=N===0,b=N===s-1,z="".concat(R(O)).concat(P?" ".concat(R(p)):""),ae="".concat(R(j)).concat(b?" ".concat(R(p)):""),S="".concat(R(M)).concat(P?" ".concat(R(r)):""),B="".concat(R(A)).concat(b?" ".concat(R(r)):""),V=P?"true":"false",pe=b?"true":"false";return g().createElement("ul",{className:c||f,role:"navigation","aria-label":"Pagination"},g().createElement("li",{className:z},g().createElement("a",F({className:S,href:this.getElementHref(N-1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":V,"aria-label":K,rel:I},this.getEventListener(this.handlePreviousPage)),h)),this.pagination(),g().createElement("li",{className:ae},g().createElement("a",F({className:B,href:this.getElementHref(N+1),tabIndex:b?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":pe,"aria-label":T,rel:d},this.getEventListener(this.handleNextPage)),L)))}}])&&se(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),E}(u.Component);y(ee,"propTypes",{pageCount:a().number.isRequired,pageRangeDisplayed:a().number,marginPagesDisplayed:a().number,previousLabel:a().node,previousAriaLabel:a().string,prevPageRel:a().string,prevRel:a().string,nextLabel:a().node,nextAriaLabel:a().string,nextPageRel:a().string,nextRel:a().string,breakLabel:a().oneOfType([a().string,a().node]),breakAriaLabels:a().shape({forward:a().string,backward:a().string}),hrefBuilder:a().func,hrefAllControls:a().bool,onPageChange:a().func,onPageActive:a().func,onClick:a().func,initialPage:a().number,forcePage:a().number,disableInitialCallback:a().bool,containerClassName:a().string,className:a().string,pageClassName:a().string,pageLinkClassName:a().string,pageLabelBuilder:a().func,activeClassName:a().string,activeLinkClassName:a().string,previousClassName:a().string,nextClassName:a().string,previousLinkClassName:a().string,nextLinkClassName:a().string,disabledClassName:a().string,disabledLinkClassName:a().string,breakClassName:a().string,breakLinkClassName:a().string,extraAriaContext:a().string,ariaLabelBuilder:a().func,eventListener:a().string,renderOnZeroPageCount:a().func,selectedPageRel:a().string}),y(ee,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(n){return n},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const ce=ee})(),X})())})(le);var be=le.exports;const me=de(be),he=fe(me)`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
  align-items: center;

  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    font-size: ${C.fontSizes.s};
    font-weight: ${C.fontWeight.bold};
    line-height: 1.22222;
    width: 44px;
    height: 44px;
    border: 1px solid ${C.colors.paleGrey};
    border-radius: 50%;
    padding: 11px 16px;
    cursor: pointer;
    &.active {
      background-color: ${C.colors.accent};
      border-color: ${C.colors.accent};
      color: ${C.colors.white};
    }
  }

  .active {
    background-color: ${C.colors.accent};
    border-color: ${C.colors.accent};
    color: ${C.colors.white};
  }

  .pagination-break {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    width: 44px;
    height: 44px;
    border: 1px solid ${C.colors.paleGrey};
    border-radius: 50%;
    padding: 11px 14px;
    cursor: pointer;
  }

  .pagination-previous-link,
  .pagination-next-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .pagination-previous-link svg,
  .pagination-next-link svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
    transition: fill ${C.transition};

    &:hover {
      fill: ${C.colors.accent};
    }
  }

  .pagination-previous,
  .pagination-next {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    width: 44px;
    height: 44px;
    border: 1px solid ${C.colors.lightGrey};
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
  }

  .pagination-previous.pagination-disabled,
  .pagination-next.pagination-disabled {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    width: 44px;
    height: 44px;
    border: 1px solid ${C.colors.paleGrey};
    border-radius: 50%;
    cursor: pointer;
  }
`,xe=({totalPages:Y,onPageChange:te})=>$.jsx($.Fragment,{children:$.jsx(he,{previousLabel:$.jsx("svg",{children:$.jsx("use",{href:oe+"#icon-angle-left"})}),nextLabel:$.jsx("svg",{children:$.jsx("use",{href:oe+"#icon-angle-right"})}),breakLabel:"...",pageCount:Math.ceil(Y),marginPagesDisplayed:0,pageRangeDisplayed:3,onPageChange:te,containerClassName:"pagination",activeClassName:"active",pageClassName:"page",breakClassName:"pagination-break",previousClassName:"pagination-previous",nextClassName:"pagination-next",previousLinkClassName:"pagination-previous-link",nextLinkClassName:"pagination-next-link",disabledClassName:"pagination-disabled"})});function ye(){window.scrollTo({top:0,behavior:"smooth"})}export{xe as P,ye as t};
