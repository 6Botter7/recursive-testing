async function d(n,s,a){const u=n.name.split("."),e=n.ownerElement,r=u[0];let i=n.value;crs.binding.utils.markElement(e,s),e.removeAttribute(n.name),e.setAttribute("data-field",i);const l=e.__uuid;let t=crs.binding.eventStore.getIntent("change",l);t==null&&(t={provider:a,value:{},dataDef:null}),t.value[i]=r;const c="change";crs.binding.eventStore.register(c,l,t),crs.binding.data.setCallback(e.__uuid,s.bid,[i],a),e.__events||=[],e.__events.push("change")}export{d as bindingParse};