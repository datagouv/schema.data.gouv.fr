(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("VueLoading", [], factory);
	else if(typeof exports === 'object')
		exports["VueLoading"] = factory();
	else
		root["VueLoading"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/Component.vue?vue&type=template&id=76669bf1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.transition}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],staticClass:"vld-overlay is-active",class:{ 'is-full-page': _vm.isFullPage },style:({ zIndex: _vm.zIndex }),attrs:{"tabindex":"0","aria-busy":_vm.isActive,"aria-label":"Loading"}},[_c('div',{staticClass:"vld-background",style:(_vm.bgStyle),on:{"click":function($event){$event.preventDefault();return _vm.cancel($event)}}}),_c('div',{staticClass:"vld-icon"},[_vm._t("before"),_vm._t("default",[_c(_vm.loader,{tag:"component",attrs:{"color":_vm.color,"width":_vm.width,"height":_vm.height}})]),_vm._t("after")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/js/Component.vue?vue&type=template&id=76669bf1&

// CONCATENATED MODULE: ./src/js/helpers.js
var removeElement = function removeElement(el) {
  if (typeof el.remove !== 'undefined') {
    el.remove();
  } else {
    el.parentNode.removeChild(el);
  }
};

var hasWindow = function hasWindow() {
  return typeof window !== 'undefined';
};

var HTMLElement = hasWindow() ? window.HTMLElement : Object;

// CONCATENATED MODULE: ./src/js/trapFocusMixin.js
/* harmony default export */ var trapFocusMixin = ({
  mounted: function mounted() {
    if (this.enforceFocus) {
      document.addEventListener('focusin', this.focusIn);
    }
  },
  methods: {
    /**
     * Trap focus event
     *
     * @param event
     */
    focusIn: function focusIn(event) {
      // Ignore when loading is not active
      if (!this.isActive) return;
      if ( // Event target is the loading div element itself
      event.target === this.$el || // Event target is inside the loading div
      this.$el.contains(event.target)) return; // Use container as parent when available otherwise use parent element when isFullPage is false

      var parent = this.container ? this.container : this.isFullPage ? null : this.$el.parentElement;

      if ( // Always prevent when loading is full screen
      this.isFullPage || // When a parent exist means loader is running inside a container
      // When loading is NOT full screen and event target is inside the given container
      parent && parent.contains(event.target)) {
        event.preventDefault();
        this.$el.focus();
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('focusin', this.focusIn);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/loaders/spinner.vue?vue&type=template&id=34adbf2c&
var spinnervue_type_template_id_34adbf2c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"viewBox":"0 0 38 38","xmlns":"http://www.w3.org/2000/svg","width":_vm.width,"height":_vm.height,"stroke":_vm.color}},[_c('g',{attrs:{"fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"transform":"translate(1 1)","stroke-width":"2"}},[_c('circle',{attrs:{"stroke-opacity":".25","cx":"18","cy":"18","r":"18"}}),_c('path',{attrs:{"d":"M36 18c0-9.94-8.06-18-18-18"}},[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","from":"0 18 18","to":"360 18 18","dur":"0.8s","repeatCount":"indefinite"}})],1)])])])}
var spinnervue_type_template_id_34adbf2c_staticRenderFns = []


// CONCATENATED MODULE: ./src/loaders/spinner.vue?vue&type=template&id=34adbf2c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/loaders/spinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var spinnervue_type_script_lang_js_ = ({
  name: 'spinner',
  props: {
    color: {
      type: String,
      "default": '#000'
    },
    height: {
      type: Number,
      "default": 64
    },
    width: {
      type: Number,
      "default": 64
    }
  }
});
// CONCATENATED MODULE: ./src/loaders/spinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var loaders_spinnervue_type_script_lang_js_ = (spinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/loaders/spinner.vue





/* normalize component */

var component = normalizeComponent(
  loaders_spinnervue_type_script_lang_js_,
  spinnervue_type_template_id_34adbf2c_render,
  spinnervue_type_template_id_34adbf2c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var spinner = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/loaders/dots.vue?vue&type=template&id=3a9b75c1&
var dotsvue_type_template_id_3a9b75c1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"viewBox":"0 0 120 30","xmlns":"http://www.w3.org/2000/svg","fill":_vm.color,"width":_vm.width,"height":_vm.height}},[_c('circle',{attrs:{"cx":"15","cy":"15","r":"15"}},[_c('animate',{attrs:{"attributeName":"r","from":"15","to":"15","begin":"0s","dur":"0.8s","values":"15;9;15","calcMode":"linear","repeatCount":"indefinite"}}),_c('animate',{attrs:{"attributeName":"fill-opacity","from":"1","to":"1","begin":"0s","dur":"0.8s","values":"1;.5;1","calcMode":"linear","repeatCount":"indefinite"}})]),_c('circle',{attrs:{"cx":"60","cy":"15","r":"9","fill-opacity":"0.3"}},[_c('animate',{attrs:{"attributeName":"r","from":"9","to":"9","begin":"0s","dur":"0.8s","values":"9;15;9","calcMode":"linear","repeatCount":"indefinite"}}),_c('animate',{attrs:{"attributeName":"fill-opacity","from":"0.5","to":"0.5","begin":"0s","dur":"0.8s","values":".5;1;.5","calcMode":"linear","repeatCount":"indefinite"}})]),_c('circle',{attrs:{"cx":"105","cy":"15","r":"15"}},[_c('animate',{attrs:{"attributeName":"r","from":"15","to":"15","begin":"0s","dur":"0.8s","values":"15;9;15","calcMode":"linear","repeatCount":"indefinite"}}),_c('animate',{attrs:{"attributeName":"fill-opacity","from":"1","to":"1","begin":"0s","dur":"0.8s","values":"1;.5;1","calcMode":"linear","repeatCount":"indefinite"}})])])}
var dotsvue_type_template_id_3a9b75c1_staticRenderFns = []


// CONCATENATED MODULE: ./src/loaders/dots.vue?vue&type=template&id=3a9b75c1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/loaders/dots.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var dotsvue_type_script_lang_js_ = ({
  name: 'dots',
  props: {
    color: {
      type: String,
      "default": '#000'
    },
    height: {
      type: Number,
      "default": 240
    },
    width: {
      type: Number,
      "default": 60
    }
  }
});
// CONCATENATED MODULE: ./src/loaders/dots.vue?vue&type=script&lang=js&
 /* harmony default export */ var loaders_dotsvue_type_script_lang_js_ = (dotsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/loaders/dots.vue





/* normalize component */

var dots_component = normalizeComponent(
  loaders_dotsvue_type_script_lang_js_,
  dotsvue_type_template_id_3a9b75c1_render,
  dotsvue_type_template_id_3a9b75c1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dots = (dots_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/loaders/bars.vue?vue&type=template&id=db670f7e&
var barsvue_type_template_id_db670f7e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 30 30","height":_vm.height,"width":_vm.width,"fill":_vm.color}},[_c('rect',{attrs:{"x":"0","y":"13","width":"4","height":"5"}},[_c('animate',{attrs:{"attributeName":"height","attributeType":"XML","values":"5;21;5","begin":"0s","dur":"0.6s","repeatCount":"indefinite"}}),_c('animate',{attrs:{"attributeName":"y","attributeType":"XML","values":"13; 5; 13","begin":"0s","dur":"0.6s","repeatCount":"indefinite"}})]),_c('rect',{attrs:{"x":"10","y":"13","width":"4","height":"5"}},[_c('animate',{attrs:{"attributeName":"height","attributeType":"XML","values":"5;21;5","begin":"0.15s","dur":"0.6s","repeatCount":"indefinite"}}),_c('animate',{attrs:{"attributeName":"y","attributeType":"XML","values":"13; 5; 13","begin":"0.15s","dur":"0.6s","repeatCount":"indefinite"}})]),_c('rect',{attrs:{"x":"20","y":"13","width":"4","height":"5"}},[_c('animate',{attrs:{"attributeName":"height","attributeType":"XML","values":"5;21;5","begin":"0.3s","dur":"0.6s","repeatCount":"indefinite"}}),_c('animate',{attrs:{"attributeName":"y","attributeType":"XML","values":"13; 5; 13","begin":"0.3s","dur":"0.6s","repeatCount":"indefinite"}})])])}
var barsvue_type_template_id_db670f7e_staticRenderFns = []


// CONCATENATED MODULE: ./src/loaders/bars.vue?vue&type=template&id=db670f7e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/loaders/bars.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var barsvue_type_script_lang_js_ = ({
  name: 'bars',
  props: {
    color: {
      type: String,
      "default": '#000'
    },
    height: {
      type: Number,
      "default": 40
    },
    width: {
      type: Number,
      "default": 40
    }
  }
});
// CONCATENATED MODULE: ./src/loaders/bars.vue?vue&type=script&lang=js&
 /* harmony default export */ var loaders_barsvue_type_script_lang_js_ = (barsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/loaders/bars.vue





/* normalize component */

var bars_component = normalizeComponent(
  loaders_barsvue_type_script_lang_js_,
  barsvue_type_template_id_db670f7e_render,
  barsvue_type_template_id_db670f7e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var bars = (bars_component.exports);
// CONCATENATED MODULE: ./src/loaders/index.js



/* harmony default export */ var loaders = ({
  Spinner: spinner,
  Dots: dots,
  Bars: bars
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/js/Component.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Componentvue_type_script_lang_js_ = ({
  name: 'vue-loading',
  mixins: [trapFocusMixin],
  props: {
    active: Boolean,
    programmatic: Boolean,
    container: [Object, Function, HTMLElement],
    isFullPage: {
      type: Boolean,
      "default": true
    },
    enforceFocus: {
      type: Boolean,
      "default": true
    },
    lockScroll: {
      type: Boolean,
      "default": false
    },
    transition: {
      type: String,
      "default": 'fade'
    },

    /**
     * Allow user to hide the loader
     */
    canCancel: Boolean,

    /**
     * Do something on cancel
     */
    onCancel: {
      type: Function,
      "default": function _default() {}
    },
    color: String,
    backgroundColor: String,
    blur: {
      type: String,
      "default": '2px'
    },
    opacity: Number,
    width: Number,
    height: Number,
    zIndex: Number,
    loader: {
      type: String,
      "default": 'spinner'
    }
  },
  data: function data() {
    return {
      // Don't mutate the prop
      isActive: this.active
    };
  },
  components: loaders,
  beforeMount: function beforeMount() {
    // Insert the component in DOM when called programmatically
    if (this.programmatic) {
      if (this.container) {
        this.isFullPage = false;
        this.container.appendChild(this.$el);
      } else {
        document.body.appendChild(this.$el);
      }
    }
  },
  mounted: function mounted() {
    // Activate immediately when called programmatically
    if (this.programmatic) {
      this.isActive = true;
    }

    document.addEventListener('keyup', this.keyPress);
  },
  methods: {
    /**
     * Proxy to hide() method.
     * Gets called by ESC button or when click outside
     */
    cancel: function cancel() {
      if (!this.canCancel || !this.isActive) return;
      this.hide();
      this.onCancel.apply(null, arguments);
    },

    /**
     * Hide and destroy component if it's programmatic.
     */
    hide: function hide() {
      var _this = this;

      this.$emit('hide');
      this.$emit('update:active', false); // Timeout for the animation complete before destroying

      if (this.programmatic) {
        this.isActive = false;
        setTimeout(function () {
          _this.$destroy();

          removeElement(_this.$el);
        }, 150);
      }
    },
    disableScroll: function disableScroll() {
      if (this.isFullPage && this.lockScroll) {
        document.body.classList.add('vld-shown');
      }
    },
    enableScroll: function enableScroll() {
      if (this.isFullPage && this.lockScroll) {
        document.body.classList.remove('vld-shown');
      }
    },

    /**
     * Key press event to hide on ESC.
     *
     * @param event
     */
    keyPress: function keyPress(event) {
      // todo keyCode is deprecated
      if (event.keyCode === 27) this.cancel();
    }
  },
  watch: {
    active: function active(value) {
      this.isActive = value;
    },
    isActive: function isActive(value) {
      if (value) {
        this.disableScroll();
      } else {
        this.enableScroll();
      }
    }
  },
  computed: {
    bgStyle: function bgStyle() {
      return {
        background: this.backgroundColor,
        opacity: this.opacity,
        backdropFilter: "blur(".concat(this.blur, ")")
      };
    }
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('keyup', this.keyPress);
  }
});
// CONCATENATED MODULE: ./src/js/Component.vue?vue&type=script&lang=js&
 /* harmony default export */ var js_Componentvue_type_script_lang_js_ = (Componentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/js/Component.vue





/* normalize component */

var Component_component = normalizeComponent(
  js_Componentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Component = (Component_component.exports);
// CONCATENATED MODULE: ./src/js/api.js


var api_Api = function Api(Vue) {
  var globalProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var globalSlots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return {
    show: function show() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : globalProps;
      var slots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalSlots;
      var forceProps = {
        programmatic: true
      };
      var propsData = Object.assign({}, globalProps, props, forceProps);
      var instance = new (Vue.extend(Component))({
        el: document.createElement('div'),
        propsData: propsData
      });
      var mergedSlots = Object.assign({}, globalSlots, slots);
      Object.keys(mergedSlots).map(function (name) {
        instance.$slots[name] = mergedSlots[name];
      });
      return instance;
    }
  };
};

/* harmony default export */ var js_api = (api_Api);
// EXTERNAL MODULE: ./src/css/index.css
var css = __webpack_require__(0);

// CONCATENATED MODULE: ./src/index.js




var src_Plugin = function Plugin(Vue) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var slots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var api = js_api(Vue, props, slots);
  Vue.$loading = api;
  Vue.prototype.$loading = api;
};

Component.install = src_Plugin;
/* harmony default export */ var src = __webpack_exports__["default"] = (Component);

/***/ })
/******/ ])["default"];
});