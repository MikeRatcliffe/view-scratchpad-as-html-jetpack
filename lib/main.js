'use strict';

const { Menuitem } = require('menuitems');
const tabs = require('sdk/tabs');

Menuitem({
  id: 'view-as-html-menuitem',
  menuid: 'sp-menu_executepopup',
  label: 'View As HTML',
  include: 'chrome://browser/content/scratchpad.xul',
  useChrome: true,
  onCommand: function(window) {
  	let { Scratchpad } = window;
  	let text = Scratchpad.selectedText || Scratchpad.getText();
    tabs.open({ url: 'data:text/html;charset=utf-8,' + encodeURIComponent(text) })
  }
});
