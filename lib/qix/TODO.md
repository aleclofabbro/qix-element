#TODO

+ `qix.control(elem, name, controller/setAttribute/path)` usare `make_ctrl_def` e `bind_controller`
+ ~~prova a trasformare i `forEach` in `reduce`~~
+ ~~testare e capire bene come giocano i `require()` local (relativo al component-path) e/o global .. (ora sono solo global)~~
+ ~~ridurre in fn + semplici `bind_controllers`~~
+ ~~eliminare `root_elems` (gli array) fare in modo che ci sia un holder sia per il master che per il clone in fase di instanziazione .. forse utilizzando [`<template>`](https://developer.mozilla.org/it/docs/Web/HTML/Element/template) ? .. (ma forse no .. infatti è utile perché quando si trova sparato nell html non viene renderizzato, in più [non è completamente supportato](http://caniuse.com/#feat=template))~~ **mantenuti gli array, perché tanto non ci può essere un holder esterno dopo il binding: l'holder è il parent nel componente superiore.**
+ link
  + ~~`attrs()` overload per single-getter e setter : `get_ctrl_attributes(ctrl_name, elem [, name [, val] ] )~~` 
  + qix traverse (find, all, ...)
  + qix events
    + lifecycle (no recycle a causa dei hooks che modificano localmente) 

##!!
+ forse con il `comp-seed!` loader si possono eliminare gli hook `locali` e implementare anche il `recycle` ...  
pensarci su ...   
intanto no hooks

##NODO
+ ~~componenti qix si creano solo da require.  
non compilare dinamicamente un elemento, bensì averci pronti i qix relativi e spawnarli  
oppure fare elementi, appenderli e poi usare direttamente i controllers reqirabili (il path di un ctrl locale ad un componente è uguale a quello del componente stesso)~~ **fatto!! qix.make(component_seed)**

##Later
+ hooks (oppure !!`comp-seed!`)
  + master: chiamate un'unica volta al primo require prima che le sub dipendenze siano state risolte..
    + *master_text* in `make_qix` -> `master_text`  utile per «plugin» di parse/elab del template di testo
    + *master_elem* in `make_qix` -> `master_element` utile per «plugin» e modifiche globali dei componenti
  + instance: ad ogni spawn
    + *preprocess* in `spawn` -> `root_elems` per elaborazione locale del clone prima del processo di binding
    + *link* in `bind_controllers` -> `link` per ogni `qix_ctrl` per customizzazioni pre-factory (i.e. modifica ns-attrs..)
+ far funzionare source map 

