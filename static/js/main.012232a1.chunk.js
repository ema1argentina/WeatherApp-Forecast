(this.webpackJsonpquestion04=this.webpackJsonpquestion04||[]).push([[0],[,function(e,t,a){var n={"./cloudy.svg":20,"./rain.svg":21,"./snow.svg":22,"./sun.svg":23};function c(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id=1},,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/cloudy.9cbfca91.svg"},function(e,t,a){e.exports=a.p+"static/media/rain.e016beab.svg"},function(e,t,a){e.exports=a.p+"static/media/snow.7321bc31.svg"},function(e,t,a){e.exports=a.p+"static/media/sun.f21171ab.svg"},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),i=(a(16),a(17),a(18),a(2)),s=a.n(i),l=a(5),m=a(6),f=a(7),d=a(9),p=a(8),v=a(10),u=function(e){return c.a.createElement("div",null,c.a.createElement("h1",null,c.a.createElement("strong",null,"Weather Forecast")," "),c.a.createElement("p",null,"Search for the weather conditions in cities...  "))},h=function(e){return c.a.createElement("form",{onSubmit:e.loadWeather},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"city"},"City"),c.a.createElement("input",{type:"text",className:"form-control",name:"city",id:"city",placeholder:"Ex: Buenos Aires..."})),c.a.createElement("div",{className:"form-group"},c.a.createElement("button",{type:"submit",className:"btn btn-default"},"Check Weather")),c.a.createElement("hr",{className:"mybold-line"}))},y=function(e){return c.a.createElement("div",null,e.error&&c.a.createElement("div",{className:"alert alert-danger",role:"alert"},e.error),c.a.createElement("div",{className:"col-md-2"},e.temperature&&c.a.createElement("div",null,c.a.createElement("img",{src:a(1)("./".concat(e.icon,".svg")),className:"img-responsive center-block",alt:"Weather"}),c.a.createElement("h2",{className:"text-center myH2"},c.a.createElement("strong",null,e.temperature,"\xb0F"))),e.humidity&&c.a.createElement("p",{className:"text-center"},"Humidity: ",c.a.createElement("span",null,e.humidity,"%")),e.description&&c.a.createElement("p",{className:"text-center"},"Conditions: ",c.a.createElement("span",null,e.description))),c.a.createElement("div",{className:"col-md-2"},e.fDate1&&c.a.createElement("div",null,c.a.createElement("p",{className:"text-center"},c.a.createElement("strong",null,e.fDay1)),c.a.createElement("img",{src:a(1)("./".concat(e.fIcon1,".svg")),className:"img-responsive center-block smallIcon",alt:"Weather"}),c.a.createElement("p",{className:"text-center"},e.fTemp1,"\xb0F"))),c.a.createElement("div",{className:"col-md-2"},e.fDate2&&c.a.createElement("div",null,c.a.createElement("p",{className:"text-center"},c.a.createElement("strong",null,e.fDay2)),c.a.createElement("img",{src:a(1)("./".concat(e.fIcon2,".svg")),className:"img-responsive center-block smallIcon",alt:"Weather"}),c.a.createElement("p",{className:"text-center"},e.fTemp2,"\xb0F"))),c.a.createElement("div",{className:"col-md-2"},e.fDate3&&c.a.createElement("div",null,c.a.createElement("p",{className:"text-center"},c.a.createElement("strong",null,e.fDay3)),c.a.createElement("img",{src:a(1)("./".concat(e.fIcon3,".svg")),className:"img-responsive center-block smallIcon",alt:"Weather"}),c.a.createElement("p",{className:"text-center"},e.fTemp3,"\xb0F"))),c.a.createElement("div",{className:"col-md-2"},e.fDate4&&c.a.createElement("div",null,c.a.createElement("p",{className:"text-center"},c.a.createElement("strong",null,e.fDay4)),c.a.createElement("img",{src:a(1)("./".concat(e.fIcon4,".svg")),className:"img-responsive center-block smallIcon",alt:"Weather"}),c.a.createElement("p",{className:"text-center"},e.fTemp4,"\xb0F"))),c.a.createElement("div",{className:"col-md-2"},e.fDate5&&c.a.createElement("div",null,c.a.createElement("p",{className:"text-center"},c.a.createElement("strong",null,e.fDay5)),c.a.createElement("img",{src:a(1)("./".concat(e.fIcon5,".svg")),className:"img-responsive center-block smallIcon",alt:"Weather"}),c.a.createElement("p",{className:"text-center"},e.fTemp5,"\xb0F"))))};function D(e){for(var t=e.list,a=[],n=0;n<t.length;n++){var c=t[n],r=new Date(c.dt_txt),o=r.toLocaleDateString("en-US"),i={weekday:"long"},s=r.toLocaleDateString("en-US",i),l=new Date;l=l.toLocaleDateString("en-US",i);var m={};a.length>0&&s!==a[a.length-1].day?(m={date:o,day:s,temp:c.main.temp,weather:c.weather[0].main,weatherDesc:c.weather[0].description,icon:E(c.weather[0].main)},a.push(m)):0===a.length&&s!==l&&(m={date:o,day:s,temp:c.main.temp,weather:c.weather[0].main,weatherDesc:c.weather[0].description,icon:E(c.weather[0].main)},a.push(m))}return a}function E(e){var t="";switch(e){case"Clouds":t="cloudy";break;case"Rain":t="rain";break;case"Snow":t="snow";break;default:t="sun"}return t}var g="d32aae6cc8bcd97133f1b0820a86b492",w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,icon:void 0,fDay1:void 0,fDate1:void 0,fTemp1:void 0,fIcon1:void 0,fDay2:void 0,fDate2:void 0,fTemp2:void 0,fIcon2:void 0,fDay3:void 0,fDate3:void 0,fTemp3:void 0,fIcon3:void 0,fDay4:void 0,fDate4:void 0,fTemp4:void 0,fIcon4:void 0,fDay5:void 0,fDate5:void 0,fTemp5:void 0,fIcon5:void 0,error:void 0},a.getWeather=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,c,r,o,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=t.target.elements.city.value,c="",r="",o="",i="",!n){e.next=19;break}return e.next=9,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat(g));case 9:return c=e.sent,e.next=12,c.json();case 12:return r=e.sent,e.next=15,fetch("http://api.openweathermap.org/data/2.5/forecast?q=".concat(n,"&appid=").concat(g));case 15:return o=e.sent,e.next=18,o.json();case 18:i=e.sent;case 19:n&&"404"!==r.cod?(l=D(i),a.setState({temperature:r.main.temp,city:r.name,country:r.sys.country,humidity:r.main.humidity,description:r.weather[0].description,icon:E(r.weather[0].main),fDay1:l[0].day,fDate1:l[0].date,fTemp1:l[0].temp,fIcon1:l[0].icon,fDay2:l[1].day,fDate2:l[1].date,fTemp2:l[1].temp,fIcon2:l[1].icon,fDay3:l[2].day,fDate3:l[2].date,fTemp3:l[2].temp,fIcon3:l[2].icon,fDay4:l[3].day,fDate4:l[3].date,fTemp4:l[3].temp,fIcon4:l[3].icon,fDay5:l[4].day,fDate5:l[4].date,fTemp5:l[4].temp,fIcon5:l[4].icon,error:""})):a.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,icon:void 0,fDay1:void 0,fDate1:void 0,fTemp1:void 0,fIcon1:void 0,fDay2:void 0,fDate2:void 0,fTemp2:void 0,fIcon2:void 0,fDay3:void 0,fDate3:void 0,fTemp3:void 0,fIcon3:void 0,fDay4:void 0,fDate4:void 0,fTemp4:void 0,fIcon4:void 0,fDay5:void 0,fDate5:void 0,fTemp5:void 0,fIcon5:void 0,error:"Please enter a valid City and try again."}),console.log(r),console.log(i);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"title-container"},c.a.createElement(u,null)),c.a.createElement("div",{className:"form-container"},c.a.createElement(h,{loadWeather:this.getWeather})),c.a.createElement("div",{className:"result-container"},c.a.createElement(y,{temperature:this.state.temperature,city:this.state.city,country:this.state.country,humidity:this.state.humidity,description:this.state.description,icon:this.state.icon,fDay1:this.state.fDay1,fDate1:this.state.fDate1,fTemp1:this.state.fTemp1,fIcon1:this.state.fIcon1,fDay2:this.state.fDay2,fDate2:this.state.fDate2,fTemp2:this.state.fTemp2,fIcon2:this.state.fIcon2,fDay3:this.state.fDay3,fDate3:this.state.fDate3,fTemp3:this.state.fTemp3,fIcon3:this.state.fIcon3,fDay4:this.state.fDay4,fDate4:this.state.fDate4,fTemp4:this.state.fTemp4,fIcon4:this.state.fIcon4,fDay5:this.state.fDay5,fDate5:this.state.fDate5,fTemp5:this.state.fTemp5,fIcon5:this.state.fIcon5,error:this.state.error}))))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.012232a1.chunk.js.map