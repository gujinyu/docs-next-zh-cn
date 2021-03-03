(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{560:function(t,s,a){"use strict";a.r(s);var n=a(57),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"生命周期钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期钩子"}},[t._v("#")]),t._v(" 生命周期钩子")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("所有的生命周期钩子自动绑定 "),a("code",[t._v("this")]),t._v(" 上下文到实例中，因此你可以访问数据，对 property 和方法进行运算。这意味着"),a("strong",[t._v("你不能使用箭头函数来定义一个生命周期方法")]),t._v(" (例如 "),a("code",[t._v("created: () => this.fetchTodos()")]),t._v(") 。这是因为箭头函数绑定了父上下文，因此 "),a("code",[t._v("this")]),t._v(" 与你期待的组件实例不同，"),a("code",[t._v("this.fetchTodos")]),t._v(" 的行为未定义。")])]),t._v(" "),a("h2",{attrs:{id:"beforecreate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate"}},[t._v("#")]),t._v(" beforeCreate")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),a("code",[t._v("Function")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详细：")])]),t._v(" "),a("p",[t._v("在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参考：")]),a("RouterLink",{attrs:{to:"/guide/instance.html#生命周期图示"}},[t._v("生命周期图示")])],1)])]),t._v(" "),a("h2",{attrs:{id:"created"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#created"}},[t._v("#")]),t._v(" created")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),a("code",[t._v("Function")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详细：")])]),t._v(" "),a("p",[t._v("在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，"),a("code",[t._v("$el")]),t._v(" property 目前尚不可用。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参考：")]),a("RouterLink",{attrs:{to:"/guide/instance.html#生命周期图示"}},[t._v("生命周期图示")])],1)])]),t._v(" "),a("h2",{attrs:{id:"beforemount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforemount"}},[t._v("#")]),t._v(" beforeMount")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),a("code",[t._v("Function")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详细：")])]),t._v(" "),a("p",[t._v("在挂载开始之前被调用：相关的 "),a("code",[t._v("render")]),t._v(" 函数首次被调用。")]),t._v(" "),a("p",[a("strong",[t._v("该钩子在服务器端渲染期间不被调用。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参考：")]),a("RouterLink",{attrs:{to:"/guide/instance.html#生命周期图示"}},[t._v("生命周期图示")])],1)])]),t._v(" "),a("h2",{attrs:{id:"mounted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mounted"}},[t._v("#")]),t._v(" mounted")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),a("code",[t._v("Function")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详细：")])]),t._v(" "),a("p",[t._v("实例被挂载后调用，这时 "),a("code",[t._v("Vue.createApp({}).mount()")]),t._v(" 被新创建的 "),a("code",[t._v("vm.$el")]),t._v(" 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 "),a("code",[t._v("vm.$el")]),t._v(" 也在文档内。")]),t._v(" "),a("p",[t._v("注意 "),a("code",[t._v("mounted")]),t._v(" 不会保证所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以在 "),a("code",[t._v("mounted")]),t._v(" 内部使用 "),a("RouterLink",{attrs:{to:"/api/instance-methods.html#nexttick"}},[t._v("vm.$nextTick")]),t._v("：")],1),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 仅在渲染整个视图之后运行的代码")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("strong",[t._v("该钩子在服务器端渲染期间不被调用。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参考：")]),a("RouterLink",{attrs:{to:"/guide/instance.html#生命周期图示"}},[t._v("生命周期图示")])],1)])]),t._v(" "),a("h2",{attrs:{id:"beforeupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforeupdate"}},[t._v("#")]),t._v(" beforeUpdate")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),a("code",[t._v("Function")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详细：")])]),t._v(" "),a("p",[t._v("数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。")]),t._v(" "),a("p",[a("strong",[t._v("该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参考：")]),a("RouterLink",{attrs:{to:"/guide/instance.html#生命周期图示"}},[t._v("生命周期图示")])],1)])]),t._v(" "),a("h2",{attrs:{id:"updated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updated"}},[t._v("#")]),t._v(" updated")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),a("code",[t._v("Function")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详细：")])]),t._v(" "),a("p",[t._v("由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。")]),t._v(" "),a("p",[t._v("当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用"),a("RouterLink",{attrs:{to:"/api/options-data.html#computed"}},[t._v("计算属性")]),t._v("或"),a("RouterLink",{attrs:{to:"/api/options-data.html#watch"}},[t._v("侦听器")]),t._v("取而代之。")],1),t._v(" "),a("p",[t._v("注意，"),a("code",[t._v("updated")]),t._v(" "),a("strong",[t._v("不会")]),t._v("保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以在 "),a("code",[t._v("updated")]),t._v(" 里使用 "),a("RouterLink",{attrs:{to:"/api/instance-methods.html#nexttick"}},[t._v("vm.$nextTick")]),t._v("：")],1),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updated")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 仅在渲染整个视图之后运行的代码")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("strong",[t._v("该钩子在服务器端渲染期间不被调用。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参考：")]),a("RouterLink",{attrs:{to:"/guide/instance.html#生命周期图示"}},[t._v("生命周期图示")])],1)])]),t._v(" "),a("h2",{attrs:{id:"activated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activated"}},[t._v("#")]),t._v(" activated")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),a("code",[t._v("Function")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详细：")])]),t._v(" "),a("p",[t._v("被 keep-alive 缓存的组件激活时调用。")]),t._v(" "),a("p",[a("strong",[t._v("该钩子在服务器端渲染期间不被调用。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参考：")])])]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/component-dynamic-async.html#在动态组件上使用-keep-alive"}},[t._v("动态组件 - keep-alive")])],1)])]),t._v(" "),a("h2",{attrs:{id:"deactivated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deactivated"}},[t._v("#")]),t._v(" deactivated")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),a("code",[t._v("Function")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详细：")])]),t._v(" "),a("p",[t._v("被 keep-alive 缓存的组件停用时调用。")]),t._v(" "),a("p",[a("strong",[t._v("该钩子在服务器端渲染期间不被调用。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参考：")])])]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/component-dynamic-async.html#在动态组件上使用-keep-alive"}},[t._v("动态组件 - keep-alive")])],1)])]),t._v(" "),a("h2",{attrs:{id:"beforeunmount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforeunmount"}},[t._v("#")]),t._v(" beforeUnmount")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),a("code",[t._v("Function")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详细：")])]),t._v(" "),a("p",[t._v("在卸载组件实例之前调用。在这个阶段，实例仍然是完全正常的。")]),t._v(" "),a("p",[a("strong",[t._v("该钩子在服务器端渲染期间不被调用。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参考：")]),a("RouterLink",{attrs:{to:"/guide/instance.html#生命周期图示"}},[t._v("生命周期图示")])],1)])]),t._v(" "),a("h2",{attrs:{id:"unmounted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unmounted"}},[t._v("#")]),t._v(" unmounted")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),a("code",[t._v("Function")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详细：")])]),t._v(" "),a("p",[t._v("卸载组件实例后调用。调用此钩子时，组件实例的所有指令都被解除绑定，所有事件侦听器都被移除，所有子组件实例被卸载。")]),t._v(" "),a("p",[a("strong",[t._v("该钩子在服务器端渲染期间不被调用。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参考：")]),a("RouterLink",{attrs:{to:"/guide/instance.html#生命周期图示"}},[t._v("生命周期图示")])],1)])]),t._v(" "),a("h2",{attrs:{id:"errorcaptured"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errorcaptured"}},[t._v("#")]),t._v(" errorCaptured")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),a("code",[t._v("(err: Error, instance: Component, info: string) => ?boolean")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详细：")])]),t._v(" "),a("p",[t._v("当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 "),a("code",[t._v("false")]),t._v(" 以阻止该错误继续向上传播。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("你可以在此钩子中修改组件的状态。因此在捕获错误时，在模板或渲染函数中有一个条件判断来绕过其它内容就很重要；不然该组件可能会进入一个无限的渲染循环。")])]),t._v(" "),a("p",[a("strong",[t._v("错误传播规则")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("默认情况下，如果全局的 "),a("code",[t._v("config.errorHandler")]),t._v(" 被定义，所有的错误仍会发送它，因此这些错误仍然会向单一的分析服务的地方进行汇报。")])]),t._v(" "),a("li",[a("p",[t._v("如果一个组件的继承或父级从属链路中存在多个 "),a("code",[t._v("errorCaptured")]),t._v(" 钩子，则它们将会被相同的错误逐个唤起。")])]),t._v(" "),a("li",[a("p",[t._v("如果此 "),a("code",[t._v("errorCaptured")]),t._v(" 钩子自身抛出了一个错误，则这个新错误和原本被捕获的错误都会发送给全局的 "),a("code",[t._v("config.errorHandler")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("一个 "),a("code",[t._v("errorCaptured")]),t._v(" 钩子能够返回 "),a("code",[t._v("false")]),t._v(" 以阻止错误继续向上传播。本质上是说“这个错误已经被搞定了且应该被忽略”。它会阻止其它任何会被这个错误唤起的 "),a("code",[t._v("errorCaptured")]),t._v(" 钩子和全局的 "),a("code",[t._v("config.errorHandler")]),t._v("。")])])])])]),t._v(" "),a("h2",{attrs:{id:"rendertracked"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rendertracked"}},[t._v("#")]),t._v(" renderTracked")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),a("code",[t._v("(e: DebuggerEvent) => void")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详细：")])]),t._v(" "),a("p",[t._v("跟踪虚拟 DOM 重新渲染时调用。钩子接收 "),a("code",[t._v("debugger event")]),t._v(" 作为参数。此事件告诉你哪个操作跟踪了组件以及该操作的目标对象和键。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("用法：")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("addToCart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Add to cart"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Cart({{ cart }})"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      cart"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderTracked")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* 当组件第一次渲染时，这将被记录下来:\n    {\n      key: "cart",\n      target: {\n        cart: 0\n      },\n      type: "get"\n    }\n    */')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addToCart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"rendertriggered"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rendertriggered"}},[t._v("#")]),t._v(" renderTriggered")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("类型：")]),a("code",[t._v("(e: DebuggerEvent) => void")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("详细：")])]),t._v(" "),a("p",[t._v("当虚拟 DOM 重新渲染被触发时调用。和 "),a("a",{attrs:{href:"#rendertracked"}},[a("code",[t._v("renderTracked")])]),t._v(" 类似，接收 "),a("code",[t._v("debugger event")]),t._v(" 作为参数。此事件告诉你是什么操作触发了重新渲染，以及该操作的目标对象和键。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("用法：")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("addToCart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Add to cart"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Cart({{ cart }})"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      cart"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderTriggered")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addToCart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* 这将导致renderTriggered调用\n        {\n          key: "cart",\n          target: {\n            cart: 1\n          },\n          type: "set"\n        }\n      */')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);