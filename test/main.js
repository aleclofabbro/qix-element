  require(['qix!templ.html'], function(comp) {
    var target = document.body;
    ctrls = comp.spawn_into({}, target);
    ctrls.a('<b>aaa</b>');
    ctrls.b('<b>bbbb</b>');
    ctrls.c('<b>cccc</b>');
  });