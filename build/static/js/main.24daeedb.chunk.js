(this["webpackJsonpclaim-react-student-starter"]=this["webpackJsonpclaim-react-student-starter"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),s=a.n(i),c=(a(10),a(11),a(1)),l=a.n(c),o=a(4);a.n(o).a.config();var m={async index(e){try{const t=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1337c95de66011a29077e1459037757d&query=${e}&page=1&include_adult=false`);if(t.status>400)throw new Error(t.status);return await t.json()}catch(t){return"Currently facing issue with: "+t.message}},async similar(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}/recommendations?api_key=1337c95de66011a29077e1459037757d&language=en-US&page=1`);if(t.status>400)throw new Error(t.status);return await t.json()}catch(t){return"Currently facing issue with: "+t.message}}};a(18);const u=({movies:e,showSimilar:t,isVisible:a})=>{const n=()=>{t()};return e.map((e,t)=>r.a.createElement("figure",{key:t},r.a.createElement("img",{alt:"",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+e.poster_path}),r.a.createElement("figcaption",null,r.a.createElement("p",null,'Title: "',e.title,'"'),r.a.createElement("p",null,"Release date: ",e.release_date),r.a.createElement("p",{className:e.vote_average>=7?"good":"bad"},"Rating: ",e.vote_average),r.a.createElement("p",null,"Description: ",e.overview),r.a.createElement("button",{onClick:n},"Similar movies"),a&&r.a.createElement("div",{className:"similarMovies"},r.a.createElement("div",null)))))};u.propType={movies:l.a.array,handler:l.a.func,similarMoviesHandler:l.a.func};a(19);const p=({handler:e})=>r.a.createElement("form",{onSubmit:t=>{t.preventDefault(),e(t)}},r.a.createElement("input",null),r.a.createElement("button",{type:"Submit"},"Search"));p.propType={handler:l.a.func};a(20);const d=()=>{const[e,t]=Object(n.useState)([]),[a,i]=Object(n.useState)(!1);return r.a.createElement("main",null,r.a.createElement(p,{handler:async e=>{const{results:a}=await m.index(e.target.elements[0].value);t(a)}}),r.a.createElement("div",{className:"cards"},r.a.createElement(u,{movies:e,showSimilar:()=>{i(e=>!e)},isVisible:a})))},h=()=>r.a.createElement(d,null);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.24daeedb.chunk.js.map