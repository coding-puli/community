(window.webpackJsonp=window.webpackJsonp||[]).push([[3,11],{10:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r=n(0),i=n.n(r),a=n(2);n(59);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(){var e=u(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return c=function(){return e},e}function l(){var e=u(["\n  display: flex;\n  min-height: 400px;\n  align-items: center;\n"]);return l=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var m=Object(a.a)("div").attrs((function(){return{className:"slider"}}))(l());m.displayName="SliderDiv";var d=Object(a.a)("div").attrs((function(){return{className:"slider-items"}}))(c());function p(e){var t=e.onClick;return i.a.createElement("div",{className:"arrow",onClick:t},i.a.createElement("i",{className:"fa fa-angle-left fa-3x","aria-hidden":"true"}))}function f(e){var t=e.onClick;return i.a.createElement("div",{className:"arrow",onClick:t},i.a.createElement("i",{className:"fa fa-angle-right fa-3x","aria-hidden":"true"}))}function g(e){var t=e.contents,n=e.renderData,a=o(Object(r.useState)(0),2),s=a[0],c=a[1];var l=t.map((function(e,t){return n(e,s==t)}));return i.a.createElement(m,null,i.a.createElement(d,null,i.a.createElement(p,{onClick:function(){var e=t.length,n=s;c(n=n<1?e-1:n-1)}}),l,i.a.createElement(f,{onClick:function(){var e=t.length,n=s;c(n=n===e-1?0:n+1)}})))}d.displayName="SliderItemsDiv";n(61);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(){var e=j(["\n  display: flex;\n  align-items: center;\n  flex: 1;\n  padding: 32px;\n"]);return y=function(){return e},e}function h(){var e=j(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return h=function(){return e},e}function x(){var e=j(["\n  display: flex;\n  justify-content: center;\n  flex: 1;\n"]);return x=function(){return e},e}function j(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var w=Object(a.a)("div").attrs((function(){return{className:"list-slider"}}))(x());w.displayName="SliderDiv";var E=Object(a.a)("div").attrs((function(){return{className:"slider-list-items"}}))(h());E.displayName="SliderItemsDiv";var k=Object(a.a)("section").attrs((function(){return{className:"slide-list-container"}}))(y());function A(e){var t=e.onClick;return i.a.createElement("div",{className:"arrow",onClick:t},i.a.createElement("i",{className:"fa fa-angle-left fa-3x","aria-hidden":"true"}))}function P(e){var t=e.onClick;return i.a.createElement("div",{className:"arrow",onClick:t},i.a.createElement("i",{className:"fa fa-angle-right fa-3x","aria-hidden":"true"}))}function N(e){var t=e.contents,n=e.renderData,a=e.pageSize,o=v(Object(r.useState)(0),2),s=o[0],c=o[1];var l=t.map((function(e,t){return n(e,t>s-1&&t<s+a)}));return i.a.createElement(w,null,i.a.createElement(E,null,i.a.createElement(A,{onClick:function(){c(s<a?s:s-a)}}),i.a.createElement(k,null,l),i.a.createElement(P,{onClick:function(){var e=t.length;c(s>=e-a?s:s+a)}})))}k.displayName="SliderContainerDiv";n(39);var S=[{title:"About us",description:"About us description About us description About us description About us description About us description About us description About us description About us description About us description",image:["static/img/map.png","static/img/community1.jpg","static/img/community2.jpg","static/img/community3.jpg"],button:"Join Us"},{title:"Projects",description:"Projects description Projects description Projects description Projects description Projects description Projects description Projects description Projects description Projects description Projects description Projects description Projects description",image:["static/img/sitting.png","static/img/community2.jpg","static/img/community3.jpg","static/img/community1.jpg"],button:"Add Project"},{title:"Activity",description:"Activity description Activity description Activity description Activity description Activity description Activity description",image:["static/img/drums1.png","static/img/community3.jpg","static/img/community2.jpg","static/img/community1.jpg"],button:"Visit Activity"}],z=[{name:"Partner 1",url:"",image:"static/img/partners/derby.jpg"},{name:"Partner 2",url:"",image:"static/img/partners/links.gif"},{name:"Partner 3",url:"",image:"static/img/partners/derby.jpg"},{name:"Partner 4",url:"",image:"static/img/partners/derby.jpg"},{name:"Partner 5",url:"",image:"static/img/partners/derby.jpg"},{name:"Partner 6",url:""},{name:"Partner 7",url:""},{name:"Partner 8",url:""},{name:"Partner 9",url:""},{name:"Partner 10",url:""},{name:"Partner 11",url:""},{name:"Partner 1",url:""},{name:"Partner 12",url:""},{name:"Partner 13",url:""},{name:"Partner 14",url:""},{name:"Partner 15",url:""}];function O(e){return i.a.createElement("div",{className:"home"},i.a.createElement("div",{className:"intro"},i.a.createElement(g,{contents:S,renderData:function(e,t){var n=e.title,r=e.description,a=e.image,o=e.button;if(!t)return null;for(var s=Array.isArray(a)?a[0]:a,c=[],l=1;l<a.length;l++){var u=a[l];c.push(i.a.createElement("div",{className:"image-stack-item-".concat(l)},i.a.createElement("img",{src:u,style:{width:"360px"}})))}return i.a.createElement("div",{key:n,className:"active-slide"},i.a.createElement("div",{className:"active-slide-content"},i.a.createElement("div",{className:"active-slide-images-stack"},c),i.a.createElement("div",null,r),i.a.createElement("button",null," ",o)),i.a.createElement("div",null,i.a.createElement("img",{className:"active-slide-main-image",src:s})))}})),i.a.createElement("div",{className:"partners"},i.a.createElement(N,{contents:z,renderData:function(e,t){var n=e.name,r=(e.url,e.image);return t?i.a.createElement("div",{key:n,className:"partner-show"},i.a.createElement("img",{src:r,style:{width:"250px"}})):null},pageSize:3})),i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"find-us"},i.a.createElement("div",null,"Unit 2, Penmore Business Centre"),i.a.createElement("div",null,"Saxton Close, Hasland Road"),i.a.createElement("div",null,"Hasland, Chesterfield"),i.a.createElement("div",null,"Derbyshire - S41 0SJ"))))}},39:function(e,t,n){var r=n(20),i=n(48);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},48:function(e,t,n){(t=n(21)(!1)).push([e.i,"\n\n.slider {\n  margin-left: 32px;\n  margin-right: 32px;\n  position: relative;\n}\n\n.active-slide {\n   display: flex;\n   align-items: center;\n   text-align: center;\n   margin-left: 60px;\n   margin-right: 60px;\n}\n\n.active-slide-main-image{\n  position: relative;\n  width: 440px;\n  margin-left: 16px;\n  z-index: 3;\n}\n\n.active-slide-images-stack{\n  position: relative;\n  margin-bottom: 44px;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n\n.active-slide-images-stack img{\n  border-style: solid;\n  border-width: 2px;\n  border-color: #fff;\n  border-radius: 5px;\n  background-color: #fff;\n  box-shadow: 0 20px 70px -10px rgba(10, 32, 70, 0.3);\n  -webkit-transform: perspective(1000px);\n  transform: perspective(1000px);\n  -webkit-transition: -webkit-filter 300ms cubic-bezier(.215, .61, .355, 1);\n  transition: -webkit-filter 300ms cubic-bezier(.215, .61, .355, 1);\n  transition: filter 300ms cubic-bezier(.215, .61, .355, 1);\n  transition: filter 300ms cubic-bezier(.215, .61, .355, 1), -webkit-filter 300ms cubic-bezier(.215, .61, .355, 1);\n}\n\n.image-stack-item-1{\n  grid-column: 1 /  2;\n  grid-row: 1; /* must be on the same row as the other image*/\n  padding-top: 20%;  /*this pushes the image down, and keeps it proportional as it resizes*/\n  padding-left: 40%;  /*this pushes the image down, and keeps it proportional as it resizes*/\n  z-index: 2; /* make this image render on top of the bottom*/\n  transform: rotate(-8deg);\n}\n\n.image-stack-item-2{\n  grid-column: 1 / 4;\n  grid-row: 1; /* make this image be on the same row*/\n  padding-top: 20%;  /*this pushes the image down, and keeps it proportional as it resizes*/\n  z-index: 1; /* make this image render on top of the bottom*/\n}\n\n.image-stack-item-3{\n  grid-column: 1 / 8;\n  grid-row: 1; /* make this image be on the same row*/\n  padding-left: 20%;  /*this pushes the image down, and keeps it proportional as it resizes*/\n}\n\n.active-slide button{\n  margin-top: 32px;\n  border: 1px solid white;\n  border-radius: 8px;\n  padding: var(--element-padding);\n  background: var(--tertiary-bg-color);\n  color: white;\n  font-size: var(--header-font-size);\n}\n\n.active-slide-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n",""]),e.exports=t},59:function(e,t,n){var r=n(20),i=n(60);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},60:function(e,t,n){(t=n(21)(!1)).push([e.i,"",""]),e.exports=t},61:function(e,t,n){var r=n(20),i=n(62);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},62:function(e,t,n){(t=n(21)(!1)).push([e.i,".arrow {\n  cursor: pointer\n}",""]),e.exports=t}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hYnN0cmFjdC91aS9jYXJvdXNlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hYnN0cmFjdC91aS9DYXJvdXNlbExpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lL3N0eWxlLmNzcz81NmM1Iiwid2VicGFjazovLy8uL3BhZ2VzL2hvbWUvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL2Fic3RyYWN0L3VpL2Nhcm91c2VsL3N0eWxlLmNzcz8xZTQ1Iiwid2VicGFjazovLy8uL2Fic3RyYWN0L3VpL2Nhcm91c2VsL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9hYnN0cmFjdC91aS9DYXJvdXNlbExpc3Qvc3R5bGUuY3NzPzVjNzQiLCJ3ZWJwYWNrOi8vLy4vYWJzdHJhY3QvdWkvQ2Fyb3VzZWxMaXN0L3N0eWxlLmNzcyJdLCJuYW1lcyI6WyJTbGlkZXJEaXYiLCJzdHlsZWQiLCJhdHRycyIsImNsYXNzTmFtZSIsImRpc3BsYXlOYW1lIiwiU2xpZGVySXRlbXNEaXYiLCJMZWZ0QXJyb3ciLCJwcm9wcyIsIm9uQ2xpY2siLCJhcmlhLWhpZGRlbiIsIlJpZ2h0QXJyb3ciLCJDYXJvdXNlbCIsImNvbnRlbnRzIiwicmVuZGVyRGF0YSIsInVzZVN0YXRlIiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsInVpIiwibWFwIiwiY29udGVudCIsImluZGV4IiwibGVuZ3RoIiwiU2xpZGVyQ29udGFpbmVyRGl2IiwiQ2Fyb3VzZWxMaXN0IiwicGFnZVNpemUiLCJzdGFydEluZGV4Iiwic2V0U3RhcnRJbmRleCIsInRvdGFsIiwiY2Fyb3VzZWxEYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiYnV0dG9uIiwicGFydG5lcnNEYXRhIiwibmFtZSIsInVybCIsIkhvbWUiLCJkYXRhIiwiaXNBY3RpdmUiLCJtYWluSW1hZ2VVcmwiLCJBcnJheSIsImlzQXJyYXkiLCJpbWFnZXNVSSIsImkiLCJpbWFnZVVybCIsInB1c2giLCJzcmMiLCJzdHlsZSIsIndpZHRoIiwia2V5IiwiYXBpIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJtb2R1bGUiLCJvcHRpb25zIiwiZXhwb3J0cyIsImxvY2FscyIsIl9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyJdLCJtYXBwaW5ncyI6ImkrQ0FJQSxJQUFNQSxFQUFZQyxZQUFPLE9BQU9DLE9BQU0saUJBQU8sQ0FDNUNDLFVBQVcsWUFETUYsQ0FBSCxLQU9mRCxFQUFVSSxZQUFjLFlBRXhCLElBQU1DLEVBQWlCSixZQUFPLE9BQU9DLE9BQU0saUJBQU8sQ0FDakRDLFVBQVcsa0JBRFdGLENBQUgsS0FZcEIsU0FBU0ssRUFBVUMsR0FBTSxJQUNqQkMsRUFBV0QsRUFBWEMsUUFDUCxPQUNDLHlCQUFLTCxVQUFVLFFBQVFLLFFBQVNBLEdBQy9CLHVCQUFHTCxVQUFVLHlCQUF5Qk0sY0FBWSxVQUtyRCxTQUFTQyxFQUFXSCxHQUFNLElBQ2xCQyxFQUFXRCxFQUFYQyxRQUNQLE9BQ0EseUJBQUtMLFVBQVUsUUFBUUssUUFBU0EsR0FDL0IsdUJBQUdMLFVBQVUsMEJBQTBCTSxjQUFZLFVBTXRDLFNBQVNFLEVBQVNKLEdBQU0sSUFDL0JLLEVBQXdCTCxFQUF4QkssU0FBVUMsRUFBY04sRUFBZE0sV0FEcUIsSUFHQUMsbUJBQVMsR0FIVCxHQUcvQkMsRUFIK0IsS0FHbEJDLEVBSGtCLEtBbUJ0QyxJQUFNQyxFQUFLTCxFQUFTTSxLQUFJLFNBQUNDLEVBQVNDLEdBQ2pDLE9BQU9QLEVBQVdNLEVBQVNKLEdBQWVLLE1BSTNDLE9BQ0Esa0JBQUNwQixFQUFELEtBQ0Msa0JBQUNLLEVBQUQsS0FDQyxrQkFBQ0MsRUFBRCxDQUFXRSxRQXRCYixXQUNDLElBQUlhLEVBQVNULEVBQVNTLE9BQ2xCRCxFQUFRTCxFQUVaQyxFQURBSSxFQUFTQSxFQUFRLEVBQUtDLEVBQVMsRUFBSUQsRUFBUSxNQW9CeENILEVBQ0Ysa0JBQUNQLEVBQUQs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VSxFQUFPRSxRQUFVQSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBTbGlkZXJEaXYgPSBzdHlsZWQoJ2RpdicpLmF0dHJzKCgpID0+ICh7XG5cdGNsYXNzTmFtZTogJ3NsaWRlcidcbn0pKWBcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuU2xpZGVyRGl2LmRpc3BsYXlOYW1lID0gJ1NsaWRlckRpdic7XG5cbmNvbnN0IFNsaWRlckl0ZW1zRGl2ID0gc3R5bGVkKCdkaXYnKS5hdHRycygoKSA9PiAoe1xuXHRjbGFzc05hbWU6ICdzbGlkZXItaXRlbXMnXG59KSlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuU2xpZGVySXRlbXNEaXYuZGlzcGxheU5hbWUgPSAnU2xpZGVySXRlbXNEaXYnO1xuXG5cblxuXG5mdW5jdGlvbiBMZWZ0QXJyb3cocHJvcHMpe1xuXHRjb25zdCB7b25DbGlja30gPSBwcm9wcztcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nYXJyb3cnIG9uQ2xpY2s9e29uQ2xpY2t9PlxuXHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS1hbmdsZS1sZWZ0IGZhLTN4JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9pPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmZ1bmN0aW9uIFJpZ2h0QXJyb3cocHJvcHMpe1xuXHRjb25zdCB7b25DbGlja30gPSBwcm9wcztcblx0cmV0dXJuIChcblx0PGRpdiBjbGFzc05hbWU9J2Fycm93JyBvbkNsaWNrPXtvbkNsaWNrfT5cblx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLWFuZ2xlLXJpZ2h0IGZhLTN4JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9pPlxuXHQ8L2Rpdj5cblx0KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKHByb3BzKXtcblx0Y29uc3Qge2NvbnRlbnRzLCByZW5kZXJEYXRhfSA9IHByb3BzO1xuXG5cdGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cblx0ZnVuY3Rpb24gZ29Ub1ByZXZTbGlkZSgpIHtcblx0XHRsZXQgbGVuZ3RoID0gY29udGVudHMubGVuZ3RoO1xuXHRcdGxldCBpbmRleCA9IGFjdGl2ZUluZGV4O1xuXHRcdGluZGV4ID0gKGluZGV4IDwgMSkgPyBsZW5ndGggLSAxIDogaW5kZXggLSAxO1xuXHRcdHNldEFjdGl2ZUluZGV4KGluZGV4KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdvVG9OZXh0U2xpZGUoKSB7XG5cdFx0bGV0IGxlbmd0aCA9IGNvbnRlbnRzLmxlbmd0aDtcblx0XHRsZXQgaW5kZXggPSBhY3RpdmVJbmRleDtcblx0XHRpbmRleCA9IChpbmRleCA9PT0gbGVuZ3RoIC0gMSkgPyAwIDogaW5kZXggKyAxO1xuXHRcdHNldEFjdGl2ZUluZGV4KGluZGV4KTtcblx0fVxuXG5cdGNvbnN0IHVpID0gY29udGVudHMubWFwKChjb250ZW50LCBpbmRleCk9Pntcblx0XHRyZXR1cm4gcmVuZGVyRGF0YShjb250ZW50LCBhY3RpdmVJbmRleCA9PSBpbmRleCk7XG5cdH0pO1xuXG5cblx0cmV0dXJuIChcblx0PFNsaWRlckRpdj5cblx0XHQ8U2xpZGVySXRlbXNEaXY+XG5cdFx0XHQ8TGVmdEFycm93IG9uQ2xpY2s9e2dvVG9QcmV2U2xpZGV9Lz5cblx0XHRcdFx0e3VpfVxuXHRcdFx0PFJpZ2h0QXJyb3cgb25DbGljaz17Z29Ub05leHRTbGlkZX0vPlxuXHRcdDwvU2xpZGVySXRlbXNEaXY+XG5cdDwvU2xpZGVyRGl2PlxuXHQpO1xufSIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgU2xpZGVyRGl2ID0gc3R5bGVkKCdkaXYnKS5hdHRycygoKSA9PiAoe1xuXHRjbGFzc05hbWU6ICdsaXN0LXNsaWRlcidcbn0pKWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDE7XG5gO1xuU2xpZGVyRGl2LmRpc3BsYXlOYW1lID0gJ1NsaWRlckRpdic7XG5cbmNvbnN0IFNsaWRlckl0ZW1zRGl2ID0gc3R5bGVkKCdkaXYnKS5hdHRycygoKSA9PiAoe1xuXHRjbGFzc05hbWU6ICdzbGlkZXItbGlzdC1pdGVtcydcbn0pKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5TbGlkZXJJdGVtc0Rpdi5kaXNwbGF5TmFtZSA9ICdTbGlkZXJJdGVtc0Rpdic7XG5cbmNvbnN0IFNsaWRlckNvbnRhaW5lckRpdiA9IHN0eWxlZCgnc2VjdGlvbicpLmF0dHJzKCgpID0+ICh7XG5cdGNsYXNzTmFtZTogJ3NsaWRlLWxpc3QtY29udGFpbmVyJ1xufSkpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAzMnB4O1xuYDtcblNsaWRlckNvbnRhaW5lckRpdi5kaXNwbGF5TmFtZSA9ICdTbGlkZXJDb250YWluZXJEaXYnO1xuXG5cblxuZnVuY3Rpb24gTGVmdEFycm93KHByb3BzKXtcblx0Y29uc3Qge29uQ2xpY2t9ID0gcHJvcHM7XG5cdHJldHVybiAoXG5cdDxkaXYgY2xhc3NOYW1lPSdhcnJvdycgb25DbGljaz17b25DbGlja30+XG5cdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS1hbmdsZS1sZWZ0IGZhLTN4JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9pPlxuXHQ8L2Rpdj5cblx0KVxufVxuXG5mdW5jdGlvbiBSaWdodEFycm93KHByb3BzKXtcblx0Y29uc3Qge29uQ2xpY2t9ID0gcHJvcHM7XG5cdHJldHVybiAoXG5cdDxkaXYgY2xhc3NOYW1lPSdhcnJvdycgb25DbGljaz17b25DbGlja30+XG5cdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS1hbmdsZS1yaWdodCBmYS0zeCcgYXJpYS1oaWRkZW49J3RydWUnPjwvaT5cblx0PC9kaXY+XG5cdClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbExpc3QocHJvcHMpe1xuXHRjb25zdCB7Y29udGVudHMsIHJlbmRlckRhdGEsIHBhZ2VTaXplfSA9IHByb3BzO1xuXG5cdGNvbnN0IFtzdGFydEluZGV4LCBzZXRTdGFydEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG5cdGZ1bmN0aW9uIGdvVG9QcmV2UGFnZSgpIHtcblx0XHRsZXQgaW5kZXggPSBzdGFydEluZGV4O1xuXHRcdGluZGV4ID0gKHN0YXJ0SW5kZXggPCBwYWdlU2l6ZSkgPyBzdGFydEluZGV4IDogc3RhcnRJbmRleCAtIHBhZ2VTaXplO1xuXHRcdHNldFN0YXJ0SW5kZXgoaW5kZXgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ29Ub05leHRQYWdlKCkge1xuXHRcdGxldCB0b3RhbCA9IGNvbnRlbnRzLmxlbmd0aDtcblx0XHRsZXQgaW5kZXggPSBzdGFydEluZGV4O1xuXHRcdGluZGV4ID0gKHN0YXJ0SW5kZXggPj0gdG90YWwgLSBwYWdlU2l6ZSkgPyBzdGFydEluZGV4IDogc3RhcnRJbmRleCArIHBhZ2VTaXplO1xuXHRcdHNldFN0YXJ0SW5kZXgoaW5kZXgpO1xuXHR9XG5cblx0Y29uc3QgdWkgPSBjb250ZW50cy5tYXAoKGNvbnRlbnQsIGluZGV4KT0+e1xuXHRcdGNvbnN0IHNob3VsZFNob3cgPSAoaW5kZXggPiAgc3RhcnRJbmRleCAtIDEpICYmICAoaW5kZXggPCAoc3RhcnRJbmRleCArIHBhZ2VTaXplKSlcblx0XHRyZXR1cm4gcmVuZGVyRGF0YShjb250ZW50LCBzaG91bGRTaG93KTtcblx0fSk7XG5cblx0cmV0dXJuIChcblx0PFNsaWRlckRpdj5cblx0XHQ8U2xpZGVySXRlbXNEaXY+XG5cdFx0XHQ8TGVmdEFycm93IG9uQ2xpY2s9e2dvVG9QcmV2UGFnZX0vPlxuXHRcdFx0PFNsaWRlckNvbnRhaW5lckRpdj5cblx0XHRcdFx0e3VpfVxuXHRcdFx0PC9TbGlkZXJDb250YWluZXJEaXY+XG5cdFx0XHQ8UmlnaHRBcnJvdyBvbkNsaWNrPXtnb1RvTmV4dFBhZ2V9Lz5cblx0XHQ8L1NsaWRlckl0ZW1zRGl2PlxuXHQ8L1NsaWRlckRpdj5cblx0KTtcbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ2Fic3RyYWN0L3VpL2Nhcm91c2VsJztcbmltcG9ydCBDYXJvdXNlbExpc3QgZnJvbSAnYWJzdHJhY3QvdWkvQ2Fyb3VzZWxMaXN0JztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vKlxuKiAgIGJvcmRlcjogOHB4IHNvbGlkIHdoaXRlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICogKi9cblxuY29uc3QgY2Fyb3VzZWxEYXRhID0gW1xuXHR7XG5cdFx0dGl0bGU6ICdBYm91dCB1cycsXG5cdFx0ZGVzY3JpcHRpb246ICdBYm91dCB1cyBkZXNjcmlwdGlvbiBBYm91dCB1cyBkZXNjcmlwdGlvbiBBYm91dCB1cyBkZXNjcmlwdGlvbiBBYm91dCB1cyBkZXNjcmlwdGlvbiBBYm91dCB1cyBkZXNjcmlwdGlvbiBBYm91dCB1cyBkZXNjcmlwdGlvbiBBYm91dCB1cyBkZXNjcmlwdGlvbiBBYm91dCB1cyBkZXNjcmlwdGlvbiBBYm91dCB1cyBkZXNjcmlwdGlvbicsXG5cdFx0aW1hZ2U6IFsnc3RhdGljL2ltZy9tYXAucG5nJywnc3RhdGljL2ltZy9jb21tdW5pdHkxLmpwZycsJ3N0YXRpYy9pbWcvY29tbXVuaXR5Mi5qcGcnLCdzdGF0aWMvaW1nL2NvbW11bml0eTMuanBnJyBdLFxuXHRcdGJ1dHRvbjogJ0pvaW4gVXMnXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogJ1Byb2plY3RzJyxcblx0XHRkZXNjcmlwdGlvbjogJ1Byb2plY3RzIGRlc2NyaXB0aW9uIFByb2plY3RzIGRlc2NyaXB0aW9uIFByb2plY3RzIGRlc2NyaXB0aW9uIFByb2plY3RzIGRlc2NyaXB0aW9uIFByb2plY3RzIGRlc2NyaXB0aW9uIFByb2plY3RzIGRlc2NyaXB0aW9uIFByb2plY3RzIGRlc2NyaXB0aW9uIFByb2plY3RzIGRlc2NyaXB0aW9uIFByb2plY3RzIGRlc2NyaXB0aW9uIFByb2plY3RzIGRlc2NyaXB0aW9uIFByb2plY3RzIGRlc2NyaXB0aW9uIFByb2plY3RzIGRlc2NyaXB0aW9uJyxcblx0XHRpbWFnZTogWydzdGF0aWMvaW1nL3NpdHRpbmcucG5nJywnc3RhdGljL2ltZy9jb21tdW5pdHkyLmpwZycsJ3N0YXRpYy9pbWcvY29tbXVuaXR5My5qcGcnLCdzdGF0aWMvaW1nL2NvbW11bml0eTEuanBnJyBdLFxuXHRcdGJ1dHRvbjogJ0FkZCBQcm9qZWN0J1xuXHR9LFxuXHR7XG5cdFx0dGl0bGU6ICdBY3Rpdml0eScsXG5cdFx0ZGVzY3JpcHRpb246ICdBY3Rpdml0eSBkZXNjcmlwdGlvbiBBY3Rpdml0eSBkZXNjcmlwdGlvbiBBY3Rpdml0eSBkZXNjcmlwdGlvbiBBY3Rpdml0eSBkZXNjcmlwdGlvbiBBY3Rpdml0eSBkZXNjcmlwdGlvbiBBY3Rpdml0eSBkZXNjcmlwdGlvbicsXG5cdFx0aW1hZ2U6IFsnc3RhdGljL2ltZy9kcnVtczEucG5nJywnc3RhdGljL2ltZy9jb21tdW5pdHkzLmpwZycsJ3N0YXRpYy9pbWcvY29tbXVuaXR5Mi5qcGcnLCdzdGF0aWMvaW1nL2NvbW11bml0eTEuanBnJyBdLFxuXHRcdGJ1dHRvbjogJ1Zpc2l0IEFjdGl2aXR5J1xuXHR9XG5dO1xuXG5jb25zdCBwYXJ0bmVyc0RhdGEgPSBbXG5cdHtcblx0XHRuYW1lOiAnUGFydG5lciAxJyxcblx0XHR1cmw6ICcnLFxuXHRcdGltYWdlOiAnc3RhdGljL2ltZy9wYXJ0bmVycy9kZXJieS5qcGcnXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnUGFydG5lciAyJyxcblx0XHR1cmw6ICcnLFxuXHRcdGltYWdlOiAnc3RhdGljL2ltZy9wYXJ0bmVycy9saW5rcy5naWYnXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnUGFydG5lciAzJyxcblx0XHR1cmw6ICcnLFxuXHRcdGltYWdlOiAnc3RhdGljL2ltZy9wYXJ0bmVycy9kZXJieS5qcGcnXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnUGFydG5lciA0Jyxcblx0XHR1cmw6ICcnLFxuXHRcdGltYWdlOiAnc3RhdGljL2ltZy9wYXJ0bmVycy9kZXJieS5qcGcnXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnUGFydG5lciA1Jyxcblx0XHR1cmw6ICcnLFxuXHRcdGltYWdlOiAnc3RhdGljL2ltZy9wYXJ0bmVycy9kZXJieS5qcGcnXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnUGFydG5lciA2Jyxcblx0XHR1cmw6ICcnXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnUGFydG5lciA3Jyxcblx0XHR1cmw6ICcnXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnUGFydG5lciA4Jyxcblx0XHR1cmw6ICcnXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnUGFydG5lciA5Jyxcblx0XHR1cmw6ICcnXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnUGFydG5lciAxMCcsXG5cdFx0dXJsOiAnJ1xuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ1BhcnRuZXIgMTEnLFxuXHRcdHVybDogJydcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdQYXJ0bmVyIDEnLFxuXHRcdHVybDogJydcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdQYXJ0bmVyIDEyJyxcblx0XHR1cmw6ICcnXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnUGFydG5lciAxMycsXG5cdFx0dXJsOiAnJ1xuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ1BhcnRuZXIgMTQnLFxuXHRcdHVybDogJydcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdQYXJ0bmVyIDE1Jyxcblx0XHR1cmw6ICcnXG5cdH1cblxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKXtcblxuXHRmdW5jdGlvbiByZW5kZXJEYXRhSXRlcmF0b3IoZGF0YSwgaXNBY3RpdmUpe1xuXHRcdGNvbnN0IHt0aXRsZSwgZGVzY3JpcHRpb24sIGltYWdlLCBidXR0b259ID0gZGF0YTtcblxuXHRcdGlmKCFpc0FjdGl2ZSl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCBtYWluSW1hZ2VVcmwgPSBBcnJheS5pc0FycmF5KGltYWdlKSA/IGltYWdlWzBdIDogaW1hZ2U7XG5cdFx0bGV0IGltYWdlc1VJID0gW107XG5cdFx0Zm9yKGxldCBpID0gMTsgaTwgaW1hZ2UubGVuZ3RoOyBpKyspe1xuXHRcdFx0Y29uc3QgaW1hZ2VVcmwgPSBpbWFnZVtpXTtcblx0XHRcdGNvbnN0IGltZ1N0eWxlID0ge1xuXHRcdFx0XHR3aWR0aDpcIjM2MHB4XCJcblx0XHRcdH07XG5cdFx0XHRpbWFnZXNVSS5wdXNoKChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BpbWFnZS1zdGFjay1pdGVtLSR7aX1gfSA+XG5cdFx0XHRcdFx0PGltZyBzcmM9e2ltYWdlVXJsfSBzdHlsZT17aW1nU3R5bGV9Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpKVxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGtleT17dGl0bGV9IGNsYXNzTmFtZT0nYWN0aXZlLXNsaWRlJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2FjdGl2ZS1zbGlkZS1jb250ZW50Jz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWN0aXZlLXNsaWRlLWltYWdlcy1zdGFjayc+XG5cdFx0XHRcdFx0XHR7aW1hZ2VzVUl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0ey8qPGRpdj57dGl0bGV9PC9kaXY+Ki99XG5cdFx0XHRcdFx0PGRpdj57ZGVzY3JpcHRpb259PC9kaXY+XG5cdFx0XHRcdFx0PGJ1dHRvbj4ge2J1dHRvbn08L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9J2FjdGl2ZS1zbGlkZS1tYWluLWltYWdlJyBzcmM9e21haW5JbWFnZVVybH0vPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbmRlclBhcnRuZXJJdGVyYXRvcihkYXRhLCBpc0FjdGl2ZSl7XG5cdFx0Y29uc3Qge25hbWUsIHVybCwgaW1hZ2V9ID0gZGF0YTtcblxuXHRcdGlmKCFpc0FjdGl2ZSl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgc3R5bGUgPSB7XG5cdFx0XHR3aWR0aDogJzI1MHB4J1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBrZXk9e25hbWV9IGNsYXNzTmFtZT0ncGFydG5lci1zaG93Jz5cblx0XHRcdFx0PGltZyBzcmM9e2ltYWdlfSBzdHlsZT17c3R5bGV9PjwvaW1nPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0naG9tZSc+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW50cm8nPlxuXHRcdFx0XHQ8Q2Fyb3VzZWwgY29udGVudHM9e2Nhcm91c2VsRGF0YX0gcmVuZGVyRGF0YT17cmVuZGVyRGF0YUl0ZXJhdG9yfS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYXJ0bmVycyc+XG5cdFx0XHRcdDxDYXJvdXNlbExpc3QgY29udGVudHM9e3BhcnRuZXJzRGF0YX0gcmVuZGVyRGF0YT17cmVuZGVyUGFydG5lckl0ZXJhdG9yfSBwYWdlU2l6ZT17M30vPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb290ZXInPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmluZC11cyc+XG5cdFx0XHRcdFx0PGRpdj5Vbml0IDIsIFBlbm1vcmUgQnVzaW5lc3MgQ2VudHJlPC9kaXY+XG5cdFx0XHRcdFx0PGRpdj5TYXh0b24gQ2xvc2UsIEhhc2xhbmQgUm9hZDwvZGl2PlxuXHRcdFx0XHRcdDxkaXY+SGFzbGFuZCwgQ2hlc3RlcmZpZWxkPC9kaXY+XG5cdFx0XHRcdFx0PGRpdj5EZXJieXNoaXJlIC0gUzQxIDBTSjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cblxuXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuLnNsaWRlciB7XFxuICBtYXJnaW4tbGVmdDogMzJweDtcXG4gIG1hcmdpbi1yaWdodDogMzJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmFjdGl2ZS1zbGlkZSB7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBtYXJnaW4tbGVmdDogNjBweDtcXG4gICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxufVxcblxcbi5hY3RpdmUtc2xpZGUtbWFpbi1pbWFnZXtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA0NDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuLmFjdGl2ZS1zbGlkZS1pbWFnZXMtc3RhY2t7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiA0NHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xcbn1cXG5cXG4uYWN0aXZlLXNsaWRlLWltYWdlcy1zdGFjayBpbWd7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAyMHB4IDcwcHggLTEwcHggcmdiYSgxMCwgMzIsIDcwLCAwLjMpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCk7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtZmlsdGVyIDMwMG1zIGN1YmljLWJlemllciguMjE1LCAuNjEsIC4zNTUsIDEpO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC1maWx0ZXIgMzAwbXMgY3ViaWMtYmV6aWVyKC4yMTUsIC42MSwgLjM1NSwgMSk7XFxuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMzAwbXMgY3ViaWMtYmV6aWVyKC4yMTUsIC42MSwgLjM1NSwgMSk7XFxuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMzAwbXMgY3ViaWMtYmV6aWVyKC4yMTUsIC42MSwgLjM1NSwgMSksIC13ZWJraXQtZmlsdGVyIDMwMG1zIGN1YmljLWJlemllciguMjE1LCAuNjEsIC4zNTUsIDEpO1xcbn1cXG5cXG4uaW1hZ2Utc3RhY2staXRlbS0xe1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAgMjtcXG4gIGdyaWQtcm93OiAxOyAvKiBtdXN0IGJlIG9uIHRoZSBzYW1lIHJvdyBhcyB0aGUgb3RoZXIgaW1hZ2UqL1xcbiAgcGFkZGluZy10b3A6IDIwJTsgIC8qdGhpcyBwdXNoZXMgdGhlIGltYWdlIGRvd24sIGFuZCBrZWVwcyBpdCBwcm9wb3J0aW9uYWwgYXMgaXQgcmVzaXplcyovXFxuICBwYWRkaW5nLWxlZnQ6IDQwJTsgIC8qdGhpcyBwdXNoZXMgdGhlIGltYWdlIGRvd24sIGFuZCBrZWVwcyBpdCBwcm9wb3J0aW9uYWwgYXMgaXQgcmVzaXplcyovXFxuICB6LWluZGV4OiAyOyAvKiBtYWtlIHRoaXMgaW1hZ2UgcmVuZGVyIG9uIHRvcCBvZiB0aGUgYm90dG9tKi9cXG4gIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKTtcXG59XFxuXFxuLmltYWdlLXN0YWNrLWl0ZW0tMntcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGdyaWQtcm93OiAxOyAvKiBtYWtlIHRoaXMgaW1hZ2UgYmUgb24gdGhlIHNhbWUgcm93Ki9cXG4gIHBhZGRpbmctdG9wOiAyMCU7ICAvKnRoaXMgcHVzaGVzIHRoZSBpbWFnZSBkb3duLCBhbmQga2VlcHMgaXQgcHJvcG9ydGlvbmFsIGFzIGl0IHJlc2l6ZXMqL1xcbiAgei1pbmRleDogMTsgLyogbWFrZSB0aGlzIGltYWdlIHJlbmRlciBvbiB0b3Agb2YgdGhlIGJvdHRvbSovXFxufVxcblxcbi5pbWFnZS1zdGFjay1pdGVtLTN7XFxuICBncmlkLWNvbHVtbjogMSAvIDg7XFxuICBncmlkLXJvdzogMTsgLyogbWFrZSB0aGlzIGltYWdlIGJlIG9uIHRoZSBzYW1lIHJvdyovXFxuICBwYWRkaW5nLWxlZnQ6IDIwJTsgIC8qdGhpcyBwdXNoZXMgdGhlIGltYWdlIGRvd24sIGFuZCBrZWVwcyBpdCBwcm9wb3J0aW9uYWwgYXMgaXQgcmVzaXplcyovXFxufVxcblxcbi5hY3RpdmUtc2xpZGUgYnV0dG9ue1xcbiAgbWFyZ2luLXRvcDogMzJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogdmFyKC0tZWxlbWVudC1wYWRkaW5nKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRlcnRpYXJ5LWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5hY3RpdmUtc2xpZGUtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYXJyb3cge1xcbiAgY3Vyc29yOiBwb2ludGVyXFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9