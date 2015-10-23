(function() {
  'use strict';
  define('qix/elem', function(require, exports, module) {
    function id(v) {
      return v;
    };

    exports.html = html;

    function html(elem, binders, link) {
      return function(html) {
        html = (html === null || html === void(0)) ? '' : String(html);
        elem.innerHTML = String(html);
      }
    }

    exports.text = text;

    function text(elem, binders, link) {
      return function(text) {
        text = (text === null || text === void(0)) ? '' : String(text);
        elem.innerText = String(text);
      }
    }

  });
})();