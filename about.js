(window.webpackJsonp=window.webpackJsonp||[]).push([[1,6,8],{22:function(e,t,n){"use strict";n.r(t),n.d(t,"teamData",(function(){return a}));var a=[{name:"Ludwig Ramsey",title:"Chairman",image:"./static/img/team/avatar1.jpg"},{name:"Denzil Bertie",title:"Vice Chairman",image:"./static/img/team/avatar1.jpg"},{name:"Ron Stanley",title:"Secretary",image:"./static/img/team/avatar1.jpg"},{name:"Alfred Graham",title:"Treasurer",image:"./static/img/team/avatar1.jpg"},{name:"Rita King",title:"Member",image:"./static/img/team/avatar1.jpg"},{name:"Beverley Powell",title:"Member",image:"./static/img/team/avatar1.jpg"},{name:"Dennis Mullins",title:"Member",image:"./static/img/team/avatar1.jpg"},{name:"Habib Kah",title:"Member",image:"./static/img/team/avatar1.jpg"},{name:"Mellisa Redhead",title:"Member",image:"./static/img/team/avatar1.jpg"},{name:"Keith Clarke",title:"Center Manager",image:"./static/img/team/avatar1.jpg"}]},39:function(e,t,n){var a=n(20),r=n(47);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},47:function(e,t,n){(t=n(21)(!1)).push([e.i,".about{\n  padding: 32px;\n  color: var(--secondary-text-color);\n  display: flex;\n  letter-spacing: 1px;\n  font-family: 'sans-serif';\n}\n\n.team-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n\n\n",""]),e.exports=t},62:function(e,t,n){var a=n(20),r=n(63);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},63:function(e,t,n){(t=n(21)(!1)).push([e.i,'.profile-card {\n  position: relative;\n  padding-right: 15px;\n  padding-left: 15px;\n  min-width: 240px;\n}\n\n.our-team {\n  padding: 30px 0 40px;\n  margin-bottom: 30px;\n  background-color: var(--card-bg-color);\n  text-align: center;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid var(--secondary-bg-color);\n}\n\n.our-team .picture {\n  display: inline-block;\n  height: 130px;\n  width: 130px;\n  margin-bottom: 50px;\n  z-index: 1;\n  position: relative;\n}\n\n.our-team .picture::before {\n  content: "";\n  width: 100%;\n  height: 0;\n  border-radius: 50%;\n  background-color: var(--secondary-bg-color);\n  position: absolute;\n  bottom: 135%;\n  right: 0;\n  left: 0;\n  transform: scale(3);\n  transition: all 0.3s linear 0s;\n}\n\n.our-team:hover .picture::before {\n  height: 100%;\n}\n\n.our-team .picture::after {\n  content: "";\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: var(--secondary-bg-color);\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.our-team .picture img {\n  width: 100%;\n  height: auto;\n  border-radius: 50%;\n  transform: scale(1);\n  transition: all 0.9s ease 0s;\n}\n\n.our-team:hover .picture img {\n  box-shadow: 0 0 0 14px var(--card-bg-color);\n  transform: scale(0.7);\n}\n\n.our-team .title {\n  display: block;\n  font-size: 15px;\n  color: var(--secondary-bg-color);\n  text-transform: capitalize;\n}\n\n.our-team .social {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  background-color: var(--secondary-bg-color);\n  position: absolute;\n  bottom: -100px;\n  left: 0;\n  transition: all 0.5s ease 0s;\n}\n\n.our-team:hover .social {\n  bottom: 0;\n}\n\n.our-team .social li {\n  display: inline-block;\n}\n\n.our-team .social li a {\n  display: block;\n  padding: 10px;\n  font-size: 17px;\n  color: var(--card-bg-color);\n  transition: all 0.3s ease 0s;\n  text-decoration: none;\n}\n\n.our-team .social li a:hover {\n  color: var(--card-bg-color);\n  background-color: var(--secondary-bg-color);\n}\n',""]),e.exports=t},7:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(0),r=n.n(a),i=n(2);function o(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  position: fixed;\ntop: 64px;\nright: 4px;\nz-index: 2;\n"]);return o=function(){return e},e}var l=Object(i.a)("img").attrs((function(){return{className:"fixed-img"}}))(o());function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function m(e){var t=e.url,n=e.onImageLoaded,i=c(Object(a.useState)(0),2),o=i[0],s=i[1];var m={minWidth:o};return r.a.createElement("div",{className:"img-background",style:m},r.a.createElement(l,{onLoad:function(e){var t=e.target;s(t.offsetWidth),n&&n()},src:t}))}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function f(e){var t=e.children,n=e.url,i=u(Object(a.useState)(!1),2),o=i[0],l=i[1];return r.a.createElement(r.a.Fragment,null,o?t:null,r.a.createElement(m,{url:n,onImageLoaded:function(){l(!0)}}))}l.displayName="StyleImg";n(39);var p=n(22);n(62);function g(e){var t=e.name,n=e.title,a=e.image;e.twitter,e.fb,e.linkedin;return r.a.createElement("div",{className:"profile-card"},r.a.createElement("div",{className:"our-team"},r.a.createElement("div",{className:"picture"},r.a.createElement("img",{className:"img-fluid",src:a})),r.a.createElement("div",{className:"team-content"},r.a.createElement("h3",{className:"name"},t),r.a.createElement("h4",{className:"title"},n)),r.a.createElement("ul",{className:"social"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-facebook-f"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-twitter"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"}," ",r.a.createElement("i",{className:"fab fa-linkedin"}))))))}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(){var e=p.teamData.map((function(e,t){return r.a.createElement(g,b({key:t},e))}));return r.a.createElement("div",{className:"about"},r.a.createElement(f,{url:"./static/img/drums.png"},r.a.createElement("div",{className:"about-contents"},r.a.createElement("div",{className:"team-container"},e))))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC9jb250ZW50LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Fib3V0L3N0eWxlLmNzcz9iNWIzIiwid2VicGFjazovLy8uL3BhZ2VzL2Fib3V0L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGVDYXJkL3N0eWxlLmNzcz9lNDUwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZmlsZUNhcmQvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL2Fic3RyYWN0L3VpL0ZpeGVkSW1hZ2Uvc3R5bGVkRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hYnN0cmFjdC91aS9GaXhlZEltYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fic3RyYWN0L3VpL0ZpeGVkSW1hZ2UvRml4ZWRJbWFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGVDYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Fib3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbInRlYW1EYXRhIiwibmFtZSIsInRpdGxlIiwiaW1hZ2UiLCJhcGkiLCJjb250ZW50IiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJtb2R1bGUiLCJpIiwib3B0aW9ucyIsImV4cG9ydHMiLCJsb2NhbHMiLCJfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18iLCJwdXNoIiwiU3R5bGVJbWciLCJzdHlsZWQiLCJhdHRycyIsImNsYXNzTmFtZSIsIkZpeGVkSW1hZ2UiLCJwcm9wcyIsInVybCIsIm9uSW1hZ2VMb2FkZWQiLCJ1c2VTdGF0ZSIsIndpZHRoIiwic2V0V2lkdGgiLCJjb250YWluZXJTdHlsZSIsIm1pbldpZHRoIiwic3R5bGUiLCJvbkxvYWQiLCJpbWciLCJ0YXJnZXQiLCJvZmZzZXRXaWR0aCIsInNyYyIsIkZpeGVkSW1hZ2VDb250YWluZXIiLCJjaGlsZHJlbiIsInJlbmRlckNvbnRlbnQiLCJzZXRSZW5kZXJDb250ZW50IiwiZGlzcGxheU5hbWUiLCJQcm9maWxlQ2FyZCIsInR3aXR0ZXIiLCJmYiIsImxpbmtlZGluIiwiaHJlZiIsIkFib3V0IiwidGVhbVVJIiwibWFwIiwicHJvZmlsZSIsImluZGV4Iiwia2V5Il0sIm1hcHBpbmdzIjoiNkZBQ0Esb0RBQU1BLEVBQVcsQ0FDZixDQUNFQyxLQUFNLGdCQUNOQyxNQUFPLFdBQ1BDLE1BQU8saUNBRVQsQ0FDRUYsS0FBTSxnQkFDTkMsTUFBTyxnQkFDUEMsTUFBTyxpQ0FFVCxDQUNFRixLQUFNLGNBQ05DLE1BQU8sWUFDUEMsTUFBTyxpQ0FFVCxDQUNFRixLQUFNLGdCQUNOQyxNQUFPLFlBQ1BDLE1BQU8saUNBRVQsQ0FDRUYsS0FBTSxZQUNOQyxNQUFPLFNBQ1BDLE1BQU8saUNBRVQsQ0FDRUYsS0FBTSxrQkFDTkMsTUFBTyxTQUNQQyxNQUFPLGlDQUVULENBQ0VGLEtBQU0saUJBQ05DLE1BQU8sU0FDUEMsTUFBTyxpQ0FFVCxDQUNFRixLQUFNLFlBQ05DLE1BQU8sU0FDUEMsTUFBTyxpQ0FFVCxDQUNFRixLQUFNLGtCQUNOQyxNQUFPLFNBQ1BDLE1BQU8saUNBRVQsQ0FDRUYsS0FBTSxlQUNOQyxNQUFPLGlCQUNQQyxNQUFPLG1DLG1CQ2xEWCxJQUFJQyxFQUFNLEVBQVEsSUFDRkMsRUFBVSxFQUFRLElBSUMsaUJBRnZCQSxFQUFVQSxFQUFRQyxXQUFhRCxFQUFRRSxRQUFVRixLQUcvQ0EsRUFBVSxDQUFDLENBQUNHLEVBQU9DLEVBQUlKLEVBQVMsTUFHOUMsSUFBSUssRUFBVSxDQUVkLE9BQWlCLE9BQ2pCLFdBQW9CLEdBRVBOLEVBQUlDLEVBQVNLLEdBSTFCRixFQUFPRyxRQUFVTixFQUFRTyxRQUFVLEksb0JDaEJuQ0QsRUFEa0MsRUFBUSxHQUNoQ0UsRUFBNEIsSUFFOUJDLEtBQUssQ0FBQ04sRUFBT0MsRUFBSSxvTkFBcU4sS0FFOU9ELEVBQU9HLFFBQVVBLEcsbUJDTmpCLElBQUlQLEVBQU0sRUFBUSxJQUNGQyxFQUFVLEVBQVEsSUFJQyxpQkFGdkJBLEVBQVVBLEVBQVFDLFdBQWFELEVBQVFFLFFBQVVGLEtBRy9DQSxFQUFVLENBQUMsQ0FBQ0csRUFBT0MsRUFBSUosRUFBUyxNQUc5QyxJQUFJSyxFQUFVLENBRWQsT0FBaUIsT0FDakIsV0FBb0IsR0FFUE4sRUFBSUMsRUFBU0ssR0FJMUJGLEVBQU9HLFFBQVVOLEVBQVFPLFFBQVUsSSxvQkNoQm5DRCxFQURrQyxFQUFRLEdBQ2hDRSxFQUE0QixJQUU5QkMsS0FBSyxDQUFDTixFQUFPQyxFQUFJLDYrREFBay9ELEtBRTNnRUQsRUFBT0csUUFBVUEsRywrVUNHVixJQUFNSSxFQUFXQyxZQUFPLE9BQU9DLE9BQU0saUJBQU8sQ0FDbERDLFVBQVcsZUFEWUYsQ0FBSCxLLHU4QkNOTixTQUFTRyxFQUFXQyxHQUFNLElBQ2pDQyxFQUFzQkQsRUFBdEJDLElBQUtDLEVBQWlCRixFQUFqQkUsY0FENEIsSUFFZEMsbUJBQVMsR0FGSyxHQUVqQ0MsRUFGaUMsS0FFMUJDLEVBRjBCLEtBVXhDLElBQU1DLEVBQWlCLENBQ3RCQyxTQUFVSCxHQUdYLE9BRUEseUJBQUtOLFVBQVUsaUJBQWlCVSxNQUFPRixHQUN0QyxrQkFBQ1gsRUFBRCxDQUFXYyxPQWJaLFlBQW9DLElBQU5DLEVBQU0sRUFBYkMsT0FDdEJOLEVBQVNLLEVBQUlFLGFBQ2JWLEdBQWlCQSxLQVdnQlcsSUFBS1osSyx1OEJDaEJ6QixTQUFTYSxFQUFvQmQsR0FBTSxJQUMxQ2UsRUFBaUJmLEVBQWpCZSxTQUFVZCxFQUFPRCxFQUFQQyxJQURnQyxJQUVQRSxvQkFBUyxHQUZGLEdBRTFDYSxFQUYwQyxLQUUzQkMsRUFGMkIsS0FRakQsT0FDQyxvQ0FDRUQsRUFBZ0JELEVBQVcsS0FDNUIsa0JBQUNoQixFQUFELENBQVlFLElBQUtBLEVBQUtDLGNBUHhCLFdBQ0NlLEdBQWlCLE9GU25CdEIsRUFBU3VCLFlBQWMsVyx3QkdkUixTQUFTQyxFQUFZbkIsR0FBTSxJQUVqQ25CLEVBQTZDbUIsRUFBN0NuQixLQUFNQyxFQUF1Q2tCLEVBQXZDbEIsTUFBT0MsRUFBZ0NpQixFQUFoQ2pCLE1BQWdDaUIsRUFBekJvQixRQUF5QnBCLEVBQWhCcUIsR0FBZ0JyQixFQUFac0IsU0FDeEMsT0FDRSx5QkFBS3hCLFVBQVUsZ0JBQ2IseUJBQUtBLFVBQVUsWUFDYix5QkFBS0EsVUFBVSxXQUNiLHlCQUFLQSxVQUFVLFlBQVllLElBQUs5QixLQUVsQyx5QkFBS2UsVUFBVSxnQkFDYix3QkFBSUEsVUFBVSxRQUFRakIsR0FDdEIsd0JBQUlpQixVQUFVLFNBQVNoQixJQUV6Qix3QkFBSWdCLFVBQVUsVUFDWiw0QkFBSSx1QkFBR3lCLEtBQUssS0FBSyx1QkFBR3pCLFVBQVUsd0JBQzlCLDRCQUFJLHVCQUFHeUIsS0FBSyxLQUFLLHVCQUFHekIsVUFBVSxxQkFDOUIsNEJBQUksdUJBQUd5QixLQUFLLEtBQVIsSUFBYyx1QkFBR3pCLFVBQVUseUIsK01DZDFCLFNBQVMwQixJQUN0QixJQUFNQyxFQUFTN0MsV0FBUzhDLEtBQUksU0FBQ0MsRUFBU0MsR0FDcEMsT0FBTyxrQkFBQ1QsRUFBRCxHQUFhVSxJQUFLRCxHQUFXRCxPQUd2QyxPQUNBLHlCQUFLN0IsVUFBVSxTQUNkLGtCQUFDZ0IsRUFBRCxDQUFxQmIsSUFBSSwwQkFDeEIseUJBQUtILFVBQVUsa0JBQ1YseUJBQUtBLFVBQVUsa0JBQ2QyQiIsImZpbGUiOiJhYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgdGVhbURhdGEgPSBbXG4gIHtcbiAgICBuYW1lOiAnTHVkd2lnIFJhbXNleScsXG4gICAgdGl0bGU6ICdDaGFpcm1hbicsXG4gICAgaW1hZ2U6ICcuL3N0YXRpYy9pbWcvdGVhbS9hdmF0YXIxLmpwZydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdEZW56aWwgQmVydGllJyxcbiAgICB0aXRsZTogJ1ZpY2UgQ2hhaXJtYW4nLFxuICAgIGltYWdlOiAnLi9zdGF0aWMvaW1nL3RlYW0vYXZhdGFyMS5qcGcnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnUm9uIFN0YW5sZXknLFxuICAgIHRpdGxlOiAnU2VjcmV0YXJ5JyxcbiAgICBpbWFnZTogJy4vc3RhdGljL2ltZy90ZWFtL2F2YXRhcjEuanBnJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ0FsZnJlZCBHcmFoYW0nLFxuICAgIHRpdGxlOiAnVHJlYXN1cmVyJyxcbiAgICBpbWFnZTogJy4vc3RhdGljL2ltZy90ZWFtL2F2YXRhcjEuanBnJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ1JpdGEgS2luZycsXG4gICAgdGl0bGU6ICdNZW1iZXInLFxuICAgIGltYWdlOiAnLi9zdGF0aWMvaW1nL3RlYW0vYXZhdGFyMS5qcGcnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQmV2ZXJsZXkgUG93ZWxsJyxcbiAgICB0aXRsZTogJ01lbWJlcicsXG4gICAgaW1hZ2U6ICcuL3N0YXRpYy9pbWcvdGVhbS9hdmF0YXIxLmpwZydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdEZW5uaXMgTXVsbGlucycsXG4gICAgdGl0bGU6ICdNZW1iZXInLFxuICAgIGltYWdlOiAnLi9zdGF0aWMvaW1nL3RlYW0vYXZhdGFyMS5qcGcnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnSGFiaWIgS2FoJyxcbiAgICB0aXRsZTogJ01lbWJlcicsXG4gICAgaW1hZ2U6ICcuL3N0YXRpYy9pbWcvdGVhbS9hdmF0YXIxLmpwZydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdNZWxsaXNhIFJlZGhlYWQnLFxuICAgIHRpdGxlOiAnTWVtYmVyJyxcbiAgICBpbWFnZTogJy4vc3RhdGljL2ltZy90ZWFtL2F2YXRhcjEuanBnJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ0tlaXRoIENsYXJrZScsXG4gICAgdGl0bGU6ICdDZW50ZXIgTWFuYWdlcicsXG4gICAgaW1hZ2U6ICcuL3N0YXRpYy9pbWcvdGVhbS9hdmF0YXIxLmpwZydcbiAgfVxuXTtcblxuXG5leHBvcnQge1xuICB0ZWFtRGF0YVxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYWJvdXR7XFxuICBwYWRkaW5nOiAzMnB4O1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgZm9udC1mYW1pbHk6ICdzYW5zLXNlcmlmJztcXG59XFxuXFxuLnRlYW0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcblxcblxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2ZpbGUtY2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgbWluLXdpZHRoOiAyNDBweDtcXG59XFxuXFxuLm91ci10ZWFtIHtcXG4gIHBhZGRpbmc6IDMwcHggMCA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmctY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XFxufVxcblxcbi5vdXItdGVhbSAucGljdHVyZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgd2lkdGg6IDEzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5vdXItdGVhbSAucGljdHVyZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxMzUlO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgzKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcXG59XFxuXFxuLm91ci10ZWFtOmhvdmVyIC5waWN0dXJlOjpiZWZvcmUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ub3VyLXRlYW0gLnBpY3R1cmU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ub3VyLXRlYW0gLnBpY3R1cmUgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjlzIGVhc2UgMHM7XFxufVxcblxcbi5vdXItdGVhbTpob3ZlciAucGljdHVyZSBpbWcge1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMTRweCB2YXIoLS1jYXJkLWJnLWNvbG9yKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG59XFxuXFxuLm91ci10ZWFtIC50aXRsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5vdXItdGVhbSAuc29jaWFsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0xMDBweDtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xcbn1cXG5cXG4ub3VyLXRlYW06aG92ZXIgLnNvY2lhbCB7XFxuICBib3R0b206IDA7XFxufVxcblxcbi5vdXItdGVhbSAuc29jaWFsIGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLm91ci10ZWFtIC5zb2NpYWwgbGkgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBjb2xvcjogdmFyKC0tY2FyZC1iZy1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ub3VyLXRlYW0gLnNvY2lhbCBsaSBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jYXJkLWJnLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvKlxucG9zaXRpb246IGZpeGVkO1xudG9wOiA2NHB4O1xucmlnaHQ6IDRweDtcbnotaW5kZXg6IDI7Ki9cblxuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgU3R5bGVJbWcgPSBzdHlsZWQoJ2ltZycpLmF0dHJzKCgpID0+ICh7XG5cdGNsYXNzTmFtZTogJ2ZpeGVkLWltZydcbn0pKWBcbiAgcG9zaXRpb246IGZpeGVkO1xudG9wOiA2NHB4O1xucmlnaHQ6IDRweDtcbnotaW5kZXg6IDI7XG5gO1xuXG5TdHlsZUltZy5kaXNwbGF5TmFtZSA9ICdTdHlsZUltZyc7IiwiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U3R5bGVJbWd9IGZyb20gXCIuL3N0eWxlZEVsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRml4ZWRJbWFnZShwcm9wcyl7XG5cdGNvbnN0IHt1cmwsIG9uSW1hZ2VMb2FkZWR9ID0gcHJvcHM7XG5cdGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoMCk7XG5cblx0ZnVuY3Rpb24gc2V0RGltZW5zaW9uKHt0YXJnZXQ6aW1nfSkge1xuXHRcdHNldFdpZHRoKGltZy5vZmZzZXRXaWR0aCk7XG5cdFx0b25JbWFnZUxvYWRlZCAmJiBvbkltYWdlTG9hZGVkKClcblxuXHR9XG5cblx0Y29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG5cdFx0bWluV2lkdGg6IHdpZHRoXG5cdH07XG5cblx0cmV0dXJuIChcblxuXHQ8ZGl2IGNsYXNzTmFtZT0naW1nLWJhY2tncm91bmQnIHN0eWxlPXtjb250YWluZXJTdHlsZX0+XG5cdFx0PFN0eWxlSW1nICBvbkxvYWQ9e3NldERpbWVuc2lvbn0gc3JjPXt1cmx9Lz5cblx0PC9kaXY+XG5cdClcbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRml4ZWRJbWFnZSBmcm9tIFwiLi9pbmRleFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpeGVkSW1hZ2VDb250YWluZXIocHJvcHMpe1xuXHRjb25zdCB7Y2hpbGRyZW4sIHVybH0gPSBwcm9wcztcblx0Y29uc3QgW3JlbmRlckNvbnRlbnQsIHNldFJlbmRlckNvbnRlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdGZ1bmN0aW9uIGltYWdlTG9hZGVkSGFuZGxlcigpe1xuXHRcdHNldFJlbmRlckNvbnRlbnQodHJ1ZSk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHR7cmVuZGVyQ29udGVudCA/IGNoaWxkcmVuIDogbnVsbH1cblx0XHRcdDxGaXhlZEltYWdlIHVybD17dXJsfSBvbkltYWdlTG9hZGVkPXtpbWFnZUxvYWRlZEhhbmRsZXJ9Lz5cblx0XHQ8Lz5cblx0KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vaHR0cHM6Ly9jb2RlcGVuLmlvL0ZyYW5raWVEb29kaWUvcGVuL05PSnBWWFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZUNhcmQocHJvcHMpe1xuXG4gIGNvbnN0IHtuYW1lLCB0aXRsZSwgaW1hZ2UsIHR3aXR0ZXIsIGZiLCBsaW5rZWRpbn0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtY2FyZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXItdGVhbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpY3R1cmVcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17aW1hZ2V9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1jb250ZW50XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj57bmFtZX08L2gzPlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNvY2lhbFwiPlxuICAgICAgICAgIDxsaT48YSBocmVmPScjJyA+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIj48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9JyMnID48aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlclwiPjwvaT48L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgaHJlZj0nIycgPiA8aSBjbGFzc05hbWU9XCJmYWIgZmEtbGlua2VkaW5cIj48L2k+PC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxuXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGaXhlZEltYWdlQ29udGFpbmVyIGZyb20gJ2Fic3RyYWN0L3VpL0ZpeGVkSW1hZ2UvRml4ZWRJbWFnZUNvbnRhaW5lcidcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHt0ZWFtRGF0YX0gZnJvbSAnLi9jb250ZW50JztcbmltcG9ydCBQcm9maWxlQ2FyZCBmcm9tICdjb21wb25lbnRzL1Byb2ZpbGVDYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKXtcbiAgY29uc3QgdGVhbVVJID0gdGVhbURhdGEubWFwKChwcm9maWxlLCBpbmRleCk9PntcbiAgICByZXR1cm4gPFByb2ZpbGVDYXJkIGtleT17aW5kZXh9IHsuLi5wcm9maWxlfS8+XG4gIH0pO1xuXG5cdHJldHVybiAoXG5cdDxkaXYgY2xhc3NOYW1lPSdhYm91dCc+XG5cdFx0PEZpeGVkSW1hZ2VDb250YWluZXIgdXJsPVwiLi9zdGF0aWMvaW1nL2RydW1zLnBuZ1wiID5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhYm91dC1jb250ZW50cyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZWFtLWNvbnRhaW5lcic+XG4gICAgICAgIHt0ZWFtVUl9XG4gICAgICAgIDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9GaXhlZEltYWdlQ29udGFpbmVyPlxuXHQ8L2Rpdj5cblx0KVxufVxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=