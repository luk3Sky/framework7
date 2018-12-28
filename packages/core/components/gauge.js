(function framework7ComponentLoader(e,t){void 0===t&&(t=!0);document,window;var l=e.$,s=(e.Template7,e.utils),n=(e.device,e.support,e.Class),r=(e.Modal,e.ConstructorMethods),o=(e.ModalMethods,function(i){function e(e,t){void 0===t&&(t={}),i.call(this,e,t);var n=this,a=s.extend({},e.params.gauge);n.useModulesParams(a),n.params=s.extend(a,t);var r=n.params.el;if(!r)return n;var o=l(r);return 0===o.length?n:o[0].f7Gauge?o[0].f7Gauge:(s.extend(n,{app:e,$el:o,el:o&&o[0]}),(o[0].f7Gauge=n).useModules(),n.init(),n)}return i&&(e.__proto__=i),((e.prototype=Object.create(i&&i.prototype)).constructor=e).prototype.calcRadius=function(){var e=this.params;return e.size/2-e.borderWidth/2},e.prototype.calcBorderLength=function(){var e=this.calcRadius();return 2*Math.PI*e},e.prototype.render=function(){var e=this;if(e.params.render)return e.params.render.call(e,e);var t=e.params,n=t.type,a=t.value,r=t.size,o=t.bgColor,i=t.borderBgColor,l=t.borderColor,s=t.borderWidth,u=t.valueText,d=t.valueTextColor,g=t.valueFontSize,c=t.valueFontWeight,f=t.labelText,h=t.labelTextColor,v=t.labelFontSize,p=t.labelFontWeight,x="semicircle"===n,m=e.calcRadius(),b=e.calcBorderLength(),y=Math.max(Math.min(a,1),0);return('\n      <svg class="gauge-svg" width="'+r+'px" height="'+(x?r/2:r)+'px" viewBox="0 0 '+r+" "+(x?r/2:r)+'">\n        '+(x?'\n          <path\n            class="gauge-back-semi"\n            d="M'+(r-s/2)+","+r/2+" a1,1 0 0,0 -"+(r-s)+',0"\n            stroke="'+i+'"\n            stroke-width="'+s+'"\n            fill="'+(o||"none")+'"\n          />\n          <path\n            class="gauge-front-semi"\n            d="M'+(r-s/2)+","+r/2+" a1,1 0 0,0 -"+(r-s)+',0"\n            stroke="'+l+'"\n            stroke-width="'+s+'"\n            stroke-dasharray="'+b/2+'"\n            stroke-dashoffset="'+b/2*(1+y)+'"\n            fill="'+(i?"none":o||"none")+'"\n          />\n        ':"\n          "+(i?'\n            <circle\n              class="gauge-back-circle"\n              stroke="'+i+'"\n              stroke-width="'+s+'"\n              fill="'+(o||"none")+'"\n              cx="'+r/2+'"\n              cy="'+r/2+'"\n              r="'+m+'"\n            ></circle>\n          ':"")+'\n          <circle\n            class="gauge-front-circle"\n            transform="rotate(-90 '+r/2+" "+r/2+')"\n            stroke="'+l+'"\n            stroke-width="'+s+'"\n            stroke-dasharray="'+b+'"\n            stroke-dashoffset="'+b*(1-y)+'"\n            fill="'+(i?"none":o||"none")+'"\n            cx="'+r/2+'"\n            cy="'+r/2+'"\n            r="'+m+'"\n          ></circle>\n        ')+"\n        "+(u?'\n          <text\n            class="gauge-value-text"\n            x="50%"\n            y="'+(x?"100%":"50%")+'"\n            font-weight="'+c+'"\n            font-size="'+g+'"\n            fill="'+d+'"\n            dy="'+(x?f?-v-15:-5:0)+'"\n            text-anchor="middle"\n            dominant-baseline="'+(!x&&"middle")+'"\n          >'+u+"</text>\n        ":"")+"\n        "+(f?'\n          <text\n            class="gauge-label-text"\n            x="50%"\n            y="'+(x?"100%":"50%")+'"\n            font-weight="'+p+'"\n            font-size="'+v+'"\n            fill="'+h+'"\n            dy="'+(x?-5:u?g/2+10:0)+'"\n            text-anchor="middle"\n            dominant-baseline="'+(!x&&"middle")+'"\n          >'+f+"</text>\n        ":"")+"\n      </svg>\n    ").trim()},e.prototype.update=function(t){void 0===t&&(t={});var e=this,n=e.params,a=e.$gaugeSvgEl;if(Object.keys(t).forEach(function(e){void 0!==t[e]&&(n[e]=t[e])}),0===a.length)return e;var r=n.value,o=n.size,i=n.bgColor,l=n.borderBgColor,s=n.borderColor,u=n.borderWidth,d=n.valueText,g=n.valueTextColor,c=n.valueFontSize,f=n.valueFontWeight,h=n.labelText,v=n.labelTextColor,p=n.labelFontSize,x=n.labelFontWeight,m=e.calcBorderLength(),b=Math.max(Math.min(r,1),0),y=e.calcRadius(),k="semicircle"===n.type,w={width:o+"px",height:(k?o/2:o)+"px",viewBox:"0 0 "+o+" "+(k?o/2:o)};if(Object.keys(w).forEach(function(e){a.attr(e,w[e])}),k){var C={d:"M"+(o-u/2)+","+o/2+" a1,1 0 0,0 -"+(o-u)+",0",stroke:l,"stroke-width":u,fill:i||"none"},M={d:"M"+(o-u/2)+","+o/2+" a1,1 0 0,0 -"+(o-u)+",0",stroke:s,"stroke-width":u,"stroke-dasharray":m/2,"stroke-dashoffset":m/2*(b-1),fill:l?"none":i||"none"};Object.keys(C).forEach(function(e){a.find(".gauge-back-semi").attr(e,C[e])}),Object.keys(M).forEach(function(e){a.find(".gauge-front-semi").attr(e,M[e])})}else{var z={stroke:l,"stroke-width":u,fill:i||"none",cx:o/2,cy:o/2,r:y},G={transform:"rotate(-90 "+o/2+" "+o/2+")",stroke:s,"stroke-width":u,"stroke-dasharray":m,"stroke-dashoffset":m*(1-b),fill:l?"none":i||"none",cx:o/2,cy:o/2,r:y};Object.keys(z).forEach(function(e){a.find(".gauge-back-circle").attr(e,z[e])}),Object.keys(G).forEach(function(e){a.find(".gauge-front-circle").attr(e,G[e])})}if(d){a.find(".gauge-value-text").length||a.append('<text class="gauge-value-text"></text>');var T={x:"50%",y:k?"100%":"50%","font-weight":f,"font-size":c,fill:g,dy:k?h?-p-15:-5:0,"text-anchor":"middle","dominant-baseline":!k&&"middle"};Object.keys(T).forEach(function(e){a.find(".gauge-value-text").attr(e,T[e])}),a.find(".gauge-value-text").text(d)}else a.find(".gauge-value-text").remove();if(h){a.find(".gauge-label-text").length||a.append('<text class="gauge-label-text"></text>');var E={x:"50%",y:k?"100%":"50%","font-weight":x,"font-size":p,fill:v,dy:k?-5:d?c/2+10:0,"text-anchor":"middle","dominant-baseline":!k&&"middle"};Object.keys(E).forEach(function(e){a.find(".gauge-label-text").attr(e,E[e])}),a.find(".gauge-label-text").text(h)}else a.find(".gauge-label-text").remove();return e},e.prototype.init=function(){var e=this,t=l(e.render()).eq(0);return t.f7Gauge=e,s.extend(e,{$gaugeSvgEl:t,gaugeSvgEl:t&&t[0]}),e.$el.append(t),e},e.prototype.destroy=function(){var e=this;e.$el&&!e.destroyed&&(e.$el.trigger("gauge:beforedestroy",e),e.emit("local::beforeDestroy gaugeBeforeDestroy",e),e.$gaugeSvgEl.remove(),delete e.$el[0].f7Gauge,s.deleteProps(e),e.destroyed=!0)},e}(n)),a={name:"gauge",static:{Gauge:o},create:function(){var a=this;a.gauge=r({defaultSelector:".gauge",constructor:o,app:a,domProp:"f7Gauge"}),a.gauge.update=function(e,t){if(0!==l(e).length){var n=a.gauge.get(e);if(n)return n.update(t),n}}},params:{gauge:{el:null,type:"circle",value:0,size:200,bgColor:"transparent",borderBgColor:"#eeeeee",borderColor:"#000000",borderWidth:10,valueText:null,valueTextColor:"#000000",valueFontSize:31,valueFontWeight:500,labelText:null,labelTextColor:"#888888",labelFontSize:14,labelFontWeight:400}},on:{tabMounted:function(e){var n=this;l(e).find(".gauge-init").each(function(e,t){n.gauge.create(s.extend({el:t},l(t).dataset()||{}))})},tabBeforeRemove:function(e){l(e).find(".gauge-init").each(function(e,t){t.f7Gauge&&t.f7Gauge.destroy()})},pageInit:function(e){var n=this;e.$el.find(".gauge-init").each(function(e,t){n.gauge.create(s.extend({el:t},l(t).dataset()||{}))})},pageBeforeRemove:function(e){e.$el.find(".gauge-init").each(function(e,t){t.f7Gauge&&t.f7Gauge.destroy()})}},vnode:{"gauge-init":{insert:function(e){var t=e.elm;this.gauge.create(s.extend({el:t},l(t).dataset()||{}))},destroy:function(e){var t=e.elm;t.f7Gauge&&t.f7Gauge.destroy()}}}};if(t){if(e.prototype.modules&&e.prototype.modules[a.name])return;e.use(a),e.instance&&(e.instance.useModuleParams(a,e.instance.params),e.instance.useModule(a))}return a}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))