(function() {
  'use strict';

  function id(v) {
    return v;
  };

  function safe_string(str) {
    return (str === null || str === void(0)) ? '' : String(str);
  }

  function prop_setter(prop, obj, val) {
    return obj[prop] = val;
  }

  function safe_string_prop_setter(prop, obj, str) {
    return obj[prop] = safe_string(str);
  }
  var html_setter = safe_string_prop_setter.bind(null, 'innerHTML');
  var text_setter = safe_string_prop_setter.bind(null, 'innerText');

  define('qix-elem', function(require, exports, module) {
    //fns
    exports.html_setter = html_setter;
    exports.text_setter = text_setter;
    //ctrls
    exports.html = html;
    exports.text = text;
    exports.content = content;

    function content(elem, binders, link) {
      return function(val) {
        var _as = link.get_attrs().as;
        return exports[_as + '_setter'](elem, val);
      }
    }

    function html(elem, binders, link) {
      return html_setter.bind(null, elem);
    }

    function text(elem, binders, link) {
      return text_setter.bind(null, elem);
    }
  });

})();