/******/
 (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./react/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./react/App/Browse/Main/Nav.js":
/*!**************************************!*\
  !*** ./react/App/Browse/Main/Nav.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../actions */ "./react/actions/index.js");
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;


var Nav = function Nav(_ref) {
  var select = _ref.select;
  return React.createElement("nav", {
    className: "main-nav"
  }, React.createElement("ul", null, React.createElement("li", {
    onClick: function onClick() {
      return select('playlists');
    }
  }, "Playlists"), React.createElement("li", {
    onClick: function onClick() {
      return select('songs');
    }
  }, "Songs"), React.createElement("li", {
    onClick: function onClick() {
      return select('albums');
    }
  }, "Albums"), React.createElement("li", {
    onClick: function onClick() {
      return select('artists');
    }
  }, "Artists")), React.createElement("button", {
    className: "new-playlist"
  }, "New Playlist"));
};

var mstp = function mstp(state) {
  return {
    menu: state.ui.menu
  };
};

var mdtp = function mdtp(dispatch) {
  return {
    select: function select(menu) {
      return dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_0__["CHANGE_MENU"],
        menu: menu
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(mstp, mdtp)(Nav));

/***/ }),

/***/ "./react/App/Browse/Main/View/Albums/Album.js":
/*!****************************************************!*\
  !*** ./react/App/Browse/Main/View/Albums/Album.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../actions */ "./react/actions/index.js");
/* harmony import */ var _Songs_Song__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Songs/Song */ "./react/App/Browse/Main/View/Songs/Song.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _React = React,
    Component = _React.Component;
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;



var Album =
/*#__PURE__*/
function (_Component) {
  _inherits(Album, _Component);

  function Album() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Album);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Album)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectSong", function (id) {
      return function () {
        var queue = _toConsumableArray(_this.props.queue);

        var startIdx = queue.findIndex(function (el) {
          return el === id.toString();
        });
        var startSlice = queue.slice(startIdx, queue.length);
        var endSlice = queue.slice(0, startIdx);
        queue = startSlice.concat(endSlice);

        _this.props.selectSong(id, queue);
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "back", function () {
      return _this.props.history.push('/browse');
    });

    return _this;
  }

  _createClass(Album, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.playAlbum(this.props.match.params.albumId, function () {
        console.log('done');
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          album = _this$props.album,
          artist = _this$props.artist,
          selected = _this$props.selected,
          pause = _this$props.pause,
          playing = _this$props.playing,
          songs = _this$props.songs;
      if (!album) return React.createElement("div", null);
      var img = album.img,
          title = album.title;
      return React.createElement("div", {
        className: "album-show"
      }, React.createElement("div", {
        className: "album-show-artist"
      }, React.createElement("img", {
        src: img
      }), React.createElement("h4", null, title), React.createElement("h5", null, artist.name)), React.createElement("ul", null, songs.map(function (song, i) {
        return React.createElement(_Songs_Song__WEBPACK_IMPORTED_MODULE_1__["default"], {
          song: song,
          i: i,
          select: _this2.selectSong,
          selected: song.id === parseInt(selected),
          pause: pause,
          playing: playing
        });
      })), React.createElement("button", {
        className: "album-back",
        onClick: this.back
      }, React.createElement("i", {
        className: "fas fa-chevron-left"
      })));
    }
  }]);

  return Album;
}(Component);

var mstp = function mstp(state, props) {
  var album = state.entities.albums[props.match.params.albumId];
  var artist;
  var songs;

  if (album) {
    artist = state.entities.artists[album.artistId];
    songs = _toConsumableArray(state.ui.queue).sort().map(function (id) {
      return state.entities.songs[id];
    });
  }

  return {
    queue: state.ui.queue,
    selected: state.ui.song,
    playing: state.ui.playing,
    album: album,
    artist: artist,
    songs: songs
  };
};

var mdtp = function mdtp(dispatch) {
  return {
    selectSong: function selectSong(id, queue) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["selectSong"])(id, queue));
    },
    pause: function pause() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["pause"])());
    },
    playAlbum: function playAlbum(id, cb) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["playAlbum"])(id, cb));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(mstp, mdtp)(Album));

/***/ }),

/***/ "./react/App/Browse/Main/View/Albums/index.js":
/*!****************************************************!*\
  !*** ./react/App/Browse/Main/View/Albums/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../actions */ "./react/actions/index.js");
/* harmony import */ var _shared_MediaCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/MediaCard */ "./react/App/Browse/Main/View/shared/MediaCard.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _React = React,
    Component = _React.Component;
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;



var Albums =
/*#__PURE__*/
function (_Component) {
  _inherits(Albums, _Component);

  function Albums() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Albums);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Albums)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "select", function (albumId) {
      return function () {
        return _this.props.playAlbum(albumId, function () {
          return _this.props.playFirst();
        });
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isPlaying", function (id) {
      if (_this.props.selected && _this.props.playing) {
        return _this.props.selected.albumId === id;
      } else {
        return false;
      }
    });

    return _this;
  }

  _createClass(Albums, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchAlbums();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", null, React.createElement("ul", {
        className: "albums"
      }, this.props.albums.map(function (_ref) {
        var id = _ref.id,
            img = _ref.img,
            title = _ref.title,
            artistId = _ref.artistId;
        return React.createElement(_shared_MediaCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          img: img,
          title: title,
          creator: _this2.props.artists[artistId].name,
          select: _this2.select(id),
          redirect: "/browse/albums/".concat(id),
          selected: _this2.isPlaying(id),
          pause: _this2.props.pause
        });
      })));
    }
  }]);

  return Albums;
}(Component);

var mstp = function mstp(state) {
  return {
    albums: Object.values(state.entities.albums),
    artists: state.entities.artists,
    selected: state.entities.songs[state.ui.song],
    playing: state.ui.playing
  };
};

var mdtp = function mdtp(dispatch) {
  return {
    fetchAlbums: function fetchAlbums() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["fetchAlbums"])());
    },
    playAlbum: function playAlbum(albumId, cb) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["playAlbum"])(albumId, cb));
    },
    playFirst: function playFirst() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["playFirst"])());
    },
    pause: function pause() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["pause"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(mstp, mdtp)(Albums));

/***/ }),

/***/ "./react/App/Browse/Main/View/Artists.js":
/*!***********************************************!*\
  !*** ./react/App/Browse/Main/View/Artists.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return React.createElement("div", null, "Artists");
});

/***/ }),

/***/ "./react/App/Browse/Main/View/PlayLists.js":
/*!*************************************************!*\
  !*** ./react/App/Browse/Main/View/PlayLists.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return React.createElement("div", null, "Playlists");
});

/***/ }),

/***/ "./react/App/Browse/Main/View/Songs/Song.js":
/*!**************************************************!*\
  !*** ./react/App/Browse/Main/View/Songs/Song.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var song = _ref.song,
      select = _ref.select,
      pause = _ref.pause,
      selected = _ref.selected,
      i = _ref.i,
      playing = _ref.playing;
  var click = selected && playing ? pause : select(song.id);
  var icon = selected && playing ? React.createElement("i", {
    className: "fas fa-pause"
  }) : React.createElement("i", {
    className: "fas fa-play"
  });
  var num = selected && playing ? React.createElement("span", null) : React.createElement("span", null, "".concat(i + 1, ". "));
  return React.createElement("li", {
    className: "song",
    onClick: click
  }, React.createElement("div", null, React.createElement("div", {
    className: "song-icon-container"
  }, icon, num), song.title), React.createElement("i", {
    className: "fas fa-ellipsis-h"
  }));
});

/***/ }),

/***/ "./react/App/Browse/Main/View/Songs/index.js":
/*!***************************************************!*\
  !*** ./react/App/Browse/Main/View/Songs/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../actions */ "./react/actions/index.js");
/* harmony import */ var _Song__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Song */ "./react/App/Browse/Main/View/Songs/Song.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _React = React,
    Component = _React.Component;
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;



var Songs =
/*#__PURE__*/
function (_Component) {
  _inherits(Songs, _Component);

  function Songs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Songs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Songs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectSong", function (id) {
      return function () {
        var queue = _toConsumableArray(_this.props.queue);

        var startIdx = queue.findIndex(function (el) {
          return el === id.toString();
        });
        var startSlice = queue.slice(startIdx, queue.length);
        var endSlice = queue.slice(0, startIdx);
        queue = startSlice.concat(endSlice);

        _this.props.selectSong(id, queue);
      };
    });

    return _this;
  }

  _createClass(Songs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchSongs();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("ul", null, this.props.songs.map(function (song, i) {
        return React.createElement(_Song__WEBPACK_IMPORTED_MODULE_1__["default"], {
          song: song,
          i: i,
          select: _this2.selectSong,
          selected: song.id === parseInt(_this2.props.selected),
          pause: _this2.props.pause,
          playing: _this2.props.playing
        });
      }));
    }
  }]);

  return Songs;
}(Component);

var mstp = function mstp(state) {
  return {
    songs: Object.values(state.entities.songs),
    queue: Object.keys(state.entities.songs),
    selected: state.ui.song,
    playing: state.ui.playing
  };
};

var mdtp = function mdtp(dispatch) {
  return {
    fetchSongs: function fetchSongs() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["fetchSongs"])());
    },
    selectSong: function selectSong(id, queue) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["selectSong"])(id, queue));
    },
    pause: function pause() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["pause"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(mstp, mdtp)(Songs));

/***/ }),

/***/ "./react/App/Browse/Main/View/index.js":
/*!*********************************************!*\
  !*** ./react/App/Browse/Main/View/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Songs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Songs */ "./react/App/Browse/Main/View/Songs/index.js");
/* harmony import */ var _Albums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Albums */ "./react/App/Browse/Main/View/Albums/index.js");
/* harmony import */ var _Artists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Artists */ "./react/App/Browse/Main/View/Artists.js");
/* harmony import */ var _PlayLists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayLists */ "./react/App/Browse/Main/View/PlayLists.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _React = React,
    Component = _React.Component;
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;





var View =
/*#__PURE__*/
function (_Component) {
  _inherits(View, _Component);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
  }

  _createClass(View, [{
    key: "render",
    value: function render() {
      switch (this.props.menu) {
        case 'playlists':
          return React.createElement(_PlayLists__WEBPACK_IMPORTED_MODULE_3__["default"], null);

        case 'songs':
          return React.createElement(_Songs__WEBPACK_IMPORTED_MODULE_0__["default"], null);

        case 'albums':
          return React.createElement(_Albums__WEBPACK_IMPORTED_MODULE_1__["default"], null);

        case 'artists':
          return React.createElement(_Artists__WEBPACK_IMPORTED_MODULE_2__["default"], null);

        default:
          return React.createElement(_Songs__WEBPACK_IMPORTED_MODULE_0__["default"], null);
      }
    }
  }]);

  return View;
}(Component);

var mstp = function mstp(state) {
  return {
    menu: state.ui.menu
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(mstp)(View));

/***/ }),

/***/ "./react/App/Browse/Main/View/shared/MediaCard.js":
/*!********************************************************!*\
  !*** ./react/App/Browse/Main/View/shared/MediaCard.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _React = React,
    Component = _React.Component;

var MediaCard =
/*#__PURE__*/
function (_Component) {
  _inherits(MediaCard, _Component);

  function MediaCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MediaCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MediaCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "attributes", function () {
      return _this.props.selected ? {
        overlayClass: 'media-overlay-selected',
        handleClick: _this.props.pause,
        icon: React.createElement("i", {
          className: "fas fa-pause"
        })
      } : {
        overlayClass: 'media-overlay',
        handleClick: _this.props.select,
        icon: React.createElement("i", {
          className: "fas fa-play"
        })
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (e) {
      if (e.target.className !== 'fas fa-play') {
        window.location.replace("/#".concat(_this.props.redirect));
      }
    });

    return _this;
  }

  _createClass(MediaCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          img = _this$props.img,
          title = _this$props.title,
          creator = _this$props.creator,
          redirect = _this$props.redirect;

      var _this$attributes = this.attributes(),
          overlayClass = _this$attributes.overlayClass,
          handleClick = _this$attributes.handleClick,
          icon = _this$attributes.icon;

      return React.createElement("a", {
        onClick: this.handleClick
      }, React.createElement("div", {
        className: "media-card"
      }, React.createElement("img", {
        src: img
      }), React.createElement("div", {
        className: overlayClass
      }, React.createElement("button", {
        className: "media-play",
        onClick: handleClick
      }, icon)), React.createElement("h4", null, title), React.createElement("h5", null, creator)));
    }
  }]);

  return MediaCard;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (MediaCard);

/***/ }),

/***/ "./react/App/Browse/Main/index.js":
/*!****************************************!*\
  !*** ./react/App/Browse/Main/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav */ "./react/App/Browse/Main/Nav.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ "./react/App/Browse/Main/View/index.js");
/* harmony import */ var _View_Albums_Album__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View/Albums/Album */ "./react/App/Browse/Main/View/Albums/Album.js");

var _ReactRouter = ReactRouter,
    Route = _ReactRouter.Route;



var Browse = function Browse() {
  return React.createElement("div", null, React.createElement(_Nav__WEBPACK_IMPORTED_MODULE_0__["default"], null), React.createElement(_View__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return React.createElement("div", {
    className: "main"
  }, React.createElement(Route, {
    path: "/browse/albums/:albumId",
    component: _View_Albums_Album__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), React.createElement(Route, {
    path: "/browse",
    component: Browse
  }));
});

/***/ }),

/***/ "./react/App/Browse/Player/Preview.js":
/*!********************************************!*\
  !*** ./react/App/Browse/Player/Preview.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var song = _ref.song,
      album = _ref.album,
      artist = _ref.artist;
  return song ? React.createElement("div", {
    className: "song-info"
  }, React.createElement("img", {
    src: album.img
  }), React.createElement("div", null, React.createElement("h4", null, song.title), React.createElement("h5", null, artist.name))) : React.createElement("div", null);
});

/***/ }),

/***/ "./react/App/Browse/Player/index.js":
/*!******************************************!*\
  !*** ./react/App/Browse/Player/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../actions */ "./react/actions/index.js");
/* harmony import */ var _Preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Preview */ "./react/App/Browse/Player/Preview.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _React = React,
    Component = _React.Component;
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;



var Player =
/*#__PURE__*/
function (_Component) {
  _inherits(Player, _Component);

  function Player() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Player);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Player)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      progress: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setProgress", function () {
      if (!_this.audio || !_this.props.playing) return;
      var percent = Math.floor(100 * (_this.audio.currentTime / _this.audio.duration));

      _this.setState({
        progress: percent
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      _this.setState({
        progress: parseInt(e.target.value)
      }, function () {
        if (_this.audio) {
          _this.audio.currentTime = e.target.value / 100 * _this.audio.duration;
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleVolumeChange", function (e) {
      _this.setState({
        volume: e.target.value
      }, function () {
        if (_this.audio) {
          _this.audio.volume = _this.state.volume / 100.0;
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "playPauseFn", function () {
      if (!_this.audio) return _this.props.playFirst();
      return _this.props.playing ? _this.props.pause() : _this.props.play();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "playPauseBtn", function () {
      return _this.props.playing ? React.createElement("i", {
        className: "fas fa-pause"
      }) : React.createElement("i", {
        className: "fas fa-play"
      });
    });

    return _this;
  }

  _createClass(Player, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.progressCheck = setInterval(this.setProgress, 2000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.audio.pause();
      clearInterval(this.progressCheck);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      var _this2 = this;

      var song = this.props.song;
      if (!song) return;

      if (!oldProps.song || oldProps.song.id !== this.props.song.id) {
        if (!this.audio) {
          this.setState({
            progress: 0
          }, function () {
            _this2.audio = new Audio(song.audio);

            _this2.audio.onended = function () {
              return _this2.props.seekRight;
            };
          });
        } else this.audio.setAttribute('src', song.audio);

        this.setState({
          progress: 0
        }, function () {
          _this2.audio.play();
        });
      }

      if (!oldProps.playing && this.props.playing) {
        this.audio.play();
      } else if (oldProps.playing && !this.props.playing) {
        this.audio.pause();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          seekLeft = _this$props.seekLeft,
          seekRight = _this$props.seekRight,
          album = _this$props.album,
          song = _this$props.song,
          artist = _this$props.artist;
      return React.createElement("div", {
        className: "player"
      }, React.createElement("div", {
        className: "player-buttons"
      }, React.createElement("button", {
        className: "back",
        onClick: seekLeft
      }, React.createElement("i", {
        className: "fas fa-backward"
      })), React.createElement("button", {
        className: "play",
        onClick: this.playPauseFn
      }, this.playPauseBtn()), React.createElement("button", {
        className: "forward",
        onClick: seekRight
      }, React.createElement("i", {
        className: "fas fa-forward"
      }))), React.createElement("div", {
        className: "progress-container"
      }, React.createElement("input", {
        type: "range",
        className: "progress",
        value: this.state.progress,
        max: 100,
        onChange: this.handleChange.bind(this)
      })), React.createElement("div", {
        className: "volume-container"
      }, React.createElement("input", {
        type: "range",
        className: "volume",
        value: this.state.volume,
        max: 100,
        onChange: this.handleVolumeChange.bind(this)
      })), React.createElement(_Preview__WEBPACK_IMPORTED_MODULE_1__["default"], {
        song: song,
        album: album,
        artist: artist
      }));
    }
  }]);

  return Player;
}(Component);

var mstp = function mstp(state) {
  var _state$entities = state.entities,
      songs = _state$entities.songs,
      albums = _state$entities.albums,
      artists = _state$entities.artists;
  var song = songs[state.ui.song];
  var artist, album;

  if (song) {
    album = albums[song.albumId];
    artist = artists[album.artistId];
  }

  return {
    song: song,
    album: album,
    artist: artist,
    playing: state.ui.playing
  };
};

var mdtp = function mdtp(dispatch) {
  return {
    play: function play() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["play"])());
    },
    pause: function pause() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["pause"])());
    },
    seekLeft: function seekLeft() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["seekLeft"])());
    },
    seekRight: function seekRight() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["seekRight"])());
    },
    playFirst: function playFirst() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["playFirst"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(mstp, mdtp)(Player));

/***/ }),

/***/ "./react/App/Browse/Sidebar/SidebarModalLinks.js":
/*!*******************************************************!*\
  !*** ./react/App/Browse/Sidebar/SidebarModalLinks.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers_ui_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../reducers/ui/modal */ "./react/reducers/ui/modal.js");

var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;

var SidebarModalLinks = function SidebarModalLinks(_ref) {
  var artist = _ref.artist,
      album = _ref.album,
      song = _ref.song;
  return React.createElement("ul", {
    className: "create-modal-links"
  }, React.createElement("li", {
    onClick: artist
  }, "+ Add Artist"), React.createElement("li", {
    onClick: album
  }, "+ Add Album"), React.createElement("li", {
    onClick: song
  }, "+ Add Song"));
};

var mdp = function mdp(dispatch) {
  return {
    artist: function artist() {
      return dispatch({
        type: _reducers_ui_modal__WEBPACK_IMPORTED_MODULE_0__["OPEN_NEW_ARTIST"]
      });
    },
    album: function album() {
      return dispatch({
        type: _reducers_ui_modal__WEBPACK_IMPORTED_MODULE_0__["OPEN_NEW_ALBUM"]
      });
    },
    song: function song() {
      return dispatch({
        type: _reducers_ui_modal__WEBPACK_IMPORTED_MODULE_0__["OPEN_NEW_SONG"]
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(null, mdp)(SidebarModalLinks));

/***/ }),

/***/ "./react/App/Browse/Sidebar/index.js":
/*!*******************************************!*\
  !*** ./react/App/Browse/Sidebar/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../actions */ "./react/actions/index.js");
/* harmony import */ var _SidebarModalLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarModalLinks */ "./react/App/Browse/Sidebar/SidebarModalLinks.js");
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;
var _ReactRouter = ReactRouter,
    Link = _ReactRouter.Link;



var Sidebar = function Sidebar(_ref) {
  var logout = _ref.logout;
  return React.createElement("div", {
    className: "sidebar"
  }, React.createElement(Link, {
    to: "/browse"
  }, React.createElement("img", {
    className: "logoB",
    src: "https://s3-us-west-1.amazonaws.com/react-spotify-aa/react.png"
  })), React.createElement(_SidebarModalLinks__WEBPACK_IMPORTED_MODULE_1__["default"], null), React.createElement("button", {
    onClick: logout,
    className: "logout"
  }, "Log Out"));
};

var mdtp = function mdtp(dispatch) {
  return {
    logout: function logout() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["logout"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(null, mdtp)(Sidebar));

/***/ }),

/***/ "./react/App/Browse/index.js":
/*!***********************************!*\
  !*** ./react/App/Browse/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar */ "./react/App/Browse/Sidebar/index.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./react/App/Browse/Player/index.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main */ "./react/App/Browse/Main/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modal */ "./react/App/Modal/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;





var Browse =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Browse, _React$Component);

  function Browse(props) {
    var _this;

    _classCallCheck(this, Browse);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Browse).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return React.createElement("div", {
        className: "browse"
      }, React.createElement("div", {
        className: "color-fix"
      }, React.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"], null), React.createElement(_Player__WEBPACK_IMPORTED_MODULE_1__["default"], null), React.createElement(_Main__WEBPACK_IMPORTED_MODULE_2__["default"], null), React.createElement(_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
    });

    return _this;
  }

  _createClass(Browse, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.props.loggedIn) {
        window.location.replace('/#/login');
      }
    }
  }]);

  return Browse;
}(React.Component);

var mstp = function mstp(state) {
  return {
    loggedIn: state.session
  };
};

var mdtp = function mdtp(dispatch) {
  return {
    logout: function (_logout) {
      function logout() {
        return _logout.apply(this, arguments);
      }

      logout.toString = function () {
        return _logout.toString();
      };

      return logout;
    }(function () {
      return dispatch(logout());
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(mstp, mdtp)(Browse));

/***/ }),

/***/ "./react/App/Modal/NewAlbumModal.js":
/*!******************************************!*\
  !*** ./react/App/Modal/NewAlbumModal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers_ui_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../reducers/ui/modal */ "./react/reducers/ui/modal.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions */ "./react/actions/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;
var _React = React,
    Component = _React.Component;

var NewAlbumModal =
/*#__PURE__*/
function (_Component) {
  _inherits(NewAlbumModal, _Component);

  function NewAlbumModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NewAlbumModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NewAlbumModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      title: '',
      year: 2019,
      artistId: -1,
      photo: null,
      photoUrl: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "titleChange", function (e) {
      return _this.setState({
        title: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "yearChange", function (e) {
      return _this.setState({
        year: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "artistChange", function (e) {
      debugger;

      _this.setState({
        artistId: e.target.value
      }, function () {
        console.log(_this.state);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fileChange", function (e) {
      var reader = new FileReader();
      var file = e.currentTarget.files[0];

      reader.onloadend = function () {
        return _this.setState({
          photoUrl: reader.result,
          photo: file
        });
      };

      if (file) reader.readAsDataURL(file);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submit", function (e) {
      debugger;
      e.preventDefault();
      var photo = _this.state.photo;
      if (photo === null) return _this.props.close();
      var form = new FormData();
      form.append('album[img]', _this.state.photo);
      form.append('album[artist_id]', _this.state.artistId);
      form.append('album[title]', _this.state.title);
      form.append('album[year]', _this.state.year);

      _this.props.submit(form);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "close", function (e) {
      if (e.target.className === 'create-modal') {
        _this.props.close();
      }
    });

    return _this;
  }

  _createClass(NewAlbumModal, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "create-modal",
        onClick: this.close
      }, React.createElement("div", {
        className: "create-modal-content"
      }, React.createElement("form", {
        onSubmit: this.submit
      }, React.createElement("h2", null, "Add New Album"), React.createElement("p", null, "If you can't find an album you're looking for here, you can add it below:"), React.createElement("div", {
        className: "image-input"
      }, React.createElement("img", {
        src: this.state.photoUrl || '#'
      }), React.createElement("input", {
        type: "file",
        onChange: this.fileChange
      })), React.createElement("input", {
        type: "text",
        value: this.state.title,
        onChange: this.titleChange,
        placeholder: "Album Title..."
      }), React.createElement("input", {
        type: "number",
        value: this.state.year,
        onChange: this.yearChange
      }), React.createElement("select", {
        value: this.state.artistId,
        onChange: this.artistChange
      }, React.createElement("option", {
        disabled: true,
        selected: this.state.artistId === -1,
        value: -1
      }, "Artist..."), this.props.artists.map(function (artist) {
        return React.createElement("option", {
          key: artist.id,
          value: artist.id
        }, artist.name);
      })), React.createElement("button", null, "Save"))));
    }
  }]);

  return NewAlbumModal;
}(Component);

var msp = function msp(state) {
  return {
    artists: Object.values(state.entities.artists)
  };
};

var mdp = function mdp(dispatch) {
  return {
    close: function close() {
      return dispatch({
        type: _reducers_ui_modal__WEBPACK_IMPORTED_MODULE_0__["CLOSE_ANY"]
      });
    },
    submit: function submit(form) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["createAlbum"])(form));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(msp, mdp)(NewAlbumModal));

/***/ }),

/***/ "./react/App/Modal/NewArtistModal.js":
/*!*******************************************!*\
  !*** ./react/App/Modal/NewArtistModal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers_ui_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../reducers/ui/modal */ "./react/reducers/ui/modal.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions */ "./react/actions/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;
var _React = React,
    Component = _React.Component;

var NewArtistModal =
/*#__PURE__*/
function (_Component) {
  _inherits(NewArtistModal, _Component);

  function NewArtistModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NewArtistModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NewArtistModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      name: '',
      photo: null,
      photoUrl: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nameChange", function (e) {
      return _this.setState({
        name: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fileChange", function (e) {
      var reader = new FileReader();
      var file = e.currentTarget.files[0];

      reader.onloadend = function () {
        return _this.setState({
          photoUrl: reader.result,
          photo: file
        });
      };

      if (file) reader.readAsDataURL(file);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submit", function (e) {
      e.preventDefault();
      var photo = _this.state.photo;
      if (photo === null) return _this.props.close();
      var form = new FormData();
      form.append('artist[img]', _this.state.photo);
      form.append('artist[name]', _this.state.name);

      _this.props.submit(form);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "close", function (e) {
      if (e.target.className === 'create-modal') {
        _this.props.close();
      }
    });

    return _this;
  }

  _createClass(NewArtistModal, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "create-modal",
        onClick: this.close
      }, React.createElement("div", {
        className: "create-modal-content"
      }, React.createElement("form", {
        onSubmit: this.submit
      }, React.createElement("h2", null, "Add New Artist"), React.createElement("p", null, "If you can't find an artist you're looking for here, you can add them below:"), React.createElement("div", {
        className: "image-input"
      }, React.createElement("img", {
        src: this.state.photoUrl || '#'
      }), React.createElement("input", {
        type: "file",
        onChange: this.fileChange
      })), React.createElement("input", {
        type: "text",
        value: this.state.name,
        onChange: this.nameChange,
        placeholder: "Artist Name..."
      }), React.createElement("button", null, "Save"))));
    }
  }]);

  return NewArtistModal;
}(Component);

var mdp = function mdp(dispatch) {
  return {
    close: function close() {
      return dispatch({
        type: _reducers_ui_modal__WEBPACK_IMPORTED_MODULE_0__["CLOSE_ANY"]
      });
    },
    submit: function submit(form) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["createArtist"])(form));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(null, mdp)(NewArtistModal));

/***/ }),

/***/ "./react/App/Modal/NewSongModal.js":
/*!*****************************************!*\
  !*** ./react/App/Modal/NewSongModal.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers_ui_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../reducers/ui/modal */ "./react/reducers/ui/modal.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions */ "./react/actions/index.js");
/* harmony import */ var _UploadTypeToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadTypeToggle */ "./react/App/Modal/UploadTypeToggle.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;
var _React = React,
    Component = _React.Component;


var NewAlbumModal =
/*#__PURE__*/
function (_Component) {
  _inherits(NewAlbumModal, _Component);

  function NewAlbumModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NewAlbumModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NewAlbumModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      title: '',
      albumId: -1,
      artistId: -1,
      photo: null,
      photoUrl: '',
      uploadType: 'manual'
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "switchType", function (newType) {
      return function () {
        return _this.setState({
          uploadType: newType
        });
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "titleChange", function (e) {
      return _this.setState({
        title: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "albumChange", function (e) {
      return _this.setState({
        albumId: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "artistChange", function (e) {
      return _this.setState({
        artistId: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fileChange", function (e) {
      var reader = new FileReader();
      var file = e.currentTarget.files[0];

      reader.onloadend = function () {
        return _this.setState({
          photoUrl: reader.result,
          photo: file
        });
      };

      if (file) reader.readAsDataURL(file);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submit", function (e) {
      e.preventDefault();
      var photo = _this.state.photo;
      if (photo === null) return _this.props.close();
      var form = new FormData();
      form.append('song[img]', _this.state.photo);
      form.append('song[album_id]', _this.state.albumId);
      form.append('song[title]', _this.state.title);

      _this.props.submit(form);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "close", function (e) {
      if (e.target.className === 'create-modal') {
        _this.props.close();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "allArtists", function () {
      return React.createElement("select", {
        value: _this.state.artistId,
        onChange: _this.artistChange
      }, React.createElement("option", {
        disabled: true,
        selected: _this.state.artistId === -1,
        value: -1
      }, "Artist..."), _this.props.artists.map(function (artist) {
        return React.createElement("option", {
          key: artist.id,
          value: artist.id
        }, artist.name);
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "allAlbums", function () {
      return React.createElement("select", {
        value: _this.state.albumId,
        onChange: _this.albumChange
      }, React.createElement("option", {
        disabled: true,
        selected: _this.state.albumId === -1,
        value: -1
      }, "Album..."), _this.props.albums.filter(function (album) {
        return album.artistId == _this.state.artistId;
      }).map(function (album) {
        return React.createElement("option", {
          key: album.id,
          value: album.id
        }, album.title);
      }));
    });

    return _this;
  }

  _createClass(NewAlbumModal, [{
    key: "render",
    value: function render() {
      var isManual = this.state.uploadType === 'manual';
      return React.createElement("div", {
        className: "create-modal",
        onClick: this.close
      }, React.createElement("div", {
        className: "create-modal-content ".concat(isManual ? '' : 'youtube')
      }, React.createElement("form", {
        onSubmit: this.submit
      }, React.createElement("h2", null, "Add New Song"), React.createElement("p", null, "Add a new song from here. You can either upload an audio file or download one from a youtube video:"), React.createElement("input", {
        type: "text",
        value: this.state.title,
        onChange: this.titleChange,
        placeholder: "Song Title..."
      }), this.allArtists(), this.allAlbums(), React.createElement(_UploadTypeToggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        photoUrl: this.state.photoUrl,
        fileChange: this.fileChange,
        isManual: isManual,
        switchType: this.switchType
      }, React.createElement("button", null, "Save")))));
    }
  }]);

  return NewAlbumModal;
}(Component);

var msp = function msp(state) {
  return {
    artists: Object.values(state.entities.artists),
    albums: Object.values(state.entities.albums)
  };
};

var mdp = function mdp(dispatch) {
  return {
    close: function close() {
      return dispatch({
        type: _reducers_ui_modal__WEBPACK_IMPORTED_MODULE_0__["CLOSE_ANY"]
      });
    },
    submit: function submit(form) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["createAlbum"])(form));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(msp, mdp)(NewAlbumModal));

/***/ }),

/***/ "./react/App/Modal/UploadTypeToggle.js":
/*!*********************************************!*\
  !*** ./react/App/Modal/UploadTypeToggle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _React = React,
    Component = _React.Component;

var UploadTypeToggle =
/*#__PURE__*/
function (_Component) {
  _inherits(UploadTypeToggle, _Component);

  function UploadTypeToggle() {
    _classCallCheck(this, UploadTypeToggle);

    return _possibleConstructorReturn(this, _getPrototypeOf(UploadTypeToggle).apply(this, arguments));
  }

  _createClass(UploadTypeToggle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          photoUrl = _this$props.photoUrl,
          fileChange = _this$props.fileChange,
          isManual = _this$props.isManual,
          switchType = _this$props.switchType,
          children = _this$props.children;
      return React.createElement("div", null, React.createElement("ul", {
        className: "modal-tabs"
      }, React.createElement("li", {
        className: isManual ? 'active' : '',
        onClick: switchType('manual')
      }, "Upload Manually"), React.createElement("li", {
        className: isManual ? '' : 'active',
        onClick: switchType('youtube')
      }, "Youtube")), React.createElement("div", {
        className: "modal-tab-view"
      }, isManual ? React.createElement("div", null, React.createElement("div", {
        className: "image-input"
      }, React.createElement("img", {
        src: photoUrl || '#'
      }), React.createElement("input", {
        type: "file",
        onChange: fileChange
      })), children) : React.createElement("div", null, "Youtube", children)));
    }
  }]);

  return UploadTypeToggle;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (UploadTypeToggle);

/***/ }),

/***/ "./react/App/Modal/index.js":
/*!**********************************!*\
  !*** ./react/App/Modal/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewArtistModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewArtistModal */ "./react/App/Modal/NewArtistModal.js");
/* harmony import */ var _NewAlbumModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewAlbumModal */ "./react/App/Modal/NewAlbumModal.js");
/* harmony import */ var _NewSongModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewSongModal */ "./react/App/Modal/NewSongModal.js");
var _React = React,
    Component = _React.Component;
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;




var Modal = function Modal(_ref) {
  var modal = _ref.modal;

  switch (modal) {
    case 'newArtist':
      return React.createElement(_NewArtistModal__WEBPACK_IMPORTED_MODULE_0__["default"], null);

    case 'newAlbum':
      return React.createElement(_NewAlbumModal__WEBPACK_IMPORTED_MODULE_1__["default"], null);

    case 'newSong':
      return React.createElement(_NewSongModal__WEBPACK_IMPORTED_MODULE_2__["default"], null);

    default:
      return React.createElement("div", null);
  }
};

var msp = function msp(state) {
  return {
    modal: state.ui.modal
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(msp)(Modal));

/***/ }),

/***/ "./react/App/Session/Form.js":
/*!***********************************!*\
  !*** ./react/App/Session/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _React = React,
    Component = _React.Component;
var _ReactRouter = ReactRouter,
    Link = _ReactRouter.Link;

var Form =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Form)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      email: '',
      password: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "change", function (field) {
      return function (e) {
        return _this.setState(_defineProperty({}, field, e.target.value));
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submit", function (e) {
      e.preventDefault();

      _this.props.submit(_this.state);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "demo", function (e) {
      e.preventDefault();

      _this.props.demo();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "oppositeType", function () {
      return _this.props.type === 'Log In' ? 'Sign Up' : 'Log In';
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "oppositeLink", function () {
      return _this.props.type === 'Log In' ? '/signup' : '/login';
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderErrors", function (type) {
      var errors = _this.props.errors || {};

      if (Object.keys(errors).length > 0) {
        var errorList = _toConsumableArray(errors[type]);

        if (type === 'password') {
          errorList = errorList.concat(errors['general']);
        }

        if (errorList.length > 0) {
          return errorList.map(function (msg) {
            return React.createElement("p", {
              className: "error"
            }, msg);
          });
        }
      }

      return React.createElement("p", {
        className: "error"
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return React.createElement("div", {
        className: "session-form"
      }, React.createElement("form", {
        onSubmit: _this.submit
      }, React.createElement(Link, {
        to: "/"
      }, React.createElement("img", {
        className: "logo",
        src: "https://s3-us-west-1.amazonaws.com/react-spotify-aa/react.png"
      })), React.createElement("h1", null, _this.props.type), React.createElement("input", {
        type: "text",
        onChange: _this.change('email'),
        value: _this.state.email,
        placeholder: "Email"
      }), _this.renderErrors('email'), React.createElement("input", {
        type: "password",
        onChange: _this.change('password'),
        value: _this.state.password,
        placeholder: "Password"
      }), _this.renderErrors('password'), React.createElement("button", {
        type: "submit"
      }, _this.props.type), React.createElement("button", {
        onClick: _this.demo,
        className: "demo"
      }, "Demo"), React.createElement("h2", null, "or", ' ', React.createElement(Link, {
        to: _this.oppositeLink()
      }, _this.oppositeType()))));
    });

    return _this;
  }

  _createClass(Form, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (this.props.loggedIn) {
        window.location.replace('/#/browse');
      }

      if (this.props.type !== oldProps.type) {
        this.props.clear();
      }
    }
  }]);

  return Form;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./react/App/Session/Login.js":
/*!************************************!*\
  !*** ./react/App/Session/Login.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./react/actions/index.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./react/App/Session/Form.js");
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;



var mstp = function mstp(state) {
  return {
    type: 'Log In',
    loggedIn: state.session,
    errors: state.errors.session
  };
};

var mdtp = function mdtp(dispatch) {
  return {
    submit: function submit(user) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["login"])(user));
    },
    demo: function demo() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["login"])({
        email: 'Andy5@email.com',
        password: 'password'
      }));
    },
    clear: function clear() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["clear"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(mstp, mdtp)(_Form__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./react/App/Session/SignUp.js":
/*!*************************************!*\
  !*** ./react/App/Session/SignUp.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./react/actions/index.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./react/App/Session/Form.js");
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;



var mstp = function mstp(state) {
  return {
    type: 'Sign Up',
    loggedIn: state.session,
    errors: state.errors.session
  };
};

var mdtp = function mdtp(dispatch) {
  return {
    submit: function submit(user) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["signup"])(user));
    },
    demo: function demo() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["login"])({
        email: 'Andy5@email.com',
        password: 'password'
      }));
    },
    clear: function clear() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["clear"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(mstp, mdtp)(_Form__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./react/App/Session/index.js":
/*!************************************!*\
  !*** ./react/App/Session/index.js ***!
  \************************************/
/*! exports provided: SignUp, Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return SignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUp */ "./react/App/Session/SignUp.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login */ "./react/App/Session/Login.js");


var SignUp = _SignUp__WEBPACK_IMPORTED_MODULE_0__["default"];
var Login = _Login__WEBPACK_IMPORTED_MODULE_1__["default"];

/***/ }),

/***/ "./react/App/Splash/Nav.js":
/*!*********************************!*\
  !*** ./react/App/Splash/Nav.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./react/actions/index.js");
var _ReactRouter = ReactRouter,
    Link = _ReactRouter.Link;
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;


var Nav = function Nav(_ref) {
  var demo = _ref.demo;
  return React.createElement("nav", {
    className: "nav"
  }, React.createElement(Link, {
    to: "/"
  }, React.createElement("img", {
    className: "logo",
    src: "https://s3-us-west-1.amazonaws.com/react-spotify-aa/react.png"
  })), React.createElement("ul", {
    className: "nav-links"
  }, React.createElement(Link, {
    to: "/signup"
  }, "Sign Up"), React.createElement(Link, {
    to: "/login"
  }, "Log In"), React.createElement("a", {
    onClick: demo
  }, "Demo")));
};

var mdtp = function mdtp(dispatch) {
  return {
    demo: function demo() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["login"])({
        email: 'Andy5@email.com',
        password: 'password'
      }));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(null, mdtp)(Nav));

/***/ }),

/***/ "./react/App/Splash/index.js":
/*!***********************************!*\
  !*** ./react/App/Splash/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav */ "./react/App/Splash/Nav.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _React = React,
    Component = _React.Component;
var _ReactRedux = ReactRedux,
    connect = _ReactRedux.connect;
var _ReactRouter = ReactRouter,
    Link = _ReactRouter.Link;


var Splash =
/*#__PURE__*/
function (_Component) {
  _inherits(Splash, _Component);

  function Splash() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Splash);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Splash)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return React.createElement("div", {
        className: "splash-main"
      }, React.createElement(_Nav__WEBPACK_IMPORTED_MODULE_0__["default"], null), React.createElement("div", {
        className: "splash"
      }, React.createElement("h1", null, "Music for Everyone."), React.createElement(Link, {
        to: "/login"
      }, React.createElement("button", {
        className: "login"
      }, "Log In")), React.createElement("h2", null, "A free music player built using custom implementations of the following frontend libraries:"), React.createElement("ul", {
        className: "splash-ul"
      }, React.createElement("li", null, "React"), React.createElement("li", null, "Redux"), React.createElement("li", null, "React Redux"), React.createElement("li", null, "React Router DOM"))));
    });

    return _this;
  }

  _createClass(Splash, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.loggedIn) {
        this.props.history.push('/browse');
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.loggedIn) {
        this.props.history.push('/browse');
      }
    }
  }]);

  return Splash;
}(Component);

var mstp = function mstp(state) {
  return {
    loggedIn: state.session
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(mstp)(Splash));

/***/ }),

/***/ "./react/App/index.js":
/*!****************************!*\
  !*** ./react/App/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Session */ "./react/App/Session/index.js");
/* harmony import */ var _Splash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Splash */ "./react/App/Splash/index.js");
/* harmony import */ var _Browse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Browse */ "./react/App/Browse/index.js");



var _ReactRouter = ReactRouter,
    HashRouter = _ReactRouter.HashRouter,
    Route = _ReactRouter.Route;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return React.createElement(HashRouter, null, React.createElement("div", null, React.createElement(Route, {
    exact: true,
    path: "/login",
    component: _Session__WEBPACK_IMPORTED_MODULE_0__["Login"]
  }), React.createElement(Route, {
    exact: true,
    path: "/signup",
    component: _Session__WEBPACK_IMPORTED_MODULE_0__["SignUp"]
  }), React.createElement(Route, {
    path: "/browse",
    component: _Browse__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), React.createElement(Route, {
    path: "/browse/albums/:albumId",
    component: _Browse__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), React.createElement(Route, {
    exact: true,
    path: "/",
    component: _Splash__WEBPACK_IMPORTED_MODULE_1__["default"]
  })));
});

/***/ }),

/***/ "./react/actions/index.js":
/*!********************************!*\
  !*** ./react/actions/index.js ***!
  \********************************/
/*! exports provided: RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, CLEAR_ERRORS, RECEIVE_SONGS, CHANGE_MENU, SELECT_SONG, PLAY, PAUSE, RECEIVE_ALBUMS, RECEIVE_ARTIST, RECEIVE_ALBUM, signup, login, logout, clear, fetchSongs, selectSong, play, pause, seekLeft, seekRight, playFirst, fetchAlbums, playAlbum, createArtist, createAlbum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_CURRENT_USER", function() { return RECEIVE_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CURRENT_USER", function() { return REMOVE_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_SESSION_ERRORS", function() { return RECEIVE_SESSION_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ERRORS", function() { return CLEAR_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_SONGS", function() { return RECEIVE_SONGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_MENU", function() { return CHANGE_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_SONG", function() { return SELECT_SONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAY", function() { return PLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAUSE", function() { return PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_ALBUMS", function() { return RECEIVE_ALBUMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_ARTIST", function() { return RECEIVE_ARTIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_ALBUM", function() { return RECEIVE_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSongs", function() { return fetchSongs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSong", function() { return selectSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "play", function() { return play; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pause", function() { return pause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seekLeft", function() { return seekLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seekRight", function() { return seekRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playFirst", function() { return playFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAlbums", function() { return fetchAlbums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playAlbum", function() { return playAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArtist", function() { return createArtist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAlbum", function() { return createAlbum; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var RECEIVE_CURRENT_USER = 'RECEIVE_USER';
var REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
var RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
var CLEAR_ERRORS = 'CLEAR_ERRORS';
var RECEIVE_SONGS = 'RECEIVE_SONGS';
var CHANGE_MENU = 'CHANGE_MENU';
var SELECT_SONG = 'SELECT_SONG';
var PLAY = 'PLAY';
var PAUSE = 'PAUSE';
var RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
var RECEIVE_ARTIST = 'RECEIVE_ARTIST';
var RECEIVE_ALBUM = 'RECEIVE_ALBUM';
var signup = function signup(user) {
  return function (dispatch) {
    return $.ajax({
      method: 'post',
      url: '/api/users',
      data: {
        user: user
      }
    }).then(function (user) {
      return dispatch({
        type: RECEIVE_CURRENT_USER,
        user: user
      });
    }, function (errors) {
      return dispatch({
        type: RECEIVE_SESSION_ERRORS,
        errors: errors
      });
    });
  };
};
var login = function login(user) {
  return function (dispatch) {
    return $.ajax({
      method: 'post',
      url: '/api/session',
      data: {
        user: user
      }
    }).then(function (user) {
      return dispatch({
        type: RECEIVE_CURRENT_USER,
        user: user
      });
    }, function (errors) {
      return dispatch({
        type: RECEIVE_SESSION_ERRORS,
        errors: errors
      });
    });
  };
};
var logout = function logout() {
  return function (dispatch) {
    return $.ajax({
      method: 'delete',
      url: '/api/session'
    }).then(function () {
      return dispatch({
        type: REMOVE_CURRENT_USER
      });
    });
  };
};
var clear = function clear() {
  return {
    type: CLEAR_ERRORS
  };
};
var fetchSongs = function fetchSongs() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return function (dispatch) {
    return $.ajax({
      method: 'get',
      url: "/api/songs?query=".concat(query)
    }).then(function (payload) {
      return dispatch({
        type: RECEIVE_SONGS,
        payload: payload
      });
    });
  };
};
var selectSong = function selectSong(songId, queue) {
  return {
    type: SELECT_SONG,
    songId: songId,
    queue: queue
  };
};
var play = function play() {
  return {
    type: PLAY
  };
};
var pause = function pause() {
  return {
    type: PAUSE
  };
};
var seekLeft = function seekLeft() {
  return function (dispatch, getState) {
    var _queue = getState().ui.queue;

    var queue = _toConsumableArray(_queue);

    var prevSong = queue.pop();
    queue.unshift(prevSong);
    dispatch(selectSong(queue[0], queue));
  };
};
var seekRight = function seekRight() {
  return function (dispatch, getState) {
    var _queue = getState().ui.queue;

    var queue = _toConsumableArray(_queue);

    var nextSong = queue.shift();
    queue.push(nextSong);
    dispatch(selectSong(queue[0], queue));
  };
};
var playFirst = function playFirst() {
  return function (dispatch, getState) {
    var _queue = getState().ui.queue;

    var queue = _toConsumableArray(_queue);

    dispatch(selectSong(queue[0], queue));
  };
};
var fetchAlbums = function fetchAlbums() {
  return function (dispatch) {
    return $.ajax({
      method: 'get',
      url: '/api/albums'
    }).then(function (albums) {
      return dispatch({
        type: RECEIVE_ALBUMS,
        albums: albums
      });
    });
  };
};
var playAlbum = function playAlbum(id, cb) {
  return function (dispatch) {
    return $.ajax({
      method: 'get',
      url: "/api/albums/".concat(id)
    }).then(function (payload) {
      return dispatch({
        type: RECEIVE_SONGS,
        payload: payload
      });
    }).then(function () {
      if (cb) cb();
    });
  };
};
var createArtist = function createArtist(form) {
  return function (dispatch) {
    return $.ajax({
      method: 'post',
      url: '/api/artists',
      data: form,
      processData: false,
      contentType: false
    }).then(function (artist) {
      return dispatch({
        type: RECEIVE_ARTIST,
        artist: artist
      });
    });
  };
};
var createAlbum = function createAlbum(form) {
  return function (dispatch) {
    return $.ajax({
      method: 'post',
      url: '/api/albums',
      data: form,
      processData: false,
      contentType: false
    }).then(function (album) {
      return dispatch({
        type: RECEIVE_ALBUM,
        album: album
      });
    });
  };
};

/***/ }),

/***/ "./react/index.js":
/*!************************!*\
  !*** ./react/index.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _litebraries_ReactLite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./litebraries/ReactLite */ "./react/litebraries/ReactLite/index.js");
/* harmony import */ var _litebraries_ReduxLite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./litebraries/ReduxLite */ "./react/litebraries/ReduxLite/index.js");
/* harmony import */ var _litebraries_ReactReduxLite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./litebraries/ReactReduxLite */ "./react/litebraries/ReactReduxLite/index.js");
/* harmony import */ var _litebraries_ReactRouterLite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./litebraries/ReactRouterLite */ "./react/litebraries/ReactRouterLite/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./react/reducers/index.js");
/* harmony import */ var _middlewares_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middlewares/thunk */ "./react/middlewares/thunk.js");
/* harmony import */ var _middlewares_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middlewares/logger */ "./react/middlewares/logger.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App */ "./react/App/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var _Redux = Redux,
    createStore = _Redux.createStore,
    applyMiddleware = _Redux.applyMiddleware;
var _ReactRedux = ReactRedux,
    Provider = _ReactRedux.Provider;




document.addEventListener('DOMContentLoaded', function () {
  var preloaded;

  if (window.currentUser) {
    var _window = window,
        user = _window.currentUser;
    preloaded = {
      entities: {
        users: _defineProperty({}, user.id, user)
      },
      session: user.id
    };
  } else {
    preloaded = {};
  }

  var store = createStore(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], preloaded, applyMiddleware(_middlewares_thunk__WEBPACK_IMPORTED_MODULE_5__["default"], _middlewares_logger__WEBPACK_IMPORTED_MODULE_6__["default"]));
  window.store = store;
  React.render(React.createElement(Provider, {
    store: store,
    Component: _App__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), document.getElementById('app'));
});

/***/ }),

/***/ "./react/litebraries/ReactLite/index.js":
/*!**********************************************!*\
  !*** ./react/litebraries/ReactLite/index.js ***!
  \**********************************************/
/*! exports provided: render, createElement, Component, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/render.js */ "./react/litebraries/ReactLite/lib/render.js");
/* harmony import */ var _lib_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/createElement */ "./react/litebraries/ReactLite/lib/createElement.js");
/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/Component */ "./react/litebraries/ReactLite/lib/Component.js");



var render = _lib_render_js__WEBPACK_IMPORTED_MODULE_0__["default"];
var createElement = _lib_createElement__WEBPACK_IMPORTED_MODULE_1__["default"];
var Component = _lib_Component__WEBPACK_IMPORTED_MODULE_2__["default"];
var React = {
  render: render,
  createElement: createElement,
  Component: Component
};
window.React = React;
/* harmony default export */ __webpack_exports__["default"] = (React);

/***/ }),

/***/ "./react/litebraries/ReactLite/lib/Component.js":
/*!******************************************************!*\
  !*** ./react/litebraries/ReactLite/lib/Component.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _updateContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateContainer */ "./react/litebraries/ReactLite/lib/updateContainer.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Component =
/*#__PURE__*/
function () {
  function Component(props) {
    _classCallCheck(this, Component);

    this.props = props;
    this.state = this.state || {};
  }

  _createClass(Component, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "setState",
    value: function setState(partialState) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      this.state = Object.assign({}, this.state, partialState);
      Object(_updateContainer__WEBPACK_IMPORTED_MODULE_0__["default"])(this.__internalContainer, callback);
    }
  }]);

  return Component;
}();

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./react/litebraries/ReactLite/lib/createContainer.js":
/*!************************************************************!*\
  !*** ./react/litebraries/ReactLite/lib/createContainer.js ***!
  \************************************************************/
/*! exports provided: createDOMContainer, createReactContainer, createContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDOMContainer", function() { return createDOMContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReactContainer", function() { return createReactContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContainer", function() { return createContainer; });
/* harmony import */ var _updateAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateAttributes */ "./react/litebraries/ReactLite/lib/updateAttributes.js");
/* harmony import */ var _flattenChildren__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flattenChildren */ "./react/litebraries/ReactLite/lib/flattenChildren.js");
/* harmony import */ var _scenarios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenarios */ "./react/litebraries/ReactLite/lib/scenarios.js");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createElement */ "./react/litebraries/ReactLite/lib/createElement.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





var createDOMContainer = function createDOMContainer(element) {
  var type = element.type,
      props = element.props;
  var dom = type === "TEXT" ? document.createTextNode("") : document.createElement(type);
  Object(_updateAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(dom, {}, props);
  var childElements = props.children || [];
  var flattenedChildren = Object(_flattenChildren__WEBPACK_IMPORTED_MODULE_1__["default"])(childElements);
  var childContainers = flattenedChildren.map(createContainer).filter(function (c) {
    return !!c;
  });
  var nextChildElements = childContainers.map(function (child) {
    return child.dom;
  });
  nextChildElements.forEach(function (child) {
    return dom.appendChild(child);
  });
  var container = {
    dom: dom,
    element: element,
    childContainers: childContainers
  };
  return container;
};
var createReactContainer = function createReactContainer(element) {
  var container = {};
  var publicContainer = createPublicContainer(element, container);
  var childElement = publicContainer.render();
  var childContainer = createContainer(childElement);
  var dom = childContainer.dom;
  Object.assign(container, {
    dom: dom,
    element: element,
    childContainer: childContainer,
    publicContainer: publicContainer
  });
  publicContainer.componentDidMount();
  return container;
};
var createContainer = function createContainer(element) {
  element = reduce(element);
  if (!element) element = Object(_createElement__WEBPACK_IMPORTED_MODULE_3__["default"])("TEXT", {
    nodeValue: ""
  });

  if (Object(_scenarios__WEBPACK_IMPORTED_MODULE_2__["isReactComponent"])(element)) {
    var nextContainer = createReactContainer(element);
    return nextContainer;
  } else {
    if (_typeof(element) != "object") {
      // assume text element, need further testing to support arrays of other jsx, but do something similar
      element = Object(_createElement__WEBPACK_IMPORTED_MODULE_3__["default"])("TEXT", {
        nodeValue: element
      });
    }

    var _nextContainer = createDOMContainer(element);

    return _nextContainer;
  }
};

var reduce = function reduce(element) {
  if (!element) return;

  if (Object(_scenarios__WEBPACK_IMPORTED_MODULE_2__["isFunctionalComponent"])(element)) {
    return reduce(element.type(element.props));
  }

  if (_typeof(element.type) === "object") {
    return reduce(element.type);
  }

  return element;
};

var createPublicContainer = function createPublicContainer(_ref, internalContainer) {
  var type = _ref.type,
      props = _ref.props;
  var publicContainer = new type(props);
  publicContainer.__internalContainer = internalContainer;
  return publicContainer;
};

/***/ }),

/***/ "./react/litebraries/ReactLite/lib/createElement.js":
/*!**********************************************************!*\
  !*** ./react/litebraries/ReactLite/lib/createElement.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var createElement = function createElement(type, attributes) {
  var props = Object.assign({}, attributes);

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  props.children = children.filter(function (c) {
    return c != null;
  }).map(function (child) {
    return child instanceof Object ? child : createTextElement(child);
  });
  return {
    type: type,
    props: props
  };
};

var createTextElement = function createTextElement(nodeValue) {
  return createElement('TEXT', {
    nodeValue: nodeValue
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createElement);

/***/ }),

/***/ "./react/litebraries/ReactLite/lib/flattenChildren.js":
/*!************************************************************!*\
  !*** ./react/litebraries/ReactLite/lib/flattenChildren.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var flattenChildren = function flattenChildren(children) {
  var flatChildren = [];
  children.forEach(function (child) {
    if (child.constructor.name === "Array") {
      flatChildren = flatChildren.concat(child);
    } else {
      flatChildren.push(child);
    }
  });
  return flatChildren;
};

/* harmony default export */ __webpack_exports__["default"] = (flattenChildren);

/***/ }),

/***/ "./react/litebraries/ReactLite/lib/reconcile.js":
/*!******************************************************!*\
  !*** ./react/litebraries/ReactLite/lib/reconcile.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scenarios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenarios */ "./react/litebraries/ReactLite/lib/scenarios.js");
/* harmony import */ var _createContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createContainer */ "./react/litebraries/ReactLite/lib/createContainer.js");
/* harmony import */ var _updateAttributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateAttributes */ "./react/litebraries/ReactLite/lib/updateAttributes.js");
/* harmony import */ var _flattenChildren__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flattenChildren */ "./react/litebraries/ReactLite/lib/flattenChildren.js");





var reconcile = function reconcile(parentDOMElement, previousContainer, nextElement) {
  var scenario = Object(_scenarios__WEBPACK_IMPORTED_MODULE_0__["getScenario"])(previousContainer, nextElement);
  var reactComponent = false;

  if (Object(_scenarios__WEBPACK_IMPORTED_MODULE_0__["isReactComponent"])(nextElement)) {
    reactComponent = true;
  } else if (!!nextElement && Object(_scenarios__WEBPACK_IMPORTED_MODULE_0__["isFunctionalComponent"])(nextElement)) {
    return reconcile(parentDOMElement, previousContainer, nextElement.type(nextElement.props));
  }

  var nextContainer;

  switch (scenario) {
    case _scenarios__WEBPACK_IMPORTED_MODULE_0__["ADD_NEW_ELEMENT"]:
      nextContainer = Object(_createContainer__WEBPACK_IMPORTED_MODULE_1__["createContainer"])(nextElement, previousContainer);
      parentDOMElement.appendChild(nextContainer.dom);
      return nextContainer;

    case _scenarios__WEBPACK_IMPORTED_MODULE_0__["REMOVE_EXISTING_ELEMENT"]:
      if (reactComponent) previousContainer.publicContainer.componentWillUnmount();
      parentDOMElement.removeChild(previousContainer.dom);
      return null;

    case _scenarios__WEBPACK_IMPORTED_MODULE_0__["UPDATE_EXISTING_ELEMENT"]:
      if (reactComponent) {
        var publicContainer = previousContainer.publicContainer;
        var oldProps = publicContainer.props;
        publicContainer.props = nextElement.props;
        var nextChildElement = publicContainer.render();
        nextChildElement.props.children = Object(_flattenChildren__WEBPACK_IMPORTED_MODULE_3__["default"])(nextChildElement.props.children);
        var oldChildContainer = previousContainer.childContainer;
        var nextChildContainer = reconcile(parentDOMElement, oldChildContainer, nextChildElement);
        previousContainer.dom = nextChildContainer.dom;
        previousContainer.childContainer = nextChildContainer;
        previousContainer.element = nextElement;
        publicContainer.componentDidUpdate(oldProps);
        return previousContainer;
      } else {
        Object(_updateAttributes__WEBPACK_IMPORTED_MODULE_2__["default"])(previousContainer.dom, previousContainer.element.props, nextElement.props);
        nextElement.props.children = Object(_flattenChildren__WEBPACK_IMPORTED_MODULE_3__["default"])(nextElement.props.children);
        previousContainer.childContainers = reconcileChildren(previousContainer, nextElement);
        previousContainer.element = nextElement;
        return previousContainer;
      }

    case _scenarios__WEBPACK_IMPORTED_MODULE_0__["REPLACE_EXISTING_ELEMENT"]:
      if (Object(_scenarios__WEBPACK_IMPORTED_MODULE_0__["isReactComponent"])(previousContainer.element)) {
        previousContainer.publicContainer.componentWillUnmount();
      }

      nextContainer = Object(_createContainer__WEBPACK_IMPORTED_MODULE_1__["createContainer"])(nextElement, previousContainer);

      if (!reactComponent && !parentDOMElement && previousContainer) {
        previousContainer.dom.appendChild(nextContainer.dom);
        return nextContainer;
      }

      parentDOMElement.replaceChild(nextContainer.dom, previousContainer.dom);
      return nextContainer;

    default:
      return null;
  }
};

var reconcileChildren = function reconcileChildren(_ref, nextElement) {
  var dom = _ref.dom,
      childContainers = _ref.childContainers;
  var nextChildElements = nextElement.props.children || [];
  var newChildContainers = [];
  var count = Math.max(childContainers.length, nextChildElements.length);

  for (var i = 0; i < count; i++) {
    var childContainer = childContainers[i];
    var childElement = nextChildElements[i];
    var newChildContainer = reconcile(dom, childContainer, childElement);
    newChildContainers.push(newChildContainer);
  }

  return newChildContainers;
};

/* harmony default export */ __webpack_exports__["default"] = (reconcile);

/***/ }),

/***/ "./react/litebraries/ReactLite/lib/render.js":
/*!***************************************************!*\
  !*** ./react/litebraries/ReactLite/lib/render.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reconcile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reconcile */ "./react/litebraries/ReactLite/lib/reconcile.js");

var rootContainer = null;

var render = function render(element, target) {
  var prevContainer = rootContainer;
  var nextContainer = Object(_reconcile__WEBPACK_IMPORTED_MODULE_0__["default"])(target, prevContainer, element);
  rootContainer = nextContainer;
};

/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ }),

/***/ "./react/litebraries/ReactLite/lib/scenarios.js":
/*!******************************************************!*\
  !*** ./react/litebraries/ReactLite/lib/scenarios.js ***!
  \******************************************************/
/*! exports provided: ADD_NEW_ELEMENT, UPDATE_EXISTING_ELEMENT, REPLACE_EXISTING_ELEMENT, REMOVE_EXISTING_ELEMENT, getScenario, isReactComponent, isFunctionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_NEW_ELEMENT", function() { return ADD_NEW_ELEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_EXISTING_ELEMENT", function() { return UPDATE_EXISTING_ELEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPLACE_EXISTING_ELEMENT", function() { return REPLACE_EXISTING_ELEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_EXISTING_ELEMENT", function() { return REMOVE_EXISTING_ELEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScenario", function() { return getScenario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReactComponent", function() { return isReactComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunctionalComponent", function() { return isFunctionalComponent; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./react/litebraries/ReactLite/lib/Component.js");

var ADD_NEW_ELEMENT = "ADD_NEW_ELEMENT";
var UPDATE_EXISTING_ELEMENT = "UPDATE_EXISTING_ELEMENT";
var REPLACE_EXISTING_ELEMENT = "REPLACE_EXISTING_ELEMENT";
var REMOVE_EXISTING_ELEMENT = "REMOVE_EXISTING_ELEMENT";
var getScenario = function getScenario(previousContainer, nextElement) {
  if (!previousContainer) {
    return ADD_NEW_ELEMENT;
  } else if (!nextElement) {
    return REMOVE_EXISTING_ELEMENT;
  } else if (previousContainer.element.type === nextElement.type) {
    return UPDATE_EXISTING_ELEMENT;
  } else {
    return REPLACE_EXISTING_ELEMENT;
  }
};
var isReactComponent = function isReactComponent(element) {
  if (!element || !element.type) {
    return false;
  }

  return element.type.prototype instanceof _Component__WEBPACK_IMPORTED_MODULE_0__["default"];
};
var isFunctionalComponent = function isFunctionalComponent(element) {
  return typeof element.type === "function" && !isReactComponent(element);
};

/***/ }),

/***/ "./react/litebraries/ReactLite/lib/updateAttributes.js":
/*!*************************************************************!*\
  !*** ./react/litebraries/ReactLite/lib/updateAttributes.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var updateAttributes = function updateAttributes(dom, props, nextProps) {
  Object.keys(props).forEach(function (propName) {
    if (propName === "children") {} else if (propName.startsWith('on')) {
      var event = propName.slice(2).toLowerCase();
      dom.removeEventListener(event, props[propName]);
    } else {
      dom[propName] = null;
    }
  });
  Object.keys(nextProps).forEach(function (propName) {
    if (propName === "children") {} else if (propName.startsWith('on')) {
      var event = propName.slice(2).toLowerCase();
      dom.addEventListener(event, nextProps[propName]);
    } else {
      dom[propName] = nextProps[propName];
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (updateAttributes);

/***/ }),

/***/ "./react/litebraries/ReactLite/lib/updateContainer.js":
/*!************************************************************!*\
  !*** ./react/litebraries/ReactLite/lib/updateContainer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reconcile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reconcile */ "./react/litebraries/ReactLite/lib/reconcile.js");


var updateContainer = function updateContainer(internalContainer, callback) {
  var parentNode = internalContainer.dom.parentNode;
  var element = internalContainer.element;
  Object(_reconcile__WEBPACK_IMPORTED_MODULE_0__["default"])(parentNode, internalContainer, element);
  callback();
};

/* harmony default export */ __webpack_exports__["default"] = (updateContainer);

/***/ }),

/***/ "./react/litebraries/ReactReduxLite/index.js":
/*!***************************************************!*\
  !*** ./react/litebraries/ReactReduxLite/index.js ***!
  \***************************************************/
/*! exports provided: Provider, connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var React = window.React;
var Component = React.Component;
var store = null;
var Provider =
/*#__PURE__*/
function (_Component) {
  _inherits(Provider, _Component);

  function Provider(props) {
    var _this;

    _classCallCheck(this, Provider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Provider).call(this, props));
    store = props.store;
    return _this;
  }

  _createClass(Provider, [{
    key: "render",
    value: function render() {
      var Component = this.props.Component;
      return React.createElement(Component, null);
    }
  }]);

  return Provider;
}(Component);

var Connect =
/*#__PURE__*/
function (_Component2) {
  _inherits(Connect, _Component2);

  function Connect(props) {
    var _this2;

    _classCallCheck(this, Connect);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Connect).call(this, props));

    var _store = store.getState();

    _this2.state = {
      store: _store
    };
    store.subscribe(_this2.setReduxState.bind(_assertThisInitialized(_assertThisInitialized(_this2))));
    return _this2;
  }

  _createClass(Connect, [{
    key: "setReduxState",
    value: function setReduxState(nextState) {
      this.setState({
        store: nextState
      });
    }
  }, {
    key: "render",
    value: function render() {
      var newProps = this.props.newProps || {};
      var childProps = Object.assign({}, newProps, this.props);
      var _this$props = this.props,
          mstp = _this$props.mstp,
          mdtp = _this$props.mdtp;
      var readProps = {};
      if (mstp) readProps = mstp(this.state.store, newProps);
      var writeProps = {};
      if (mdtp) writeProps = mdtp(store.dispatch);
      var allProps = Object.assign({}, childProps, readProps, writeProps);
      delete allProps['childComp'];
      delete allProps['mstp'];
      delete allProps['mdtp'];
      delete allProps['Component'];
      delete allProps['newProps'];
      var Component = this.props.Component;
      return React.createElement(Component, allProps);
    }
  }]);

  return Connect;
}(Component);

var connect = function connect(mstp, mdtp) {
  return function (Component) {
    return function (newProps) {
      return React.createElement(Connect, {
        Component: Component,
        mstp: mstp,
        mdtp: mdtp,
        newProps: newProps
      });
    };
  };
};
var ReactRedux = {
  connect: connect,
  Provider: Provider
};
window.ReactRedux = ReactRedux;

/***/ }),

/***/ "./react/litebraries/ReactRouterLite/index.js":
/*!****************************************************!*\
  !*** ./react/litebraries/ReactRouterLite/index.js ***!
  \****************************************************/
/*! exports provided: HashRouter, Route, Link, Redirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return HashRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return Redirect; });
/* harmony import */ var url_pattern__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-pattern */ "./react/litebraries/ReactRouterLite/node_modules/url-pattern/lib/url-pattern.js");
/* harmony import */ var url_pattern__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_pattern__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


var Component = window.React.Component;
var routes = [];
var HashRouter =
/*#__PURE__*/
function (_Component) {
  _inherits(HashRouter, _Component);

  function HashRouter(props) {
    var _this;

    _classCallCheck(this, HashRouter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HashRouter).call(this, props));
    _this.routes = routes;

    _this.routes.push(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.broadcastHashChange = _this.broadcastHashChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    if (!window.location.hash.includes('#')) {
      window.location.replace('/#/');
    }

    window.addEventListener('hashchange', _this.broadcastHashChange);
    _this.state = {
      urlPath: '/'
    };
    return _this;
  }

  _createClass(HashRouter, [{
    key: "onHashChange",
    value: function onHashChange(urlPath) {
      this.setState({
        urlPath: urlPath
      });
    }
  }, {
    key: "broadcastHashChange",
    value: function broadcastHashChange() {
      var urlPath = window.location.hash.split('#')[1];
      this.routes.forEach(function (route) {
        return route.onHashChange(urlPath);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.props.children);
    }
  }]);

  return HashRouter;
}(Component);
var Route =
/*#__PURE__*/
function (_Component2) {
  _inherits(Route, _Component2);

  function Route(props) {
    var _this2;

    _classCallCheck(this, Route);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Route).call(this, props));
    routes.push(_assertThisInitialized(_assertThisInitialized(_this2)));
    _this2.pattern = new url_pattern__WEBPACK_IMPORTED_MODULE_0___default.a(_this2.props.path);
    _this2.state = {
      urlPath: window.location.hash.split('#')[1]
    };
    _this2.onHashChange = _this2.onHashChange.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
    _this2.history = {
      push: function push(path) {
        return window.location.replace("/#".concat(path));
      }
    };
    return _this2;
  }

  _createClass(Route, [{
    key: "onHashChange",
    value: function onHashChange(urlPath) {
      this.setState({
        urlPath: urlPath
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Comp = this.props.component;
      var params = this.pattern.match(this.state.urlPath);
      if (!params) return React.createElement("span", null);
      if (this.props.exact && this.state.urlPath !== this.props.path) return React.createElement("span", null);
      var match = {
        params: params
      };
      return React.createElement(Comp, {
        match: match,
        history: this.history
      });
    }
  }]);

  return Route;
}(Component);
var Link = function Link(_ref) {
  var to = _ref.to,
      children = _ref.children;
  return React.createElement("a", {
    onClick: function onClick() {
      return window.location.replace("/#".concat(to));
    }
  }, children);
};
var Redirect = function Redirect(_ref2) {
  var to = _ref2.to;
  window.location.replace("/#".concat(to));
  return React.createElement("div", null);
};
var ReactRouter = {
  Link: Link,
  Redirect: Redirect,
  HashRouter: HashRouter,
  Route: Route
};
window.ReactRouter = ReactRouter;

/***/ }),

/***/ "./react/litebraries/ReactRouterLite/node_modules/url-pattern/lib/url-pattern.js":
/*!***************************************************************************************!*\
  !*** ./react/litebraries/ReactRouterLite/node_modules/url-pattern/lib/url-pattern.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by CoffeeScript 1.10.0
var slice = [].slice;

(function(root, factory) {
  if (( true) && (__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") != null)) {
    return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( true && exports !== null) {
    return module.exports = factory();
  } else {
    return root.UrlPattern = factory();
  }
})(this, function() {
  var P, UrlPattern, astNodeContainsSegmentsForProvidedParams, astNodeToNames, astNodeToRegexString, baseAstNodeToRegexString, concatMap, defaultOptions, escapeForRegex, getParam, keysAndValuesToObject, newParser, regexGroupCount, stringConcatMap, stringify;
  escapeForRegex = function(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  };
  concatMap = function(array, f) {
    var i, length, results;
    results = [];
    i = -1;
    length = array.length;
    while (++i < length) {
      results = results.concat(f(array[i]));
    }
    return results;
  };
  stringConcatMap = function(array, f) {
    var i, length, result;
    result = '';
    i = -1;
    length = array.length;
    while (++i < length) {
      result += f(array[i]);
    }
    return result;
  };
  regexGroupCount = function(regex) {
    return (new RegExp(regex.toString() + '|')).exec('').length - 1;
  };
  keysAndValuesToObject = function(keys, values) {
    var i, key, length, object, value;
    object = {};
    i = -1;
    length = keys.length;
    while (++i < length) {
      key = keys[i];
      value = values[i];
      if (value == null) {
        continue;
      }
      if (object[key] != null) {
        if (!Array.isArray(object[key])) {
          object[key] = [object[key]];
        }
        object[key].push(value);
      } else {
        object[key] = value;
      }
    }
    return object;
  };
  P = {};
  P.Result = function(value, rest) {
    this.value = value;
    this.rest = rest;
  };
  P.Tagged = function(tag, value) {
    this.tag = tag;
    this.value = value;
  };
  P.tag = function(tag, parser) {
    return function(input) {
      var result, tagged;
      result = parser(input);
      if (result == null) {
        return;
      }
      tagged = new P.Tagged(tag, result.value);
      return new P.Result(tagged, result.rest);
    };
  };
  P.regex = function(regex) {
    return function(input) {
      var matches, result;
      matches = regex.exec(input);
      if (matches == null) {
        return;
      }
      result = matches[0];
      return new P.Result(result, input.slice(result.length));
    };
  };
  P.sequence = function() {
    var parsers;
    parsers = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return function(input) {
      var i, length, parser, rest, result, values;
      i = -1;
      length = parsers.length;
      values = [];
      rest = input;
      while (++i < length) {
        parser = parsers[i];
        result = parser(rest);
        if (result == null) {
          return;
        }
        values.push(result.value);
        rest = result.rest;
      }
      return new P.Result(values, rest);
    };
  };
  P.pick = function() {
    var indexes, parsers;
    indexes = arguments[0], parsers = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    return function(input) {
      var array, result;
      result = P.sequence.apply(P, parsers)(input);
      if (result == null) {
        return;
      }
      array = result.value;
      result.value = array[indexes];
      return result;
    };
  };
  P.string = function(string) {
    var length;
    length = string.length;
    return function(input) {
      if (input.slice(0, length) === string) {
        return new P.Result(string, input.slice(length));
      }
    };
  };
  P.lazy = function(fn) {
    var cached;
    cached = null;
    return function(input) {
      if (cached == null) {
        cached = fn();
      }
      return cached(input);
    };
  };
  P.baseMany = function(parser, end, stringResult, atLeastOneResultRequired, input) {
    var endResult, parserResult, rest, results;
    rest = input;
    results = stringResult ? '' : [];
    while (true) {
      if (end != null) {
        endResult = end(rest);
        if (endResult != null) {
          break;
        }
      }
      parserResult = parser(rest);
      if (parserResult == null) {
        break;
      }
      if (stringResult) {
        results += parserResult.value;
      } else {
        results.push(parserResult.value);
      }
      rest = parserResult.rest;
    }
    if (atLeastOneResultRequired && results.length === 0) {
      return;
    }
    return new P.Result(results, rest);
  };
  P.many1 = function(parser) {
    return function(input) {
      return P.baseMany(parser, null, false, true, input);
    };
  };
  P.concatMany1Till = function(parser, end) {
    return function(input) {
      return P.baseMany(parser, end, true, true, input);
    };
  };
  P.firstChoice = function() {
    var parsers;
    parsers = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return function(input) {
      var i, length, parser, result;
      i = -1;
      length = parsers.length;
      while (++i < length) {
        parser = parsers[i];
        result = parser(input);
        if (result != null) {
          return result;
        }
      }
    };
  };
  newParser = function(options) {
    var U;
    U = {};
    U.wildcard = P.tag('wildcard', P.string(options.wildcardChar));
    U.optional = P.tag('optional', P.pick(1, P.string(options.optionalSegmentStartChar), P.lazy(function() {
      return U.pattern;
    }), P.string(options.optionalSegmentEndChar)));
    U.name = P.regex(new RegExp("^[" + options.segmentNameCharset + "]+"));
    U.named = P.tag('named', P.pick(1, P.string(options.segmentNameStartChar), P.lazy(function() {
      return U.name;
    })));
    U.escapedChar = P.pick(1, P.string(options.escapeChar), P.regex(/^./));
    U["static"] = P.tag('static', P.concatMany1Till(P.firstChoice(P.lazy(function() {
      return U.escapedChar;
    }), P.regex(/^./)), P.firstChoice(P.string(options.segmentNameStartChar), P.string(options.optionalSegmentStartChar), P.string(options.optionalSegmentEndChar), U.wildcard)));
    U.token = P.lazy(function() {
      return P.firstChoice(U.wildcard, U.optional, U.named, U["static"]);
    });
    U.pattern = P.many1(P.lazy(function() {
      return U.token;
    }));
    return U;
  };
  defaultOptions = {
    escapeChar: '\\',
    segmentNameStartChar: ':',
    segmentValueCharset: 'a-zA-Z0-9-_~ %',
    segmentNameCharset: 'a-zA-Z0-9',
    optionalSegmentStartChar: '(',
    optionalSegmentEndChar: ')',
    wildcardChar: '*'
  };
  baseAstNodeToRegexString = function(astNode, segmentValueCharset) {
    if (Array.isArray(astNode)) {
      return stringConcatMap(astNode, function(node) {
        return baseAstNodeToRegexString(node, segmentValueCharset);
      });
    }
    switch (astNode.tag) {
      case 'wildcard':
        return '(.*?)';
      case 'named':
        return "([" + segmentValueCharset + "]+)";
      case 'static':
        return escapeForRegex(astNode.value);
      case 'optional':
        return '(?:' + baseAstNodeToRegexString(astNode.value, segmentValueCharset) + ')?';
    }
  };
  astNodeToRegexString = function(astNode, segmentValueCharset) {
    if (segmentValueCharset == null) {
      segmentValueCharset = defaultOptions.segmentValueCharset;
    }
    return '^' + baseAstNodeToRegexString(astNode, segmentValueCharset) + '$';
  };
  astNodeToNames = function(astNode) {
    if (Array.isArray(astNode)) {
      return concatMap(astNode, astNodeToNames);
    }
    switch (astNode.tag) {
      case 'wildcard':
        return ['_'];
      case 'named':
        return [astNode.value];
      case 'static':
        return [];
      case 'optional':
        return astNodeToNames(astNode.value);
    }
  };
  getParam = function(params, key, nextIndexes, sideEffects) {
    var index, maxIndex, result, value;
    if (sideEffects == null) {
      sideEffects = false;
    }
    value = params[key];
    if (value == null) {
      if (sideEffects) {
        throw new Error("no values provided for key `" + key + "`");
      } else {
        return;
      }
    }
    index = nextIndexes[key] || 0;
    maxIndex = Array.isArray(value) ? value.length - 1 : 0;
    if (index > maxIndex) {
      if (sideEffects) {
        throw new Error("too few values provided for key `" + key + "`");
      } else {
        return;
      }
    }
    result = Array.isArray(value) ? value[index] : value;
    if (sideEffects) {
      nextIndexes[key] = index + 1;
    }
    return result;
  };
  astNodeContainsSegmentsForProvidedParams = function(astNode, params, nextIndexes) {
    var i, length;
    if (Array.isArray(astNode)) {
      i = -1;
      length = astNode.length;
      while (++i < length) {
        if (astNodeContainsSegmentsForProvidedParams(astNode[i], params, nextIndexes)) {
          return true;
        }
      }
      return false;
    }
    switch (astNode.tag) {
      case 'wildcard':
        return getParam(params, '_', nextIndexes, false) != null;
      case 'named':
        return getParam(params, astNode.value, nextIndexes, false) != null;
      case 'static':
        return false;
      case 'optional':
        return astNodeContainsSegmentsForProvidedParams(astNode.value, params, nextIndexes);
    }
  };
  stringify = function(astNode, params, nextIndexes) {
    if (Array.isArray(astNode)) {
      return stringConcatMap(astNode, function(node) {
        return stringify(node, params, nextIndexes);
      });
    }
    switch (astNode.tag) {
      case 'wildcard':
        return getParam(params, '_', nextIndexes, true);
      case 'named':
        return getParam(params, astNode.value, nextIndexes, true);
      case 'static':
        return astNode.value;
      case 'optional':
        if (astNodeContainsSegmentsForProvidedParams(astNode.value, params, nextIndexes)) {
          return stringify(astNode.value, params, nextIndexes);
        } else {
          return '';
        }
    }
  };
  UrlPattern = function(arg1, arg2) {
    var groupCount, options, parsed, parser, withoutWhitespace;
    if (arg1 instanceof UrlPattern) {
      this.isRegex = arg1.isRegex;
      this.regex = arg1.regex;
      this.ast = arg1.ast;
      this.names = arg1.names;
      return;
    }
    this.isRegex = arg1 instanceof RegExp;
    if (!(('string' === typeof arg1) || this.isRegex)) {
      throw new TypeError('argument must be a regex or a string');
    }
    if (this.isRegex) {
      this.regex = arg1;
      if (arg2 != null) {
        if (!Array.isArray(arg2)) {
          throw new Error('if first argument is a regex the second argument may be an array of group names but you provided something else');
        }
        groupCount = regexGroupCount(this.regex);
        if (arg2.length !== groupCount) {
          throw new Error("regex contains " + groupCount + " groups but array of group names contains " + arg2.length);
        }
        this.names = arg2;
      }
      return;
    }
    if (arg1 === '') {
      throw new Error('argument must not be the empty string');
    }
    withoutWhitespace = arg1.replace(/\s+/g, '');
    if (withoutWhitespace !== arg1) {
      throw new Error('argument must not contain whitespace');
    }
    options = {
      escapeChar: (arg2 != null ? arg2.escapeChar : void 0) || defaultOptions.escapeChar,
      segmentNameStartChar: (arg2 != null ? arg2.segmentNameStartChar : void 0) || defaultOptions.segmentNameStartChar,
      segmentNameCharset: (arg2 != null ? arg2.segmentNameCharset : void 0) || defaultOptions.segmentNameCharset,
      segmentValueCharset: (arg2 != null ? arg2.segmentValueCharset : void 0) || defaultOptions.segmentValueCharset,
      optionalSegmentStartChar: (arg2 != null ? arg2.optionalSegmentStartChar : void 0) || defaultOptions.optionalSegmentStartChar,
      optionalSegmentEndChar: (arg2 != null ? arg2.optionalSegmentEndChar : void 0) || defaultOptions.optionalSegmentEndChar,
      wildcardChar: (arg2 != null ? arg2.wildcardChar : void 0) || defaultOptions.wildcardChar
    };
    parser = newParser(options);
    parsed = parser.pattern(arg1);
    if (parsed == null) {
      throw new Error("couldn't parse pattern");
    }
    if (parsed.rest !== '') {
      throw new Error("could only partially parse pattern");
    }
    this.ast = parsed.value;
    this.regex = new RegExp(astNodeToRegexString(this.ast, options.segmentValueCharset));
    this.names = astNodeToNames(this.ast);
  };
  UrlPattern.prototype.match = function(url) {
    var groups, match;
    match = this.regex.exec(url);
    if (match == null) {
      return null;
    }
    groups = match.slice(1);
    if (this.names) {
      return keysAndValuesToObject(this.names, groups);
    } else {
      return groups;
    }
  };
  UrlPattern.prototype.stringify = function(params) {
    if (params == null) {
      params = {};
    }
    if (this.isRegex) {
      throw new Error("can't stringify patterns generated from a regex");
    }
    if (params !== Object(params)) {
      throw new Error("argument must be an object or undefined");
    }
    return stringify(this.ast, params, {});
  };
  UrlPattern.escapeForRegex = escapeForRegex;
  UrlPattern.concatMap = concatMap;
  UrlPattern.stringConcatMap = stringConcatMap;
  UrlPattern.regexGroupCount = regexGroupCount;
  UrlPattern.keysAndValuesToObject = keysAndValuesToObject;
  UrlPattern.P = P;
  UrlPattern.newParser = newParser;
  UrlPattern.defaultOptions = defaultOptions;
  UrlPattern.astNodeToRegexString = astNodeToRegexString;
  UrlPattern.astNodeToNames = astNodeToNames;
  UrlPattern.getParam = getParam;
  UrlPattern.astNodeContainsSegmentsForProvidedParams = astNodeContainsSegmentsForProvidedParams;
  UrlPattern.stringify = stringify;
  return UrlPattern;
});


/***/ }),

/***/ "./react/litebraries/ReduxLite/applyMiddleware.js":
/*!********************************************************!*\
  !*** ./react/litebraries/ReduxLite/applyMiddleware.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (store, cb) {
    return function (action) {
      var middlewaresCopy = middlewares.concat();

      var invokeNextMiddleware = function invokeNextMiddleware(action) {
        var nextMiddleware = middlewaresCopy.shift();

        if (!nextMiddleware) {
          return cb(action);
        }

        return nextMiddleware(store)(invokeNextMiddleware)(action);
      };

      return invokeNextMiddleware(action);
    };
  };
});

/***/ }),

/***/ "./react/litebraries/ReduxLite/combineReducers.js":
/*!********************************************************!*\
  !*** ./react/litebraries/ReduxLite/combineReducers.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (config) {
  var _reducer = function _reducer(oldState, action, subscriptions) {
    var nextState = {};
    var stateChanged = false;
    Object.keys(config).forEach(function (key) {
      var reducer = config[key];
      var oldSlice;

      if (action.type === '__initializeStore' && oldState[key] === undefined) {
        if (reducer.type === 'combine') {
          oldSlice = reducer({}, action);
        } else {
          var args = [, action];
          oldSlice = reducer.apply(void 0, args);
        }
      } else {
        oldSlice = oldState[key];
      }

      var newSlice = reducer(oldSlice, action, []);

      if (!Object.is(oldSlice, newSlice)) {
        stateChanged = true;
      }

      nextState[key] = newSlice;
    });
    if (stateChanged) subscriptions.forEach(function (cb) {
      return cb(nextState);
    });
    return nextState;
  };

  _reducer.type = 'combine';
  return _reducer;
});

/***/ }),

/***/ "./react/litebraries/ReduxLite/createStore.js":
/*!****************************************************!*\
  !*** ./react/litebraries/ReduxLite/createStore.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Store =
/*#__PURE__*/
function () {
  function Store(rootReducer) {
    var preloadedState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var appliedMiddlewares = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, Store);

    this.rootReducer = rootReducer;
    this.middleware = appliedMiddlewares;
    this.subscriptions = [];
    this.state = rootReducer(preloadedState, {
      type: "__initializeStore"
    }, this.subscriptions);
    this.getState = this.getState.bind(this);
    this.dispatch = this.dispatch.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  _createClass(Store, [{
    key: "getState",
    value: function getState() {
      return Object.assign({}, this.state);
    }
  }, {
    key: "dispatch",
    value: function dispatch(action) {
      var _this = this;

      this.middleware(this, function (action) {
        var nextState = _this.rootReducer(_this.state, action, _this.subscriptions);

        _this.state = nextState;
      })(action);
    }
  }, {
    key: "subscribe",
    value: function subscribe(cb) {
      this.subscriptions.push(cb);
    }
  }]);

  return Store;
}();

/* harmony default export */ __webpack_exports__["default"] = (function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(Store, args);
});

/***/ }),

/***/ "./react/litebraries/ReduxLite/index.js":
/*!**********************************************!*\
  !*** ./react/litebraries/ReduxLite/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applyMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyMiddleware */ "./react/litebraries/ReduxLite/applyMiddleware.js");
/* harmony import */ var _combineReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combineReducers */ "./react/litebraries/ReduxLite/combineReducers.js");
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createStore */ "./react/litebraries/ReduxLite/createStore.js");



var Redux = {
  applyMiddleware: _applyMiddleware__WEBPACK_IMPORTED_MODULE_0__["default"],
  combineReducers: _combineReducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  createStore: _createStore__WEBPACK_IMPORTED_MODULE_2__["default"]
};
window.Redux = Redux;

/***/ }),

/***/ "./react/middlewares/logger.js":
/*!*************************************!*\
  !*** ./react/middlewares/logger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var getState = _ref.getState;
  return function (next) {
    return function (action) {
      var prevState = getState();
      next(action);
      var newState = getState();
      console.log('%cPrevious State:', 'color: green');
      console.log(prevState);
      console.log('%cAction:', 'color: red');
      console.log(action);
      console.log('%cNext State:', 'color: cornflowerblue');
      console.log(newState);
    };
  };
});

/***/ }),

/***/ "./react/middlewares/thunk.js":
/*!************************************!*\
  !*** ./react/middlewares/thunk.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var dispatch = _ref.dispatch,
      getState = _ref.getState;
  return function (next) {
    return function (action) {
      return typeof action === "function" ? action(dispatch, getState) : next(action);
    };
  };
});

/***/ }),

/***/ "./react/reducers/entities/albums.js":
/*!*******************************************!*\
  !*** ./react/reducers/entities/albums.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./react/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_SONGS"]:
      return Object.assign({}, state, payload.albums);

    case _actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_ALBUMS"]:
      return Object.assign({}, state, action.albums);

    case _actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_ALBUM"]:
      return Object.assign({}, state, action.album);

    default:
      return state;
  }
});

/***/ }),

/***/ "./react/reducers/entities/artists.js":
/*!********************************************!*\
  !*** ./react/reducers/entities/artists.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./react/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_SONGS"]:
      return Object.assign({}, state, payload.artists);

    case _actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_ARTIST"]:
      return Object.assign({}, state, action.artist);

    default:
      return state;
  }
});

/***/ }),

/***/ "./react/reducers/entities/index.js":
/*!******************************************!*\
  !*** ./react/reducers/entities/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ "./react/reducers/entities/users.js");
/* harmony import */ var _songs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./songs */ "./react/reducers/entities/songs.js");
/* harmony import */ var _albums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./albums */ "./react/reducers/entities/albums.js");
/* harmony import */ var _artists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artists */ "./react/reducers/entities/artists.js");
var _Redux = Redux,
    combineReducers = _Redux.combineReducers;




/* harmony default export */ __webpack_exports__["default"] = (combineReducers({
  users: _users__WEBPACK_IMPORTED_MODULE_0__["default"],
  songs: _songs__WEBPACK_IMPORTED_MODULE_1__["default"],
  albums: _albums__WEBPACK_IMPORTED_MODULE_2__["default"],
  artists: _artists__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./react/reducers/entities/songs.js":
/*!******************************************!*\
  !*** ./react/reducers/entities/songs.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./react/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_SONGS"]:
      return Object.assign({}, state, payload.songs);

    default:
      return state;
  }
});

/***/ }),

/***/ "./react/reducers/entities/users.js":
/*!******************************************!*\
  !*** ./react/reducers/entities/users.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./react/actions/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CURRENT_USER"]:
      return Object.assign({}, _defineProperty({}, action.user.id, action.user));

    default:
      return state;
  }
});

/***/ }),

/***/ "./react/reducers/errors/index.js":
/*!****************************************!*\
  !*** ./react/reducers/errors/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session */ "./react/reducers/errors/session.js");
var _Redux = Redux,
    combineReducers = _Redux.combineReducers;

/* harmony default export */ __webpack_exports__["default"] = (combineReducers({
  session: _session__WEBPACK_IMPORTED_MODULE_0__["default"]
}));

/***/ }),

/***/ "./react/reducers/errors/session.js":
/*!******************************************!*\
  !*** ./react/reducers/errors/session.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./react/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_SESSION_ERRORS"]:
      return action.errors.responseJSON.errors;

    case _actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CURRENT_USER"]:
    case _actions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERRORS"]:
      return {};

    default:
      return state;
  }
});

/***/ }),

/***/ "./react/reducers/index.js":
/*!*********************************!*\
  !*** ./react/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities */ "./react/reducers/entities/index.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session */ "./react/reducers/session.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./react/reducers/ui/index.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors */ "./react/reducers/errors/index.js");
var _Redux = Redux,
    combineReducers = _Redux.combineReducers;




/* harmony default export */ __webpack_exports__["default"] = (combineReducers({
  entities: _entities__WEBPACK_IMPORTED_MODULE_0__["default"],
  session: _session__WEBPACK_IMPORTED_MODULE_1__["default"],
  ui: _ui__WEBPACK_IMPORTED_MODULE_2__["default"],
  errors: _errors__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./react/reducers/session.js":
/*!***********************************!*\
  !*** ./react/reducers/session.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./react/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CURRENT_USER"]:
      return action.user.id;

    case _actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_CURRENT_USER"]:
      return null;

    default:
      return state;
  }
});

/***/ }),

/***/ "./react/reducers/ui/index.js":
/*!************************************!*\
  !*** ./react/reducers/ui/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./react/reducers/ui/menu.js");
/* harmony import */ var _song__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./song */ "./react/reducers/ui/song.js");
/* harmony import */ var _playing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playing */ "./react/reducers/ui/playing.js");
/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queue */ "./react/reducers/ui/queue.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal */ "./react/reducers/ui/modal.js");
var _Redux = Redux,
    combineReducers = _Redux.combineReducers;





/* harmony default export */ __webpack_exports__["default"] = (combineReducers({
  menu: _menu__WEBPACK_IMPORTED_MODULE_0__["default"],
  song: _song__WEBPACK_IMPORTED_MODULE_1__["default"],
  playing: _playing__WEBPACK_IMPORTED_MODULE_2__["default"],
  queue: _queue__WEBPACK_IMPORTED_MODULE_3__["default"],
  modal: _modal__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

/***/ }),

/***/ "./react/reducers/ui/menu.js":
/*!***********************************!*\
  !*** ./react/reducers/ui/menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./react/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "songs";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["CHANGE_MENU"]:
      return action.menu;

    default:
      return state;
  }
});

/***/ }),

/***/ "./react/reducers/ui/modal.js":
/*!************************************!*\
  !*** ./react/reducers/ui/modal.js ***!
  \************************************/
/*! exports provided: CLOSE_ANY, OPEN_NEW_ARTIST, OPEN_NEW_ALBUM, OPEN_NEW_SONG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_ANY", function() { return CLOSE_ANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_NEW_ARTIST", function() { return OPEN_NEW_ARTIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_NEW_ALBUM", function() { return OPEN_NEW_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_NEW_SONG", function() { return OPEN_NEW_SONG; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./react/actions/index.js");

var CLOSE_ANY = 'CLOSE_ANY';
var OPEN_NEW_ARTIST = 'OPEN_NEW_ARTIST';
var OPEN_NEW_ALBUM = 'OPEN_NEW_ALBUM';
var OPEN_NEW_SONG = 'OPEN_NEW_SONG';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case OPEN_NEW_ARTIST:
      return 'newArtist';

    case OPEN_NEW_ALBUM:
      return 'newAlbum';

    case OPEN_NEW_SONG:
      return 'newSong';

    case CLOSE_ANY:
    case _actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_ARTIST"]:
      return null;

    default:
      return state;
  }
});

/***/ }),

/***/ "./react/reducers/ui/playing.js":
/*!**************************************!*\
  !*** ./react/reducers/ui/playing.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./react/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["SELECT_SONG"]:
      return true;

    case _actions__WEBPACK_IMPORTED_MODULE_0__["PLAY"]:
      return true;

    case _actions__WEBPACK_IMPORTED_MODULE_0__["PAUSE"]:
      return false;

    default:
      return state;
  }
});

/***/ }),

/***/ "./react/reducers/ui/queue.js":
/*!************************************!*\
  !*** ./react/reducers/ui/queue.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./react/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_SONGS"]:
      return Object.keys(action.payload.songs);

    case _actions__WEBPACK_IMPORTED_MODULE_0__["SELECT_SONG"]:
      return action.queue;

    default:
      return state;
  }
});

/***/ }),

/***/ "./react/reducers/ui/song.js":
/*!***********************************!*\
  !*** ./react/reducers/ui/song.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./react/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["SELECT_SONG"]:
      return action.songId;

    default:
      return state;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
