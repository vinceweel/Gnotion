import{d as a}from"./index.90a78a99.js";import{d as e,a as s,p as t,n,k as i,o as r,c as o,b as d,z as u,v as c,F as l,t as m,w as p}from"./vendor.cd5836c0.js";const f=s((()=>a((()=>import("./index.90a78a99.js").then((function(a){return a.A}))),["/assets/index.90a78a99.js","/assets/index.fbc55178.css","/assets/vendor.cd5836c0.js"])));var _=e({name:"Reader",props:["data"],components:{Api:f},setup:()=>({name:"Reader"})});const v=p();t("data-v-0b602dfd");const b={class:"wrap"},A=d("hr",null,null,-1);n();const g=v(((a,e,s,t,n,p)=>{const f=i("Api");return r(),o("article",{class:[a.name]},[d("div",b,[d(f,{action:"readArticle"},{default:v((({result:a,loading:e,refresh:s})=>[u(" loading: "+c(e)+" ",1),d("p",null,c(a),1),d("button",{onClick:()=>s({test:(new Date).getTime()})}," refresh ",8,["onClick"])])),_:1}),A,d(f,{action:"readComments",params:{test:!1}},{default:v((a=>[d("p",null,c(a),1)])),_:1}),(r(),o(l,null,m(15,(a=>d("p",{key:a},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa necessitatibus quos iusto alias amet minima in accusantium nulla pariatur laudantium tempore, accusamus quis ab, impedit, quod recusandae modi vitae corrupti!"))),64))])],2)}));_.render=g,_.__scopeId="data-v-0b602dfd";export default _;