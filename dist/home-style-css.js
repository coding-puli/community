(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{42:function(e,n,i){var t=i(20),r=i(54);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};t(r,o);e.exports=r.locals||{}},54:function(e,n,i){(n=i(21)(!1)).push([e.i,"\n\n.slider {\n  margin-left: 32px;\n  margin-right: 32px;\n  position: relative;\n}\n\n.active-slide {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-left: 60px;\n  margin-right: 60px;\n}\n\n.active-slide-main-image{\n  position: relative;\n  width: 440px;\n  margin-left: 60px;\n  z-index: 3;\n}\n\n.active-slide-images-stack{\n  position: relative;\n  margin-bottom: 32px;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n\n.active-slide-images-stack img{\n  border-style: solid;\n  border-width: 2px;\n  border-color: #fff;\n  border-radius: 5px;\n  background-color: #fff;\n  box-shadow: 0 20px 70px -10px rgba(10, 32, 70, 0.3);\n  -webkit-transform: perspective(1000px);\n  transform: perspective(1000px);\n  -webkit-transition: -webkit-filter 300ms cubic-bezier(.215, .61, .355, 1);\n  transition: -webkit-filter 300ms cubic-bezier(.215, .61, .355, 1);\n  transition: filter 300ms cubic-bezier(.215, .61, .355, 1);\n  transition: filter 300ms cubic-bezier(.215, .61, .355, 1), -webkit-filter 300ms cubic-bezier(.215, .61, .355, 1);\n  -o-object-fit: cover;\n}\n.image-stack-item-1{\n  grid-column: 1 /  2;\n  grid-row: 1; /* must be on the same row as the other image*/\n  padding-top: 40%;  /*this pushes the image down, and keeps it proportional as it resizes*/\n  padding-left: 60%;  /*this pushes the image down, and keeps it proportional as it resizes*/\n  z-index: 2; /* make this image render on top of the bottom*/\n}\n\n.image-stack-item-2{\n  grid-column: 1 / 4;\n  grid-row: 1; /* make this image be on the same row*/\n  padding-top: 20%;  /*this pushes the image down, and keeps it proportional as it resizes*/\n  z-index: 1; /* make this image render on top of the bottom*/\n}\n\n.image-stack-item-3{\n  grid-column: 1 / 8;\n  grid-row: 1; /* make this image be on the same row*/\n  padding-left: 40%;  /*this pushes the image down, and keeps it proportional as it resizes*/\n}\n\n.active-slide button{\n  margin-top: 60px;\n  border: 1px solid white;\n  border-radius: 4px;\n  padding: var(--element-padding);\n  background: var(--tertiary-bg-color);\n  color: white;\n  font-size: var(--header-font-size);\n}\n\n.active-slide-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n",""]),e.exports=n}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lL3N0eWxlLmNzcz81NmM1Iiwid2VicGFjazovLy8uL3BhZ2VzL2hvbWUvc3R5bGUuY3NzIl0sIm5hbWVzIjpbImFwaSIsImNvbnRlbnQiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIm1vZHVsZSIsImkiLCJvcHRpb25zIiwiZXhwb3J0cyIsImxvY2FscyIsIl9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyIsInB1c2giXSwibWFwcGluZ3MiOiI2RUFBQSxJQUFJQSxFQUFNLEVBQVEsSUFDRkMsRUFBVSxFQUFRLElBSUMsaUJBRnZCQSxFQUFVQSxFQUFRQyxXQUFhRCxFQUFRRSxRQUFVRixLQUcvQ0EsRUFBVSxDQUFDLENBQUNHLEVBQU9DLEVBQUlKLEVBQVMsTUFHOUMsSUFBSUssRUFBVSxDQUVkLE9BQWlCLE9BQ2pCLFdBQW9CLEdBRVBOLEVBQUlDLEVBQVNLLEdBSTFCRixFQUFPRyxRQUFVTixFQUFRTyxRQUFVLEksb0JDaEJuQ0QsRUFEa0MsRUFBUSxHQUNoQ0UsRUFBNEIsSUFFOUJDLEtBQUssQ0FBQ04sRUFBT0MsRUFBSSxzdUVBQXV1RSxLQUVod0VELEVBQU9HLFFBQVVBIiwiZmlsZSI6ImhvbWUtc3R5bGUtY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcbi5zbGlkZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDMycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hY3RpdmUtc2xpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogNjBweDtcXG4gIG1hcmdpbi1yaWdodDogNjBweDtcXG59XFxuXFxuLmFjdGl2ZS1zbGlkZS1tYWluLWltYWdle1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDQ0MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uYWN0aXZlLXNsaWRlLWltYWdlcy1zdGFja3tcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XFxufVxcblxcbi5hY3RpdmUtc2xpZGUtaW1hZ2VzLXN0YWNrIGltZ3tcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDIwcHggNzBweCAtMTBweCByZ2JhKDEwLCAzMiwgNzAsIDAuMyk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KTtcXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC1maWx0ZXIgMzAwbXMgY3ViaWMtYmV6aWVyKC4yMTUsIC42MSwgLjM1NSwgMSk7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LWZpbHRlciAzMDBtcyBjdWJpYy1iZXppZXIoLjIxNSwgLjYxLCAuMzU1LCAxKTtcXG4gIHRyYW5zaXRpb246IGZpbHRlciAzMDBtcyBjdWJpYy1iZXppZXIoLjIxNSwgLjYxLCAuMzU1LCAxKTtcXG4gIHRyYW5zaXRpb246IGZpbHRlciAzMDBtcyBjdWJpYy1iZXppZXIoLjIxNSwgLjYxLCAuMzU1LCAxKSwgLXdlYmtpdC1maWx0ZXIgMzAwbXMgY3ViaWMtYmV6aWVyKC4yMTUsIC42MSwgLjM1NSwgMSk7XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuLmltYWdlLXN0YWNrLWl0ZW0tMXtcXG4gIGdyaWQtY29sdW1uOiAxIC8gIDI7XFxuICBncmlkLXJvdzogMTsgLyogbXVzdCBiZSBvbiB0aGUgc2FtZSByb3cgYXMgdGhlIG90aGVyIGltYWdlKi9cXG4gIHBhZGRpbmctdG9wOiA0MCU7ICAvKnRoaXMgcHVzaGVzIHRoZSBpbWFnZSBkb3duLCBhbmQga2VlcHMgaXQgcHJvcG9ydGlvbmFsIGFzIGl0IHJlc2l6ZXMqL1xcbiAgcGFkZGluZy1sZWZ0OiA2MCU7ICAvKnRoaXMgcHVzaGVzIHRoZSBpbWFnZSBkb3duLCBhbmQga2VlcHMgaXQgcHJvcG9ydGlvbmFsIGFzIGl0IHJlc2l6ZXMqL1xcbiAgei1pbmRleDogMjsgLyogbWFrZSB0aGlzIGltYWdlIHJlbmRlciBvbiB0b3Agb2YgdGhlIGJvdHRvbSovXFxufVxcblxcbi5pbWFnZS1zdGFjay1pdGVtLTJ7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBncmlkLXJvdzogMTsgLyogbWFrZSB0aGlzIGltYWdlIGJlIG9uIHRoZSBzYW1lIHJvdyovXFxuICBwYWRkaW5nLXRvcDogMjAlOyAgLyp0aGlzIHB1c2hlcyB0aGUgaW1hZ2UgZG93biwgYW5kIGtlZXBzIGl0IHByb3BvcnRpb25hbCBhcyBpdCByZXNpemVzKi9cXG4gIHotaW5kZXg6IDE7IC8qIG1ha2UgdGhpcyBpbWFnZSByZW5kZXIgb24gdG9wIG9mIHRoZSBib3R0b20qL1xcbn1cXG5cXG4uaW1hZ2Utc3RhY2staXRlbS0ze1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA4O1xcbiAgZ3JpZC1yb3c6IDE7IC8qIG1ha2UgdGhpcyBpbWFnZSBiZSBvbiB0aGUgc2FtZSByb3cqL1xcbiAgcGFkZGluZy1sZWZ0OiA0MCU7ICAvKnRoaXMgcHVzaGVzIHRoZSBpbWFnZSBkb3duLCBhbmQga2VlcHMgaXQgcHJvcG9ydGlvbmFsIGFzIGl0IHJlc2l6ZXMqL1xcbn1cXG5cXG4uYWN0aXZlLXNsaWRlIGJ1dHRvbntcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IHZhcigtLWVsZW1lbnQtcGFkZGluZyk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXJ0aWFyeS1iZy1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IHZhcigtLWhlYWRlci1mb250LXNpemUpO1xcbn1cXG5cXG4uYWN0aXZlLXNsaWRlLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==