(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[520],{2465:function(e,t,n){"use strict";function o(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return o}})},2263:function(e,t,n){"use strict";n(7294);var o=n(835),r=n(8847),i=n(7414),a=n(6140),s=n(674);t.Z=function(e){var t;return t=e.define?(0,s.tZ)(r.Z,{define:e.define,output_order:e.output_order}):e.children,(0,s.tZ)(o.Z,{css:e.className},(0,s.tZ)(a.Z,{title:e.post_frontmatter.title,description:e.post_frontmatter.description}),(0,s.tZ)(i.Z,{post_frontmatter:e.post_frontmatter}),t)}},7436:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return me},frontmatter:function(){return de}});n(7294);var o,r,i,a,s,u,c,l,f,d,h,m,_,p,g,b,v,w,y,k,U,Z,S,j,P=n(2465);function C(e){return e(o||(o=(0,P.Z)(["# Magic energy usage and carbon emissions converter"])))}function G(e,t,n){var o=e(r||(r=(0,P.Z)(['<input type="number" >']))),f=e(i||(i=(0,P.Z)(['\n         <input name="unit_from" type="text" autocomplete="off" \n          placeholder="Units to convert from" style="font-size: 1em;" list=options>\n          <datalist id="options">\n              ',"\n          </datalist>"])),t.map((function(t){return Object.assign(e(a||(a=(0,P.Z)(["<option>"]))),{value:t})}))),d=e(s||(s=(0,P.Z)(['<input name="units_to" type="text" autocomplete="off" \n          placeholder="Units to convert to" style="font-size: 1em;" list=options2>\n          <datalist id="options2">\n              ',"\n          </datalist>"])),t.map((function(t){return Object.assign(e(u||(u=(0,P.Z)(["<option>"]))),{value:t})})));function h(){m.value={value:o.value,from:f.children[0].value,to:d.children[0].value},m.dispatchEvent(new CustomEvent("input"))}f.onclick=function(){f.children[0].value="",d.children[0].value=""},d.onclick=function(){d.children[0].value=""},f.onchange=function(){var t=f.children[0].value,o=Object.keys(n.convert._constants_dict[t]),r=d.children[1],i=o.reduce((function(e,t){return"".concat(e,'<option value="').concat(t,'">')}),""),a=e(c||(c=(0,P.Z)(["options_list"])));console.log(a.outerHTML),r.innerHTML=i,h()},o.onkeyup=h,d.onchange=h;var m=e(l||(l=(0,P.Z)(["<p>Convert the value "," <br/> from "," <br/> into ","<br/></p>"])),o,f,d);return m.value={value:"",from:"",to:""},m}function x(e,t,n){var o=""!=e.value,r=""!=e.from,i=""!=e.to;if(o&&r&&i){var a=e,s=t.convert.convert_units(a.from,a.to)*a.value;return n(f||(f=(0,P.Z)([""," "," is "," ",""])),a.value,a.from,s,a.to)}return n(d||(d=(0,P.Z)(["Please enter a value and select from and to units"])))}function B(e,t){return e(t.from,t.to)}function D(e,t,n){return function(o,r){function i(e){return e||""}var a=e(h||(h=(0,P.Z)(["Conversion from `","` to `","`"],["Conversion from \\`","\\` to \\`","\\`"])),o,r),s=t.convert._constants_dict[o][r].sources,u=n(m||(m=(0,P.Z)(["<table> \n   <tr>\n    <th>Unit conversion</th>\n    <th>URL</th>\n    <th>Notes</th>\n</tr>\n   \n   ","\n   \n"])),s.map((function(e){return n(_||(_=(0,P.Z)(["<tr>\n<td>","</td>\n<td>","</td>\n<td>","</td>\n</tr>"])),i(e.from_to),function(e){return e?'<a href="'.concat(e,'">link</a>'):""}(e.url),i(e.desc))})));return n(p||(p=(0,P.Z)([""," ",""])),a,u)}}function O(e){return Object.keys(e.convert._constants_dict)}function K(e){return e.convert._constants_dict.imperial_gas_units.gbp_to_generate_nuclear_hinkley_point_uk}function W(e){return e("@robinl/energy_usage@0.1.6")}function q(e,t){var n=e.module();return n.variable(t()).define(["md"],C),n.variable(t("viewof conversion")).define("viewof conversion",["html","from_options","eu"],G),n.variable(t("conversion")).define("conversion",["Generators","viewof conversion"],(function(e,t){return e.input(t)})),n.variable(t("converted_value")).define("converted_value",["conversion","eu","md"],x),n.variable(t()).define(["get_sources","conversion"],B),n.variable(t("get_sources")).define("get_sources",["md","eu","html"],D),n.variable(t("from_options")).define("from_options",["eu"],O),n.variable(t()).define(["eu"],K),n.variable(t("eu")).define("eu",["require"],W),n}function T(e){return e(g||(g=(0,P.Z)(["# Carbon offsetting vs. the cost of renewable energy"])))}function M(e){return e(b||(b=(0,P.Z)(["*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/offsetting_renewables/).*"])))}function A(e,t){return e(v||(v=(0,P.Z)(["There are a multitude of reputable sites that allow you to offset carbon emissions.\n\nFor instance, [carbonfootprint.com](https://www.carbonfootprint.com/offsetshop.html) offer carbon offsetting from around  "," per tonne of CO2 though the [Verified Carbon Standard](https://verra.org/project/vcs-program/).  \n\nYou can [offset emissions](https://www.goldstandard.org/take-action/offset-your-emissions) though the [Gold Standard](https://www.goldstandard.org/about-us/vision-and-mission) scheme, whereby offsetting projects also contribute to sustainable development.  Offsetting starts at "," a tonne. \n\nEven the UN has a [carbon offsetting platform](https://offset.climateneutralnow.org/jorethang-loop-hydroelectric-project-india), with costs as little as "," a tonne.\n\nAre these values plausible?   How much might we expect it to cost to offset 1 tonne of CO2 emissions? - roughly equivalent to flying economy from the UK to USA return.\n\nLet's try to put these numbers in perspective.  \n\n\n"])),t(6,"GBP","USD"),t(10,"USD"),t(.35,"USD"))}function E(e,t,n,o){return e(w||(w=(0,P.Z)(["## A single low energy light bulb.\n\n\nCarbon offsetting schemes claim that it's possible to find extremely cheap means of reducing emissions.  For instance, a £1 low energy light bulb [supposedly](https://www.theguardian.com/environment/2011/sep/16/carbon-offset-projects-carbon-emissions) can [supposedly save](https://www.theguardian.com/environment/2011/sep/16/carbon-offset-projects-carbon-emissions) 250kg of CO2 over its lifetime.\n\nHow do these figures work out?\n\n8 watt LED bulbs are marketed as equivalent to 60 watt incandecent bulbs, and they cost about £3.\n\nIf a lightbulb is used for 6 hours a day, the saving is "," KWh/day.  If it lasts 10 years, this translates to a total of \n","KWh or \n","MWh.\n\nTranslated into CO2 from grid electricity generation in the UK, this is around\n"," kg or \n"," tonnes of CO2.\n\nAccording to these figures, the cost of carbon offsetting is therefore around "," per tonne.\n\nSo it does seem plausible that some forms of carbon offsetting may be very cheap.\n\nAnother interesting way of looking at the problem is to consider how much it would cost to generate an equivalent amount of renewable energy.\n"])),t(.312),t(10*n("days/years")*.312),t(10*n("days/years")*312e-6),t(10*n("days/years")*312e-6*n("kg_co2_from_grid_electricity/megawatt_hours")),t(10*n("days/years")*312e-6*n("kg_co2_from_grid_electricity/megawatt_hours")/1e3),o(3/(10*n("days/years")*312e-6*n("kg_co2_from_grid_electricity/megawatt_hours")/1e3),"GBP","USD"))}function L(e){return e(y||(y=(0,P.Z)(["\n"])))}function N(e,t,n,o,r){return e(k||(k=(0,P.Z)(["\n## Renewable and low carbon power\n\n### Offshore wind energy, UK\n\nThe UK has some of the best sites in the world for offshore wind[*](https://en.wikipedia.org/wiki/Wind_power_in_the_United_Kingdom), so perhaps it would make sense to offset carbon by buying new wind turbines - enough to generate the same amount of energy.\n\nIn a recent auction[*](https://www.theguardian.com/environment/2019/sep/20/new-windfarms-taxpayers-subsidies-record-low), the cost of building new offshore wind had fallen to about \n"," per MWh.\n\nEach litre jet fuel burned emits around "," kg of CO2, so a tonne of CO2 requires around "," litres of fuel.  The amount of energy in "," litres of fuel is about "," KWh =  "," MWh.\n\nThis indicates that it would cost around **","** to purchase renewable energy generating capacity equivalent to this flight.\n"])),t(40,"GBP","USD"),n("kg_co2_from_jet_fuel/litres_jet_fuel"),o(1e3/r("kg_co2_from_jet_fuel/litres_jet_fuel")),o(1e3/r("kg_co2_from_jet_fuel/litres_jet_fuel")),o(1e3*r("kwh/kg_co2_from_jet_fuel")),n("kwh/kg_co2_from_jet_fuel"),t(40*r("kwh/kg_co2_from_jet_fuel"),"GBP","USD"))}function z(e,t,n){return e(U||(U=(0,P.Z)(["### Solar, Nevada, USA\n\nStarting in 2021, over a 25-year time horizon, the Eagle Shadow Mountain Solar Farm in Nevada will generate electricity for\n","\nper MWh[*](https://earther.gizmodo.com/solar-just-hit-a-record-low-price-in-the-u-s-1826830592).\n\nUsing the same conversions, this implies it would cost\n**","**\nto purchase renewable energy generating capacity equivalent to this flight.\n\n\n\n"])),t(23.76,"USD","GBP"),t(23.76*n("kwh/kg_co2_from_jet_fuel"),"USD","GBP"))}function H(e,t,n){return e(Z||(Z=(0,P.Z)(["### Nuclear Power, UK\n\nHinkley Point C nuclear power plant will sell energy to the UK grid for "," per MWh.  \n\nThis implies it would cost \n**","**\nto purchase nuclear energy generating capacity equivalent to a tonne of CO2.\n"])),t(92.5,"GBP","USD"),t(92.5*n("kwh/kg_co2_from_jet_fuel"),"GBP","USD"))}function R(e,t,n,o){return e(S||(S=(0,P.Z)(["### Schools Energy Cooperative, UK\n\nThe options previously discussed are utility-scale installations, which cannot easily be bought into on a public-scription basis. \n\nOne type of option where consumers may expect a genuinely additive impact is buying into an energy cooperative such as the [Schools Energy Cooperative](https://schools-energy-coop.co.uk/), which installs solar panels on schools.\n\n[Figures](https://github.com/RobinL/energy_usage/blob/master/source_documents/schools_energy_cooperative_factsheet.pdf) from the cooperative suggests that it costs around \n","\nto install solar panels with a potential capacity of 1KW.  [Their figures](https://github.com/RobinL/energy_usage/blob/bd65f21af54a8aad2914d944dcedbd49b56b1bcb/src/convert.js#L76) suggest that, in practice generate around ","\nKWh of energy\nper year.\n\nAssuming these panels have a lifetime of 20 years, this means that the cost of generating 1MWh of power is around \n",".\n\nThis implies it would cost \n**","**\n\nto purchase solar capacity equivalent to a tonne of CO2.\n\nNote that buying residential rooftop solar in the UK costs a little more than this at around[*](https://www.solarguide.co.uk/how-much-does-it-cost-to-install-solar-panels#/) "," per KW of potential generation.\n\n"])),t(n("gbp/kwh_potential_solar_schools_energy"),"GBP","USD"),o("kwh_generated_per_year/residential_solar_uk_kwh_potential_capacity"),t(1e3*n("gbp/kwh_potential_solar_schools_energy")/(20*n("kwh_generated_per_year/residential_solar_uk_kwh_potential_capacity")),"GBP","USD"),t(1e3*n("gbp_to_generate_solar_schools_energy/kg_co2_from_jet_fuel"),"GBP","USD"),t(1500,"GBP","USD"))}function F(e){return e(j||(j=(0,P.Z)(["## Annex:  Source of conversions"])))}function I(e){return e("megawatt_hours","kg_co2_from_grid_electricity")}function V(e){return e("kilowatt_hours","kg_co2_from_jet_fuel")}function Y(e){return e("kwh_potential_solar_schools_energy","gbp")}function $(e){return e("kwh_generated_per_year","residential_solar_uk_kwh_potential_capacity")}function J(){return{GBP:1/1.39}}function Q(){return{USD:1.39}}function X(e){return e("@robinl/energy_usage@0.1.6")}function ee(e){return e.convert.per}function te(e,t){return function(n){return e(t.convert.per(n))}}function ne(e){return e("d3-format")}function oe(e){return function(t){return e.format(",.2r")(t)}}function re(e){return function(t){return"£ "+e.format(",d")(t)}}function ie(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GBP",o=n+" ";"USD"==n&&(o="$"),"GBP"==n&&(o="£");var r=e.format(",.2f");return o+r(t)}}function ae(e,t){return function(n){var o,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GBP";if("GBP"==r){var a=n*e[i];return"".concat(t(n)," = ").concat(t(a,i))}if("GBP"==i)return o=n/e[r],"".concat(t(o)," = ").concat(t(n,r))}}function se(e){return e(10.1,"EUR")}function ue(e){return e(10.1,"GBP","USD")}function ce(e,t){var n=e.module();n.variable(t("title")).define("title",["md"],T),n.variable(t()).define(["md"],M),n.variable(t("md1")).define("md1",["md","xr_string"],A),n.variable(t("md2")).define("md2",["md","fmt_num","per","xr_string"],E),n.variable(t()).define(["md"],L),n.variable(t("md3")).define("md3",["md","xr_string","fmt_per","fmt_num","per"],N),n.variable(t("md4")).define("md4",["md","xr_string","per"],z),n.variable(t("md5")).define("md5",["md","xr_string","per"],H),n.variable(t("md6")).define("md6",["md","xr_string","per","fmt_per"],R),n.variable(t("md7")).define("md7",["md"],F),n.variable(t("md8")).define("md8",["get_sources"],I),n.variable(t("md9")).define("md9",["get_sources"],V),n.variable(t("md10")).define("md10",["get_sources"],Y),n.variable(t("md11")).define("md11",["get_sources"],$);var o=e.module(q);return n.import("get_sources",o),n.variable(t()).define(J),n.variable(t("gbp_xrs")).define("gbp_xrs",Q),n.variable(t("eu")).define("eu",["require"],X),n.variable(t("per")).define("per",["eu"],ee),n.variable(t("fmt_per")).define("fmt_per",["fmt_num","eu"],te),n.variable(t("d3")).define("d3",["require"],ne),n.variable(t("fmt_num")).define("fmt_num",["d3"],oe),n.variable(t("format_gbp")).define("format_gbp",["d3"],re),n.variable(t("format_currency")).define("format_currency",["d3"],ie),n.variable(t("xr_string")).define("xr_string",["gbp_xrs","format_currency"],ae),n.variable(t()).define(["xr_string"],se),n.variable(t()).define(["xr_string"],ue),n}var le=n(2263),fe=n(674),de={title:"Carbon offsetting vs. the cost of renewable energy",post_date:"2019-10-13",code_url:"https://observablehq.com/@robinl/how-much-should-carbon-offsetting-cost/",post_type:"obs",post_category:"energy",description:""},he=["title","md1","md2","md3","md4","md5","md6","md7","md8","md9","md10","md11"],me=function(e){e.data;return(0,fe.tZ)(le.Z,{define:ce,output_order:he,post_frontmatter:de})}}}]);
//# sourceMappingURL=component---src-pages-offsetting-renewables-jsx-e3b6f09480e3e9a2ab74.js.map