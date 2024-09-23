!function(){"use strict";var e=window.wp.element,t=window.wp.i18n,a=window.wc.wcBlocksRegistry,n=window.wp.htmlEntities,r=window.wc.wcSettings;const i=()=>{const e=(0,r.getSetting)("eway_data",null);if(!e||"object"!=typeof e)throw new Error("Eway initialization data is not available");return e},s=a=>{let{eventRegistration:n,emitResponse:r,selectedCard:s,secureCardDataTokenId:l=null}=a;const{onCheckoutAfterProcessingWithError:c,onPaymentProcessing:d}=n,{threeDsEnrollmentNonce:o,ajaxUrl:u,ewayPublicApiKey:m,is3dSecure:p,showSavedCards:y=!1,_eway_nonce:w=null}=i();return(0,e.useEffect)((()=>{const e=d((async()=>{if(!m){const e=y?{_eway_nonce:w,eway_card_id:s}:{};return{type:r.responseTypes.SUCCESS,meta:{paymentMethodData:e}}}if(m&&!p){const e={_eway_nonce:w,eway_card_id:s,"secure-field-token":null!=l?l:""};return{type:r.responseTypes.SUCCESS,meta:{paymentMethodData:e}}}if("new"===s){if(""===l)return{type:r.responseTypes.ERROR,message:(0,t.__)("Please enter your card details.","wc-eway"),messageContext:r.noticeContexts.PAYMENTS,retry:!0}}else if(!Number.isInteger(parseFloat(s)))return{type:r.responseTypes.ERROR,message:(0,t.__)("Please select valid card.","wc-eway"),messageContext:r.noticeContexts.PAYMENTS,retry:!0};return new Promise((async e=>{const t=new FormData;t.append("secure_fields_token",null!=l?l:""),t.append("_ajax_nonce",o),t.append("saved_token_id",s),t.append("_eway_nonce",w);const a=await fetch(`${u}?action=wc_eway_3ds_enrollment`,{method:"POST",body:t}).then((e=>e.json()));a.success||e({type:r.responseTypes.ERROR,message:a.data.errors,messageContext:r.noticeContexts.PAYMENTS,retry:!0});try{Cerberus.run({accessCode:a.data.three_ds_enrollment_access_code,onComplete(){const t={eway_card_id:s,_eway_nonce:w,"secure-field-token":null!=l?l:"",threeds_enrollment_access_token:a.data.three_ds_enrollment_access_code};e({type:r.responseTypes.SUCCESS,meta:{paymentMethodData:t}})}})}catch(t){e({type:r.responseTypes.ERROR,message:t.message,messageContext:r.noticeContexts.PAYMENTS,retry:!0})}}))}));return()=>{e()}}),[d,r.responseTypes.SUCCESS,s,y,l]),(0,e.useEffect)((()=>{const e=c((e=>{var t;const{processingResponse:a}=e;return{type:r.responseTypes.ERROR,message:null==a||null===(t=a.paymentDetails)||void 0===t?void 0:t.message,messageContext:r.noticeContexts.PAYMENTS,retry:!0}}));return()=>{e()}}),[c,r.responseTypes.ERROR,r.noticeContexts.PAYMENTS]),null},l={ewayFields:{},iframeContainers:{},fields:{nameFieldConfig:{publicApiKey:null,fieldDivId:"eway-secure-field-name",fieldType:"name",styleTemplateId:"wc-eway-credit-card-field-placeholder"},cardFieldConfig:{publicApiKey:null,fieldDivId:"eway-secure-field-card",fieldType:"card",styleTemplateId:"wc-eway-credit-card-field-placeholder"},expiryFieldConfig:{publicApiKey:null,fieldDivId:"eway-secure-field-expiry",fieldType:"expirytext",styleTemplateId:"wc-eway-credit-card-field-placeholder"},cvnFieldConfig:{publicApiKey:null,fieldDivId:"eway-secure-field-cvn",fieldType:"cvn",styleTemplateId:"wc-eway-credit-card-field-placeholder"}},setupAllSecureFields:e=>{if(!e)throw new Error("Eway public API key is required.");l.setEwayPublicApiKey(e),eWAYUtils.setVar("activeFields",[]),eWAY.setupSecureField(l.fields.nameFieldConfig,l.secureFieldCallback),eWAY.setupSecureField(l.fields.cardFieldConfig,l.secureFieldCallback),eWAY.setupSecureField(l.fields.expiryFieldConfig,l.secureFieldCallback),eWAY.setupSecureField(l.fields.cvnFieldConfig,l.secureFieldCallback),l.watchEwaySecureFieldsLoadingProgress()},secureFieldCallback:e=>{if(!e.fieldValid)throw new Error(e.errors);const t=document.getElementById("securefieldcode"),a=t.closest("fieldset"),n={type:"card"===e.targetField?"number":e.targetField};e.valueIsValid||a.dispatchEvent(new CustomEvent("wcEwaySecureFieldsValidationFail",{detail:n})),e.valueIsValid&&a.dispatchEvent(new CustomEvent("wcEwaySecureFieldsValidationSuccess",{detail:n})),l.ewayFields[e.targetField]=e,t.value=e.secureFieldCode,t.dispatchEvent(new Event("change"))},watchEwaySecureFieldsLoadingProgress:()=>{eWAYUtils.getVar("activeFields").forEach((e=>{const{iframe:t,fieldType:a}=e,n=()=>{window.clearTimeout(r),l.iframeContainers[a].isLoaded=!0},r=window.setTimeout((()=>{l.iframeContainers[a].isLoaded=!0,t.removeEventListener("load",n)}),1e3);l.iframeContainers[a]={iframe:t,isLoaded:!1},t.addEventListener("load",n)}));const e=window.setInterval((()=>{Object.values(l.iframeContainers).every((e=>{let{isLoaded:t}=e;return t}))&&(window.clearInterval(e),document.dispatchEvent(new Event("wcEwaySecureFieldsLoaded")))}),250)},setEwayPublicApiKey:e=>{l.fields.nameFieldConfig.publicApiKey=e,l.fields.cardFieldConfig.publicApiKey=e,l.fields.expiryFieldConfig.publicApiKey=e,l.fields.cvnFieldConfig.publicApiKey=e},hasValidInputValues:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=document.getElementById("securefieldcode"),a=t.closest("fieldset"),n=Object.keys(l.ewayFields),r=["card","name","expiry","cvn"];if(n.length<4){if(e){const e=r.filter((e=>!n.includes(e))),t={type:"card"===e[0]?"number":e[0]};a.dispatchEvent(new CustomEvent("wcEwaySecureFieldsValidationFail",{detail:t}))}return!1}for(const t in l.ewayFields){const n=l.ewayFields[t];if(!n.valueIsValid){if(e){const e={type:"card"===n.targetField?"number":n.targetField};a.dispatchEvent(new CustomEvent("wcEwaySecureFieldsValidationFail",{detail:e}))}return!1}}return!0}};var c=l;const d="eway",o=a=>{let{updateSecureCardDataTokenId:n}=a;const{ewayPublicApiKey:r}=i(),s=(0,e.useRef)(null),l=(0,e.useRef)(null),[d,o]=(0,e.useState)(!1),[u,m]=(0,e.useState)(!1),[p,y]=(0,e.useState)(!1),[w,f]=(0,e.useState)(!1),E={number:m,name:o,expiry:y,cvn:f};if((0,e.useEffect)((()=>{c.setupAllSecureFields(r)}),[]),(0,e.useEffect)((()=>{const e=l.current,t=e=>{const{type:t}=e.detail;E[t](!0)},a=e=>{const{type:t}=e.detail;E[t](!1)};if(e)return e.addEventListener("wcEwaySecureFieldsValidationFail",t),e.addEventListener("wcEwaySecureFieldsValidationSuccess",a),()=>{e.removeEventListener("wcEwaySecureFieldsValidationFail",t),e.removeEventListener("wcEwaySecureFieldsValidationSuccess",a)}}),[]),(0,e.useEffect)((()=>{const e=s.current;function t(){n(e.value),document.querySelector("button.wc-block-components-checkout-place-order-button").disabled=!c.hasValidInputValues(!1)}if(e)return e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}}),[s]),r)return(0,e.createElement)("fieldset",{ref:l,id:"eway-credit-card-fields"},(0,e.createElement)("input",{type:"text",id:"wc-eway-credit-card-field-placeholder",style:{position:"absolute",left:"-9999px"}}),(0,e.createElement)("div",{className:"form-row form-row-wide"},(0,e.createElement)("label",{htmlFor:"eway-secure-field-card"},(0,t.__)("Card Number","wc-eway")," ",(0,e.createElement)("span",{className:"required"},"*")),(0,e.createElement)("div",{id:"eway-secure-field-card",style:{height:"50px"}}),!0===u&&(0,e.createElement)("div",{className:"wc-block-components-validation-error",style:{marginTop:"-8px"}},(0,e.createElement)("p",null,(0,t.__)("Your card number is invalid.","wc-eway")))),(0,e.createElement)("div",{className:"form-row form-row-wide"},(0,e.createElement)("label",{htmlFor:"eway-secure-field-name"},(0,t.__)("Name on card","wc-eway")," ",(0,e.createElement)("span",{className:"required"},"*")),(0,e.createElement)("div",{id:"eway-secure-field-name",style:{height:"50px"}}),!0===d&&(0,e.createElement)("div",{className:"wc-block-components-validation-error",style:{marginTop:"-8px"}},(0,e.createElement)("p",null,(0,t.__)("Your card name is invalid.","wc-eway")))),(0,e.createElement)("div",{className:"form-row form-row-first"},(0,e.createElement)("label",{htmlFor:"eway-secure-field-expiry"},(0,t.__)("Card Expiry","wc-eway")," ",(0,e.createElement)("span",{className:"required"},"*")),(0,e.createElement)("div",{id:"eway-secure-field-expiry",style:{height:"50px"}}),!0===p&&(0,e.createElement)("div",{className:"wc-block-components-validation-error",style:{marginTop:"-8px"}},(0,e.createElement)("p",null,(0,t.__)("Your card expiry date is invalid.","wc-eway")))),(0,e.createElement)("div",{className:"form-row form-row-last"},(0,e.createElement)("label",{htmlFor:"eway-secure-field-cvn"},(0,t.__)("Card CVN","wc-eway")," ",(0,e.createElement)("span",{className:"required"},"*")),(0,e.createElement)("div",{id:"eway-secure-field-cvn",style:{height:"50px"}}),!0===w&&(0,e.createElement)("div",{className:"wc-block-components-validation-error",style:{marginTop:"-8px"}},(0,e.createElement)("p",null,(0,t.__)("Your card CVN is invalid.","wc-eway")))),(0,e.createElement)("input",{ref:s,type:"hidden",id:"securefieldcode",name:"secure-field-token"}))};var u,m,p,y=t=>{let{activePaymentMethod:a,components:r,emitResponse:l,eventRegistration:c}=t;const{description:u="",ewayPublicApiKey:m}=i(),{LoadingMask:p}=r,[y,w]=(0,e.useState)(!0),[f,E]=(0,e.useState)("");return(0,e.useEffect)((()=>{if(!m)return void w(!1);const e=()=>{w(!1)};return document.addEventListener("wcEwaySecureFieldsLoaded",e),()=>{document.removeEventListener("wcEwaySecureFieldsLoaded",e)}}),[]),(0,e.useEffect)((()=>{const e=document.querySelector("button.wc-block-components-checkout-place-order-button");if(e)return a===d&&(e.disabled=!0),()=>{e.disabled=!1}}),[a]),(0,e.createElement)(p,{showSpinner:!0,isLoading:y},(0,e.createElement)(s,{emitResponse:l,eventRegistration:c,selectedCard:"new",secureCardDataTokenId:f}),(0,n.decodeEntities)(u),(0,e.createElement)(o,{updateSecureCardDataTokenId:E}))};const w=t=>{const{RenderedComponent:a,...n}=t;return(0,e.createElement)(a,n)};(0,a.registerPaymentMethod)({name:d,label:(0,e.createElement)((a=>{const{PaymentMethodLabel:n}=a.components,r=i().title?i().title:(0,t.__)("Credit Card","wc-eway");return(0,e.createElement)(n,{text:r})}),null),ariaLabel:(0,t.__)("Eway payment method","wc-eway"),canMakePayment:()=>!0,content:(0,e.createElement)(w,{RenderedComponent:y}),edit:(0,e.createElement)(w,{RenderedComponent:y}),savedTokenComponent:(0,e.createElement)(w,{RenderedComponent:t=>{let{eventRegistration:a,emitResponse:n,token:r}=t;return(0,e.createElement)(s,{emitResponse:n,eventRegistration:a,selectedCard:r})}}),supports:{features:null!==(u=null===(m=i())||void 0===m?void 0:m.supports)&&void 0!==u?u:[],showSavedCards:null!==(p=i().showSavedCards)&&void 0!==p&&p}})}();