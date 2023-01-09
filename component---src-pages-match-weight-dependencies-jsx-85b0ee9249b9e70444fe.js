(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[760],{2465:function(e,t,n){"use strict";function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return a}})},1369:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});n(7294);var a=n(835),r=n(674),i=(n(5713),n(5444));var o={name:"mh6tuh",styles:"margin-top:1rem;margin-bottom:0.5rem;"},l={name:"gg4vpm",styles:"display:flex;justify-content:space-between;"},s=["/intro_to_probabilistic_linkage/","/maths_of_fellegi_sunter/","/visualising_fellegi_sunter/","/understanding_match_weights/","/match_weight_dependencies/","/m_u_generator/"],u=function(e){var t=e.current_path,n=s.indexOf(t),a=s[n-1],u=s[n+1];return a=void 0===a?(0,r.tZ)("div",null):(0,r.tZ)("div",null,(0,r.tZ)(i.rU,{to:a}," < Previous article")),u=void 0===u?(0,r.tZ)("div",null):(0,r.tZ)("div",null,(0,r.tZ)(i.rU,{to:u}," Next article >")),(0,r.tZ)("div",null,(0,r.tZ)("hr",{css:o}),(0,r.tZ)("div",{css:l},a,(0,r.tZ)("div",null,(0,r.tZ)(i.rU,{to:"/probabilistic_linkage"},"Probabilistic linkage home")),u))},c=n(8847),_=n(7414),m=n(6140);var f=function(e){var t=(0,r.tZ)(c.Z,{define:e.define,output_order:e.output_order});return(0,r.tZ)(a.Z,{css:e.className},(0,r.tZ)(m.Z,{title:e.post_frontmatter.title,description:e.post_frontmatter.description}),(0,r.tZ)(_.Z,{post_frontmatter:e.post_frontmatter}),t,(0,r.tZ)(u,{current_path:e.current_path}))}},5752:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Pe},frontmatter:function(){return Ne}});n(7294);var a,r,i,o,l,s,u,c,_,m,f,d,h,p,v,g,b=n(2465);function y(e){return e(a||(a=(0,b.Z)(["# Match Weights Charts"])))}function w(e){return{config:{view:{width:e/3,height:300},title:{anchor:"middle",offset:10},header:{title:null}},hconcat:[{mark:"bar",title:{text:"Non-matches",fontWeight:"normal"},encoding:{row:{type:"nominal",field:"column_name",sort:{field:"gamma_index"},header:{labelAngle:0,labelAnchor:"middle",labelAlign:"left"}},x:{type:"quantitative",field:"u_probability",axis:{title:"proportion"}},y:{type:"nominal",axis:{title:null},field:"level_name"},tooltip:[{type:"nominal",field:"column_name"},{type:"ordinal",field:"level_name"},{type:"quantitative",field:"u_probability",format:".4f"},{type:"quantitative",field:"bayes_factor",format:".4f"},{type:"nominal",field:"level_proportion",title:"Percentage of record comparisons in this level",format:".2%"},{type:"quantitative",field:"log2_bayes_factor",format:".4f"}],color:{value:"red"}},resolve:{scale:{y:"independent"}},transform:[{filter:"(datum.bayes_factor != 'unnecessary filter2 due to vega lite issue 4680')"}],height:50},{mark:"bar",title:{text:"Matches",fontWeight:"normal"},encoding:{row:{type:"nominal",field:"column_name",sort:{field:"gamma_index"},header:{labels:!1}},x:{type:"quantitative",field:"m_probability",axis:{title:"proportion"}},y:{type:"nominal",axis:{title:null},field:"level_name"},tooltip:[{type:"nominal",field:"column_name"},{type:"ordinal",field:"level_name"},{type:"quantitative",field:"m_probability",format:".4f"},{type:"quantitative",field:"bayes_factor",format:".4f"},{type:"nominal",field:"level_proportion",title:"Percentage of record comparisons in this level",format:".2%"},{type:"quantitative",field:"log2_bayes_factor",format:".4f"}],color:{value:"green"}},resolve:{scale:{y:"independent"}},transform:[{filter:"(datum.bayes_factor != 'unnecessary filter due to vega lite issue 4680')"}],height:50}],data:{values:null},transform:[],title:{text:"Probability distributions of non-matches and matches ",subtitle:"Estimated proportion of matches λ = "},$schema:"https://vega.github.io/schema/vega-lite/v4.json"}}function x(e){return{config:{view:{width:e/1.5,height:300},mark:{tooltip:null},title:{anchor:"middle"},header:{title:null}},data:{values:null},mark:{type:"bar",clip:!0},selection:{selector076:{type:"interval",bind:"scales",encodings:["x"]}},encoding:{color:{type:"quantitative",field:"log2_bayes_factor",scale:{range:["red","orange","green"],domain:[-10,0,10]}},row:{type:"nominal",field:"column_name",sort:{field:"gamma_index"},header:{labelAngle:0,labelAnchor:"middle",labelAlign:"left"}},tooltip:[{type:"nominal",field:"column_name"},{type:"ordinal",field:"level_name"},{type:"quantitative",field:"m_probability",format:".4f"},{type:"quantitative",field:"bayes_factor",format:".4f"},{type:"nominal",field:"level_proportion",title:"Percentage of record comparisons in this level",format:".2%"},{type:"quantitative",field:"log2_bayes_factor",title:"log2(Bayes factor, K = m/u)",format:".4f"}],x:{type:"quantitative",axis:{title:"log2(Bayes factor, K = m/u)",values:[-10,-5,0,5,10]},field:"log2_bayes_factor",scale:{domain:[-10,10]}},y:{type:"nominal",field:"level_name",axis:{title:null}}},height:50,resolve:{scale:{y:"independent"}},title:{text:"Influence of comparison vector values on match probability",subtitle:"Use mousewheeel to zoom"},$schema:"https://vega.github.io/schema/vega-lite/v4.json"}}function k(e){return JSON.parse(e)}function Z(e){return function(t){var n=[];return t.comparison_columns.forEach((function(t){var a,r;(a=t.m_probabilities,r=t.u_probabilities,a.map((function(e,t){return[e,r[t]]}))).forEach((function(a,r){var i=e(a,t,r);n.push(i)}))})),n}}function A(e,t,n){return function(a){var r=JSON.parse(JSON.stringify(e)),i=a.proportion_of_matches;return r.data.values=t(a),r.title.subtitle="Estimated proportion of matches λ = ".concat(i),n(r)}}function q(e,t){return e(t)}function z(e,t,n){return function(a){var r=JSON.parse(JSON.stringify(e)),i=a.proportion_of_matches;return r.data.values=t(a),r.title.subtitle="Estimated proportion of matches λ = ".concat(i.toPrecision(4)),n(r)}}function M(e,t){return e(t)}function O(){return function(e,t,n){var a={},r=t;return a.m_probability=e[0],a.u_probability=e[1],a.bayes_factor=e[0]/e[1],a.column_name=r.col_name,a.log2_bayes_factor=Math.log2(a.bayes_factor),a.gamma_index=n,a.gamma_column_name="gamma_"+r.col_name,a.level_name="level_"+n,a.max_gamma_index=r.m_probabilities.length-1,a.num_levels=r.m_probabilities.length,a}}function j(){return'{\n    "proportion_of_matches": 0.001,\n    "comparison_columns": [\n      {\n        "col_name": "fname",\n        "u_probabilities": [0.8, 0.2],\n        "m_probabilities": [0.2, 0.8]\n      },\n      {\n        "col_name": "sname",\n        "u_probabilities": [0.9, 0.1],\n        "m_probabilities": [0.2, 0.8]\n      },\n      {\n        "col_name": "dob",\n        "u_probabilities": [0.99, 0.01],\n        "m_probabilities": [0.2, 0.8]\n      },\n      {\n        "col_name": "town",\n        "u_probabilities": [0.7, 0.3],\n        "m_probabilities": [0.3, 0.7]\n      }\n    ]\n  \n  }'}function L(e){return e("vega-embed@6")}function F(e,t){var n=e.module();return n.variable(t()).define(["md"],y),n.variable(t("base_spec_m_u")).define("base_spec_m_u",["width"],w),n.variable(t("base_spec_bayes_factors")).define("base_spec_bayes_factors",["width"],x),n.variable(t("settings_example")).define("settings_example",["default_splink_settings"],k),n.variable(t("chart_data_from_splink_settings")).define("chart_data_from_splink_settings",["get_chart_row"],Z),n.variable(t("get_m_u_chart")).define("get_m_u_chart",["base_spec_m_u","chart_data_from_splink_settings","embed"],A),n.variable(t()).define(["get_m_u_chart","settings_example"],q),n.variable(t("get_bayes_factor_chart")).define("get_bayes_factor_chart",["base_spec_bayes_factors","chart_data_from_splink_settings","embed"],z),n.variable(t()).define(["get_bayes_factor_chart","settings_example"],M),n.variable(t("get_chart_row")).define("get_chart_row",O),n.variable(t("default_splink_settings")).define("default_splink_settings",j),n.variable(t("embed")).define("embed",["require"],L),n}function E(e){return e(r||(r=(0,b.Z)(["# Resizable areas"])))}function G(e){return e.range([2,6],{label:"num levels",step:1,value:3})}function J(e){return e(i||(i=(0,b.Z)(["## Drag within the bars to resize\n\nNote that if you change the number of levels of the axis squishiness, values will reset"])))}function N(e,t,n,a){return e(t,n,a,0,!0,0)}function T(e){return function(t,n,a){if(0==t)return e.scaleLinear().domain([0,1]).range([a,0]);var r,i=t;if(i>=0)r=function(e){return Math.pow(5,e)/(Math.pow(5,e)+1)};else{r=function(e){return-1*Math.log((e+8.01)/(8.01-e))};var o=1/3,l=8/Math.pow(8,o);i=-Math.pow(-i,o)*l}var s=e.scaleLinear().domain([0,1]).range([-i,i]),u=e.range(51).map((function(e){return e/50})).map(s).map(r),c=e.extent(u),_=e.scaleLinear().domain(c).range([0,1]),m=u.map(_),f=e.range(51).map((function(e){return a*(50-e)/50}));return e.scaleLinear().domain(m).range(f)}}function B(e,t,n,a,r,i,l,s,u,c,_,m,f){return function(d,h,p){var v=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,g=arguments.length>4&&void 0!==arguments[4]&&arguments[4],y=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,w=p.comparison_columns[v],x=w.u_probabilities.length,k=e.svg(d,h),Z=t.select(k),A=Z.append("g").attr("transform","translate("+n.left+","+n.top+")").attr("class","outer_group"),q=a(p,v),z=r(q),M=z.m_u,O=i(x),j=i(x);"level_names"in p&&(j=p.level_names);var L=l(z),F=d-n.left-n.right,E=h-n.top-n.bottom,G=s.range([-8,8],{step:.1,label:"Axis compression",value:y});g||(G.style.display="none");var J=u(G.value,d,F),N=c(G.value,h,E),T=_(o||(o=(0,b.Z)(["\n\n  ","\n  ","\n  "])),G,Z.node()),B={x:J,y:N,svg:A,svg_outer:Z,unstacked_data:q,stacked_data:z,level_keys:O,level_names:j,level_colours:L,final_output:T,axis_slider:G,internal_height:E,internal_width:F,width:d,height:h};A.on(".drag",null);var P=A.selectAll("g").data(M).join("g").attr("fill",(function(e){return L(e.key)})).attr("class",(function(e){return e.key})).classed("inner_group","true");P.selectAll("rect").data((function(e){return e})).join("rect").attr("stroke","white").attr("stroke-width","2px").classed("m_u_areas","true"),P.selectAll("text").data((function(e){return e})).join("text").attr("text-anchor","middle").attr("dy","0.5em").style("font-size","0.8em").attr("pointer-events","none").style("font-family","sans-serif").classed("m_u_labels","true");m(G.value);return A.append("g").attr("class","x_axis_group"),A.append("g").attr("class","y_axis_group"),P.selectAll("text.chart_title").remove(),P.append("text").text("Distribution of m and u values").attr("y",-60).attr("x",F/2).attr("class","chart_title").attr("text-anchor","middle").attr("dy","0.5em").style("font-size","1em").style("font-weight","bold").attr("pointer-events","none").style("fill","black").style("font-family","sans-serif"),P.append("text").text("✨ Drag within rectangles to change values ✨").attr("y",-20).attr("x",F/2).attr("class","chart_title").attr("text-anchor","middle").attr("dy","0.5em").style("font-size","0.8em").attr("pointer-events","none").style("fill","red").style("font-family","sans-serif"),P.append("text").text("The area represents all record comparisons, split into levels by match status").attr("y",-40).attr("x",F/2).attr("class","chart_title").attr("text-anchor","middle").attr("dy","0.5em").style("font-size","0.8em").attr("pointer-events","none").style("fill","black").style("font-family","sans-serif"),f(B),t.select(G).on("input",(function(e){f(B)})),T.value=q,T}}function P(e){return e}function S(e,t,n,a,r,i,o,l){return function s(u){var c=u,_=c.unstacked_data,m=c.svg,f=(c.svg_outer,c.stacked_data),d=f.m_u,h=c.level_keys,p=c.level_names,v=c.axis_slider,g=v.value,b=c.internal_height,y=c.internal_width,w=c.width,x=c.height;c.x=e(g,w,y),c.y=t(g,x,b);var k=m.selectAll(".inner_group").data(d).join("g").attr("fill",(function(e){return c.level_colours(e.key)}));k.selectAll("rect.m_u_areas").data((function(e){return e})).join("rect").attr("x",(function(e){return n(e.data.match_status,c.stacked_data.lam,c.x)(e.data.match_status)})).attr("y",(function(e){return c.y(e[1])})).attr("height",(function(e){return c.y(e[0])-c.y(e[1])})).attr("width",(function(e){return n(e.data.match_status,_.lam,c.x).bandwidth()})).call(a(u,s)),k.selectAll("text.m_u_labels").data((function(e){return e})).join("text").attr("x",(function(e){return n(e.data.match_status,f.lam,c.x)(e.data.match_status)+n(e.data.match_status,f.lam,c.x).bandwidth()/2})).attr("y",(function(e){return(c.y(e[1])+c.y(e[0]))/2})).text((function(e){return r(e,h,p)})).style("fill","black"),k.selectAll("text.axis_match_label").remove(),k.selectAll("text.axis_match_label").data([{text:"Record comparisons which are non-matches",x:[0,1-_.lam]},{text:"Record comparisons which are matches",x:[1-_.lam,1]}]).join("text").text((function(e){return e.text})).attr("y",c.y(0)+40).attr("x",(function(e){return(c.x(e.x[0])+c.x(e.x[1]))/2})).attr("class","axis_match_label").attr("text-anchor","middle").attr("dy","0.5em").style("font-size","0.8em").attr("pointer-events","none").style("fill","black").style("font-family","sans-serif");var Z=i(v.value);m.selectAll(".x_axis_group").attr("transform","translate(0,"+b+")").call(o.axisBottom(c.x).tickValues(Z).tickFormat(l)),m.selectAll(".y_axis_group").call(o.axisLeft(c.y).tickValues(Z).tickFormat(l))}}function C(e,t,n){return{proportion_of_matches:.3,comparison_columns:[{col_name:"my column",m_probabilities:e(t.range(1,n+1,1)),u_probabilities:e(t.range(n,0,-1))}]}}function R(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={lam:e.proportion_of_matches,m_u:[null,null]},a=e.comparison_columns[t].u_probabilities;n.m_u[0]={match_status:"non-match",match_index:0},a.forEach((function(e,t){return n.m_u[0]["level_"+t]=e}));var r=e.comparison_columns[t].m_probabilities;return n.m_u[1]={match_status:"match",match_index:1},r.forEach((function(e,t){return n.m_u[1]["level_"+t]=e})),n}}function U(){return function(e){var t=[1e-10,1e-9,1e-8,1e-7,1e-6,1e-5,1e-4,.001,.01,.1,.5,.9,.99,.999,.9999,.99999,.999999,1-1e-7,1-1e-8,1-1e-9,1-1e-10],n=Math.floor(.65*e),a=t.indexOf(.5),r=a-n,i=a+n;return e>2.5?[0].concat(t.slice(r,i+1)).concat([1]):null}}function W(e){return function(t,n,a){var r=t.key,i=a[n.indexOf(r)],o=t.data.match_status,l=e.format(",.2%")(t.data[t.key]);return i=(i=i.replace("_"," ")).charAt(0).toUpperCase()+i.slice(1),"".concat(i,": ").concat(l," of ").concat(o,"es")}}function D(e){return function(t,n,a){if(0==t)return e.scaleLinear().domain([0,1]).range([0,a]);var r,i=t;if(i>=0)r=function(e){return Math.pow(5,e)/(Math.pow(5,e)+1)};else{r=function(e){return-1*Math.log((e+8.01)/(8.01-e))};var o=1/3,l=8/Math.pow(8,o);i=-Math.pow(-i,o)*l}var s=e.scaleLinear().domain([0,1]).range([-i,i]),u=e.range(51).map((function(e){return e/50})).map(s).map(r),c=e.extent(u),_=e.scaleLinear().domain(c).range([0,1]),m=u.map(_),f=e.range(51).map((function(e){return a*e/50}));return e.scaleLinear().domain(m).range(f)}}function I(e){return function(t){var n=e.schemeGnBu;return n[2]=[n[3][0],n[3][2]],e.scaleOrdinal().domain(t.m_u.map((function(e){return e.key}))).range(n[t.m_u.length])}}function V(e,t,n,a,r){return function(i,o){return e.drag().on("drag",(function(e){i.unstacked_data.lam=t(e,i),i.unstacked_data.m_u=n(e,i);var l=a(i.unstacked_data);i.stacked_data=l,i.final_output.value=i.unstacked_data,o(i),i.final_output.dispatchEvent(new r("input"))}))}}function K(){return function(e,t){var n=t.x,a=n(t.unstacked_data.lam),r=n.invert(a-e.dx);return r=Math.min(r,1),r=Math.max(r,0)}}function $(){return function(e,t){var n,a,r=t.level_keys,i=t.stacked_data,o=t.y,l=t.unstacked_data.m_u,s=e.subject.key,u=r.indexOf(s),c=e.subject.data.match_index,_=i.m_u[u][c],m=_[0],f=_[1],d=(o(m)+o(f))/2;e.y<d?(n=u+1,a=!1):(n=u+-1,a=!0),0==u&&(n=1,a=!1),u==r.length-1&&(n=r.length-2,a=!0);var h=o(a?m:f),p=h+e.dy,v=o.invert(h),g=o.invert(p)-v;a||(g=-g);var b=r[n],y=l[c][s]-g,w=l[c][b]+g;function x(e,t,n){return(e-t)*(e-n)<=0}return x(y,0,1)&&x(w,0,1)&&(l[c][s]=y,l[c][b]=w),l}}function Y(){return{top:80,right:60,bottom:60,left:60}}function H(e){return function(t,n,a){var r=e.scaleBand().domain(["match"]).range([a(1-n),a(1)]).padding(0),i=e.scaleBand().domain(["non-match"]).range([a(0),a(1-n)]).padding(0);return"match"==t?r:i}}function Q(e){return function(t){var n=t.m_u[0].length,a=e(n),r=a.map((function(e){return t.m_u[1][e]})),i=a.map((function(e){return t.m_u[0][e]}));return{proportion_of_matches:t.lam,comparison_columns:[{col_name:"my column",m_probabilities:r,u_probabilities:i,num_levels:a.length}]}}}function X(){return 500}function ee(e,t){return function(n){var a=e(n),r=t.stack().keys(a).order(t.stackOrderNone).offset(t.stackOffsetNone)(n.m_u);return r=r.map((function(e){return e.forEach((function(t){return t.key=e.key})),e})),{lam:n.lam,m_u:r}}}function te(){return function(e){return Object.keys(e.m_u[0]).filter((function(e){return e.includes("level_")}))}}function ne(e,t){return function(n){var a=e(n).length,r=t(a),i=r.map((function(e){return n.m_u[1][e]})),o=r.map((function(e){return n.m_u[0][e]}));return{proportion_of_matches:n.lam,comparison_columns:[{col_name:" ",m_probabilities:i,u_probabilities:o,num_levels:r.length}]}}}function ae(e){return function(t){return e.range(t).map((function(e){return"level_"+e}))}}function re(){return function(e){return e.toString()}}function ie(){return function(e){var t=e.reduce((function(e,t){return e+t}),0);return e.map((function(e){return e/t}))}}function oe(e,t,n){return function(a){e(a);var r={proportion_of_matches:.3,comparison_columns:[{col_name:" ",m_probabilities:null,u_probabilities:null}]},i=(t.range(1,a+1).reduce((function(e,t){return e+t}),0),t.range(1,a+1,1).map((function(e){return Math.pow(e,2)})));i=n(i);var o=t.range(a,0,-1).map((function(e){return Math.pow(e,2)}));return o=n(o),r.comparison_columns[0].m_probabilities=i,r.comparison_columns[0].u_probabilities=o,r}}function le(e){return e(l||(l=(0,b.Z)(["#### External fns"])))}function se(e){return e(s||(s=(0,b.Z)(["#### External libs"])))}function ue(e){return e("@observablehq/inputs")}function ce(e){return e("d3@6")}function _e(e,t){var n=e.module();n.variable(t()).define(["md"],E),n.variable(t("viewof num_levels")).define("viewof num_levels",["inputs"],G),n.variable(t("num_levels")).define("num_levels",["Generators","viewof num_levels"],(function(e,t){return e.input(t)})),n.variable(t()).define(["md"],J),n.variable(t("viewof thing")).define("viewof thing",["m_u_input_control","width","height","starting_data"],N),n.variable(t("thing")).define("thing",["Generators","viewof thing"],(function(e,t){return e.input(t)})),n.variable(t("gen_y_scale")).define("gen_y_scale",["d3"],T),n.variable(t("m_u_input_control")).define("m_u_input_control",["DOM","d3","margin","splink_data_to_unstacked_data","unstacked_data_to_stacked","num_levels_to_level_keys","get_level_colours_scale","inputs","gen_x_scale","gen_y_scale","html","get_tick_vals","redraw"],B),n.variable(t()).define(["thing"],P),n.variable(t("redraw")).define("redraw",["gen_x_scale","gen_y_scale","get_scale","get_drag","get_label","get_tick_vals","d3","format_tick"],S),n.variable(t("starting_data")).define("starting_data",["normalise","d3","num_levels"],C),n.variable(t("splink_data_to_unstacked_data")).define("splink_data_to_unstacked_data",R),n.variable(t("get_tick_vals")).define("get_tick_vals",U),n.variable(t("get_label")).define("get_label",["d3"],W),n.variable(t("gen_x_scale")).define("gen_x_scale",["d3"],D),n.variable(t("get_level_colours_scale")).define("get_level_colours_scale",["d3"],I),n.variable(t("get_drag")).define("get_drag",["d3","get_lam","get_m_u","unstacked_data_to_stacked","Event"],V),n.variable(t("get_lam")).define("get_lam",K),n.variable(t("get_m_u")).define("get_m_u",$),n.variable(t("margin")).define("margin",Y),n.variable(t("get_scale")).define("get_scale",["d3"],H),n.variable(t("input_control")).define("input_control",["num_levels_to_level_keys"],Q),n.variable(t("height")).define("height",X),n.variable(t("unstacked_data_to_stacked")).define("unstacked_data_to_stacked",["level_keys_from_unstacked_data","d3"],ee),n.variable(t("level_keys_from_unstacked_data")).define("level_keys_from_unstacked_data",te),n.variable(t("input_control_data_to_splink_settings")).define("input_control_data_to_splink_settings",["level_keys_from_unstacked_data","num_levels_to_level_keys"],ne),n.variable(t("num_levels_to_level_keys")).define("num_levels_to_level_keys",["d3"],ae),n.variable(t("format_tick")).define("format_tick",re),n.variable(t("normalise")).define("normalise",ie),n.variable(t("gen_starting_data")).define("gen_starting_data",["num_levels_to_level_keys","d3","normalise"],oe),n.variable(t()).define(["md"],le);var a=e.module(F);return n.import("get_m_u_chart",a),n.import("get_bayes_factor_chart",a),n.variable(t()).define(["md"],se),n.variable(t("inputs")).define("inputs",["require"],ue),n.variable(t("d3")).define("d3",["require"],ce),n}function me(e){return e(u||(u=(0,b.Z)(["# Dependencies between match weights"])))}function fe(e){return e(c||(c=(0,b.Z)(["*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/match_weight_dependencies/).*"])))}function de(e){return e(_||(_=(0,b.Z)(["The values of a column's match weights are interdependent:  Only certain combinations of values are possible.  \n\nSome types of data also result in maximum and minimum match weights.\n\nUnderstanding why these constraints occur can help you build better models, because it can help you find ways to extract more information from your comparison columns.\n\nThis article tries to build an intuition for why these constraints occur and why they matter.\n"])))}function he(e,t){return e(m||(m=(0,b.Z)(["## Example of a maximum match weight:  Gender\nConsider a column for gender, and let's assume there's an equal split of males and females in our data.\n\nA match on gender does not provide strong evidence in favour of a match because it's common to observe a match on gender amongst non-matching records.\n\nThis suggests there is an upper bound on the Bayes Factor for gender.  It turns out that, for this data, the maximum Bayes Factor is 2.0.\n\n Let's explore what this looks like visually, which will reveal the constraint.  Note that:\n\n- Amongst non-matching records, the gender field is just as likely to match as to mismatch, i.e.  "," and ",".\n\n-  ✨You can drag within the rectangles of the following diagram to see the effect of different m and u values on match weights✨\n"])),t(f||(f=(0,b.Z)(["u_\text{gender, level 0} = 0.5"],["u_\\text{gender, level 0} = 0.5"]))),t(d||(d=(0,b.Z)(["u_\text{gender, level 1} = 0.5"],["u_\\text{gender, level 1} = 0.5"]))))}function pe(e,t,n,a){return t(n,400,a,0,1)}function ve(e){return e.button("Reset gender values")}function ge(e,t,n){return e(t(n))}function be(e){return e(h||(h=(0,b.Z)(["### Observations\n\nTwo important findings emerge from this example:\n\n- There is a maximum bound of 2 on the match weight associated with a match on gender.  This is intuitive:  a match weight of two means that, if we observe a match on gender, it's now twice as likely that the records are a match - reflecting the equal split of genders.\n\n- There is no minimum bound of the match weight associated with a mismatch on gender.  This is also intuitive.  If gender is recorded with very high accuracy, then a mismatch on gender represents very strong evidence against a match.\n"])))}function ye(e){return e(p||(p=(0,b.Z)(["## Example of a minimum match weights:  Forename\n\nConsider a forename column.  Let's assume that nicknames, diminutives are common in this dataset.  For example, it may be common for someone called 'Jonathan' to appear variously as 'Jonathan', 'John' or 'Jonny'.  As such, it will be common that, amongst matches, the forename does not exactly match.\n\nConsider the following chart, which models this column with two comparison levels:\n- Level 1: Forename matches exactly\n- Level 0: Forname mismatches \n\nIn this scenario, the observation of a mismatch on forename does not provide strong evidence against a match, because it is so common to observe a mismatch amongst matching records.  \n"])))}function we(e,t,n,a){return t(n,400,a,0,3)}function xe(e){return e.button("Reset forename values")}function ke(e,t,n){return e(t(n))}function Ze(e){return e(v||(v=(0,b.Z)(["Using a more sophisticted modelling approach, we can do better.\n\nLet's assume that we can capture the vast majority of nicknames and diminutives using a fuzzy matching function.  This allows us to draw a distinction between two scenarios:\n- Values do not match, but are similar\n- Values do not match, and are completely different.\n\nWe now set up our levels as follows:\n- Level 2: Exact match on forename\n- Level 1: Fuzzy match on forename\n- Level 0: Forename mismatches\n\n\n"])))}function Ae(e,t,n,a){return t(n,400,a,0,3)}function qe(e){return e.button("Reset forename values")}function ze(e,t,n){return e(t(n))}function Me(e){return e(g||(g=(0,b.Z)(["## Observations\n\n- When we modelled two levels, two names that fuzzy matched (John vs Jonny) would have been assigned the same negative match weight as two names which were completely different (John vs Robin).  We therefore lost information\n- When we model three levels, a much stronger negative weight on a mismatch is possible.  This is because the lowest level (level_0) now contains only names which are completely different, rather than being a mix of fuzzy matching names, and names which are competely different.\n\nModelling three levels thereby allows us to extract substantially more information from the data.\n"])))}function Oe(){return{proportion_of_matches:.3,comparison_columns:[{col_name:"gender",m_probabilities:[.1,.9],u_probabilities:[.5,.5]}],level_names:["Gender mismatches","Gender matches"]}}function je(){return{proportion_of_matches:.3,comparison_columns:[{col_name:"gender",m_probabilities:[.3,.7],u_probabilities:[.9,.1]}],level_names:["Forname mismatches","Forename matches exactly"]}}function Le(){return{proportion_of_matches:.3,comparison_columns:[{col_name:"gender",m_probabilities:[.05,.25,.7],u_probabilities:[.75,.15,.1]}],level_names:["Forname mismatches","Forename fuzzy matches","Forename matches"]}}function Fe(e){return e("@observablehq/inputs")}function Ee(e,t){var n=e.module();n.variable(t("title")).define("title",["md"],me),n.variable(t()).define(["md"],fe),n.variable(t("para_1")).define("para_1",["md"],de),n.variable(t("para_2")).define("para_2",["md","tex"],he),n.variable(t("viewof gen")).define("viewof gen",["reset_gender","m_u_input_control","width","settings_gender"],pe),n.variable(t("gen")).define("gen",["Generators","viewof gen"],(function(e,t){return e.input(t)})),n.variable(t("viewof reset_gender")).define("viewof reset_gender",["inputs"],ve),n.variable(t("reset_gender")).define("reset_gender",["Generators","viewof reset_gender"],(function(e,t){return e.input(t)})),n.variable(t("bf_chart_gender")).define("bf_chart_gender",["get_bayes_factor_chart","input_control_data_to_splink_settings","gen"],ge),n.variable(t("para_3")).define("para_3",["md"],be),n.variable(t("para_4")).define("para_4",["md"],ye),n.variable(t("viewof fn1")).define("viewof fn1",["reset_fn1","m_u_input_control","width","settings_forename_1"],we),n.variable(t("fn1")).define("fn1",["Generators","viewof fn1"],(function(e,t){return e.input(t)})),n.variable(t("viewof reset_fn1")).define("viewof reset_fn1",["inputs"],xe),n.variable(t("reset_fn1")).define("reset_fn1",["Generators","viewof reset_fn1"],(function(e,t){return e.input(t)})),n.variable(t("bf_chart_fn_1")).define("bf_chart_fn_1",["get_bayes_factor_chart","input_control_data_to_splink_settings","fn1"],ke),n.variable(t("para_5")).define("para_5",["md"],Ze),n.variable(t("viewof fn2")).define("viewof fn2",["reset_fn2","m_u_input_control","width","settings_forename_2"],Ae),n.variable(t("fn2")).define("fn2",["Generators","viewof fn2"],(function(e,t){return e.input(t)})),n.variable(t("viewof reset_fn2")).define("viewof reset_fn2",["inputs"],qe),n.variable(t("reset_fn2")).define("reset_fn2",["Generators","viewof reset_fn2"],(function(e,t){return e.input(t)})),n.variable(t("bf_chart_fn_2")).define("bf_chart_fn_2",["get_bayes_factor_chart","input_control_data_to_splink_settings","fn2"],ze),n.variable(t("para_6")).define("para_6",["md"],Me),n.variable(t("settings_gender")).define("settings_gender",Oe),n.variable(t("settings_forename_1")).define("settings_forename_1",je),n.variable(t("settings_forename_2")).define("settings_forename_2",Le),n.variable(t("inputs")).define("inputs",["require"],Fe);var a=e.module(_e);n.import("m_u_input_control",a),n.import("input_control_data_to_splink_settings",a);var r=e.module(F);return n.import("get_m_u_chart",r),n.import("get_bayes_factor_chart",r),n}var Ge=n(1369),Je=n(674);var Ne={title:"Dependencies between match weights",post_date:"2021-06-10",code_url:"https://observablehq.com/@robinl/dependencies-between-match-weights",post_type:"obs",post_category:"probabilistic_linkage",description:"An set of interactive, explorable explanations of the Fellegi Sunter model of probabilistic record linkage.  The dependencies between match weights"},Te=["title","para_1","para_2","viewof gen","viewof reset_gender","bf_chart_gender","para_3","para_4","viewof fn1","viewof reset_fn1","bf_chart_fn_1","para_5","viewof fn2","viewof reset_fn2","bf_chart_fn_2","para_6"],Be={name:"147cmx0",styles:"margin-left:auto;margin-right:auto;width:90%;max-width:800px;table{font-size:0.8rem;line-height:1rem;}rem;"},Pe=function(e){return(0,Je.tZ)(Ge.Z,{define:Ee,output_order:Te,post_frontmatter:Ne,css:Be,current_path:e.path})}}}]);
//# sourceMappingURL=component---src-pages-match-weight-dependencies-jsx-85b0ee9249b9e70444fe.js.map