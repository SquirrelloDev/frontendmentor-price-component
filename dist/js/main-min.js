"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(t="Object"===t&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var slider=document.querySelector("input[type=range]"),pageViews=document.querySelector(".component__page-views"),price=document.querySelector(".component__amount"),toggle=document.querySelector("#toggle"),pricesObj={pageViews:[10,50,100,500,1],prices:[8,12,16,24,36],discount:[]},update=function(e){for(var r=1;r<=pricesObj.pageViews.length;r++)r==slider.value&&(pageViews.textContent="".concat(pricesObj.pageViews[r-1]).concat(1!=pricesObj.pageViews[r-1]?"K":"M"," pageviews"),price.textContent="$"+parseFloat(e[r-1])+".00")};slider.addEventListener("change",function(){toggle.checked?update(pricesObj.discount):update(pricesObj.prices)}),toggle.addEventListener("click",function(){var e;toggle.checked?(e=pricesObj.prices.map(function(e){return.75*e}),pricesObj.discount=_toConsumableArray(e),update(e)):update(pricesObj.prices)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic2xpZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFnZVZpZXdzIiwicHJpY2UiLCJ0b2dnbGUiLCJwcmljZXNPYmoiLCJwcmljZXMiLCJkaXNjb3VudCIsInVwZGF0ZSIsImFyciIsImkiLCJsZW5ndGgiLCJ2YWx1ZSIsInBhcnNlRmxvYXQiLCJjaGVja2VkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1hcCIsInRleHRDb250ZW50Il0sIm1hcHBpbmdzIjoiKytCQUFBLElBQU1BLE9BQVNDLFNBQVNDLGNBQWMscUJBQ2hDQyxVQUFZRixTQUFTQyxjQUFjLDBCQUNuQ0UsTUFBUUgsU0FBU0MsY0FBYyxzQkFDL0JHLE9BQVNKLFNBQVNDLGNBQWMsV0FDaENJLFVBQVksQ0FDZEgsVUFBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksR0FDMUJJLE9BQVEsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQ3BCQyxTQUFVLElBR1JDLE9BQVMsU0FBQ0MsR0FDWixJQUFLLElBQUlDLEVBQUksRUFBR0EsR0FBS0wsVUFBVUgsVUFBVVMsT0FBUUQsSUFDMUNBLEdBQUtYLE9BQU9hLFFBWGpCVixVQUFZRixZQUFaRSxHQUFBQSxPQUFtQ0csVUFBQUgsVUFBQVEsRUFBQSxJQUFuQ1IsT0FBTixHQUFBRyxVQUFBSCxVQUFBUSxFQUFBLEdBQUEsSUFBQSxJQUFNUixjQUNRRixNQUFBQSxZQUFTQyxJQUFjWSxXQUFBSixFQUFBQyxFQUF2QixJQUFTVCxRQUluQkssT0FBQUEsaUJBQVEsU0FGTSxXQUdkQyxPQUFRTyxRQUFFTixPQUFBSCxVQUFBRSxVQUFBQyxPQUFBSCxVQUFBQyxVQWdCZEYsT0FBT1csaUJBQWlCLFFBQVMsV0FaN0IsSUFHUVIsRUFISEgsT0FBS1UsU0FHRlAsRUFBQUYsVUFBQUMsT0FBQVUsSUFBQSxTQUFBYixHQUFBLE1BQUEsSUFBQUEsSUFDQUQsVUFBVWUsU0FBVmYsbUJBQUFLLEdBQ0FKLE9BQU1jLElBaUJWVCxPQUFPSCxVQUFVQyIsImZpbGUiOiJtYWluLW1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9cmFuZ2VdJyk7XHJcbmNvbnN0IHBhZ2VWaWV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wb25lbnRfX3BhZ2Utdmlld3MnKTtcclxuY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcG9uZW50X19hbW91bnQnKTtcclxuY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZ2dsZScpO1xyXG5jb25zdCBwcmljZXNPYmogPSB7XHJcbiAgICBwYWdlVmlld3M6IFsxMCw1MCwxMDAsNTAwLDFdLFxyXG4gICAgcHJpY2VzOiBbOCwxMiwxNiwyNCwzNl0sXHJcbiAgICBkaXNjb3VudDogW11cclxufVxyXG5cclxuY29uc3QgdXBkYXRlID0gKGFycikgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcHJpY2VzT2JqLnBhZ2VWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKGkgPT0gc2xpZGVyLnZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gcGFnZVZpZXdzLnRleHRDb250ZW50ID0gYCR7cHJpY2VzT2JqLnBhZ2VWaWV3c1tpLTFdfSBwYWdldmlld3NgO1xyXG4gICAgICAgICAgICBwYWdlVmlld3MudGV4dENvbnRlbnQgPSBgJHtwcmljZXNPYmoucGFnZVZpZXdzW2ktMV19JHtwcmljZXNPYmoucGFnZVZpZXdzW2ktMV0gIT0gMSA/ICdLJzonTSd9IHBhZ2V2aWV3c2A7XHJcbiAgICAgICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gYCRgICsgcGFyc2VGbG9hdChhcnJbaS0xXSkgKyBgLjAwYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpPT4ge1xyXG4gICAgdG9nZ2xlLmNoZWNrZWQgPyB1cGRhdGUocHJpY2VzT2JqLmRpc2NvdW50KSA6IHVwZGF0ZShwcmljZXNPYmoucHJpY2VzKTtcclxufSk7XHJcbnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT5cclxue1xyXG4gICAgaWYodG9nZ2xlLmNoZWNrZWQpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGRpc2NvdW50ID0gcHJpY2VzT2JqLnByaWNlcy5tYXAocHJpY2UgPT4gcHJpY2UgKiAuNzUpXHJcbiAgICAgICAgcHJpY2VzT2JqLmRpc2NvdW50ID0gWy4uLmRpc2NvdW50XTtcclxuICAgICAgICB1cGRhdGUoZGlzY291bnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHVwZGF0ZShwcmljZXNPYmoucHJpY2VzKTtcclxuICAgIH1cclxufSlcclxuIl19