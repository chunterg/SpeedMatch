

var options = {
	html: 'demo.html',
	time: 800
};

var framewroks = {
	'jQuery_2': {
		js: './lib/jquery.2.0.3.js',
		init:  function(window){
			window.el = window.$("#header");
			window.fn = fn;
		}
	},
	'zepto': {
		js: [
			'./lib/zepto.js',
		],
		init:  function(window){
			window.el = window.$("header");
			window.fn = fn;
		}
	},
  'appframework': {
    js: [
      './lib/appframework.min.js',
    ],
    init:  function(window){
      window.el = window.$("header");
      window.fn = fn;
    }
  }
};

var cases = {
	'文档载入': '-',
	'加载时运行':{
		zepto: '$(fn)',
		jQuery_2: '$(fn)',
    appframework: '$(fn)'
	},
	'选择器': '-',
	'#id': {
		zepto: '$("#id")',
		jQuery_2: '$("#id")',
    appframework: '$("#id")'
	},
	'div': {
		zepto: '$("div")',
		jQuery_2: '$("div")',
    appframework: '$("div")'
	},
	'.class': {
		zepto: '$(".class")',
		jQuery_2: '$(".class")',
    appframework: '$(".class")'
	},
	'div.class': {
		zepto: '$("div.class")',
		jQuery_2: '$("div.class")',
    appframework: '$("div.class")'
	},
	'div#id.class': {
		zepto: '$("div#id.class")',
		jQuery_2: '$("div#id.class")',
    appframework: '$("div#id.class")'
	},
	'div > div': {
		zepto: '$("div > div")',
		jQuery_2: '$("div > div")',
    appframework: '$("div > div")'
	},
	'div:first-child': {
		zepto: '$("div:first-child")',
		jQuery_2: '$("div:first-child")',
    appframework: '$("div:first-child")'
	},
	'input data-src="data"':{
		zepto: '$("input[data-src=data]")',
		jQuery_2: '$("input[data-src=data]")',
    appframework: '$("input[data-src=data]")'
	},
	'事件':'-',
	'事件 - 添加':{
		zepto: 'el.on("click", function(e){})',
		jQuery_2: 'el.on("click", function(e){})',
    appframework: 'el.on("click", function(e){})'
	},
	'事件 - 触发':{
		zepto: 'el.trigger("click")',
		jQuery_2: 'el.trigger("click")',
    appframework: 'el.trigger("click")'
	},
	'事件 - 删除':{
		zepto: 'el.unbind("click")',
		jQuery_2: 'el.unbind("click")',
    appframework: 'el.unbind("click")'
	},
	'事件 - 单一':{
		zepto: 'el.one("click", function(e){})',
		jQuery_2: 'el.one("click", function(e){})',
    appframework: 'el.one("click", function(e){})'
	},
	'属性':'-',
	'属性 - 获取':{
		zepto: 'el.attr("name")',
		jQuery_2: 'el.attr("name")',
    appframework: 'el.attr("name")'
	},
	'属性 - 设置':{
		zepto: 'el.attr("name", "1")',
		jQuery_2: 'el.attr("name", "1")',
    appframework: 'el.attr("name", "1")'
	},
	'样式 - 取得':{
		zepto: 'el.css("background-color")',
		jQuery_2: 'el.css("background-color")',
    appframework: 'el.css("background-color")'
	},
	'样式 - 设置':{
		zepto: 'el.css("background-color", "green")',
		jQuery_2: 'el.css("background-color", "green")',
    appframework: 'el.css("background-color", "green")'
	},
	'类名 - 添加':{
		zepto: 'el.addClass("g")',
		jQuery_2: 'el.addClass("g")',
    appframework: 'el.addClass("g")'
	},
	'类名 - 删除类':{
		zepto: 'el.removeClass("g")',
		jQuery_2: 'el.removeClass("g")',
    appframework: 'el.removeClass("g")'
	},
	'节点 - 插入':{
		zepto: 'el.append("<br>")',
		jQuery_2: 'el.append("<br>")',
    appframework: 'el.append("<br>")'
	},
	'位置 - 计算':{
		zepto: 'el.position()',
		jQuery_2: 'el.position()',
    appframework: 'el.position()'
	},
	'位置 - 设置':{
		zepto: 'el.position(3,4)',
		jQuery_2: 'el.position(3,4)',
    appframework: 'el.position(3,4)'
	},
	'工具函数': '-',
	'Object - 拷贝': {
		zepto: '$.extend({a:1}, {b:2})',
		jQuery_2: '$.extend({a:1}, {b:2})',
    appframework: '$.extend({a:1}, {b:2})'
	},
	'Object - 遍历':{
		zepto: '$.each({a:1},  function(i, n){fn(n)})',
		jQuery_2: '$.each({a:1}, function(i, n){fn(n)})',
    appframework: '$.each({a:1}, function(i, n){fn(n)})'
	},
	'Object - 类型':{
		zepto: '$.type(3)',
		jQuery_2: '$.type(3)',
    appframework: '$.type(3)'
	},
	'Array - 遍历':{
		zepto: '[2,3].forEach(fn)',
		jQuery_2: '$.each([2,3], function(i, n){fn(n)})',
    appframework: '$.each([2,3], function(i, n){fn(n)})'
	},
	'Array - 数组判断':{
		zepto: '$.isArray([])',
		jQuery_2: '$.isArray([])',
    appframework: '$.isArray([])'
	},
	'Array - 过滤':{
		zepto: '[2,3].filter(function(v){return v > 2;})',
		jQuery_2: '$.grep([2,3], function(v){return v > 2;})',
    appframework: '$.grep([2,3], function(v){return v > 2;})'
	},
	'Array - 匹配':{
		zepto: '$.map([2,3], function(v){return v * v;})',
		jQuery_2: '$.map([2,3], function(v){return v * v;})',
    appframework: '$.map([2,3], function(v){return v * v;})'
	},
	'Array - 查找':{
		zepto: '$.inArray(3, [2,3])',
		jQuery_2: '$.inArray(3, [2,3])',
    appframework: '$.inArray(3, [2,3])'
	},
	'Function - 作用域绑定':{
		zepto: '$.proxy(fn, this)',
		jQuery_2: '$.proxy(fn, this)',
    appframework: '$.proxy(fn, this)'
	},
	'Function - 函数判断':{
		zepto: '$.isFunction(function(){})',
		jQuery_2: '$.isFunction(function(){})',
    appframework: '$.isFunction(function(){})'
	},
	'String - trim':{
		zepto: '$.trim(" s ")',
		jQuery_2: '$.trim(" s ")',
    appframework: '$.trim(" s ")'
	}

};




function fn(){

}


initSpeedMatch(framewroks, cases, options   );




