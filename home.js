(window.webpackJsonp=window.webpackJsonp||[]).push([[5,8,15],{10:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var a=n(0),r=n.n(a),i=n(2);n(70);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(){var e=m(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return s=function(){return e},e}function o(){var e=m(["\n  display: flex;\n  min-height: 400px;\n  align-items: center;\n"]);return o=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var u=Object(i.a)("div").attrs((function(){return{className:"slider"}}))(o());u.displayName="SliderDiv";var d=Object(i.a)("div").attrs((function(){return{className:"slider-items"}}))(s());function f(e){var t=e.onClick;return r.a.createElement("div",{className:"arrow",onClick:t},r.a.createElement("i",{className:"fa fa-angle-left fa-3x","aria-hidden":"true"}))}function p(e){var t=e.onClick;return r.a.createElement("div",{className:"arrow",onClick:t},r.a.createElement("i",{className:"fa fa-angle-right fa-3x","aria-hidden":"true"}))}function g(e){var t=e.contents,n=e.renderData,i=l(Object(a.useState)(0),2),c=i[0],s=i[1];var o=t.map((function(e,t){return n(e,c==t)}));return r.a.createElement(u,null,r.a.createElement(d,null,r.a.createElement(f,{onClick:function(){var e=t.length,n=c;s(n=n<1?e-1:n-1)}}),o,r.a.createElement(p,{onClick:function(){var e=t.length,n=c;s(n=n===e-1?0:n+1)}})))}d.displayName="SliderItemsDiv";n(72);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function h(){var e=x(["\n  display: flex;\n  align-items: center;\n  flex: 1;\n  padding: 32px;\n"]);return h=function(){return e},e}function y(){var e=x(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return y=function(){return e},e}function E(){var e=x(["\n  display: flex;\n  justify-content: center;\n  flex: 1;\n"]);return E=function(){return e},e}function x(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var w=Object(i.a)("div").attrs((function(){return{className:"list-slider"}}))(E());w.displayName="SliderDiv";var N=Object(i.a)("div").attrs((function(){return{className:"slider-list-items"}}))(y());N.displayName="SliderItemsDiv";var k=Object(i.a)("section").attrs((function(){return{className:"slide-list-container"}}))(h());function j(e){var t=e.onClick;return r.a.createElement("div",{className:"arrow",onClick:t},r.a.createElement("i",{className:"fa fa-angle-left fa-3x","aria-hidden":"true"}))}function C(e){var t=e.onClick;return r.a.createElement("div",{className:"arrow",onClick:t},r.a.createElement("i",{className:"fa fa-angle-right fa-3x","aria-hidden":"true"}))}function A(e){var t=e.contents,n=e.renderData,i=e.pageSize,l=v(Object(a.useState)(0),2),c=l[0],s=l[1];var o=t.map((function(e,t){return n(e,t>c-1&&t<c+i)}));return r.a.createElement(w,null,r.a.createElement(N,null,r.a.createElement(j,{onClick:function(){s(c<i?c:c-i)}}),r.a.createElement(k,null,o),r.a.createElement(C,{onClick:function(){var e=t.length;s(c>=e-i?c:c+i)}})))}k.displayName="SliderContainerDiv";var S=n(24);n(42);function O(e){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"intro"},r.a.createElement(g,{contents:S.carouselData,renderData:function(e,t){if(!t)return null;for(var n=e.title,a=e.description,i=e.image,l=(e.button,Array.isArray(i)?i[0]:i),c=[],s=1;s<i.length;s++){var o=i[s];c.push(r.a.createElement("div",{key:s,className:"image-stack-item-".concat(s)},r.a.createElement("img",{src:o,style:{width:"320px"}})))}return r.a.createElement("div",{key:n,className:"active-slide"},r.a.createElement("div",{className:"active-slide-content"},r.a.createElement("div",{className:"active-slide-images-stack"},c),r.a.createElement("div",null,a)),r.a.createElement("div",null,r.a.createElement("img",{className:"active-slide-main-image",src:l})))}})),r.a.createElement("div",{className:"partners"},r.a.createElement(A,{contents:S.partnersData,renderData:function(e,t){var n=e.name,a=(e.url,e.image);return t?r.a.createElement("div",{key:n,className:"partner-show"},r.a.createElement("img",{src:a,style:{width:"250px"}})):null},pageSize:3})),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"social-media-list"},r.a.createElement("div",{className:"social-media"},r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-facebook"}))),r.a.createElement("div",{className:"social-media"},r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-instagram"}))),r.a.createElement("div",{className:"social-media"},r.a.createElement("a",{href:"#"}," ",r.a.createElement("i",{className:"fab fa-whatsapp"})))),r.a.createElement("div",{className:"find-us"},r.a.createElement("h2",null,"CONTACT US"),r.a.createElement("div",null,"Unit 2, Penmore Business Centre,"),r.a.createElement("div",null,"Saxton Close,"),r.a.createElement("div",null,"Off Hasland Road,"),r.a.createElement("div",null,"Hasland, Chesterfield"),r.a.createElement("div",null,"S41 0SJ")),r.a.createElement("div",{className:"contact-us-list"},r.a.createElement("div",{className:"contact-us"},r.a.createElement("i",{className:"fas fa-mobile-alt"}),r.a.createElement("div",null,"01246 208052"),r.a.createElement("div",null,"07940 285534"),r.a.createElement("div",null,"07483 415432")),r.a.createElement("div",{className:"contact-us"},r.a.createElement("i",{className:"fas fa-envelope-open-text"}),r.a.createElement("div",null,"accachesterfield@gmail.com")))))}},24:function(e,t,n){"use strict";n.r(t),n.d(t,"carouselData",(function(){return a})),n.d(t,"partnersData",(function(){return r}));var a=[{title:"About us",description:"The African & Caribbean Community Association (A.C.C.A) is established to promote the welfare of the African and Caribbean Community in Chesterfield and surrounding areas, in particular by providing: Opportunities for African and Caribbean people to meet socially for mutual support to perform in artistic and cultural activities.",image:["./static/img/map.png","./static/img/community1.jpg","./static/img/community2.jpg","./static/img/community3.jpg"]},{title:"Projects",description:"An organisation to educate the community about the culture and history of the African and Caribbean people.",image:["./static/img/sitting.png","./static/img/community2.jpg","./static/img/community3.jpg","./static/img/community1.jpg"]},{title:"Activity",description:"To press for the removal of barriers which deny members of the African and Caribbean community an equal opportunity to participate in society.",image:["./static/img/drums1.png","./static/img/community3.jpg","./static/img/community2.jpg","./static/img/community1.jpg"]}],r=[{name:"Partner 1",url:"",image:"./static/img/partners/derby.jpg"},{name:"Partner 2",url:"",image:"./static/img/partners/Links.gif"},{name:"Partner 3",url:"",image:"./static/img/partners/derby.jpg"},{name:"Partner 4",url:"",image:"./static/img/partners/derby.jpg"},{name:"Partner 5",url:"",image:"./static/img/partners/derby.jpg"}]},42:function(e,t,n){var a=n(20),r=n(53);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},53:function(e,t,n){(t=n(21)(!1)).push([e.i,"\n\n.slider {\n  margin-left: 32px;\n  margin-right: 32px;\n  position: relative;\n}\n\n.active-slide {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-left: 60px;\n  margin-right: 60px;\n}\n\n.active-slide-main-image{\n  position: relative;\n  width: 440px;\n  margin-left: 60px;\n  z-index: 3;\n}\n\n.active-slide-images-stack{\n  position: relative;\n  margin-bottom: 32px;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n\n.active-slide-images-stack img{\n  border-style: solid;\n  border-width: 2px;\n  border-color: #fff;\n  border-radius: 5px;\n  background-color: #fff;\n  box-shadow: 0 20px 70px -10px rgba(10, 32, 70, 0.3);\n  -webkit-transform: perspective(1000px);\n  transform: perspective(1000px);\n  -webkit-transition: -webkit-filter 300ms cubic-bezier(.215, .61, .355, 1);\n  transition: -webkit-filter 300ms cubic-bezier(.215, .61, .355, 1);\n  transition: filter 300ms cubic-bezier(.215, .61, .355, 1);\n  transition: filter 300ms cubic-bezier(.215, .61, .355, 1), -webkit-filter 300ms cubic-bezier(.215, .61, .355, 1);\n  -o-object-fit: cover;\n}\n.image-stack-item-1{\n  grid-column: 1 /  2;\n  grid-row: 1; /* must be on the same row as the other image*/\n  padding-top: 40%;  /*this pushes the image down, and keeps it proportional as it resizes*/\n  padding-left: 60%;  /*this pushes the image down, and keeps it proportional as it resizes*/\n  z-index: 2; /* make this image render on top of the bottom*/\n}\n\n.image-stack-item-2{\n  grid-column: 1 / 4;\n  grid-row: 1; /* make this image be on the same row*/\n  padding-top: 20%;  /*this pushes the image down, and keeps it proportional as it resizes*/\n  z-index: 1; /* make this image render on top of the bottom*/\n}\n\n.image-stack-item-3{\n  grid-column: 1 / 8;\n  grid-row: 1; /* make this image be on the same row*/\n  padding-left: 40%;  /*this pushes the image down, and keeps it proportional as it resizes*/\n}\n\n.active-slide button{\n  margin-top: 60px;\n  border: 1px solid white;\n  border-radius: 4px;\n  padding: var(--element-padding);\n  background: var(--tertiary-bg-color);\n  color: white;\n  font-size: var(--header-font-size);\n}\n\n.active-slide-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n",""]),e.exports=t},70:function(e,t,n){var a=n(20),r=n(71);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},71:function(e,t,n){(t=n(21)(!1)).push([e.i,"",""]),e.exports=t},72:function(e,t,n){var a=n(20),r=n(73);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},73:function(e,t,n){(t=n(21)(!1)).push([e.i,".arrow {\n  cursor: pointer\n}",""]),e.exports=t}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hYnN0cmFjdC91aS9jYXJvdXNlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hYnN0cmFjdC91aS9DYXJvdXNlbExpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS9zdHlsZS5jc3M/NTZjNSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9hYnN0cmFjdC91aS9jYXJvdXNlbC9zdHlsZS5jc3M/MWU0NSIsIndlYnBhY2s6Ly8vLi9hYnN0cmFjdC91aS9jYXJvdXNlbC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYWJzdHJhY3QvdWkvQ2Fyb3VzZWxMaXN0L3N0eWxlLmNzcz81Yzc0Iiwid2VicGFjazovLy8uL2Fic3RyYWN0L3VpL0Nhcm91c2VsTGlzdC9zdHlsZS5jc3MiXSwibmFtZXMiOlsiU2xpZGVyRGl2Iiwic3R5bGVkIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJkaXNwbGF5TmFtZSIsIlNsaWRlckl0ZW1zRGl2IiwiTGVmdEFycm93IiwicHJvcHMiLCJvbkNsaWNrIiwiYXJpYS1oaWRkZW4iLCJSaWdodEFycm93IiwiQ2Fyb3VzZWwiLCJjb250ZW50cyIsInJlbmRlckRhdGEiLCJ1c2VTdGF0ZSIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJ1aSIsIm1hcCIsImNvbnRlbnQiLCJpbmRleCIsImxlbmd0aCIsIlNsaWRlckNvbnRhaW5lckRpdiIsIkNhcm91c2VsTGlzdCIsInBhZ2VTaXplIiwic3RhcnRJbmRleCIsInNldFN0YXJ0SW5kZXgiLCJ0b3RhbCIsIkhvbWUiLCJjYXJvdXNlbERhdGEiLCJkYXRhIiwiaXNBY3RpdmUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJtYWluSW1hZ2VVcmwiLCJidXR0b24iLCJBcnJheSIsImlzQXJyYXkiLCJpbWFnZXNVSSIsImkiLCJpbWFnZVVybCIsInB1c2giLCJrZXkiLCJzcmMiLCJzdHlsZSIsIndpZHRoIiwicGFydG5lcnNEYXRhIiwibmFtZSIsInVybCIsImhyZWYiLCJhcGkiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIm1vZHVsZSIsIm9wdGlvbnMiLCJleHBvcnRzIiwibG9jYWxzIiwiX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIl0sIm1hcHBpbmdzIjoibStDQUlBLElBQU1BLEVBQVlDLFlBQU8sT0FBT0MsT0FBTSxpQkFBTyxDQUM1Q0MsVUFBVyxZQURNRixDQUFILEtBT2ZELEVBQVVJLFlBQWMsWUFFeEIsSUFBTUMsRUFBaUJKLFlBQU8sT0FBT0MsT0FBTSxpQkFBTyxDQUNqREMsVUFBVyxrQkFEV0YsQ0FBSCxLQVlwQixTQUFTSyxFQUFVQyxHQUFNLElBQ2pCQyxFQUFXRCxFQUFYQyxRQUNQLE9BQ0MseUJBQUtMLFVBQVUsUUFBUUssUUFBU0EsR0FDL0IsdUJBQUdMLFVBQVUseUJBQXlCTSxjQUFZLFVBS3JELFNBQVNDLEVBQVdILEdBQU0sSUFDbEJDLEVBQVdELEVBQVhDLFFBQ1AsT0FDQSx5QkFBS0wsVUFBVSxRQUFRSyxRQUFTQSxHQUMvQix1QkFBR0wsVUFBVSwwQkFBMEJNLGNBQVksVUFNdEMsU0FBU0UsRUFBU0osR0FBTSxJQUMvQkssRUFBd0JMLEVBQXhCSyxTQUFVQyxFQUFjTixFQUFkTSxXQURxQixJQUdBQyxtQkFBUyxHQUhULEdBRy9CQyxFQUgrQixLQUdsQkMsRUFIa0IsS0FtQnRDLElBQU1DLEVBQUtMLEVBQVNNLEtBQUksU0FBQ0MsRUFBU0MsR0FDakMsT0FBT1AsRUFBV00sRUFBU0osR0FBZUssTUFJM0MsT0FDQSxrQkFBQ3BCLEVBQUQsS0FDQyxrQkFBQ0ssRUFBRCxLQUNDLGtCQUFDQyxFQUFELENBQVdFLFFBdEJiLFdBQ0MsSUFBSWEsRUFBU1QsRUFBU1MsT0FDbEJELEVBQVFMLEVBRVpDLEVBREFJLEVBQVNBLEVBQVEsRUFBS0MsRUFBUyxFQUFJRCxFQUFRLE1Bb0J4Q0gsRUFDRixrQkFBQ1AsRUFBRCxDQUFZRixRQWpCZCxXQUNDLElBQUlhLEVBQVNULEVBQVNTLE9BQ2xCRCxFQUFRTCxFQUVaQyxFQURBSSxFQUFTQSxJQUFVQyxFQUFTLEVBQUssRUFBSUQsRUFBUSxRQXZDL0NmLEVBQWVELFlBQWMsaUIsMDdDQ2hCN0IsSUFBTUosRUFBWUMsWUFBTyxPQUFPQyxPQUFNLGlCQUFPLENBQzVDQyxVQUFXLGlCQURNRixDQUFILEtBT2ZELEVBQVVJLFlBQWMsWUFFeEIsSUFBTUMsRUFBaUJKLFlBQU8sT0FBT0MsT0FBTSxpQkFBTyxDQUNqREMsVUFBVyx1QkFEV0YsQ0FBSCxLQU9wQkksRUFBZUQsWUFBYyxpQkFFN0IsSUFBTWtCLEVBQXFCckIsWUFBTyxXQUFXQyxPQUFNLGlCQUFPLENBQ3pEQyxVQUFXLDBCQURlRixDQUFILEtBWXhCLFNBQVNLLEVBQVVDLEdBQU0sSUFDakJDLEVBQVdELEVBQVhDLFFBQ1AsT0FDQSx5QkFBS0wsVUFBVSxRQUFRSyxRQUFTQSxHQUMvQix1QkFBR0wsVUFBVSx5QkFBeUJNLGNBQVksVUFLcEQsU0FBU0MsRUFBV0gsR0FBTSxJQUNsQkMsRUFBV0QsRUFBWEMsUUFDUCxPQUNBLHlCQUFLTCxVQUFVLFFBQVFLLFFBQVNBLEdBQy9CLHVCQUFHTCxVQUFVLDBCQUEwQk0sY0FBWSxVQU10QyxTQUFTYyxFQUFhaEIsR0FBTSxJQUNuQ0ssRUFBa0NMLEVBQWxDSyxTQUFVQyxFQUF3Qk4sRUFBeEJNLFdBQVlXLEVBQVlqQixFQUFaaUIsU0FEYSxJQUdOVixtQkFBUyxHQUhILEdBR25DVyxFQUhtQyxLQUd2QkMsRUFIdUIsS0FrQjFDLElBQU1ULEVBQUtMLEVBQVNNLEtBQUksU0FBQ0MsRUFBU0MsR0FFakMsT0FBT1AsRUFBV00sRUFERUMsRUFBU0ssRUFBYSxHQUFRTCxFQUFTSyxFQUFhRCxNQUl6RSxPQUNBLGtCQUFDLEVBQUQsS0FDQyxrQkFBQyxFQUFELEtBQ0Msa0JBQUMsRUFBRCxDQUFXaEIsUUFyQmIsV0FHQ2tCLEVBRFNELEVBQWFELEVBQVlDLEVBQWFBLEVBQWFELE1Bb0IzRCxrQkFBQ0YsRUFBRCxLQUNFTCxHQUVGLGtCQUFDLEVBQUQsQ0FBWVQsUUFuQmQsV0FDQyxJQUFJbUIsRUFBUWYsRUFBU1MsT0FHckJLLEVBRFNELEdBQWNFLEVBQVFILEVBQVlDLEVBQWFBLEVBQWFELFFBckN2RUYsRUFBbUJsQixZQUFjLHFCLGtCQ25CbEIsU0FBU3dCLEVBQUtyQixHQXdENUIsT0FDQyx5QkFBS0osVUFBVSxRQUNkLHlCQUFLQSxVQUFVLFNBQ2Qsa0JBQUNRLEVBQUQsQ0FBVUMsU0FBVWlCLGVBQWNoQixXQXpEckMsU0FBNEJpQixFQUFNQyxHQUNqQyxJQUFJQSxFQUNILE9BQU8sS0FPUixJQVQwQyxJQUtqQ0MsRUFBcUNGLEVBQXJDRSxNQUFPQyxFQUE4QkgsRUFBOUJHLFlBQWFDLEVBQWlCSixFQUFqQkksTUFFdkJDLEdBRndDTCxFQUFWTSxPQUVmQyxNQUFNQyxRQUFRSixHQUFTQSxFQUFNLEdBQUtBLEdBQ25ESyxFQUFXLEdBQ1BDLEVBQUksRUFBR0EsRUFBR04sRUFBTWIsT0FBUW1CLElBQUksQ0FDbkMsSUFBTUMsRUFBV1AsRUFBTU0sR0FJdkJELEVBQVNHLEtBQ1IseUJBQUtDLElBQUtILEVBQUdyQyxVQUFTLDJCQUFzQnFDLElBQzNDLHlCQUFLSSxJQUFLSCxFQUFVSSxNQUxMLENBQ2hCQyxNQUFNLGFBU1IsT0FDQyx5QkFBS0gsSUFBS1gsRUFBTzdCLFVBQVUsZ0JBQzFCLHlCQUFLQSxVQUFVLHdCQUNkLHlCQUFLQSxVQUFVLDZCQUNib0MsR0FHRiw2QkFBTU4sSUFFUCw2QkFDQyx5QkFBSzlCLFVBQVUsMEJBQTBCeUMsSUFBS1QsVUE0QmhELHlCQUFLaEMsVUFBVSxZQUNkLGtCQUFDb0IsRUFBRCxDQUFjWCxTQUFVbUMsZUFBY2xDLFdBdkJ6QyxTQUErQmlCLEVBQU1DLEdBQVMsSUFDdENpQixFQUFvQmxCLEVBQXBCa0IsS0FBV2QsR0FBU0osRUFBZG1CLElBQWNuQixFQUFUSSxPQUVsQixPQUFJSCxFQVFILHlCQUFLWSxJQUFLSyxFQUFNN0MsVUFBVSxnQkFDekIseUJBQUt5QyxJQUFLVixFQUFPVyxNQUxMLENBQ2JDLE1BQU8sWUFKQSxNQW1CbUV0QixTQUFVLEtBR3BGLHlCQUFLckIsVUFBVSxVQUNWLHlCQUFLQSxVQUFVLHFCQUNYLHlCQUFLQSxVQUFVLGdCQUFlLHVCQUFHK0MsS0FBSyxLQUFLLHVCQUFHL0MsVUFBVSxzQkFDeEQseUJBQUtBLFVBQVUsZ0JBQWUsdUJBQUcrQyxLQUFLLEtBQUssdUJBQUcvQyxVQUFVLHVCQUN4RCx5QkFBS0EsVUFBVSxnQkFBZSx1QkFBRytDLEtBQUssS0FBUixJQUFjLHVCQUFHL0MsVUFBVSx1QkFFakUseUJBQUtBLFVBQVUsV0FDVCwwQ0FDTCxpRUFDQSw4Q0FDQSxrREFDQSxzREFDQSx5Q0FFRyx5QkFBS0EsVUFBVSxtQkFDYix5QkFBS0EsVUFBVSxjQUNiLHVCQUFHQSxVQUFVLHNCQUNiLDZDQUNBLDZDQUNBLDhDQUVGLHlCQUFLQSxVQUFVLGNBQ2IsdUJBQUdBLFVBQVUsOEJBQ2IsaUUsZ0NDbkdaLHFHQUFNMEIsRUFBZSxDQUNuQixDQUNFRyxNQUFPLFdBQ1BDLFlBQWEsNlVBQ2JDLE1BQU8sQ0FBQyx1QkFBdUIsOEJBQThCLDhCQUE4QixnQ0FFN0YsQ0FDRUYsTUFBTyxXQUNQQyxZQUFhLDhHQUNiQyxNQUFPLENBQUMsMkJBQTJCLDhCQUE4Qiw4QkFBOEIsZ0NBRWpHLENBQ0VGLE1BQU8sV0FDUEMsWUFBYSxpSkFDYkMsTUFBTyxDQUFDLDBCQUEwQiw4QkFBOEIsOEJBQThCLGlDQUk1RmEsRUFBZSxDQUNuQixDQUNFQyxLQUFNLFlBQ05DLElBQUssR0FDTGYsTUFBTyxtQ0FFVCxDQUNFYyxLQUFNLFlBQ05DLElBQUssR0FDTGYsTUFBTyxtQ0FFVCxDQUNFYyxLQUFNLFlBQ05DLElBQUssR0FDTGYsTUFBTyxtQ0FFVCxDQUNFYyxLQUFNLFlBQ05DLElBQUssR0FDTGYsTUFBTyxtQ0FFVCxDQUNFYyxLQUFNLFlBQ05DLElBQUssR0FDTGYsTUFBTyxxQyxtQkMxQ1gsSUFBSWlCLEVBQU0sRUFBUSxJQUNGaEMsRUFBVSxFQUFRLElBSUMsaUJBRnZCQSxFQUFVQSxFQUFRaUMsV0FBYWpDLEVBQVFrQyxRQUFVbEMsS0FHL0NBLEVBQVUsQ0FBQyxDQUFDbUMsRUFBT2QsRUFBSXJCLEVBQVMsTUFHOUMsSUFBSW9DLEVBQVUsQ0FFZCxPQUFpQixPQUNqQixXQUFvQixHQUVQSixFQUFJaEMsRUFBU29DLEdBSTFCRCxFQUFPRSxRQUFVckMsRUFBUXNDLFFBQVUsSSxvQkNoQm5DRCxFQURrQyxFQUFRLEdBQ2hDRSxFQUE0QixJQUU5QmhCLEtBQUssQ0FBQ1ksRUFBT2QsRUFBSSxzdUVBQXV1RSxLQUVod0VjLEVBQU9FLFFBQVVBLEcsbUJDTmpCLElBQUlMLEVBQU0sRUFBUSxJQUNGaEMsRUFBVSxFQUFRLElBSUMsaUJBRnZCQSxFQUFVQSxFQUFRaUMsV0FBYWpDLEVBQVFrQyxRQUFVbEMsS0FHL0NBLEVBQVUsQ0FBQyxDQUFDbUMsRUFBT2QsRUFBSXJCLEVBQVMsTUFHOUMsSUFBSW9DLEVBQVUsQ0FFZCxPQUFpQixPQUNqQixXQUFvQixHQUVQSixFQUFJaEMsRUFBU29DLEdBSTFCRCxFQUFPRSxRQUFVckMsRUFBUXNDLFFBQVUsSSxvQkNoQm5DRCxFQURrQyxFQUFRLEdBQ2hDRSxFQUE0QixJQUU5QmhCLEtBQUssQ0FBQ1ksRUFBT2QsRUFBSSxHQUFJLEtBRTdCYyxFQUFPRSxRQUFVQSxHLG1CQ05qQixJQUFJTCxFQUFNLEVBQVEsSUFDRmhDLEVBQVUsRUFBUSxJQUlDLGlCQUZ2QkEsRUFBVUEsRUFBUWlDLFdBQWFqQyxFQUFRa0MsUUFBVWxDLEtBRy9DQSxFQUFVLENBQUMsQ0FBQ21DLEVBQU9kLEVBQUlyQixFQUFTLE1BRzlDLElBQUlvQyxFQUFVLENBRWQsT0FBaUIsT0FDakIsV0FBb0IsR0FFUEosRUFBSWhDLEVBQVNvQyxHQUkxQkQsRUFBT0UsUUFBVXJDLEVBQVFzQyxRQUFVLEksb0JDaEJuQ0QsRUFEa0MsRUFBUSxHQUNoQ0UsRUFBNEIsSUFFOUJoQixLQUFLLENBQUNZLEVBQU9kLEVBQUksaUNBQWtDLEtBRTNEYyxFQUFPRSxRQUFVQSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBTbGlkZXJEaXYgPSBzdHlsZWQoJ2RpdicpLmF0dHJzKCgpID0+ICh7XG5cdGNsYXNzTmFtZTogJ3NsaWRlcidcbn0pKWBcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuU2xpZGVyRGl2LmRpc3BsYXlOYW1lID0gJ1NsaWRlckRpdic7XG5cbmNvbnN0IFNsaWRlckl0ZW1zRGl2ID0gc3R5bGVkKCdkaXYnKS5hdHRycygoKSA9PiAoe1xuXHRjbGFzc05hbWU6ICdzbGlkZXItaXRlbXMnXG59KSlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuU2xpZGVySXRlbXNEaXYuZGlzcGxheU5hbWUgPSAnU2xpZGVySXRlbXNEaXYnO1xuXG5cblxuXG5mdW5jdGlvbiBMZWZ0QXJyb3cocHJvcHMpe1xuXHRjb25zdCB7b25DbGlja30gPSBwcm9wcztcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nYXJyb3cnIG9uQ2xpY2s9e29uQ2xpY2t9PlxuXHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS1hbmdsZS1sZWZ0IGZhLTN4JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9pPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmZ1bmN0aW9uIFJpZ2h0QXJyb3cocHJvcHMpe1xuXHRjb25zdCB7b25DbGlja30gPSBwcm9wcztcblx0cmV0dXJuIChcblx0PGRpdiBjbGFzc05hbWU9J2Fycm93JyBvbkNsaWNrPXtvbkNsaWNrfT5cblx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLWFuZ2xlLXJpZ2h0IGZhLTN4JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9pPlxuXHQ8L2Rpdj5cblx0KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKHByb3BzKXtcblx0Y29uc3Qge2NvbnRlbnRzLCByZW5kZXJEYXRhfSA9IHByb3BzO1xuXG5cdGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cblx0ZnVuY3Rpb24gZ29Ub1ByZXZTbGlkZSgpIHtcblx0XHRsZXQgbGVuZ3RoID0gY29udGVudHMubGVuZ3RoO1xuXHRcdGxldCBpbmRleCA9IGFjdGl2ZUluZGV4O1xuXHRcdGluZGV4ID0gKGluZGV4IDwgMSkgPyBsZW5ndGggLSAxIDogaW5kZXggLSAxO1xuXHRcdHNldEFjdGl2ZUluZGV4KGluZGV4KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdvVG9OZXh0U2xpZGUoKSB7XG5cdFx0bGV0IGxlbmd0aCA9IGNvbnRlbnRzLmxlbmd0aDtcblx0XHRsZXQgaW5kZXggPSBhY3RpdmVJbmRleDtcblx0XHRpbmRleCA9IChpbmRleCA9PT0gbGVuZ3RoIC0gMSkgPyAwIDogaW5kZXggKyAxO1xuXHRcdHNldEFjdGl2ZUluZGV4KGluZGV4KTtcblx0fVxuXG5cdGNvbnN0IHVpID0gY29udGVudHMubWFwKChjb250ZW50LCBpbmRleCk9Pntcblx0XHRyZXR1cm4gcmVuZGVyRGF0YShjb250ZW50LCBhY3RpdmVJbmRleCA9PSBpbmRleCk7XG5cdH0pO1xuXG5cblx0cmV0dXJuIChcblx0PFNsaWRlckRpdj5cblx0XHQ8U2xpZGVySXRlbXNEaXY+XG5cdFx0XHQ8TGVmdEFycm93IG9uQ2xpY2s9e2dvVG9QcmV2U2xpZGV9Lz5cblx0XHRcdFx0e3VpfVxuXHRcdFx0PFJpZ2h0QXJyb3cgb25DbGljaz17Z29Ub05leHRTbGlkZX0vPlxuXHRcdDwvU2xpZGVySXRlbXNEaXY+XG5cdDwvU2xpZGVyRGl2PlxuXHQpO1xufSIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgU2xpZGVyRGl2ID0gc3R5bGVkKCdkaXYnKS5hdHRycygoKSA9PiAoe1xuXHRjbGFzc05hbWU6ICdsaXN0LXNsaWRlcidcbn0pKWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDE7XG5gO1xuU2xpZGVyRGl2LmRpc3BsYXlOYW1lID0gJ1NsaWRlckRpdic7XG5cbmNvbnN0IFNsaWRlckl0ZW1zRGl2ID0gc3R5bGVkKCdkaXYnKS5hdHRycygoKSA9PiAoe1xuXHRjbGFzc05hbWU6ICdzbGlkZXItbGlzdC1pdGVtcydcbn0pKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5TbGlkZXJJdGVtc0Rpdi5kaXNwbGF5TmFtZSA9ICdTbGlkZXJJdGVtc0Rpdic7XG5cbmNvbnN0IFNsaWRlckNvbnRhaW5lckRpdiA9IHN0eWxlZCgnc2VjdGlvbicpLmF0dHJzKCgpID0+ICh7XG5cdGNsYXNzTmFtZTogJ3NsaWRlLWxpc3QtY29udGFpbmVyJ1xufSkpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAzMnB4O1xuYDtcblNsaWRlckNvbnRhaW5lckRpdi5kaXNwbGF5TmFtZSA9ICdTbGlkZXJDb250YWluZXJEaXYnO1xuXG5cblxuZnVuY3Rpb24gTGVmdEFycm93KHByb3BzKXtcblx0Y29uc3Qge29uQ2xpY2t9ID0gcHJvcHM7XG5cdHJldHVybiAoXG5cdDxkaXYgY2xhc3NOYW1lPSdhcnJvdycgb25DbGljaz17b25DbGlja30+XG5cdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS1hbmdsZS1sZWZ0IGZhLTN4JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9pPlxuXHQ8L2Rpdj5cblx0KVxufVxuXG5mdW5jdGlvbiBSaWdodEFycm93KHByb3BzKXtcblx0Y29uc3Qge29uQ2xpY2t9ID0gcHJvcHM7XG5cdHJldHVybiAoXG5cdDxkaXYgY2xhc3NOYW1lPSdhcnJvdycgb25DbGljaz17b25DbGlja30+XG5cdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS1hbmdsZS1yaWdodCBmYS0zeCcgYXJpYS1oaWRkZW49J3RydWUnPjwvaT5cblx0PC9kaXY+XG5cdClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbExpc3QocHJvcHMpe1xuXHRjb25zdCB7Y29udGVudHMsIHJlbmRlckRhdGEsIHBhZ2VTaXplfSA9IHByb3BzO1xuXG5cdGNvbnN0IFtzdGFydEluZGV4LCBzZXRTdGFydEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG5cdGZ1bmN0aW9uIGdvVG9QcmV2UGFnZSgpIHtcblx0XHRsZXQgaW5kZXggPSBzdGFydEluZGV4O1xuXHRcdGluZGV4ID0gKHN0YXJ0SW5kZXggPCBwYWdlU2l6ZSkgPyBzdGFydEluZGV4IDogc3RhcnRJbmRleCAtIHBhZ2VTaXplO1xuXHRcdHNldFN0YXJ0SW5kZXgoaW5kZXgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ29Ub05leHRQYWdlKCkge1xuXHRcdGxldCB0b3RhbCA9IGNvbnRlbnRzLmxlbmd0aDtcblx0XHRsZXQgaW5kZXggPSBzdGFydEluZGV4O1xuXHRcdGluZGV4ID0gKHN0YXJ0SW5kZXggPj0gdG90YWwgLSBwYWdlU2l6ZSkgPyBzdGFydEluZGV4IDogc3RhcnRJbmRleCArIHBhZ2VTaXplO1xuXHRcdHNldFN0YXJ0SW5kZXgoaW5kZXgpO1xuXHR9XG5cblx0Y29uc3QgdWkgPSBjb250ZW50cy5tYXAoKGNvbnRlbnQsIGluZGV4KT0+e1xuXHRcdGNvbnN0IHNob3VsZFNob3cgPSAoaW5kZXggPiAgc3RhcnRJbmRleCAtIDEpICYmICAoaW5kZXggPCAoc3RhcnRJbmRleCArIHBhZ2VTaXplKSlcblx0XHRyZXR1cm4gcmVuZGVyRGF0YShjb250ZW50LCBzaG91bGRTaG93KTtcblx0fSk7XG5cblx0cmV0dXJuIChcblx0PFNsaWRlckRpdj5cblx0XHQ8U2xpZGVySXRlbXNEaXY+XG5cdFx0XHQ8TGVmdEFycm93IG9uQ2xpY2s9e2dvVG9QcmV2UGFnZX0vPlxuXHRcdFx0PFNsaWRlckNvbnRhaW5lckRpdj5cblx0XHRcdFx0e3VpfVxuXHRcdFx0PC9TbGlkZXJDb250YWluZXJEaXY+XG5cdFx0XHQ8UmlnaHRBcnJvdyBvbkNsaWNrPXtnb1RvTmV4dFBhZ2V9Lz5cblx0XHQ8L1NsaWRlckl0ZW1zRGl2PlxuXHQ8L1NsaWRlckRpdj5cblx0KTtcbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ2Fic3RyYWN0L3VpL2Nhcm91c2VsJztcbmltcG9ydCBDYXJvdXNlbExpc3QgZnJvbSAnYWJzdHJhY3QvdWkvQ2Fyb3VzZWxMaXN0JztcbmltcG9ydCB7cGFydG5lcnNEYXRhLCBjYXJvdXNlbERhdGF9IGZyb20gXCIuL2NvbnRlbnRcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vKlxuKiAgIGJvcmRlcjogOHB4IHNvbGlkIHdoaXRlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICogKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpe1xuXG5cdGZ1bmN0aW9uIHJlbmRlckRhdGFJdGVyYXRvcihkYXRhLCBpc0FjdGl2ZSl7XG5cdFx0aWYoIWlzQWN0aXZlKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuICAgIGNvbnN0IHt0aXRsZSwgZGVzY3JpcHRpb24sIGltYWdlLCBidXR0b259ID0gZGF0YTtcblxuXHRcdGNvbnN0IG1haW5JbWFnZVVybCA9IEFycmF5LmlzQXJyYXkoaW1hZ2UpID8gaW1hZ2VbMF0gOiBpbWFnZTtcblx0XHRsZXQgaW1hZ2VzVUkgPSBbXTtcblx0XHRmb3IobGV0IGkgPSAxOyBpPCBpbWFnZS5sZW5ndGg7IGkrKyl7XG5cdFx0XHRjb25zdCBpbWFnZVVybCA9IGltYWdlW2ldO1xuXHRcdFx0Y29uc3QgaW1nU3R5bGUgPSB7XG5cdFx0XHRcdHdpZHRoOlwiMzIwcHhcIlxuXHRcdFx0fTtcblx0XHRcdGltYWdlc1VJLnB1c2goKFxuXHRcdFx0XHQ8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtgaW1hZ2Utc3RhY2staXRlbS0ke2l9YH0gPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtpbWFnZVVybH0gc3R5bGU9e2ltZ1N0eWxlfS8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSlcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBrZXk9e3RpdGxlfSBjbGFzc05hbWU9J2FjdGl2ZS1zbGlkZSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhY3RpdmUtc2xpZGUtY29udGVudCc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2FjdGl2ZS1zbGlkZS1pbWFnZXMtc3RhY2snPlxuXHRcdFx0XHRcdFx0e2ltYWdlc1VJfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsvKjxkaXY+e3RpdGxlfTwvZGl2PiovfVxuXHRcdFx0XHRcdDxkaXY+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT0nYWN0aXZlLXNsaWRlLW1haW4taW1hZ2UnIHNyYz17bWFpbkltYWdlVXJsfS8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVuZGVyUGFydG5lckl0ZXJhdG9yKGRhdGEsIGlzQWN0aXZlKXtcblx0XHRjb25zdCB7bmFtZSwgdXJsLCBpbWFnZX0gPSBkYXRhO1xuXG5cdFx0aWYoIWlzQWN0aXZlKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH07XG5cblx0XHRjb25zdCBzdHlsZSA9IHtcblx0XHRcdHdpZHRoOiAnMjUwcHgnXG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGtleT17bmFtZX0gY2xhc3NOYW1lPSdwYXJ0bmVyLXNob3cnPlxuXHRcdFx0XHQ8aW1nIHNyYz17aW1hZ2V9IHN0eWxlPXtzdHlsZX0+PC9pbWc+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdob21lJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpbnRybyc+XG5cdFx0XHRcdDxDYXJvdXNlbCBjb250ZW50cz17Y2Fyb3VzZWxEYXRhfSByZW5kZXJEYXRhPXtyZW5kZXJEYXRhSXRlcmF0b3J9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhcnRuZXJzJz5cblx0XHRcdFx0PENhcm91c2VsTGlzdCBjb250ZW50cz17cGFydG5lcnNEYXRhfSByZW5kZXJEYXRhPXtyZW5kZXJQYXJ0bmVySXRlcmF0b3J9IHBhZ2VTaXplPXszfS8+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvb3Rlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzb2NpYWwtbWVkaWEtbGlzdCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc29jaWFsLW1lZGlhJz48YSBocmVmPScjJyA+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rXCI+PC9pPjwvYT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzb2NpYWwtbWVkaWEnPjxhIGhyZWY9JyMnID48aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPjwvYT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzb2NpYWwtbWVkaWEnPjxhIGhyZWY9JyMnID4gPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXdoYXRzYXBwXCI+PC9pPjwvYT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmaW5kLXVzJz5cbiAgICAgICAgICA8aDI+Q09OVEFDVCBVUzwvaDI+XG5cdFx0XHRcdFx0PGRpdj5Vbml0IDIsIFBlbm1vcmUgQnVzaW5lc3MgQ2VudHJlLDwvZGl2PlxuXHRcdFx0XHRcdDxkaXY+U2F4dG9uIENsb3NlLDwvZGl2PlxuXHRcdFx0XHRcdDxkaXY+T2ZmIEhhc2xhbmQgUm9hZCw8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2Pkhhc2xhbmQsIENoZXN0ZXJmaWVsZDwvZGl2PlxuXHRcdFx0XHRcdDxkaXY+UzQxIDBTSjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3QtdXMtbGlzdCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3QtdXMnPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1vYmlsZS1hbHRcIj48L2k+XG4gICAgICAgICAgICA8ZGl2PjAxMjQ2Jm5ic3A7MjA4MDUyPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjA3OTQwJm5ic3A7Mjg1NTM0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjA3NDgzJm5ic3A7NDE1NDMyPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3QtdXMnPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlLW9wZW4tdGV4dFwiPjwvaT5cbiAgICAgICAgICAgIDxkaXY+YWNjYWNoZXN0ZXJmaWVsZEBnbWFpbC5jb208L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5cblxuIiwiY29uc3QgY2Fyb3VzZWxEYXRhID0gW1xuICB7XG4gICAgdGl0bGU6ICdBYm91dCB1cycsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgQWZyaWNhbiAmIENhcmliYmVhbiBDb21tdW5pdHkgQXNzb2NpYXRpb24gKEEuQy5DLkEpIGlzIGVzdGFibGlzaGVkIHRvIHByb21vdGUgdGhlIHdlbGZhcmUgb2YgdGhlIEFmcmljYW4gYW5kIENhcmliYmVhbiBDb21tdW5pdHkgaW4gQ2hlc3RlcmZpZWxkIGFuZCBzdXJyb3VuZGluZyBhcmVhcywgaW4gcGFydGljdWxhciBieSBwcm92aWRpbmc6IE9wcG9ydHVuaXRpZXMgZm9yIEFmcmljYW4gYW5kIENhcmliYmVhbiBwZW9wbGUgdG8gbWVldCBzb2NpYWxseSBmb3IgbXV0dWFsIHN1cHBvcnQgdG8gcGVyZm9ybSBpbiBhcnRpc3RpYyBhbmQgY3VsdHVyYWwgYWN0aXZpdGllcy4nLFxuICAgIGltYWdlOiBbJy4vc3RhdGljL2ltZy9tYXAucG5nJywnLi9zdGF0aWMvaW1nL2NvbW11bml0eTEuanBnJywnLi9zdGF0aWMvaW1nL2NvbW11bml0eTIuanBnJywnLi9zdGF0aWMvaW1nL2NvbW11bml0eTMuanBnJyBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdQcm9qZWN0cycsXG4gICAgZGVzY3JpcHRpb246ICdBbiBvcmdhbmlzYXRpb24gdG8gZWR1Y2F0ZSB0aGUgY29tbXVuaXR5IGFib3V0IHRoZSBjdWx0dXJlIGFuZCBoaXN0b3J5IG9mIHRoZSBBZnJpY2FuIGFuZCBDYXJpYmJlYW4gcGVvcGxlLicsXG4gICAgaW1hZ2U6IFsnLi9zdGF0aWMvaW1nL3NpdHRpbmcucG5nJywnLi9zdGF0aWMvaW1nL2NvbW11bml0eTIuanBnJywnLi9zdGF0aWMvaW1nL2NvbW11bml0eTMuanBnJywnLi9zdGF0aWMvaW1nL2NvbW11bml0eTEuanBnJyBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdBY3Rpdml0eScsXG4gICAgZGVzY3JpcHRpb246ICdUbyBwcmVzcyBmb3IgdGhlIHJlbW92YWwgb2YgYmFycmllcnMgd2hpY2ggZGVueSBtZW1iZXJzIG9mIHRoZSBBZnJpY2FuIGFuZCBDYXJpYmJlYW4gY29tbXVuaXR5IGFuIGVxdWFsIG9wcG9ydHVuaXR5IHRvIHBhcnRpY2lwYXRlIGluIHNvY2lldHkuJyxcbiAgICBpbWFnZTogWycuL3N0YXRpYy9pbWcvZHJ1bXMxLnBuZycsJy4vc3RhdGljL2ltZy9jb21tdW5pdHkzLmpwZycsJy4vc3RhdGljL2ltZy9jb21tdW5pdHkyLmpwZycsJy4vc3RhdGljL2ltZy9jb21tdW5pdHkxLmpwZycgXSxcbiAgfVxuXTtcblxuY29uc3QgcGFydG5lcnNEYXRhID0gW1xuICB7XG4gICAgbmFtZTogJ1BhcnRuZXIgMScsXG4gICAgdXJsOiAnJyxcbiAgICBpbWFnZTogJy4vc3RhdGljL2ltZy9wYXJ0bmVycy9kZXJieS5qcGcnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnUGFydG5lciAyJyxcbiAgICB1cmw6ICcnLFxuICAgIGltYWdlOiAnLi9zdGF0aWMvaW1nL3BhcnRuZXJzL0xpbmtzLmdpZidcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQYXJ0bmVyIDMnLFxuICAgIHVybDogJycsXG4gICAgaW1hZ2U6ICcuL3N0YXRpYy9pbWcvcGFydG5lcnMvZGVyYnkuanBnJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ1BhcnRuZXIgNCcsXG4gICAgdXJsOiAnJyxcbiAgICBpbWFnZTogJy4vc3RhdGljL2ltZy9wYXJ0bmVycy9kZXJieS5qcGcnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnUGFydG5lciA1JyxcbiAgICB1cmw6ICcnLFxuICAgIGltYWdlOiAnLi9zdGF0aWMvaW1nL3BhcnRuZXJzL2RlcmJ5LmpwZydcbiAgfVxuXVxuXG5leHBvcnQge1xuICBjYXJvdXNlbERhdGEsXG4gIHBhcnRuZXJzRGF0YVxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG4uc2xpZGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYWN0aXZlLXNsaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxufVxcblxcbi5hY3RpdmUtc2xpZGUtbWFpbi1pbWFnZXtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA0NDBweDtcXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuLmFjdGl2ZS1zbGlkZS1pbWFnZXMtc3RhY2t7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xcbn1cXG5cXG4uYWN0aXZlLXNsaWRlLWltYWdlcy1zdGFjayBpbWd7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAyMHB4IDcwcHggLTEwcHggcmdiYSgxMCwgMzIsIDcwLCAwLjMpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCk7XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtZmlsdGVyIDMwMG1zIGN1YmljLWJlemllciguMjE1LCAuNjEsIC4zNTUsIDEpO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC1maWx0ZXIgMzAwbXMgY3ViaWMtYmV6aWVyKC4yMTUsIC42MSwgLjM1NSwgMSk7XFxuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMzAwbXMgY3ViaWMtYmV6aWVyKC4yMTUsIC42MSwgLjM1NSwgMSk7XFxuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMzAwbXMgY3ViaWMtYmV6aWVyKC4yMTUsIC42MSwgLjM1NSwgMSksIC13ZWJraXQtZmlsdGVyIDMwMG1zIGN1YmljLWJlemllciguMjE1LCAuNjEsIC4zNTUsIDEpO1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbi5pbWFnZS1zdGFjay1pdGVtLTF7XFxuICBncmlkLWNvbHVtbjogMSAvICAyO1xcbiAgZ3JpZC1yb3c6IDE7IC8qIG11c3QgYmUgb24gdGhlIHNhbWUgcm93IGFzIHRoZSBvdGhlciBpbWFnZSovXFxuICBwYWRkaW5nLXRvcDogNDAlOyAgLyp0aGlzIHB1c2hlcyB0aGUgaW1hZ2UgZG93biwgYW5kIGtlZXBzIGl0IHByb3BvcnRpb25hbCBhcyBpdCByZXNpemVzKi9cXG4gIHBhZGRpbmctbGVmdDogNjAlOyAgLyp0aGlzIHB1c2hlcyB0aGUgaW1hZ2UgZG93biwgYW5kIGtlZXBzIGl0IHByb3BvcnRpb25hbCBhcyBpdCByZXNpemVzKi9cXG4gIHotaW5kZXg6IDI7IC8qIG1ha2UgdGhpcyBpbWFnZSByZW5kZXIgb24gdG9wIG9mIHRoZSBib3R0b20qL1xcbn1cXG5cXG4uaW1hZ2Utc3RhY2staXRlbS0ye1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgZ3JpZC1yb3c6IDE7IC8qIG1ha2UgdGhpcyBpbWFnZSBiZSBvbiB0aGUgc2FtZSByb3cqL1xcbiAgcGFkZGluZy10b3A6IDIwJTsgIC8qdGhpcyBwdXNoZXMgdGhlIGltYWdlIGRvd24sIGFuZCBrZWVwcyBpdCBwcm9wb3J0aW9uYWwgYXMgaXQgcmVzaXplcyovXFxuICB6LWluZGV4OiAxOyAvKiBtYWtlIHRoaXMgaW1hZ2UgcmVuZGVyIG9uIHRvcCBvZiB0aGUgYm90dG9tKi9cXG59XFxuXFxuLmltYWdlLXN0YWNrLWl0ZW0tM3tcXG4gIGdyaWQtY29sdW1uOiAxIC8gODtcXG4gIGdyaWQtcm93OiAxOyAvKiBtYWtlIHRoaXMgaW1hZ2UgYmUgb24gdGhlIHNhbWUgcm93Ki9cXG4gIHBhZGRpbmctbGVmdDogNDAlOyAgLyp0aGlzIHB1c2hlcyB0aGUgaW1hZ2UgZG93biwgYW5kIGtlZXBzIGl0IHByb3BvcnRpb25hbCBhcyBpdCByZXNpemVzKi9cXG59XFxuXFxuLmFjdGl2ZS1zbGlkZSBidXR0b257XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiB2YXIoLS1lbGVtZW50LXBhZGRpbmcpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdGVydGlhcnktYmctY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkZXItZm9udC1zaXplKTtcXG59XFxuXFxuLmFjdGl2ZS1zbGlkZS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hcnJvdyB7XFxuICBjdXJzb3I6IHBvaW50ZXJcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=