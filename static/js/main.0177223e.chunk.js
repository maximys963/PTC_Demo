(this.webpackJsonpptc_demo=this.webpackJsonpptc_demo||[]).push([[0],{139:function(e,t,n){e.exports={container:"Registration_container__1G6am",title:"Registration_title__3z9R7"}},140:function(e,t,n){e.exports={container:"Buses_container__3kAp4",search_container:"Buses_search_container__3aR2z"}},142:function(e,t,n){e.exports={container:"Taxi_container__1hham",search_container:"Taxi_search_container__1dv6O"}},143:function(e,t,n){e.exports={pages_container:"Traffic_pages_container__3BzIQ",container:"Traffic_container__3_vf3"}},173:function(e,t,n){},174:function(e,t,n){},256:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(28),c=n.n(r),s=(n(173),n(174),n(135)),o=n(24),l=n(26),d=n(261),b=n(263),j=n(97),m=n(53),p=n(87),h=n.n(p),u=n(6),x={labelCol:{span:8},wrapperCol:{span:16}},O={wrapperCol:{offset:8,span:16}},_=function(e){var t=Object(o.f)();return Object(u.jsxs)("div",{className:h.a.container,children:[Object(u.jsx)("div",{className:h.a.title,children:"\u041e\u043d\u043b\u0430\u0439\u043d \u043c\u043e\u043d\u0456\u0442\u043e\u0440\u0438\u043d\u0433 \u0433\u0440\u043e\u043c\u0430\u0434\u0441\u044c\u043a\u043e\u0433\u043e \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0443 \u043c\u0456\u0441\u0442\u0430 \u0406\u0440\u043f\u0456\u043d\u044c"}),Object(u.jsx)("div",{className:h.a.login_form,children:Object(u.jsxs)(d.a,Object(l.a)(Object(l.a)({},x),{},{name:"basic",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e),t.push("/traffic/buses")},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(u.jsx)(d.a.Item,{label:"\u041b\u043e\u0433\u0456\u043d",name:"username",rules:[{required:!0,message:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0437\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u043b\u043e\u0433\u0456\u043d"}],children:Object(u.jsx)(b.a,{})}),Object(u.jsx)(d.a.Item,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",rules:[{required:!0,message:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0437\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}],children:Object(u.jsx)(b.a.Password,{})}),Object(u.jsx)("div",{className:h.a.registration_container,children:Object(u.jsx)("div",{role:"button",onClick:function(){t.push("/registration")},className:h.a.registration,children:"\u0429\u0435 \u043d\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u043b\u0438\u0441\u044c ?"})}),Object(u.jsx)(d.a.Item,Object(l.a)(Object(l.a)({},O),{},{name:"remember",valuePropName:"checked",children:Object(u.jsx)(j.a,{children:"\u0417\u0430\u043f\u0430\u043c'\u044f\u0442\u0430\u0442\u0438 \u043c\u0435\u043d\u0435"})})),Object(u.jsx)(d.a.Item,Object(l.a)(Object(l.a)({},O),{},{children:Object(u.jsx)(m.a,{type:"primary",htmlType:"submit",children:"\u0423\u0432\u0456\u0439\u0442\u0438"})}))]}))})]})},g=n(139),f=n.n(g),w={required:"${label} \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f",types:{email:"\u041d\u0435 \u0432\u0430\u043b\u0456\u0434\u043d\u0438\u0439 \u0456\u043c\u0435\u0439\u043b"},string:{range:"${label} \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u0431\u0443\u0442\u0438 \u043c\u0456\u043d\u0456\u043c\u0443\u043c ${min} \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"}},k={labelCol:{span:11},wrapperCol:{span:16}},y=function(e){var t=Object(o.f)();return Object(u.jsxs)("div",{className:f.a.container,children:[Object(u.jsx)("div",{className:f.a.title,children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"}),Object(u.jsxs)(d.a,Object(l.a)(Object(l.a)({},k),{},{name:"nest-messages",onFinish:function(){t.push("/")},validateMessages:w,children:[Object(u.jsx)(d.a.Item,{name:["user","name"],label:"\u0406\u043c\u044f",rules:[{required:!0}],children:Object(u.jsx)(b.a,{})}),Object(u.jsx)(d.a.Item,{name:["user","email"],label:"\u0406\u043c\u0435\u0439\u043b",rules:[{type:"email",required:!0}],children:Object(u.jsx)(b.a,{})}),Object(u.jsx)(d.a.Item,{name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",rules:[{required:!0}],children:Object(u.jsx)(b.a.Password,{})}),Object(u.jsx)(d.a.Item,{name:"repeat password",label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",rules:[{required:!0}],children:Object(u.jsx)(b.a.Password,{})}),Object(u.jsx)(d.a.Item,{wrapperCol:Object(l.a)(Object(l.a)({},k.wrapperCol),{},{offset:8}),children:Object(u.jsx)(m.a,{type:"primary",htmlType:"submit",children:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044c"})})]}))]})},v=n(58),C=n(70),S=n(265),T=n(266),B=n(267),N=C.a.SubMenu,I=["sub1","sub2","sub4"],A=function(e){var t=Object(a.useState)(["sub1"]),n=Object(v.a)(t,2),i=n[0],r=n[1],c=Object(o.f)();return Object(u.jsxs)(C.a,{mode:"inline",openKeys:i,onOpenChange:function(e){var t=e.find((function(e){return-1===i.indexOf(e)}));-1===I.indexOf(t)?r(e):r(t?[t]:[])},style:{width:256},children:[Object(u.jsxs)(N,{icon:Object(u.jsx)(S.a,{}),title:"\u0413\u0440\u043e\u043c\u0430\u0434\u0441\u044c\u043a\u0438\u0439 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442",children:[Object(u.jsx)(C.a.Item,{role:"button",onClick:function(){return c.push("/traffic/buses")},children:"\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u0456 \u0442\u0430\u043a\u0441\u0456"},"1"),Object(u.jsx)(C.a.Item,{role:"button",onClick:function(){return c.push("/traffic/taxi")},children:"\u0422\u0430\u043a\u0441\u0456"},"2"),Object(u.jsx)(C.a.Item,{role:"button",onClick:function(){return c.push("/traffic/blablacar")},children:"BlaBlaCar"},"3")]},"sub1"),Object(u.jsxs)(N,{icon:Object(u.jsx)(T.a,{}),title:"\u0410\u043d\u0430\u043b\u0456\u0442\u0438\u043a\u0430",children:[Object(u.jsx)(C.a.Item,{onClick:function(){return c.push("/traffic/overall")},children:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430"},"5"),Object(u.jsx)(C.a.Item,{onClick:function(){return c.push("/traffic/taxi_charts")},children:"\u0422\u0430\u043a\u0441\u0456"},"6")]},"sub2"),Object(u.jsx)(N,{icon:Object(u.jsx)(B.a,{}),title:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442",children:Object(u.jsx)(C.a.Item,{onClick:function(){return c.push("/")},children:"\u0412\u0438\u0439\u0442\u0438"},"12")},"sub4")]})},L=n(264),F=n(259),R=n(140),q=n.n(R),M=b.a.Search,D=[{title:"\u041d\u043e\u043c\u0435\u0440",dataIndex:"number",key:"number",render:function(e){return Object(u.jsx)("a",{children:e})}},{title:"\u041d\u0430\u043f\u0440\u044f\u043c\u043e\u043a",dataIndex:"direction",key:"direction"},{title:"\u0426\u0456\u043d\u0430",dataIndex:"price",key:"price"},{title:"\u0420\u043e\u0431\u043e\u0447\u0456 \u0434\u043d\u0456",key:"tags",dataIndex:"tags",render:function(e){return Object(u.jsx)(u.Fragment,{children:e.map((function(e){return Object(u.jsx)(L.a,{color:"green",children:e.toUpperCase()},e)}))})}},{title:"\u0427\u0430\u0441 \u0440\u043e\u0431\u043e\u0442\u0438",dataIndex:"workTime",key:"workTime"}],E=[{key:"1",number:"1-\u0414",direction:"\u0412\u0456\u0439\u0441\u044c\u043a\u043e\u0432\u0435 \u043c\u0456\u0441\u0442\u0435\u0447\u043a\u043e \u2013 \u0406\u0440\u043f\u0456\u043d\u044c",price:"16 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0421\u0440","\u041f\u0442"],workTime:"8:00 - 17:00",isShown:!0},{key:"2",number:"2",direction:"\u043c. \u0411\u0443\u0447\u0430 \u2013 \u0441. \u041c\u0438\u0440\u043e\u0446\u044c\u043a\u0435",price:"24 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442"],workTime:"8:00 - 19:00",isShown:!0},{key:"3",number:"3",direction:"\u0406\u0440\u043f\u0456\u043d\u044c \u2013 \u0411\u0443\u0447\u0430",price:"16 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u041d\u0434"],workTime:"5:30 - 23:00",isShown:!0},{key:"4",number:"6",direction:"\u0441\u0442. \u0406\u0440\u043f\u0456\u043d\u044c \u2013 \u041c\u0430\u0448\u0442\u043e\u0440\u0444",price:"8 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0434"],workTime:"9:00 - 20:00",isShown:!0},{key:"5",number:"6, 7A, 7-\u0411",direction:"\u0406\u0440\u043f\u0456\u043d\u044c (\u043a\u0456\u043b\u044c\u0446\u0435\u0432\u0438\u0439)",price:"8 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0434"],workTime:"6:00 - 23:00",isShown:!0},{key:"6",number:"8",direction:"\u0406\u0440\u043f\u0456\u043d\u044c \u2013 \u0420\u043e\u043c\u0430\u043d\u0456\u0432\u043a\u0430",price:"16\u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0434"],workTime:"10:00 - 17:00",isShown:!0},{key:"7",number:"11",direction:"\u0441\u0442. \u0406\u0440\u043f\u0456\u043d\u044c \u2013 \u0441. \u0420\u0443\u0431\u0435\u0436\u0456\u0432\u043a\u0430",price:"8 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442"],workTime:"10:00 - 15:00",isShown:!0},{key:"8",number:"12",direction:"\u0411\u0443\u0447\u0430, \u0440-\u043d \u042f\u0441\u0442\u0440\u0435\u043c\u0449\u0438\u043d\u0430, \u0436/\u043a \u041d\u043e\u0432\u0430\u0442\u043e\u0440 - \u0437/\u0434 \u0432\u043e\u043a\u0437\u0430\u043b",price:"8 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0434"],workTime:"6:00 - 19:00",isShown:!0},{key:"9",number:"14",direction:"\u043c.\u0411\u0443\u0447\u0430 - \u0441.\u043c.\u0442.\u0413\u043e\u0441\u0442\u043e\u043c\u0435\u043b\u044c",price:"8 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0434"],workTime:"5:30 - 23:00",isShown:!0},{key:"10",number:"15",direction:"\u043c.\u0411\u0443\u0447\u0430 - \u0441.\u043c.\u0442.\u0413\u043e\u0441\u0442\u043e\u043c\u0435\u043b\u044c",price:"8 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0434"],workTime:"8:00 - 23:00",isShown:!0},{key:"11",number:"15\u041a",direction:"\u043c .\u0411\u0443\u0447\u0430 \u2013 \u0441. \u041c\u0438\u0440\u043e\u0446\u044c\u043a\u0435",price:"8 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0434"],workTime:"6:00 - 18:00",isShown:!0},{key:"12",number:"23",direction:"\u043c .\u0411\u0443\u0447\u0430 \u2013 \u0441. \u0411\u043b\u0438\u0441\u0442\u0430\u0432\u0438\u0446\u044f - \u0441. \u0413\u0430\u0432\u0440\u0438\u043b\u0456\u0432\u043a\u0430",price:"8 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442"],workTime:"8:00 - 19:00",isShown:!0},{key:"13",number:"16",direction:"\u043c .\u0411\u0443\u0447\u0430 \u2013 \u0441. \u0411\u043b\u0438\u0441\u0442\u0430\u0432\u0438\u0446\u044f - \u0441. \u0413\u0430\u0432\u0440\u0438\u043b\u0456\u0432\u043a\u0430",price:"8 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0434"],workTime:"9:00 - 19:00",isShown:!0},{key:"14",number:"17, 17\u041a",direction:"\u0441. \u0417\u0430\u0431\u0443\u0447\u0447\u044f \u2013 \u0441. \u041c\u0438\u0445.\u0420\u0443\u0431\u0435\u0436\u0456\u0432\u043a\u0430 \u2013 \u0441\u043c\u0442. \u0412\u043e\u0440\u0437\u0435\u043b\u044c",price:"8 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0434"],workTime:"8:00 - 23:00",isShown:!0},{key:"15",number:"18",direction:"\u0406\u0440\u043f\u0456\u043d\u044c (\u0432\u043e\u043a\u0437\u0430\u043b) \u2013 \u0412\u0456\u0439\u0441\u044c\u043a\u043e\u0432\u0438\u0439 \u0433\u043e\u0441\u043f\u0456\u0442\u0430\u043b\u044c",price:"8 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0434"],workTime:"8:00 - 23:00",isShown:!0},{key:"16",number:"18\u0414",direction:"\u0411\u0443\u0447\u0430 - \u0406\u0440\u043f\u0456\u043d\u044c",price:"16 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0434"],workTime:"8:00 - 23:00",isShown:!0},{key:"17",number:"19",direction:"\u043c. \u0406\u0440\u043f\u0456\u043d\u044c \u2013 \u0441. \u041a\u0438\u0447\u0435\u0454\u0432\u0435",price:"16 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0434"],workTime:"6:00 - 18:00",isShown:!0},{key:"18",number:"20, 20/\u0431",direction:"\u0441\u0442. \u0406\u0440\u043f\u0456\u043d\u044c \u2013 \u0441\u043c\u0442. \u0413\u043e\u0441\u0442\u043e\u043c\u0435\u043b\u044c",price:"8 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442"],workTime:"10:00 - 15:00",isShown:!0},{key:"19",number:"22",direction:"\u043c. \u0411\u0443\u0447\u0430 \u2013 \u0441.\u043c.\u0442. \u0413\u043e\u0441\u0442\u043e\u043c\u0435\u043b\u044c",price:"8 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0434"],workTime:"5:30 - 23:00",isShown:!0},{key:"20",number:"22, 24",direction:"\u0441.\u0413\u0430\u0432\u0440\u0438\u043b\u0456\u0432\u043a\u0430 - \u043c.\u0406\u0440\u043f\u0456\u043d\u044c",price:"8 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0434"],workTime:"5:30 - 22:00",isShown:!0},{key:"21",number:"381",direction:"\u0410\u0414\u041f\u0421\u0423 (\u0406\u0440\u043f\u0456\u043d\u044c) \u2013 \u0421\u0432\u044f\u0442\u043e\u0448\u0438\u043d",price:"8 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442"],workTime:"8:00 - 20:00",isShown:!0},{key:"22",number:"386(1)",direction:"\u0441. \u041b\u0443\u0431\u2019\u044f\u043d\u043a\u0430 \u2013 \u0441\u0442. \u043c. \u0421\u0432\u044f\u0442\u043e\u0448\u0438\u043d",price:"8 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0434"],workTime:"8:00 - 23:00",isShown:!0},{key:"23",number:"395",direction:"\u0406\u0440\u043f\u0456\u043d\u044c (\u0432\u043e\u043a\u0437\u0430\u043b) - \u0441\u0442.\u043c. \u041e\u0431\u043e\u043b\u043e\u043d\u044c (\u041a\u0438\u0457\u0432",price:"8 \u0433\u0440\u043d",tags:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0434"],workTime:"8:00 - 22:00",isShown:!0}],U=function(e){var t=Object(a.useState)(E),n=Object(v.a)(t,2),i=n[0],r=n[1];return Object(u.jsxs)("div",{className:q.a.container,children:[Object(u.jsx)("div",{className:q.a.search_container,children:Object(u.jsx)(M,{placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448 \u043f\u0443\u043d\u043a\u0442 \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f",allowClear:!0,size:"large",enterButton:"\u0428\u0443\u043a\u0430\u0442\u0438",onSearch:function(e){var t=i.map((function(t){return t.direction.toLowerCase().includes(e.toLowerCase())?Object(l.a)(Object(l.a)({},t),{},{isShown:!0}):Object(l.a)(Object(l.a)({},t),{},{isShown:!1})}));r(t)}})}),Object(u.jsx)(F.a,{columns:D,dataSource:i.filter((function(e){return e.isShown}))})]})},V=n(142),P=n.n(V),W=b.a.Search,z=[{title:"\u041d\u0430\u0437\u0432\u0430",dataIndex:"name",key:"name",render:function(e){return Object(u.jsx)("a",{children:e})}},{title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433",key:"tags",dataIndex:"tags",render:function(e){return Object(u.jsx)(u.Fragment,{children:e.map((function(e){var t="green";return t=e>0&&e<4?"red":e>4&&e<7?"yellow":"green",Object(u.jsx)(L.a,{color:t,children:String(e).toUpperCase()},e)}))})}},{title:"\u0426\u0456\u043d\u0430 \u0432\u0438\u043a\u043b\u0438\u043a\u0443",dataIndex:"price",key:"price"},{title:"\u0426\u0456\u043d\u0430 \u0437\u0430 \u043a\u043c",dataIndex:"price_d",key:"price_d"},{title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",dataIndex:"telephone",key:"telephone"}],G=[{key:"1",name:"\u0422\u0430\u043a\u0441\u0456 \u0434\u0435\u0441\u044f\u0442\u043a\u0430",tags:[9.2],price:"40\u0433\u0440\u043d",price_d:"9\u0433\u0440\u043d",telephone:"+380676566663",isShown:!0},{key:"2",name:"\u0404\u0432\u0440\u043e\u043b\u0430\u0439\u043d",tags:[6.7],price:"40\u0433\u0440\u043d",price_d:"9\u0433\u0440\u043d",telephone:"+380933388190",isShown:!0},{key:"3",name:"\u0410\u0432\u0430\u043d\u0433\u0430\u0440\u0434",tags:[9.9],price:"30\u0433\u0440\u043d",price_d:"6\u0433\u0440\u043d",telephone:"+380632331848",isShown:!0},{key:"4",name:"Deluxe Taxi",tags:[3.8],price:"50\u0433\u0440\u043d",price_d:"8\u0433\u0440\u043d",telephone:"+380935003500",isShown:!0},{key:"5",name:"\u041b\u0456\u043d\u043a\u043e\u0440 \u0442\u0430\u043a\u0441\u0456",tags:[6.1],price:"40\u0433\u0440\u043d",price_d:"7\u0433\u0440\u043d",telephone:"+537",isShown:!0},{key:"6",name:"\u0406\u0440\u043f\u0456\u043d\u044c \u0442\u0430\u043a\u0441\u0456",tags:[9.1],price:"40\u0433\u0440\u043d",price_d:"7\u0433\u0440\u043d",telephone:"+380634097751",isShown:!0},{key:"7",name:"\u0410\u0432\u0440\u043e\u0440\u0430",tags:[5.3],price:"30\u0433\u0440\u043d",price_d:"6\u0433\u0440\u043d",telephone:"+380970412520",isShown:!0},{key:"8",name:"\u0422\u0430\u043a\u0441\u0456 2444",tags:[6.8],price:"30\u0433\u0440\u043d",price_d:"5\u0433\u0440\u043d",telephone:"+380933949955",isShown:!0},{key:"9",name:"\u0422\u0430\u043a\u0441\u0456 13",tags:[3.9],price:"30\u0433\u0440\u043d",price_d:"5\u0433\u0440\u043d",telephone:"+380442001313",isShown:!0},{key:"10",name:"\u0421\u043e\u0432\u0430",tags:[2.6],price:"30\u0433\u0440\u043d",price_d:"5\u0433\u0440\u043d",telephone:"+907",isShown:!0},{key:"11",name:"3838",tags:[4.2],price:"30\u0433\u0440\u043d",price_d:"5\u0433\u0440\u043d",telephone:"+3838",isShown:!0}],J=function(e){var t=Object(a.useState)(G),n=Object(v.a)(t,2),i=n[0],r=n[1];return Object(u.jsxs)("div",{className:P.a.container,children:[Object(u.jsx)("div",{className:P.a.search_container,children:Object(u.jsx)(W,{placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0442\u0430\u043a\u0441\u0456",allowClear:!0,size:"large",enterButton:"\u0428\u0443\u043a\u0430\u0442\u0438",onSearch:function(e){var t=i.map((function(t){return t.name.toLowerCase().includes(e.toLowerCase())?Object(l.a)(Object(l.a)({},t),{},{isShown:!0}):Object(l.a)(Object(l.a)({},t),{},{isShown:!1})}));r(t)}})}),Object(u.jsx)(F.a,{columns:z,dataSource:i.filter((function(e){return e.isShown}))})]})},X=n(260),Y=n(163),Q=n(104),Z=n.n(Q),$=(n(254),n(71)),H=n.n($),K=X.a.Meta,ee=[{id:"1",name:"Ba\u0441\u0438\u043b\u044c",img:"https://pbs.twimg.com/media/BcINeMVCIAABeWd.jpg",direction:"\u043d\u0430\u043f\u0440\u044f\u043c: \u0406\u0440\u043f\u0456\u043d\u044c - \u041b\u0432\u0456\u0432, \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0456\u043b\u044c: Audi A5 ",price:"400 \u0433\u0440\u043d",isBooked:!1},{id:"2",name:"\u0406\u0432\u0430\u043d\u043d\u0430",img:"https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg",direction:"\u043d\u0430\u043f\u0440\u044f\u043c: \u0406\u0440\u043f\u0456\u043d\u044c - \u041a\u0438\u0457\u0432, \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0456\u043b\u044c: VW Golf ",price:"60 \u0433\u0440\u043d",isBooked:!1},{id:"3",name:"\u041a\u0430\u0442\u044f",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeoAJ0lRoAiBxAiRX-ycYSATZL21rcVewQVw&usqp=CAU",direction:"\u043d\u0430\u043f\u0440\u044f\u043c: \u0406\u0440\u043f\u0456\u043d\u044c - \u041c\u0438\u0440\u043e\u043d\u0456\u0432\u043a\u0430, \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0456\u043b\u044c: Reno Megan ",price:"120 \u0433\u0440\u043d",isBooked:!1},{id:"4",name:"\u0410\u043d\u0434\u0440\u0456\u0439",img:"https://rockstart.imgix.net/wp-content/uploads/2012/06/bas-300x300.jpg?auto=compress%2Cformat&ixlib=php-1.1.0",direction:"\u043d\u0430\u043f\u0440\u044f\u043c: \u0406\u0440\u043f\u0456\u043d\u044c - \u0412\u0438\u0436\u0433\u043e\u0440\u043e\u0434, \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0456\u043b\u044c: Audi 80",price:"160 \u0433\u0440\u043d",isBooked:!1},{id:"5",name:"\u0421\u0432\u0456\u0442\u043b\u0430\u043d\u0430",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjWcsoMVRknE7UNgOssv7Ug4GfxYUS_yt5g&usqp=CAU",direction:"\u043d\u0430\u043f\u0440\u044f\u043c: \u0406\u0440\u043f\u0456\u043d\u044c - \u041a\u0438\u0457\u0432, \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0456\u043b\u044c: Deawoo Lanos",price:"70 \u0433\u0440\u043d",isBooked:!1},{id:"6",name:"\u041e\u043b\u0435\u043a\u0441\u0456\u0439",img:"https://avatars.githubusercontent.com/u/1071625?v=4",direction:"\u043d\u0430\u043f\u0440\u044f\u043c: \u0406\u0440\u043f\u0456\u043d\u044c - \u041e\u0434\u0435\u0441\u0430, \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0456\u043b\u044c: VW Multivan",price:"250 \u0433\u0440\u043d",isBooked:!1}],te=function(e){var t=Object(a.useState)(ee),n=Object(v.a)(t,2),i=n[0],r=n[1];return Object(u.jsxs)("div",{className:H.a.container,children:[Object(u.jsx)("div",{className:H.a.title_container,children:Object(u.jsxs)("div",{children:["\u041f\u043e\u0457\u0437\u0434\u043a\u0438 \u043d\u0430 \u0441\u044c\u043e\u0433\u043e\u0434\u043d\u0456"," ",Z()(new Date).locale("uk").format("LL")]})}),Object(u.jsx)("div",{className:H.a.drivers_container,children:i.map((function(e){return Object(u.jsxs)(X.a,{hoverable:!0,style:{width:240,marginLeft:20,marginRight:20,marginBottom:20},cover:Object(u.jsx)("img",{className:H.a.img,alt:"example",src:e.img}),children:[Object(u.jsx)(K,{title:e.name,description:e.direction}),Object(u.jsx)("div",{className:H.a.tag_container,children:Object(u.jsx)(L.a,{color:"cyan",children:e.price})}),Object(u.jsx)("div",{className:H.a.button_container,children:Object(u.jsx)(m.a,{type:"primary",disabled:e.isBooked,onClick:function(){return function(e){var t=i.map((function(t){return e===t.id?(Y.b.success("\u041b\u0438\u0441\u0442 \u0456\u0437 \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f\u043c \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043d\u0430 \u0432\u0430\u0448\u0443 \u043f\u043e\u0448\u0442\u0443"),Object(l.a)(Object(l.a)({},t),{},{isBooked:!0})):t}));r(t)}(e.id)},children:e.isBooked?"\u0417\u0430\u0431\u0440\u043e\u043d\u044e\u0432\u0430\u043d\u043e":"\u0417\u0430\u0431\u0440\u043e\u043d\u044e\u0432\u0430\u0442\u0438"})})]})}))})]})},ne=n(262),ae=n(86),ie=n.n(ae),re=n(62),ce=n.n(re),se=ne.a.Title,oe=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)();return Object(a.useEffect)((function(){var e=t.current.getContext("2d"),a=n.current.getContext("2d");new ie.a(e,{type:"pie",data:{labels:["\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u0456 \u0442\u0430\u043a\u0441\u0456","BlaBlaCar","\u0422\u0430\u043a\u0441\u0456"],datasets:[{label:"My First Dataset",data:[60,10,30],backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"],hoverOffset:4}]}}),new ie.a(a,{type:"bar",data:{labels:["\u0422\u0430\u043a\u0441\u0456","\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u0435 \u0442\u0430\u043a\u0441\u0456","BlaBlaCar","\u0412\u0435\u043b\u0438\u0441\u043e\u043f\u0435\u0434","\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u0441\u0430\u043c\u043e\u043a\u0430\u0442"],datasets:[{label:"\u0428\u0432\u0438\u0434\u043a\u0456\u0441\u0442\u044c",data:[60,40,65,25,30],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)"],borderWidth:1}]},options:{scales:{yAxes:[{display:!0,ticks:{beginAtZero:!0}}]}}})}),[]),Object(u.jsxs)("div",{className:ce.a.container,children:[Object(u.jsx)("div",{className:ce.a.title_container,children:Object(u.jsx)(se,{level:3,children:"\u0421\u043f\u0456\u0432\u0432\u0456\u0434\u043d\u043e\u0448\u0435\u043d\u043d\u044f \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0442\u0440\u0443"})}),Object(u.jsx)("div",{className:ce.a.chart_container,children:Object(u.jsx)("div",{className:ce.a.chart_wrapper,children:Object(u.jsx)("canvas",{ref:t})})}),Object(u.jsx)("div",{className:ce.a.title_container,children:Object(u.jsx)(se,{level:3,children:"\u0428\u0432\u0438\u0434\u043a\u0456\u0441\u0442\u044c \u043f\u0435\u0440\u0435\u0441\u0443\u0432\u0430\u043d\u043d\u044f"})}),Object(u.jsx)("div",{className:ce.a.chart_container,children:Object(u.jsx)("div",{className:ce.a.chart_wrapper,children:Object(u.jsx)("canvas",{ref:n})})})]})},le=n(63),de=n.n(le),be=ne.a.Title,je=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)();return Object(a.useEffect)((function(){var e=t.current.getContext("2d"),a=n.current.getContext("2d");new ie.a(e,{type:"line",data:{labels:["2015","2016","2017","2018","2019","2020","2021"],datasets:[{label:"\u0414\u0435\u0441\u044f\u0442\u043a\u0430",data:[10,7,8,7.5,6,8,9.2],fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1},{label:"\u0404\u0432\u0440\u043e\u043b\u0430\u0439\u043d",data:[10,7.8,6,5,6,7,6.7],fill:!1,borderColor:"#2ecc71",tension:.1},{label:"\u0410\u0432\u0430\u043d\u0433\u0430\u0440\u0434",data:[10,9.8,9,9.5,9.3,9.5,9.9],fill:!1,borderColor:"#27ae60",tension:.1},{label:"\u0406\u0440\u043f\u0456\u043d\u044c \u0442\u0430\u043a\u0441\u0456",data:[8,9.1,9,8,7.5,8,9.1],fill:!1,borderColor:"#9b59b6",tension:.1},{label:"\u0410\u0432\u0440\u043e\u0440\u0430",data:[10,6.5,5.2,6.2,7.4,5.8,5.3],fill:!1,borderColor:"#f39c12",tension:.1}]}}),new ie.a(a,{type:"bar",data:{labels:["\u0414\u0435\u0441\u044f\u0442\u043a\u0430","\u0404\u0432\u0440\u043e\u043b\u0430\u0439\u043d","\u0410\u0432\u0430\u043d\u0433\u0430\u0440\u0434","\u0406\u0440\u043f\u0456\u043d\u044c \u0442\u0430\u043a\u0441\u0456","\u0410\u0432\u0440\u043e\u0440\u0430"],datasets:[{label:"\u0412\u0456\u0434\u0433\u0443\u043a\u0438",data:[246,138,49,301,93],backgroundColor:["rgb(75, 192, 192)","#2ecc71","#27ae60","#9b59b6","#f39c12"],borderColor:["rgb(75, 192, 192)","#2ecc71","#27ae60","#9b59b6","#f39c12"],borderWidth:1}]},options:{scales:{yAxes:[{display:!0,ticks:{beginAtZero:!0}}]}}})}),[]),Object(u.jsxs)("div",{className:de.a.container,children:[Object(u.jsx)("div",{className:de.a.title_container,children:Object(u.jsx)(be,{level:3,children:"\u041f\u043e\u0440\u0456\u0432\u043d\u044f\u043b\u044c\u043d\u0430 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430 \u043b\u0456\u0434\u0435\u0440\u0456\u0432 \u0441\u0435\u0440\u0435\u0434 \u0442\u0430\u043a\u0441\u0456"})}),Object(u.jsx)("div",{className:de.a.chart_container,children:Object(u.jsx)("div",{className:de.a.chart_wrapper,children:Object(u.jsx)("canvas",{ref:t})})}),Object(u.jsx)("div",{className:de.a.title_container,children:Object(u.jsx)(be,{level:3,children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432"})}),Object(u.jsx)("div",{className:de.a.chart_container,children:Object(u.jsx)("div",{className:de.a.chart_wrapper,children:Object(u.jsx)("canvas",{ref:n})})})]})},me=n(143),pe=n.n(me),he=function(e){return Object(u.jsxs)("div",{className:pe.a.container,children:[Object(u.jsx)(A,{}),Object(u.jsx)("div",{className:pe.a.pages_container,children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/traffic/buses",component:U}),Object(u.jsx)(o.a,{exact:!0,path:"/traffic/taxi",component:J}),Object(u.jsx)(o.a,{exact:!0,path:"/traffic/blablacar",component:te}),Object(u.jsx)(o.a,{exact:!0,path:"/traffic/overall",component:oe}),Object(u.jsx)(o.a,{exact:!0,path:"/traffic/taxi_charts",component:je})]})})]})},ue=function(){return Object(u.jsx)(s.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",component:_}),Object(u.jsx)(o.a,{exact:!0,path:"/registration",component:y}),Object(u.jsx)(o.a,{path:"/traffic",component:he})]})})};var xe=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(ue,{})})},Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,268)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(xe,{})}),document.getElementById("root")),Oe()},62:function(e,t,n){e.exports={container:"OverallAnalytics_container__1c8ui",chart_container:"OverallAnalytics_chart_container__3YtPI",chart_wrapper:"OverallAnalytics_chart_wrapper__1b0y8",title_container:"OverallAnalytics_title_container__3CMWO"}},63:function(e,t,n){e.exports={container:"TaxiAnalytics_container__BUJVl",chart_container:"TaxiAnalytics_chart_container__2ymDy",chart_wrapper:"TaxiAnalytics_chart_wrapper__1q_iB",title_container:"TaxiAnalytics_title_container__CkpxE"}},71:function(e,t,n){e.exports={container:"BlaBlaCar_container__25nhi",title_container:"BlaBlaCar_title_container__2MLXt",drivers_container:"BlaBlaCar_drivers_container__1jtzi",img:"BlaBlaCar_img__JE_E8",tag_container:"BlaBlaCar_tag_container__wvrgF",button_container:"BlaBlaCar_button_container__17DFt"}},87:function(e,t,n){e.exports={container:"Login_container__TN-H0",login_form:"Login_login_form__2-1Fv",title:"Login_title__VQYgh",registration_container:"Login_registration_container__2CXEC",registration:"Login_registration__oyn5E"}}},[[256,1,2]]]);
//# sourceMappingURL=main.0177223e.chunk.js.map