(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[67],{2263:function(e,t,a){"use strict";a(7294);var i=a(835),n=a(8847),o=a(7414),r=a(6140),s=a(674);t.Z=function(e){var t;return t=e.define?(0,s.tZ)(n.Z,{define:e.define,output_order:e.output_order}):e.children,(0,s.tZ)(i.Z,{css:e.className},(0,s.tZ)(r.Z,{title:e.post_frontmatter.title,description:e.post_frontmatter.description}),(0,s.tZ)(o.Z,{post_frontmatter:e.post_frontmatter}),t)}},1498:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p},frontmatter:function(){return h}});a(7294);var i=a(2263),n=(a(9601),a(3948),a(6992),a(1539),a(7941),a(4983)),o=a(674);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var s={_frontmatter:{}};function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return(0,n.kt)("wrapper",r({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",null,"Why I’m backing Vega-Lite as our default tool for data visualisation"),(0,n.kt)("p",null,"The range of data visualisation tools available to data scientists is vast¹. If they’re anything like me, beginner data scientists often don’t put too much thought into which tool to learn — and often just pick a tool on the basis of some impressive outputs they’ve seen online."),(0,n.kt)("p",null,"On any given team, there will tend to be a range of personal favourites. This inconsistency imposes a cost on the team in two ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Data visualisation tools can take months to master, so a range of tools makes it harder to collaborate and share work, and harder to maintain codebases.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Not all tools are equal. The quality of tools varies in their flexibility, the quality of their APIs, and the quality of the data visualisation they produce."))),(0,n.kt)("p",null,"As a result, it makes sense for teams to spend time choosing a ‘sensible default’, and stick with it in most circumstances. I think Vega-Lite is the right choice for standardisation, for the following reasons²:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Consistent, disciplined API underpinned by well-designed grammar of graphics. "),"Data visualisation is the process of mapping different elements of a dataset to visual encodings such as positions on the x and y axes, colours, or sizes. I’ve never seen this more clearly expressed than in the Vega-Lite API. This makes the API extremely predictable, and easy to understand.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Founded on academic research. "),"Vega-Lite is a product of the",(0,n.kt)("a",r({parentName:"p"},{href:"http://idl.cs.washington.edu/"})," UW Interactive Data Lab"),", one of the leading academic centres for data visualisation. It’s heavily informed by research on visual perception and how to convey data visually as accurately as possible. ",(0,n.kt)("a",r({parentName:"p"},{href:"https://www.youtube.com/watch?v=vc1bq0qIKoA"}),"This")," is a great video intro to some of this research³.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Advanced interactivity. "),"Vega-Lite provides the most powerful declarative system I’ve seen for advanced interactivity between charts — such as ",(0,n.kt)("a",r({parentName:"p"},{href:"https://vega.github.io/vega-lite/examples/interactive_seattle_weather.html"}),"brushing one chart to filter the data displayed in another one"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Language agnostic. "),"Vega-Lite charts are fully specified by a declarative .json based syntax. You can build Vega Lite charts by ",(0,n.kt)("a",r({parentName:"p"},{href:"https://vega.github.io/editor/#/"}),"writing raw json,")," from Python (using ",(0,n.kt)("a",r({parentName:"p"},{href:"https://altair-viz.github.io/"}),"Altair"),"), from R (using the",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/vegawidget/altair"})," R interface to Altair"),"), and from ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/fredo-dedup/VegaLite.jl"}),"Julia"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",r({parentName:"strong"},{href:"https://vega.github.io/vega-lite/examples/"}),"Looks great")),". Good data visualisation can never be purely theoretical — an interesting visualisation which ‘breaks’ the rules can be more compelling than something more grounded in theory that looks boring or outdated. Vega-Lite ",(0,n.kt)("a",r({parentName:"p"},{href:"https://vega.github.io/vega-lite/examples/"}),"looks modern and slick")," using the default settings, and is also ",(0,n.kt)("a",r({parentName:"p"},{href:"https://beta.observablehq.com/@domoritz/vega-themes-demo"}),"themable"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Coherent ‘escape valves’ when Vega-Lite is not sufficiently flexible. "),"Visualisation libraries involve a trade off between flexibility and ease of use. With most libraries, there are some customisations or chart types which are simply not possible, and the user has to resort to a learning a completely different tool (e.g. d3.js) to achieve their goals. Vega-Lite is is part of a more coherent set of abstractions. Users can fall back on the more verbose, but more customisable Vega syntax when Vega-Lite is not sufficient, and Vega will be instantly familiar. And both Vega and Vega-Lite share a range of core concepts with d3.js (an imperative language), which gives essentially unlimited flexibility. Coming to Vega-Lite from d3.js, I found that it immediately ‘made sense’ because of these shared concepts.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Web-enabled by default, and easy to host. "),"It is trivial to embed ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/vega/vega-embed"}),"Vega-Lite into any website"),", which can then be hosted on a static web host because data processing and interaction is all dealt with by the front-end. The ease of embedding charts has resulted in it being adopted within a number of high profile websites and tools, such as ",(0,n.kt)("a",r({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Wikipedia:Graphs_and_charts#Vega"}),"Wikipedia")," and ",(0,n.kt)("a",r({parentName:"p"},{href:"https://www.elastic.co/guide/en/kibana/current/vega-graph.html"}),"Kibana"),". If you need to embed graphics elsewhere, you can convert them into a svg or ",(0,n.kt)("a",r({parentName:"p"},{href:"https://vega.github.io/vega/usage/"}),"high resolution png."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Vega-Lite charts are easy to incorporate into more complex webapps. "),"Vega View provides hooks so that Vega-Lite charts can be ",(0,n.kt)("a",r({parentName:"p"},{href:"https://beta.observablehq.com/@domoritz/reactive-vega-lite"}),"modified by external events"),", and also means that charts can ",(0,n.kt)("a",r({parentName:"p"},{href:"https://beta.observablehq.com/@mbostock/observing-vega-signals"}),"expose events to other parts of the website"),". This means that user interaction with a chart can drive the behaviour of other parts of your website.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"GUIs and other spec generation tools. ["),"Voyager2](",(0,n.kt)("a",r({parentName:"p"},{href:"http://vega.github.io/voyager/"}),"http://vega.github.io/voyager/"),") is visualisation recommendation tool which will allow the user to build specs using point-and-click, or will automatically build a range of Vega charts based on a dataset. ",(0,n.kt)("a",r({parentName:"p"},{href:"http://idl.cs.washington.edu/papers/draco/"}),"Draco")," is a cutting edge visualisation recommendation tool that won the InfoVis 2018 Best Paper Award, that suggests specs based optimising ease of visual perception. ",(0,n.kt)("a",r({parentName:"p"},{href:"http://idl.cs.washington.edu/papers/lyra/"}),"Lyra")," provide a GUI in which users can create heavily customised charts using point-and-click drawing tools.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Built into key data science tools by default. "),"A Vega-Lite viewer is built into Jupyterlab by default. Voyager can be installed into JupyterLab as an ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/altair-viz/jupyterlab_voyager"}),"extension"),", enabling datasets to be opened in Voyager.** **Pandas dataframes can be extended to support ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/jakevdp/pdvega"}),"auto-generation of vega charts"),". JupyterLab looks set to become the most popular development environment for data scientists, so Vega’s popularity looks set to continue growing.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Reactive dataflows and strong separation of concerns result in high performance. "),"Vega-Lite is underpinned by a sophisticated engine that is aware of what needs to be re-computed when inputs change or in reaction to other events. This eliminates unnecessary code execution. More generally, there is a strong separation of concerns between the specification and its evaluation, enabling iterative performance enhancement behind the scenes. More details are ",(0,n.kt)("a",r({parentName:"p"},{href:"https://beta.observablehq.com/@jheer/how-vega-works"}),"here"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Free and open source. "),"You can find the main Vega-Lite codebase ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/vega/vega-lite"}),"here"),"."))),(0,n.kt)("h2",null,"How to get started"),(0,n.kt)("p",null,"The Vega-Lite docs have a good ",(0,n.kt)("a",r({parentName:"p"},{href:"https://vega.github.io/vega-lite/tutorials/getting_started.html"}),"getting started tutorial"),"."),(0,n.kt)("p",null,"If you’re a Python user, I recommend Altair to write your Vega-Lite specs. Jake VanderPlas is the author of Altair, and ran an ",(0,n.kt)("a",r({parentName:"p"},{href:"https://www.youtube.com/watch?v=ms29ZPUKxbU"}),"excellent tutorial "),"at Pycon 2018."),(0,n.kt)("p",null,"For further details, the Vega-Lite team did a ",(0,n.kt)("a",r({parentName:"p"},{href:"https://www.youtube.com/watch?v=9uaHRWj04D4&t=18s"}),"great talk at OpenVis 2017"),", and there is another more in depth talk by the team ",(0,n.kt)("a",r({parentName:"p"},{href:"https://www.youtube.com/watch?v=Nsrz4YdaZ_A"}),"here"),"."),(0,n.kt)("p",null,"Jupyter users who just want to get their feet wet can try ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/altair-viz/pdvega"}),"pdvega"),"."),(0,n.kt)("h3",null,"Endnotes"),(0,n.kt)("p",null,"¹ For a sense of the scale of the landscape, see ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/rougier/python-visualization-landscape"}),"here")," for a graphic showing just the Python part."),(0,n.kt)("p",null,"² I have come to this conclusion after working with quite a wide range of highly-recommended (and very good) tools, including matplotlib, ggplot2, d3.js, highcharts, ggivs, Vega, Vega-Lite and plotly."),(0,n.kt)("p",null,"³ These influences run deep. The defaults built into vega-lite are carefully thought out, and grounded in research. For instance, how much does a typical data scientist think about which colour scales to use? This is actually the subject of",(0,n.kt)("a",r({parentName:"p"},{href:"https://idl.cs.washington.edu/files/2018-QuantitativeColor-CHI.pdf"})," rigorous academic studies")," — and the best ones are the defaults which are built into Vega-Lite."))}l.isMDXComponent=!0;var h={title:"Why I’m backing Vega-Lite as our default tool for data visualisation",post_date:"2018-08-22",code_url:"https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/backing_vega_lite.mdx",post_type:"mdx",post_category:"data",description:"hy I’m backing Vega-Lite as our default tool for data visualisation"},p=function(e){e.data;return(0,o.tZ)(i.Z,{post_frontmatter:h},(0,o.tZ)(l,null))}}}]);
//# sourceMappingURL=component---src-pages-backing-vega-lite-jsx-63254e02df70e7c77902.js.map