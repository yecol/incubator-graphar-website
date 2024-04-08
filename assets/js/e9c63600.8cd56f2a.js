"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[268],{3844:(d,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>h,toc:()=>x});var t=s(1527),r=s(395);const i={id:"implementation-status",title:"Implementation Status",sidebar_position:2},n=void 0,h={id:"specification/implementation-status",title:"Implementation Status",description:"The following tables summarize the features available in the various official GraphAr libraries.",source:"@site/docs/specification/implementation-status.md",sourceDirName:"specification",slug:"/specification/implementation-status",permalink:"/docs/specification/implementation-status",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-graphar-website/tree/main/docs/specification/implementation-status.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"implementation-status",title:"Implementation Status",sidebar_position:2},sidebar:"documentation",previous:{title:"Format Specification",permalink:"/docs/specification/format"},next:{title:"Libraries",permalink:"/docs/libraries/"}},l={},x=[{value:"Data Types",id:"data-types",level:2},{value:"Payload Data File Formats",id:"payload-data-file-formats",level:2},{value:"Property",id:"property",level:2},{value:"Property Group",id:"property-group",level:2},{value:"Adjacency List",id:"adjacency-list",level:2},{value:"Vertex",id:"vertex",level:2},{value:"Edge",id:"edge",level:2},{value:"Graph",id:"graph",level:2},{value:"Libraries Version Compatibility",id:"libraries-version-compatibility",level:2}];function c(d){const e={blockquote:"blockquote",em:"em",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...d.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"The following tables summarize the features available in the various official GraphAr libraries.\nAll libraries currently follow version 1.0.0 of the GraphAr format."}),"\n",(0,t.jsx)(e.h2,{id:"data-types",children:"Data Types"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Data type (primitive)"}),(0,t.jsx)(e.th,{children:"C++"}),(0,t.jsx)(e.th,{children:"Java"}),(0,t.jsx)(e.th,{children:"Scala"}),(0,t.jsx)(e.th,{children:"Python"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Boolean"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Int32"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Int64"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Float"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Double"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"String"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Date"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Timestamp"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Time"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]})]})]}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Data type (nested)"}),(0,t.jsx)(e.th,{children:"C++"}),(0,t.jsx)(e.th,{children:"Java"}),(0,t.jsx)(e.th,{children:"Scala"}),(0,t.jsx)(e.th,{children:"Python"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"List (*)"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]})})]}),"\n",(0,t.jsx)(e.p,{children:"Notes:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"(*) The data type of List is not supported by the CSV payload file format."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"payload-data-file-formats",children:"Payload Data File Formats"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Format"}),(0,t.jsx)(e.th,{children:"C++"}),(0,t.jsx)(e.th,{children:"Java"}),(0,t.jsx)(e.th,{children:"Scala"}),(0,t.jsx)(e.th,{children:"Python"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"CSV"}),(0,t.jsx)(e.td,{children:"R/W"}),(0,t.jsx)(e.td,{children:"R (1)"}),(0,t.jsx)(e.td,{children:"R/W"}),(0,t.jsx)(e.td,{children:"R/W (2)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ORC"}),(0,t.jsx)(e.td,{children:"R/W"}),(0,t.jsx)(e.td,{children:"R (1)"}),(0,t.jsx)(e.td,{children:"R/W"}),(0,t.jsx)(e.td,{children:"R/W (2)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Parquet"}),(0,t.jsx)(e.td,{children:"R/W"}),(0,t.jsx)(e.td,{children:"R (1)"}),(0,t.jsx)(e.td,{children:"R/W"}),(0,t.jsx)(e.td,{children:"R/W (2)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Avro"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"HDF5"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"JSON"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]})]})]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"Notes:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.em,{children:"R"})," - Read supported"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.em,{children:"W"})," - Write supported"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Supported compression methods for the file formats:"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Compression"}),(0,t.jsx)(e.th,{children:"C++"}),(0,t.jsx)(e.th,{children:"Java"}),(0,t.jsx)(e.th,{children:"Scala"}),(0,t.jsx)(e.th,{children:"Python"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ZSTD (*)"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]})})]}),"\n",(0,t.jsx)(e.p,{children:"Notes:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"(*) Compression is not supported by the CSV payload file format."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"property",children:"Property"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Property feature"}),(0,t.jsx)(e.th,{children:"C++"}),(0,t.jsx)(e.th,{children:"Java"}),(0,t.jsx)(e.th,{children:"Scala"}),(0,t.jsx)(e.th,{children:"Python"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"primary key"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"nullable"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"Supported operations in Property:"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Property operation"}),(0,t.jsx)(e.th,{children:"C++"}),(0,t.jsx)(e.th,{children:"Java"}),(0,t.jsx)(e.th,{children:"Scala"}),(0,t.jsx)(e.th,{children:"Python"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"create"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713 (1)"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713 (2)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get_name"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713 (1)"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713 (2)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"is_primary_key"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713 (1)"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713 (2)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"is_nullable"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713 (2)"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"property-group",children:"Property Group"}),"\n",(0,t.jsx)(e.p,{children:"| Property Group    | C++   |Java (1)| Scala |  Python (2)|"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"(operation)"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"create"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"add property"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"remove property"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get properties"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"check property"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get file type"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get path prefix"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"check validation"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"adjacency-list",children:"Adjacency List"}),"\n",(0,t.jsx)(e.p,{children:"| Adjacency List    | C++   | Java  | Scala |   Python   |"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"(type)"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"CSR"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"CSC"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"COO"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"Supported operations in Adjacency List:"}),"\n",(0,t.jsx)(e.p,{children:"| Adjacency List    | C++   |Java (1)| Scala |  Python (2)|"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"(operation)"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"create"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get adjacency type"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get file type"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get path prefix"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"check validation"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"vertex",children:"Vertex"}),"\n",(0,t.jsx)(e.p,{children:"Vertex features:"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Vertex feature"}),(0,t.jsx)(e.th,{children:"C++"}),(0,t.jsx)(e.th,{children:"Java"}),(0,t.jsx)(e.th,{children:"Scala"}),(0,t.jsx)(e.th,{children:"Python"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"label"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"tag"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"chunk based"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"property group"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"Notes:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.em,{children:"label"})," is the vertex label, which is a unique identifier for the vertex."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.em,{children:"tag"})," is the vertex tag, which is tag or category for the vertex."]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Supported operations in Vertex Info:"}),"\n",(0,t.jsx)(e.p,{children:"| Vertex Info       | C++   |Java (1)| Scala | Python (2) |"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"(operation)"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"create"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"add group"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"remove group"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get label"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get chunk size"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get groups"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get path prefix"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"check property"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"check validation"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"serialize"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"deserialize"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"edge",children:"Edge"}),"\n",(0,t.jsx)(e.p,{children:"Edge features:"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Edge feature"}),(0,t.jsx)(e.th,{children:"C++"}),(0,t.jsx)(e.th,{children:"Java"}),(0,t.jsx)(e.th,{children:"Scala"}),(0,t.jsx)(e.th,{children:"Python"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"label"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"chunk based"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"property group"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"adjacent list"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"directed"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"Supported operations in Edge Info:"}),"\n",(0,t.jsx)(e.p,{children:"| Edge Info         | C++   |Java (1)| Scala | Python (2) |"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"(operation)"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"create"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"add group"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"remove group"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"add adj list"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"remove adj list"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get label"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get source label"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get dest label"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get chunk size"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get source chunk size"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get dest chunk size"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get groups"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"check adj list"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"check property"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get file type"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get path prefix"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"is directed"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"check validation"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"serialize"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"deserialize"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]})]})]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"Notes:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.em,{children:"<source label, label, dest label>"})," is the unique identifier for the edge type."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"graph",children:"Graph"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Graph"}),(0,t.jsx)(e.th,{children:"C++"}),(0,t.jsx)(e.th,{children:"Java"}),(0,t.jsx)(e.th,{children:"Scala"}),(0,t.jsx)(e.th,{children:"Python"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"labeled vertex (with property)"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"labeled edge (with property)"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"extra info"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"Supported operations in Graph Info:"}),"\n",(0,t.jsx)(e.p,{children:"| Graph Info        | C++   |Java (1)| Scala | Python (2) |"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"(operation)"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"create"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"add vertex"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"remove vertex"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"add edge"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"remove edge"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get name"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get vertex"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get edge"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"add extra info"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"remove extra info"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"get extra info"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"check validation"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"serialize"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"deserialize"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"}),(0,t.jsx)(e.td,{children:"\u2713"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"Notes:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"(1) Through fastFFI bindings to the GraphAr C++ library."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"(2) Through py4j bindings to the GraphAr Spark library."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"libraries-version-compatibility",children:"Libraries Version Compatibility"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"GraphAr C++ Version"}),(0,t.jsx)(e.th,{children:"C++"}),(0,t.jsx)(e.th,{children:"CMake"}),(0,t.jsx)(e.th,{children:"Format Version"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"0.11.x"}),(0,t.jsx)(e.td,{children:"17+"}),(0,t.jsx)(e.td,{children:"2.8+"}),(0,t.jsx)(e.td,{children:"1.0.0"})]})})]}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"GraphAr Java Version"}),(0,t.jsx)(e.th,{children:"Java"}),(0,t.jsx)(e.th,{children:"Maven"}),(0,t.jsx)(e.th,{children:"Format Version"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"0.1.0"}),(0,t.jsx)(e.td,{children:"1.8"}),(0,t.jsx)(e.td,{children:"3.6+"}),(0,t.jsx)(e.td,{children:"1.0.0"})]})})]}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"GraphAr Spark Version"}),(0,t.jsx)(e.th,{children:"Apache Spark Version"}),(0,t.jsx)(e.th,{children:"Scala Version"}),(0,t.jsx)(e.th,{children:"Java Version"}),(0,t.jsx)(e.th,{children:"Hadoop Version"}),(0,t.jsx)(e.th,{children:"Format Version"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"0.1.0"}),(0,t.jsx)(e.td,{children:"3.2.x-3.3.x"}),(0,t.jsx)(e.td,{children:"2.12.x"}),(0,t.jsx)(e.td,{children:"1.8, 11"}),(0,t.jsx)(e.td,{children:"3"}),(0,t.jsx)(e.td,{children:"1.0.0"})]})})]}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"GraphAr PySpark Version"}),(0,t.jsx)(e.th,{children:"Python Version"}),(0,t.jsx)(e.th,{children:"PySpark Version"}),(0,t.jsx)(e.th,{children:"Hadoop Version"}),(0,t.jsx)(e.th,{children:"Format Version"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"0.1.0"}),(0,t.jsx)(e.td,{children:"3.8+"}),(0,t.jsx)(e.td,{children:"3.2.x"}),(0,t.jsx)(e.td,{children:"3"}),(0,t.jsx)(e.td,{children:"1.0.0"})]})})]}),"\n",(0,t.jsx)(e.p,{children:"Notes:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Since the GraphAr PySpark library is bindings to the GraphAr Spark library,\nthe PySpark version should be compatible with the Spark version."}),"\n"]})]})}function j(d={}){const{wrapper:e}={...(0,r.a)(),...d.components};return e?(0,t.jsx)(e,{...d,children:(0,t.jsx)(c,{...d})}):c(d)}},395:(d,e,s)=>{s.d(e,{Z:()=>h,a:()=>n});var t=s(959);const r={},i=t.createContext(r);function n(d){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof d?d(e):{...e,...d}}),[e,d])}function h(d){let e;return e=d.disableParentContext?"function"==typeof d.components?d.components(r):d.components||r:n(d.components),t.createElement(i.Provider,{value:e},d.children)}}}]);