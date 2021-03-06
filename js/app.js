(() => {
  var e = {
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                      Object.prototype.hasOwnProperty.call(s, i) &&
                        (e[i] = s[i]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            i = t && "IntersectionObserver" in window,
            l = t && "classList" in document.createElement("p"),
            n = t && window.devicePixelRatio > 1,
            r = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            a = function (t) {
              return e({}, r, t);
            },
            o = function (e, t) {
              var s,
                i = "LazyLoad::Initialized",
                l = new e(t);
              try {
                s = new CustomEvent(i, { detail: { instance: l } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  i,
                  !1,
                  !1,
                  { instance: l }
                );
              }
              window.dispatchEvent(s);
            },
            c = "src",
            d = "srcset",
            p = "sizes",
            u = "poster",
            h = "llOriginalAttrs",
            m = "data",
            f = "loading",
            g = "loaded",
            w = "applied",
            v = "error",
            b = "native",
            S = "data-",
            y = "ll-status",
            _ = function (e, t) {
              return e.getAttribute(S + t);
            },
            T = function (e) {
              return _(e, y);
            },
            E = function (e, t) {
              return (function (e, t, s) {
                var i = "data-ll-status";
                null !== s ? e.setAttribute(i, s) : e.removeAttribute(i);
              })(e, 0, t);
            },
            L = function (e) {
              return E(e, null);
            },
            C = function (e) {
              return null === T(e);
            },
            x = function (e) {
              return T(e) === b;
            },
            A = [f, g, w, v],
            k = function (e, t, s, i) {
              e &&
                (void 0 === i ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, i));
            },
            P = function (e, t) {
              l
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            M = function (e, t) {
              l
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            q = function (e) {
              return e.llTempImage;
            },
            $ = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            V = function (e, t) {
              e && (e.loadingCount += t);
            },
            I = function (e, t) {
              e && (e.toLoadCount = t);
            },
            H = function (e) {
              for (var t, s = [], i = 0; (t = e.children[i]); i += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            O = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && H(s).forEach(t);
            },
            B = function (e, t) {
              H(e).forEach(t);
            },
            W = [c],
            z = [c, u],
            D = [c, d, p],
            G = [m],
            R = function (e) {
              return !!e[h];
            },
            N = function (e) {
              return e[h];
            },
            j = function (e) {
              return delete e[h];
            },
            F = function (e, t) {
              if (!R(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[h] = s);
              }
            },
            Y = function (e, t) {
              if (R(e)) {
                var s = N(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            X = function (e, t, s) {
              P(e, t.class_applied),
                E(e, w),
                s &&
                  (t.unobserve_completed && $(e, t),
                  k(t.callback_applied, e, s));
            },
            U = function (e, t, s) {
              P(e, t.class_loading),
                E(e, f),
                s && (V(s, 1), k(t.callback_loading, e, s));
            },
            Z = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            Q = function (e, t) {
              Z(e, p, _(e, t.data_sizes)),
                Z(e, d, _(e, t.data_srcset)),
                Z(e, c, _(e, t.data_src));
            },
            K = {
              IMG: function (e, t) {
                O(e, function (e) {
                  F(e, D), Q(e, t);
                }),
                  F(e, D),
                  Q(e, t);
              },
              IFRAME: function (e, t) {
                F(e, W), Z(e, c, _(e, t.data_src));
              },
              VIDEO: function (e, t) {
                B(e, function (e) {
                  F(e, W), Z(e, c, _(e, t.data_src));
                }),
                  F(e, z),
                  Z(e, u, _(e, t.data_poster)),
                  Z(e, c, _(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                F(e, G), Z(e, m, _(e, t.data_src));
              },
            },
            J = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                k(e.callback_finish, t);
            },
            te = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            se = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            ie = function (e) {
              return !!e.llEvLisnrs;
            },
            le = function (e) {
              if (ie(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var i = t[s];
                  se(e, s, i);
                }
                delete e.llEvLisnrs;
              }
            },
            ne = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                V(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                M(e, t.class_loading),
                t.unobserve_completed && $(e, s);
            },
            re = function (e, t, s) {
              var i = q(e) || e;
              ie(i) ||
                (function (e, t, s) {
                  ie(e) || (e.llEvLisnrs = {});
                  var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, i, t), te(e, "error", s);
                })(
                  i,
                  function (l) {
                    !(function (e, t, s, i) {
                      var l = x(t);
                      ne(t, s, i),
                        P(t, s.class_loaded),
                        E(t, g),
                        k(s.callback_loaded, t, i),
                        l || ee(s, i);
                    })(0, e, t, s),
                      le(i);
                  },
                  function (l) {
                    !(function (e, t, s, i) {
                      var l = x(t);
                      ne(t, s, i),
                        P(t, s.class_error),
                        E(t, v),
                        k(s.callback_error, t, i),
                        s.restore_on_error && Y(t, D),
                        l || ee(s, i);
                    })(0, e, t, s),
                      le(i);
                  }
                );
            },
            ae = function (e, t, s) {
              !(function (e) {
                return J.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, s) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      re(e, t, s),
                      (function (e) {
                        R(e) ||
                          (e[h] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, s) {
                        var i = _(e, t.data_bg),
                          l = _(e, t.data_bg_hidpi),
                          r = n && l ? l : i;
                        r &&
                          ((e.style.backgroundImage = 'url("'.concat(r, '")')),
                          q(e).setAttribute(c, r),
                          U(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = _(e, t.data_bg_multi),
                          l = _(e, t.data_bg_multi_hidpi),
                          r = n && l ? l : i;
                        r && ((e.style.backgroundImage = r), X(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = _(e, t.data_bg_set);
                        if (i) {
                          var l = i.split("|"),
                            n = l.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = n.join()),
                            "" === e.style.backgroundImage &&
                              ((n = l.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = n.join())),
                            X(e, t, s);
                        }
                      })(e, t, s);
                  })(e, t, s)
                : (function (e, t, s) {
                    re(e, t, s),
                      (function (e, t, s) {
                        var i = K[e.tagName];
                        i && (i(e, t), U(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            oe = function (e) {
              e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(p);
            },
            ce = function (e) {
              O(e, function (e) {
                Y(e, D);
              }),
                Y(e, D);
            },
            de = {
              IMG: ce,
              IFRAME: function (e) {
                Y(e, W);
              },
              VIDEO: function (e) {
                B(e, function (e) {
                  Y(e, W);
                }),
                  Y(e, z),
                  e.load();
              },
              OBJECT: function (e) {
                Y(e, G);
              },
            },
            pe = function (e, t) {
              (function (e) {
                var t = de[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (R(e)) {
                        var t = N(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  C(e) ||
                    x(e) ||
                    (M(e, t.class_entered),
                    M(e, t.class_exited),
                    M(e, t.class_applied),
                    M(e, t.class_loading),
                    M(e, t.class_loaded),
                    M(e, t.class_error));
                })(e, t),
                L(e),
                j(e);
            },
            ue = ["IMG", "IFRAME", "VIDEO"],
            he = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            me = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, i) {
                      var l = (function (e) {
                        return A.indexOf(T(e)) >= 0;
                      })(e);
                      E(e, "entered"),
                        P(e, s.class_entered),
                        M(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && $(e, s);
                        })(e, s, i),
                        k(s.callback_enter, e, t, i),
                        l || ae(e, s, i);
                    })(e.target, e, t, s)
                  : (function (e, t, s, i) {
                      C(e) ||
                        (P(e, s.class_exited),
                        (function (e, t, s, i) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return T(e) === f;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (le(e),
                            (function (e) {
                              O(e, function (e) {
                                oe(e);
                              }),
                                oe(e);
                            })(e),
                            ce(e),
                            M(e, s.class_loading),
                            V(i, -1),
                            L(e),
                            k(s.callback_cancel, e, t, i));
                        })(e, t, s, i),
                        k(s.callback_exit, e, t, i));
                    })(e.target, e, t, s);
              });
            },
            fe = function (e) {
              return Array.prototype.slice.call(e);
            },
            ge = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            we = function (e) {
              return (function (e) {
                return T(e) === v;
              })(e);
            },
            ve = function (e, t) {
              return (function (e) {
                return fe(e).filter(C);
              })(e || ge(t));
            },
            be = function (e, s) {
              var l = a(e);
              (this._settings = l),
                (this.loadingCount = 0),
                (function (e, t) {
                  i &&
                    !he(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        me(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(l, this),
                (function (e, s) {
                  t &&
                    window.addEventListener("online", function () {
                      !(function (e, t) {
                        var s;
                        ((s = ge(e)), fe(s).filter(we)).forEach(function (t) {
                          M(t, e.class_error), L(t);
                        }),
                          t.update();
                      })(e, s);
                    });
                })(l, this),
                this.update(s);
            };
          return (
            (be.prototype = {
              update: function (e) {
                var t,
                  l,
                  n = this._settings,
                  r = ve(e, n);
                I(this, r.length),
                  !s && i
                    ? he(n)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== ue.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  re(e, t, s),
                                  (function (e, t) {
                                    var s = K[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  E(e, b);
                              })(e, t, s);
                          }),
                            I(s, 0);
                        })(r, n, this)
                      : ((l = r),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, l))
                    : this.loadAll(r);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  ge(this._settings).forEach(function (e) {
                    j(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                ve(e, s).forEach(function (e) {
                  $(e, t), ae(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                ge(e).forEach(function (t) {
                  pe(t, e);
                });
              },
            }),
            (be.load = function (e, t) {
              var s = a(t);
              ae(e, s);
            }),
            (be.resetStatus = function (e) {
              L(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, i = 0; (s = t[i]); i += 1) o(e, s);
                  else o(e, t);
              })(be, window.lazyLoadOptions),
            be
          );
        })();
      },
    },
    t = {};
  function s(i) {
    var l = t[i];
    if (void 0 !== l) return l.exports;
    var n = (t[i] = { exports: {} });
    return e[i].call(n.exports, n, n.exports, s), n.exports;
  }
  (() => {
    "use strict";
    const e = {};
    function t() {
      if (location.hash) return location.hash.replace("#", "");
    }
    let i = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: e } })
              );
          }, t));
      },
      l = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: e } })
                );
            }, t);
        }
      },
      n = (e, t = 500) => (e.hidden ? l(e, t) : i(e, t)),
      r = !0,
      a = (e = 500) => {
        let t = document.querySelector("body");
        if (r) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, e);
        }
      },
      o = (e = 500) => {
        let t = document.querySelector("body");
        if (r) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, e);
        }
      };
    function c(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function d(e) {
      return e.filter(function (e, t, s) {
        return s.indexOf(e) === t;
      });
    }
    function p(e, t) {
      const s = Array.from(e).filter(function (e, s, i) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const i = {},
            l = s.dataset[t].split(",");
          (i.value = l[0]),
            (i.type = l[1] ? l[1].trim() : "max"),
            (i.item = s),
            e.push(i);
        });
        let i = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        i = d(i);
        const l = [];
        if (i.length)
          return (
            i.forEach((t) => {
              const s = t.split(","),
                i = s[1],
                n = s[2],
                r = window.matchMedia(s[0]),
                a = e.filter(function (e) {
                  if (e.value === i && e.type === n) return !0;
                });
              l.push({ itemsArray: a, matchMedia: r });
            }),
            l
          );
      }
    }
    let u = (e, t = !1, s = 500, i = 0) => {
      const l = document.querySelector(e);
      if (l) {
        let n = "",
          r = 0;
        t &&
          ((n = "header.header"), (r = document.querySelector(n).offsetHeight));
        let o = {
          speedAsDuration: !0,
          speed: s,
          header: n,
          offset: i,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (a(),
            document.documentElement.classList.remove("menu-open"),
            document
              .querySelector(".menu__body")
              .classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(l, "", o);
        else {
          let e = l.getBoundingClientRect().top + scrollY;
          (e = r ? e - r : e),
            (e = i ? e - i : e),
            window.scrollTo({ top: e, behavior: "smooth" });
        }
        c(`[gotoBlock]: ????????...???????? ?? ${e}`);
      } else c(`[gotoBlock]: ???? ????..???????????? ?????????? ?????? ???? ????????????????: ${e}`);
    };
    let h = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(t) {
        t.reset(),
          setTimeout(() => {
            let s = t.querySelectorAll("input,textarea");
            for (let e = 0; e < s.length; e++) {
              const t = s[e];
              t.parentElement.classList.remove("_form-focus"),
                t.classList.remove("_form-focus"),
                h.removeError(t);
            }
            let i = t.querySelectorAll(".checkbox__input");
            if (i.length > 0)
              for (let e = 0; e < i.length; e++) {
                i[e].checked = !1;
              }
            if (e.select) {
              let s = t.querySelectorAll(".select");
              if (s.length)
                for (let t = 0; t < s.length; t++) {
                  const i = s[t].querySelector("select");
                  e.select.selectBuild(i);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    function m(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function f(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : m(t[s]) && m(e[s]) && Object.keys(t[s]).length > 0 && f(e[s], t[s]);
      });
    }
    e.select = new (class {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`??????????????????, ???????????????? ????????????????: (${e.length})`))
            : this.setLogging("????????, ?????? ???? ???????????? select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          );
      }
      selectInit(e, t) {
        const s = this;
        let i = document.createElement("div");
        if (
          (i.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(i, e),
          i.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          i.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            i,
            this.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            s.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const i = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ).dataset.selectId
                  }"]`
                ),
            l = this.getSelectElement(i).originalSelect;
          if ("click" === s) {
            if (!l.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                this.optionAction(i, l, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                )
              )
                this.selectAction(i);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                );
                this.optionAction(i, l, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect)
                ) &&
                ("focusin" === s
                  ? i.classList.add(this.selectClasses.classSelectFocus)
                  : i.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selects??lose();
        } else this.selects??lose();
      }
      selects??lose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          n(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody
          ).selectElement,
          i = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement;
        i && i.remove(),
          s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let s = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t
                  )}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let i = "";
        return (
          (i += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (i += t ? s : ""),
          (i += t ? "</span>" : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (i += e.textContent),
          (i += t ? "</span>" : ""),
          (i += t ? "</span>" : ""),
          i
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          i = Array.from(e.options);
        if (i.length > 0) {
          let l = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (i = i.filter((e) => e.value)),
            (l += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            i.forEach((t) => {
              l += this.getOption(t, e);
            }),
            (l += t ? "</div>" : ""),
            l
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          i =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          l = e.dataset.class ? ` ${e.dataset.class}` : "",
          n = !!e.dataset.href && e.dataset.href,
          r = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let a = "";
        return (
          (a += n
            ? `<a ${r} ${i} href="${n}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${l}${s}">`
            : `<button ${i} class="${this.selectClasses.classSelectOption}${l}${s}" data-value="${e.value}" type="button">`),
          (a += this.getSelectElementContent(e)),
          (a += n ? "</a>" : "</button>"),
          a
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && h.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement,
          i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          l = this;
        t.addEventListener("input", function () {
          i.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && l.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } })
        );
      }
      setLogging(e) {
        this.config.logging && c(`[select]: ${e}`);
      }
    })({});
    const g = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function w() {
      const e = "undefined" != typeof document ? document : {};
      return f(e, g), e;
    }
    const v = {
      document: g,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function b() {
      const e = "undefined" != typeof window ? window : {};
      return f(e, v), e;
    }
    class S extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function y(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...y(e)) : t.push(e);
        }),
        t
      );
    }
    function _(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function T(e, t) {
      const s = b(),
        i = w();
      let l = [];
      if (!t && e instanceof S) return e;
      if (!e) return new S(l);
      if ("string" == typeof e) {
        const s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
          const t = i.createElement(e);
          t.innerHTML = s;
          for (let e = 0; e < t.childNodes.length; e += 1)
            l.push(t.childNodes[e]);
        } else
          l = (function (e, t) {
            if ("string" != typeof e) return [e];
            const s = [],
              i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) s.push(i[e]);
            return s;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === s || e === i) l.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof S) return e;
        l = e;
      }
      return new S(
        (function (e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t;
        })(l)
      );
    }
    T.fn = S.prototype;
    const E = "resize scroll".split(" ");
    function L(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            E.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : T(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    L("click"),
      L("blur"),
      L("focus"),
      L("focusin"),
      L("focusout"),
      L("keyup"),
      L("keydown"),
      L("keypress"),
      L("submit"),
      L("change"),
      L("mousedown"),
      L("mousemove"),
      L("mouseup"),
      L("mouseenter"),
      L("mouseleave"),
      L("mouseout"),
      L("mouseover"),
      L("touchstart"),
      L("touchend"),
      L("touchmove"),
      L("resize"),
      L("scroll");
    const C = {
      addClass: function (...e) {
        const t = y(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = y(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = y(e.map((e) => e.split(" ")));
        return (
          _(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = y(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1)
          if (2 === arguments.length) this[s].setAttribute(e, t);
          else
            for (const t in e)
              (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, s, i, l] = e;
        function n(e) {
          const t = e.target;
          if (!t) return;
          const l = e.target.dom7EventData || [];
          if ((l.indexOf(e) < 0 && l.unshift(e), T(t).is(s))) i.apply(t, l);
          else {
            const e = T(t).parents();
            for (let t = 0; t < e.length; t += 1)
              T(e[t]).is(s) && i.apply(e[t], l);
          }
        }
        function r(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }
        "function" == typeof e[1] && (([t, i, l] = e), (s = void 0)),
          l || (l = !1);
        const a = t.split(" ");
        let o;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (s)
            for (o = 0; o < a.length; o += 1) {
              const e = a[o];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: i, proxyListener: n }),
                t.addEventListener(e, n, l);
            }
          else
            for (o = 0; o < a.length; o += 1) {
              const e = a[o];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: i, proxyListener: r }),
                t.addEventListener(e, r, l);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, s, i, l] = e;
        "function" == typeof e[1] && (([t, i, l] = e), (s = void 0)),
          l || (l = !1);
        const n = t.split(" ");
        for (let e = 0; e < n.length; e += 1) {
          const t = n[e];
          for (let e = 0; e < this.length; e += 1) {
            const n = this[e];
            let r;
            if (
              (!s && n.dom7Listeners
                ? (r = n.dom7Listeners[t])
                : s && n.dom7LiveListeners && (r = n.dom7LiveListeners[t]),
              r && r.length)
            )
              for (let e = r.length - 1; e >= 0; e -= 1) {
                const s = r[e];
                (i && s.listener === i) ||
                (i &&
                  s.listener &&
                  s.listener.dom7proxy &&
                  s.listener.dom7proxy === i)
                  ? (n.removeEventListener(t, s.proxyListener, l),
                    r.splice(e, 1))
                  : i ||
                    (n.removeEventListener(t, s.proxyListener, l),
                    r.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = b(),
          s = e[0].split(" "),
          i = e[1];
        for (let l = 0; l < s.length; l += 1) {
          const n = s[l];
          for (let s = 0; s < this.length; s += 1) {
            const l = this[s];
            if (t.CustomEvent) {
              const s = new t.CustomEvent(n, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
              (l.dom7EventData = e.filter((e, t) => t > 0)),
                l.dispatchEvent(s),
                (l.dom7EventData = []),
                delete l.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function s(i) {
              i.target === this && (e.call(this, i), t.off("transitionend", s));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = b();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = b(),
            t = w(),
            s = this[0],
            i = s.getBoundingClientRect(),
            l = t.body,
            n = s.clientTop || l.clientTop || 0,
            r = s.clientLeft || l.clientLeft || 0,
            a = s === e ? e.scrollY : s.scrollTop,
            o = s === e ? e.scrollX : s.scrollLeft;
          return { top: i.top + a - n, left: i.left + o - r };
        }
        return null;
      },
      css: function (e, t) {
        const s = b();
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (const t in e) this[i].style[t] = e[t];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, s) => {
              e.apply(t, [t, s]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = b(),
          s = w(),
          i = this[0];
        let l, n;
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (l = T(e), n = 0; n < l.length; n += 1) if (l[n] === i) return !0;
          return !1;
        }
        if (e === s) return i === s;
        if (e === t) return i === t;
        if (e.nodeType || e instanceof S) {
          for (l = e.nodeType ? [e] : e, n = 0; n < l.length; n += 1)
            if (l[n] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return T([]);
        if (e < 0) {
          const s = t + e;
          return T(s < 0 ? [] : [this[s]]);
        }
        return T([this[e]]);
      },
      append: function (...e) {
        let t;
        const s = w();
        for (let i = 0; i < e.length; i += 1) {
          t = e[i];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const i = s.createElement("div");
              for (i.innerHTML = t; i.firstChild; )
                this[e].appendChild(i.firstChild);
            } else if (t instanceof S)
              for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = w();
        let s, i;
        for (s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            const l = t.createElement("div");
            for (l.innerHTML = e, i = l.childNodes.length - 1; i >= 0; i -= 1)
              this[s].insertBefore(l.childNodes[i], this[s].childNodes[0]);
          } else if (e instanceof S)
            for (i = 0; i < e.length; i += 1)
              this[s].insertBefore(e[i], this[s].childNodes[0]);
          else this[s].insertBefore(e, this[s].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && T(this[0].nextElementSibling).is(e)
              ? T([this[0].nextElementSibling])
              : T([])
            : this[0].nextElementSibling
            ? T([this[0].nextElementSibling])
            : T([])
          : T([]);
      },
      nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return T([]);
        for (; s.nextElementSibling; ) {
          const i = s.nextElementSibling;
          e ? T(i).is(e) && t.push(i) : t.push(i), (s = i);
        }
        return T(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && T(t.previousElementSibling).is(e)
              ? T([t.previousElementSibling])
              : T([])
            : t.previousElementSibling
            ? T([t.previousElementSibling])
            : T([]);
        }
        return T([]);
      },
      prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return T([]);
        for (; s.previousElementSibling; ) {
          const i = s.previousElementSibling;
          e ? T(i).is(e) && t.push(i) : t.push(i), (s = i);
        }
        return T(t);
      },
      parent: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1)
          null !== this[s].parentNode &&
            (e
              ? T(this[s].parentNode).is(e) && t.push(this[s].parentNode)
              : t.push(this[s].parentNode));
        return T(t);
      },
      parents: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let i = this[s].parentNode;
          for (; i; )
            e ? T(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        }
        return T(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? T([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) t.push(i[e]);
        }
        return T(t);
      },
      children: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].children;
          for (let s = 0; s < i.length; s += 1)
            (e && !T(i[s]).is(e)) || t.push(i[s]);
        }
        return T(t);
      },
      filter: function (e) {
        return T(_(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(C).forEach((e) => {
      Object.defineProperty(T.fn, e, { value: C[e], writable: !0 });
    });
    const x = T;
    function A(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function k() {
      return Date.now();
    }
    function P(e, t) {
      void 0 === t && (t = "x");
      const s = b();
      let i, l, n;
      const r = (function (e) {
        const t = b();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((l = r.transform || r.webkitTransform),
            l.split(",").length > 6 &&
              (l = l
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (n = new s.WebKitCSSMatrix("none" === l ? "" : l)))
          : ((n =
              r.MozTransform ||
              r.OTransform ||
              r.MsTransform ||
              r.msTransform ||
              r.transform ||
              r
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = n.toString().split(","))),
        "x" === t &&
          (l = s.WebKitCSSMatrix
            ? n.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (l = s.WebKitCSSMatrix
            ? n.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        l || 0
      );
    }
    function M(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function q(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function V() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let s = 1; s < arguments.length; s += 1) {
        const i = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        if (null != i && !q(i)) {
          const s = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, l = s.length; t < l; t += 1) {
            const l = s[t],
              n = Object.getOwnPropertyDescriptor(i, l);
            void 0 !== n &&
              n.enumerable &&
              (M(e[l]) && M(i[l])
                ? i[l].__swiper__
                  ? (e[l] = i[l])
                  : V(e[l], i[l])
                : !M(e[l]) && M(i[l])
                ? ((e[l] = {}), i[l].__swiper__ ? (e[l] = i[l]) : V(e[l], i[l]))
                : (e[l] = i[l]));
          }
        }
      }
      return e;
    }
    function I(e, t, s) {
      e.style.setProperty(t, s);
    }
    function H(e) {
      let { swiper: t, targetPosition: s, side: i } = e;
      const l = b(),
        n = -t.translate;
      let r,
        a = null;
      const o = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        l.cancelAnimationFrame(t.cssModeFrameID);
      const c = s > n ? "next" : "prev",
        d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        p = () => {
          (r = new Date().getTime()), null === a && (a = r);
          const e = Math.max(Math.min((r - a) / o, 1), 0),
            c = 0.5 - Math.cos(e * Math.PI) / 2;
          let u = n + c * (s - n);
          if ((d(u, s) && (u = s), t.wrapperEl.scrollTo({ [i]: u }), d(u, s)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [i]: u });
              }),
              void l.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = l.requestAnimationFrame(p);
        };
      p();
    }
    let O, B, W;
    function z() {
      return (
        O ||
          (O = (function () {
            const e = b(),
              t = w();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const s = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, s);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        O
      );
    }
    function D(e) {
      return (
        void 0 === e && (e = {}),
        B ||
          (B = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const s = z(),
              i = b(),
              l = i.navigator.platform,
              n = t || i.navigator.userAgent,
              r = { ios: !1, android: !1 },
              a = i.screen.width,
              o = i.screen.height,
              c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = n.match(/(iPad).*OS\s([\d_]+)/);
            const p = n.match(/(iPod)(.*OS\s([\d_]+))?/),
              u = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === l;
            let m = "MacIntel" === l;
            return (
              !d &&
                m &&
                s.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${a}x${o}`) >= 0 &&
                ((d = n.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (m = !1)),
              c && !h && ((r.os = "android"), (r.android = !0)),
              (d || u || p) && ((r.os = "ios"), (r.ios = !0)),
              r
            );
          })(e)),
        B
      );
    }
    function G() {
      return (
        W ||
          (W = (function () {
            const e = b();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        W
      );
    }
    const R = {
      on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const l = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][l](t);
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function l() {
          i.off(e, l), l.__emitterProxy && delete l.__emitterProxy;
          for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++)
            n[r] = arguments[r];
          t.apply(i, n);
        }
        return (l.__emitterProxy = t), i.on(e, l, s);
      },
      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed
          ? s
          : s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((i, l) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(l, 1);
                  });
            }),
            s)
          : s;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, s, i;
        for (var l = arguments.length, n = new Array(l), r = 0; r < l; r++)
          n[r] = arguments[r];
        "string" == typeof n[0] || Array.isArray(n[0])
          ? ((t = n[0]), (s = n.slice(1, n.length)), (i = e))
          : ((t = n[0].events), (s = n[0].data), (i = n[0].context || e)),
          s.unshift(i);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(i, [t, ...s]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(i, s);
                });
          }),
          e
        );
      },
    };
    const N = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i[0].clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(i.css("padding-left") || 0, 10) -
              parseInt(i.css("padding-right") || 0, 10)),
            (s =
              s -
              parseInt(i.css("padding-top") || 0, 10) -
              parseInt(i.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const i = e.params,
          { $wrapperEl: l, size: n, rtlTranslate: r, wrongRTL: a } = e,
          o = e.virtual && i.virtual.enabled,
          c = o ? e.virtual.slides.length : e.slides.length,
          d = l.children(`.${e.params.slideClass}`),
          p = o ? e.virtual.slides.length : d.length;
        let u = [];
        const h = [],
          m = [];
        let f = i.slidesOffsetBefore;
        "function" == typeof f && (f = i.slidesOffsetBefore.call(e));
        let g = i.slidesOffsetAfter;
        "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
        const w = e.snapGrid.length,
          v = e.slidesGrid.length;
        let b = i.spaceBetween,
          S = -f,
          y = 0,
          _ = 0;
        if (void 0 === n) return;
        "string" == typeof b &&
          b.indexOf("%") >= 0 &&
          (b = (parseFloat(b.replace("%", "")) / 100) * n),
          (e.virtualSize = -b),
          r
            ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          i.centeredSlides &&
            i.cssMode &&
            (I(e.wrapperEl, "--swiper-centered-offset-before", ""),
            I(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const T = i.grid && i.grid.rows > 1 && e.grid;
        let E;
        T && e.grid.initSlides(p);
        const L =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let l = 0; l < p; l += 1) {
          E = 0;
          const r = d.eq(l);
          if (
            (T && e.grid.updateSlide(l, r, p, t), "none" !== r.css("display"))
          ) {
            if ("auto" === i.slidesPerView) {
              L && (d[l].style[t("width")] = "");
              const n = getComputedStyle(r[0]),
                a = r[0].style.transform,
                o = r[0].style.webkitTransform;
              if (
                (a && (r[0].style.transform = "none"),
                o && (r[0].style.webkitTransform = "none"),
                i.roundLengths)
              )
                E = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
              else {
                const e = s(n, "width"),
                  t = s(n, "padding-left"),
                  i = s(n, "padding-right"),
                  l = s(n, "margin-left"),
                  a = s(n, "margin-right"),
                  o = n.getPropertyValue("box-sizing");
                if (o && "border-box" === o) E = e + l + a;
                else {
                  const { clientWidth: s, offsetWidth: n } = r[0];
                  E = e + t + i + l + a + (n - s);
                }
              }
              a && (r[0].style.transform = a),
                o && (r[0].style.webkitTransform = o),
                i.roundLengths && (E = Math.floor(E));
            } else
              (E = (n - (i.slidesPerView - 1) * b) / i.slidesPerView),
                i.roundLengths && (E = Math.floor(E)),
                d[l] && (d[l].style[t("width")] = `${E}px`);
            d[l] && (d[l].swiperSlideSize = E),
              m.push(E),
              i.centeredSlides
                ? ((S = S + E / 2 + y / 2 + b),
                  0 === y && 0 !== l && (S = S - n / 2 - b),
                  0 === l && (S = S - n / 2 - b),
                  Math.abs(S) < 0.001 && (S = 0),
                  i.roundLengths && (S = Math.floor(S)),
                  _ % i.slidesPerGroup == 0 && u.push(S),
                  h.push(S))
                : (i.roundLengths && (S = Math.floor(S)),
                  (_ - Math.min(e.params.slidesPerGroupSkip, _)) %
                    e.params.slidesPerGroup ==
                    0 && u.push(S),
                  h.push(S),
                  (S = S + E + b)),
              (e.virtualSize += E + b),
              (y = E),
              (_ += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, n) + g),
          r &&
            a &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            l.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
          i.setWrapperSize &&
            l.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
          T && e.grid.updateWrapperSize(E, u, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < u.length; s += 1) {
            let l = u[s];
            i.roundLengths && (l = Math.floor(l)),
              u[s] <= e.virtualSize - n && t.push(l);
          }
          (u = t),
            Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 &&
              u.push(e.virtualSize - n);
        }
        if ((0 === u.length && (u = [0]), 0 !== i.spaceBetween)) {
          const s = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
          d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({
            [s]: `${b}px`,
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          m.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
            (e -= i.spaceBetween);
          const t = e - n;
          u = u.map((e) => (e < 0 ? -f : e > t ? t + g : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (m.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
            (e -= i.spaceBetween),
            e < n)
          ) {
            const t = (n - e) / 2;
            u.forEach((e, s) => {
              u[s] = e - t;
            }),
              h.forEach((e, s) => {
                h[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: u,
            slidesGrid: h,
            slidesSizesGrid: m,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          I(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
            I(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - m[m.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (p !== c && e.emit("slidesLengthChange"),
          u.length !== w &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          h.length !== v && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(o || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            s = e.$el.hasClass(t);
          p <= i.maxBackfaceHiddenSlides
            ? s || e.$el.addClass(t)
            : s && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let l,
          n = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const r = (e) =>
          i
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || x([])).each((e) => {
              s.push(e);
            });
          else
            for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
              const e = t.activeIndex + l;
              if (e > t.slides.length && !i) break;
              s.push(r(e));
            }
        else s.push(r(t.activeIndex));
        for (l = 0; l < s.length; l += 1)
          if (void 0 !== s[l]) {
            const e = s[l].offsetHeight;
            n = e > n ? e : n;
          }
        (n || 0 === n) && t.$wrapperEl.css("height", `${n}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset = e.isHorizontal()
            ? t[s].offsetLeft
            : t[s].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: l, snapGrid: n } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let r = -e;
        l && (r = e),
          i.removeClass(s.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < i.length; e += 1) {
          const a = i[e];
          let o = a.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (o -= i[0].swiperSlideOffset);
          const c =
              (r + (s.centeredSlides ? t.minTranslate() : 0) - o) /
              (a.swiperSlideSize + s.spaceBetween),
            d =
              (r - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
              (a.swiperSlideSize + s.spaceBetween),
            p = -(r - o),
            u = p + t.slidesSizesGrid[e];
          ((p >= 0 && p < t.size - 1) ||
            (u > 1 && u <= t.size) ||
            (p <= 0 && u >= t.size)) &&
            (t.visibleSlides.push(a),
            t.visibleSlidesIndexes.push(e),
            i.eq(e).addClass(s.slideVisibleClass)),
            (a.progress = l ? -c : c),
            (a.originalProgress = l ? -d : d);
        }
        t.visibleSlides = x(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: l, isBeginning: n, isEnd: r } = t;
        const a = n,
          o = r;
        0 === i
          ? ((l = 0), (n = !0), (r = !0))
          : ((l = (e - t.minTranslate()) / i), (n = l <= 0), (r = l >= 1)),
          Object.assign(t, { progress: l, isBeginning: n, isEnd: r }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          n && !a && t.emit("reachBeginning toEdge"),
          r && !o && t.emit("reachEnd toEdge"),
          ((a && !n) || (o && !r)) && t.emit("fromEdge"),
          t.emit("progress", l);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: s,
            $wrapperEl: i,
            activeIndex: l,
            realIndex: n,
          } = e,
          r = e.virtual && s.virtual.enabled;
        let a;
        t.removeClass(
          `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
        ),
          (a = r
            ? e.$wrapperEl.find(
                `.${s.slideClass}[data-swiper-slide-index="${l}"]`
              )
            : t.eq(l)),
          a.addClass(s.slideActiveClass),
          s.loop &&
            (a.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${n}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass)
              : i
                  .children(
                    `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${n}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass));
        let o = a.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
        s.loop &&
          0 === o.length &&
          ((o = t.eq(0)), o.addClass(s.slideNextClass));
        let c = a.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
        s.loop &&
          0 === c.length &&
          ((c = t.eq(-1)), c.addClass(s.slidePrevClass)),
          s.loop &&
            (o.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${o.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass)
              : i
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${o.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass),
            c.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)
              : i
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: i,
            snapGrid: l,
            params: n,
            activeIndex: r,
            realIndex: a,
            snapIndex: o,
          } = t;
        let c,
          d = e;
        if (void 0 === d) {
          for (let e = 0; e < i.length; e += 1)
            void 0 !== i[e + 1]
              ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                ? (d = e)
                : s >= i[e] && s < i[e + 1] && (d = e + 1)
              : s >= i[e] && (d = e);
          n.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }
        if (l.indexOf(s) >= 0) c = l.indexOf(s);
        else {
          const e = Math.min(n.slidesPerGroupSkip, d);
          c = e + Math.floor((d - e) / n.slidesPerGroup);
        }
        if ((c >= l.length && (c = l.length - 1), d === r))
          return void (
            c !== o && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const p = parseInt(
          t.slides.eq(d).attr("data-swiper-slide-index") || d,
          10
        );
        Object.assign(t, {
          snapIndex: c,
          realIndex: p,
          previousIndex: r,
          activeIndex: d,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          a !== p && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          i = x(e).closest(`.${s.slideClass}`)[0];
        let l,
          n = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (n = !0), (l = e);
              break;
            }
        if (!i || !n)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                x(i).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = l),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const j = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const {
          params: t,
          rtlTranslate: s,
          translate: i,
          $wrapperEl: l,
        } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let n = P(l[0], e);
        return s && (n = -n), n || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          {
            rtlTranslate: i,
            params: l,
            $wrapperEl: n,
            wrapperEl: r,
            progress: a,
          } = s;
        let o,
          c = 0,
          d = 0;
        s.isHorizontal() ? (c = i ? -e : e) : (d = e),
          l.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
          l.cssMode
            ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -c : -d)
            : l.virtualTranslate ||
              n.transform(`translate3d(${c}px, ${d}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? c : d);
        const p = s.maxTranslate() - s.minTranslate();
        (o = 0 === p ? 0 : (e - s.minTranslate()) / p),
          o !== a && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, s, i, l) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          void 0 === i && (i = !0);
        const n = this,
          { params: r, wrapperEl: a } = n;
        if (n.animating && r.preventInteractionOnTransition) return !1;
        const o = n.minTranslate(),
          c = n.maxTranslate();
        let d;
        if (
          ((d = i && e > o ? o : i && e < c ? c : e),
          n.updateProgress(d),
          r.cssMode)
        ) {
          const e = n.isHorizontal();
          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!n.support.smoothScroll)
              return (
                H({ swiper: n, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (n.setTransition(0),
              n.setTranslate(d),
              s &&
                (n.emit("beforeTransitionStart", t, l),
                n.emit("transitionEnd")))
            : (n.setTransition(t),
              n.setTranslate(d),
              s &&
                (n.emit("beforeTransitionStart", t, l),
                n.emit("transitionStart")),
              n.animating ||
                ((n.animating = !0),
                n.onTranslateToWrapperTransitionEnd ||
                  (n.onTranslateToWrapperTransitionEnd = function (e) {
                    n &&
                      !n.destroyed &&
                      e.target === this &&
                      (n.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        n.onTranslateToWrapperTransitionEnd
                      ),
                      n.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        n.onTranslateToWrapperTransitionEnd
                      ),
                      (n.onTranslateToWrapperTransitionEnd = null),
                      delete n.onTranslateToWrapperTransitionEnd,
                      s && n.emit("transitionEnd"));
                  }),
                n.$wrapperEl[0].addEventListener(
                  "transitionend",
                  n.onTranslateToWrapperTransitionEnd
                ),
                n.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  n.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function F(e) {
      let { swiper: t, runCallbacks: s, direction: i, step: l } = e;
      const { activeIndex: n, previousIndex: r } = t;
      let a = i;
      if (
        (a || (a = n > r ? "next" : n < r ? "prev" : "reset"),
        t.emit(`transition${l}`),
        s && n !== r)
      ) {
        if ("reset" === a) return void t.emit(`slideResetTransition${l}`);
        t.emit(`slideChangeTransition${l}`),
          "next" === a
            ? t.emit(`slideNextTransition${l}`)
            : t.emit(`slidePrevTransition${l}`);
      }
    }
    const Y = {
      slideTo: function (e, t, s, i, l) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "number" != typeof e && "string" != typeof e)
        )
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const n = this;
        let r = e;
        r < 0 && (r = 0);
        const {
          params: a,
          snapGrid: o,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: p,
          rtlTranslate: u,
          wrapperEl: h,
          enabled: m,
        } = n;
        if (
          (n.animating && a.preventInteractionOnTransition) ||
          (!m && !i && !l)
        )
          return !1;
        const f = Math.min(n.params.slidesPerGroupSkip, r);
        let g = f + Math.floor((r - f) / n.params.slidesPerGroup);
        g >= o.length && (g = o.length - 1),
          (p || a.initialSlide || 0) === (d || 0) &&
            s &&
            n.emit("beforeSlideChangeStart");
        const w = -o[g];
        if ((n.updateProgress(w), a.normalizeSlideIndex))
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * w),
              s = Math.floor(100 * c[e]),
              i = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= s && t < i - (i - s) / 2
                ? (r = e)
                : t >= s && t < i && (r = e + 1)
              : t >= s && (r = e);
          }
        if (n.initialized && r !== p) {
          if (!n.allowSlideNext && w < n.translate && w < n.minTranslate())
            return !1;
          if (
            !n.allowSlidePrev &&
            w > n.translate &&
            w > n.maxTranslate() &&
            (p || 0) !== r
          )
            return !1;
        }
        let v;
        if (
          ((v = r > p ? "next" : r < p ? "prev" : "reset"),
          (u && -w === n.translate) || (!u && w === n.translate))
        )
          return (
            n.updateActiveIndex(r),
            a.autoHeight && n.updateAutoHeight(),
            n.updateSlidesClasses(),
            "slide" !== a.effect && n.setTranslate(w),
            "reset" !== v && (n.transitionStart(s, v), n.transitionEnd(s, v)),
            !1
          );
        if (a.cssMode) {
          const e = n.isHorizontal(),
            s = u ? w : -w;
          if (0 === t) {
            const t = n.virtual && n.params.virtual.enabled;
            t &&
              ((n.wrapperEl.style.scrollSnapType = "none"),
              (n._immediateVirtual = !0)),
              (h[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (n.wrapperEl.style.scrollSnapType = ""),
                    (n._swiperImmediateVirtual = !1);
                });
          } else {
            if (!n.support.smoothScroll)
              return (
                H({ swiper: n, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          n.setTransition(t),
          n.setTranslate(w),
          n.updateActiveIndex(r),
          n.updateSlidesClasses(),
          n.emit("beforeTransitionStart", t, i),
          n.transitionStart(s, v),
          0 === t
            ? n.transitionEnd(s, v)
            : n.animating ||
              ((n.animating = !0),
              n.onSlideToWrapperTransitionEnd ||
                (n.onSlideToWrapperTransitionEnd = function (e) {
                  n &&
                    !n.destroyed &&
                    e.target === this &&
                    (n.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      n.onSlideToWrapperTransitionEnd
                    ),
                    n.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      n.onSlideToWrapperTransitionEnd
                    ),
                    (n.onSlideToWrapperTransitionEnd = null),
                    delete n.onSlideToWrapperTransitionEnd,
                    n.transitionEnd(s, v));
                }),
              n.$wrapperEl[0].addEventListener(
                "transitionend",
                n.onSlideToWrapperTransitionEnd
              ),
              n.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                n.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e, t, s, i) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0);
        const l = this;
        let n = e;
        return l.params.loop && (n += l.loopedSlides), l.slideTo(n, t, s, i);
      },
      slideNext: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          { animating: l, enabled: n, params: r } = i;
        if (!n) return i;
        let a = r.slidesPerGroup;
        "auto" === r.slidesPerView &&
          1 === r.slidesPerGroup &&
          r.slidesPerGroupAuto &&
          (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : a;
        if (r.loop) {
          if (l && r.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        return r.rewind && i.isEnd
          ? i.slideTo(0, e, t, s)
          : i.slideTo(i.activeIndex + o, e, t, s);
      },
      slidePrev: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          {
            params: l,
            animating: n,
            snapGrid: r,
            slidesGrid: a,
            rtlTranslate: o,
            enabled: c,
          } = i;
        if (!c) return i;
        if (l.loop) {
          if (n && l.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const p = d(o ? i.translate : -i.translate),
          u = r.map((e) => d(e));
        let h = r[u.indexOf(p) - 1];
        if (void 0 === h && l.cssMode) {
          let e;
          r.forEach((t, s) => {
            p >= t && (e = s);
          }),
            void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
        }
        let m = 0;
        if (
          (void 0 !== h &&
            ((m = a.indexOf(h)),
            m < 0 && (m = i.activeIndex - 1),
            "auto" === l.slidesPerView &&
              1 === l.slidesPerGroup &&
              l.slidesPerGroupAuto &&
              ((m = m - i.slidesPerViewDynamic("previous", !0) + 1),
              (m = Math.max(m, 0)))),
          l.rewind && i.isBeginning)
        ) {
          const l =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(l, e, t, s);
        }
        return i.slideTo(m, e, t, s);
      },
      slideReset: function (e, t, s) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, s)
        );
      },
      slideToClosest: function (e, t, s, i) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === i && (i = 0.5);
        const l = this;
        let n = l.activeIndex;
        const r = Math.min(l.params.slidesPerGroupSkip, n),
          a = r + Math.floor((n - r) / l.params.slidesPerGroup),
          o = l.rtlTranslate ? l.translate : -l.translate;
        if (o >= l.snapGrid[a]) {
          const e = l.snapGrid[a];
          o - e > (l.snapGrid[a + 1] - e) * i && (n += l.params.slidesPerGroup);
        } else {
          const e = l.snapGrid[a - 1];
          o - e <= (l.snapGrid[a] - e) * i && (n -= l.params.slidesPerGroup);
        }
        return (
          (n = Math.max(n, 0)),
          (n = Math.min(n, l.slidesGrid.length - 1)),
          l.slideTo(n, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let l,
          n = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (l = parseInt(x(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? n < e.loopedSlides - i / 2 ||
                n > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (n = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${l}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  A(() => {
                    e.slideTo(n);
                  }))
                : e.slideTo(n)
              : n > e.slides.length - i
              ? (e.loopFix(),
                (n = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${l}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                A(() => {
                  e.slideTo(n);
                }))
              : e.slideTo(n);
        } else e.slideTo(n);
      },
    };
    const X = {
      loopCreate: function () {
        const e = this,
          t = w(),
          { params: s, $wrapperEl: i } = e,
          l = i.children().length > 0 ? x(i.children()[0].parentNode) : i;
        l.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
        let n = l.children(`.${s.slideClass}`);
        if (s.loopFillGroupWithBlank) {
          const e = s.slidesPerGroup - (n.length % s.slidesPerGroup);
          if (e !== s.slidesPerGroup) {
            for (let i = 0; i < e; i += 1) {
              const e = x(t.createElement("div")).addClass(
                `${s.slideClass} ${s.slideBlankClass}`
              );
              l.append(e);
            }
            n = l.children(`.${s.slideClass}`);
          }
        }
        "auto" !== s.slidesPerView ||
          s.loopedSlides ||
          (s.loopedSlides = n.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(s.loopedSlides || s.slidesPerView, 10)
          )),
          (e.loopedSlides += s.loopAdditionalSlides),
          e.loopedSlides > n.length && (e.loopedSlides = n.length);
        const r = [],
          a = [];
        n.each((t, s) => {
          const i = x(t);
          s < e.loopedSlides && a.push(t),
            s < n.length && s >= n.length - e.loopedSlides && r.push(t),
            i.attr("data-swiper-slide-index", s);
        });
        for (let e = 0; e < a.length; e += 1)
          l.append(x(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        for (let e = r.length - 1; e >= 0; e -= 1)
          l.prepend(x(r[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: s,
          loopedSlides: i,
          allowSlidePrev: l,
          allowSlideNext: n,
          snapGrid: r,
          rtlTranslate: a,
        } = e;
        let o;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -r[t] - e.getTranslate();
        if (t < i) {
          (o = s.length - 3 * i + t), (o += i);
          e.slideTo(o, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        } else if (t >= s.length - i) {
          (o = -s.length + t + i), (o += i);
          e.slideTo(o, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = l), (e.allowSlideNext = n), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: s } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          s.removeAttr("data-swiper-slide-index");
      },
    };
    function U(e) {
      const t = this,
        s = w(),
        i = b(),
        l = t.touchEventsData,
        { params: n, touches: r, enabled: a } = t;
      if (!a) return;
      if (t.animating && n.preventInteractionOnTransition) return;
      !t.animating && n.cssMode && n.loop && t.loopFix();
      let o = e;
      o.originalEvent && (o = o.originalEvent);
      let c = x(o.target);
      if ("wrapper" === n.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((l.isTouchEvent = "touchstart" === o.type),
        !l.isTouchEvent && "which" in o && 3 === o.which)
      )
        return;
      if (!l.isTouchEvent && "button" in o && o.button > 0) return;
      if (l.isTouched && l.isMoved) return;
      !!n.noSwipingClass &&
        "" !== n.noSwipingClass &&
        o.target &&
        o.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (c = x(e.path[0]));
      const d = n.noSwipingSelector
          ? n.noSwipingSelector
          : `.${n.noSwipingClass}`,
        p = !(!o.target || !o.target.shadowRoot);
      if (
        n.noSwiping &&
        (p
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(s) {
                  if (!s || s === w() || s === b()) return null;
                  s.assignedSlot && (s = s.assignedSlot);
                  const i = s.closest(e);
                  return i || s.getRootNode
                    ? i || t(s.getRootNode().host)
                    : null;
                })(t)
              );
            })(d, c[0])
          : c.closest(d)[0])
      )
        return void (t.allowClick = !0);
      if (n.swipeHandler && !c.closest(n.swipeHandler)[0]) return;
      (r.currentX =
        "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX),
        (r.currentY =
          "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY);
      const u = r.currentX,
        h = r.currentY,
        m = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
        f = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
      if (m && (u <= f || u >= i.innerWidth - f)) {
        if ("prevent" !== m) return;
        e.preventDefault();
      }
      if (
        (Object.assign(l, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (r.startX = u),
        (r.startY = h),
        (l.touchStartTime = k()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        n.threshold > 0 && (l.allowThresholdMove = !1),
        "touchstart" !== o.type)
      ) {
        let e = !0;
        c.is(l.focusableElements) &&
          ((e = !1), "SELECT" === c[0].nodeName && (l.isTouched = !1)),
          s.activeElement &&
            x(s.activeElement).is(l.focusableElements) &&
            s.activeElement !== c[0] &&
            s.activeElement.blur();
        const i = e && t.allowTouchMove && n.touchStartPreventDefault;
        (!n.touchStartForcePreventDefault && !i) ||
          c[0].isContentEditable ||
          o.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !n.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", o);
    }
    function Z(e) {
      const t = w(),
        s = this,
        i = s.touchEventsData,
        { params: l, touches: n, rtlTranslate: r, enabled: a } = s;
      if (!a) return;
      let o = e;
      if ((o.originalEvent && (o = o.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", o)
        );
      if (i.isTouchEvent && "touchmove" !== o.type) return;
      const c =
          "touchmove" === o.type &&
          o.targetTouches &&
          (o.targetTouches[0] || o.changedTouches[0]),
        d = "touchmove" === o.type ? c.pageX : o.pageX,
        p = "touchmove" === o.type ? c.pageY : o.pageY;
      if (o.preventedByNestedSwiper) return (n.startX = d), void (n.startY = p);
      if (!s.allowTouchMove)
        return (
          x(o.target).is(i.focusableElements) || (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(n, {
              startX: d,
              startY: p,
              currentX: d,
              currentY: p,
            }),
            (i.touchStartTime = k()))
          )
        );
      if (i.isTouchEvent && l.touchReleaseOnEdges && !l.loop)
        if (s.isVertical()) {
          if (
            (p < n.startY && s.translate <= s.maxTranslate()) ||
            (p > n.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (d < n.startX && s.translate <= s.maxTranslate()) ||
          (d > n.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        i.isTouchEvent &&
        t.activeElement &&
        o.target === t.activeElement &&
        x(o.target).is(i.focusableElements)
      )
        return (i.isMoved = !0), void (s.allowClick = !1);
      if (
        (i.allowTouchCallbacks && s.emit("touchMove", o),
        o.targetTouches && o.targetTouches.length > 1)
      )
        return;
      (n.currentX = d), (n.currentY = p);
      const u = n.currentX - n.startX,
        h = n.currentY - n.startY;
      if (s.params.threshold && Math.sqrt(u ** 2 + h ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && n.currentY === n.startY) ||
        (s.isVertical() && n.currentX === n.startX)
          ? (i.isScrolling = !1)
          : u * u + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(u))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > l.touchAngle
              : 90 - e > l.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", o),
        void 0 === i.startMoving &&
          ((n.currentX === n.startX && n.currentY === n.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !l.cssMode && o.cancelable && o.preventDefault(),
        l.touchMoveStopPropagation && !l.nested && o.stopPropagation(),
        i.isMoved ||
          (l.loop && !l.cssMode && s.loopFix(),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating &&
            s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (i.allowMomentumBounce = !1),
          !l.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", o)),
        s.emit("sliderMove", o),
        (i.isMoved = !0);
      let m = s.isHorizontal() ? u : h;
      (n.diff = m),
        (m *= l.touchRatio),
        r && (m = -m),
        (s.swipeDirection = m > 0 ? "prev" : "next"),
        (i.currentTranslate = m + i.startTranslate);
      let f = !0,
        g = l.resistanceRatio;
      if (
        (l.touchReleaseOnEdges && (g = 0),
        m > 0 && i.currentTranslate > s.minTranslate()
          ? ((f = !1),
            l.resistance &&
              (i.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + i.startTranslate + m) ** g))
          : m < 0 &&
            i.currentTranslate < s.maxTranslate() &&
            ((f = !1),
            l.resistance &&
              (i.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - i.startTranslate - m) ** g)),
        f && (o.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        l.threshold > 0)
      ) {
        if (!(Math.abs(m) > l.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (n.startX = n.currentX),
            (n.startY = n.currentY),
            (i.currentTranslate = i.startTranslate),
            void (n.diff = s.isHorizontal()
              ? n.currentX - n.startX
              : n.currentY - n.startY)
          );
      }
      l.followFinger &&
        !l.cssMode &&
        (((l.freeMode && l.freeMode.enabled && s.freeMode) ||
          l.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          l.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function Q(e) {
      const t = this,
        s = t.touchEventsData,
        {
          params: i,
          touches: l,
          rtlTranslate: n,
          slidesGrid: r,
          enabled: a,
        } = t;
      if (!a) return;
      let o = e;
      if (
        (o.originalEvent && (o = o.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", o),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && i.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      i.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = k(),
        d = c - s.touchStartTime;
      if (t.allowClick) {
        const e = o.path || (o.composedPath && o.composedPath());
        t.updateClickedSlide((e && e[0]) || o.target),
          t.emit("tap click", o),
          d < 300 &&
            c - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", o);
      }
      if (
        ((s.lastClickTime = k()),
        A(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === l.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let p;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (p = i.followFinger
          ? n
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        i.cssMode)
      )
        return;
      if (t.params.freeMode && i.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: p });
      let u = 0,
        h = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < r.length;
        e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
      ) {
        const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        void 0 !== r[e + t]
          ? p >= r[e] && p < r[e + t] && ((u = e), (h = r[e + t] - r[e]))
          : p >= r[e] && ((u = e), (h = r[r.length - 1] - r[r.length - 2]));
      }
      let m = null,
        f = null;
      i.rewind &&
        (t.isBeginning
          ? (f =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (m = 0));
      const g = (p - r[u]) / h,
        w = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      if (d > i.longSwipesMs) {
        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (g >= i.longSwipesRatio
            ? t.slideTo(i.rewind && t.isEnd ? m : u + w)
            : t.slideTo(u)),
          "prev" === t.swipeDirection &&
            (g > 1 - i.longSwipesRatio
              ? t.slideTo(u + w)
              : null !== f && g < 0 && Math.abs(g) > i.longSwipesRatio
              ? t.slideTo(f)
              : t.slideTo(u));
      } else {
        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
          ? o.target === t.navigation.nextEl
            ? t.slideTo(u + w)
            : t.slideTo(u)
          : ("next" === t.swipeDirection && t.slideTo(null !== m ? m : u + w),
            "prev" === t.swipeDirection && t.slideTo(null !== f ? f : u));
      }
    }
    function K() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: l, snapGrid: n } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = l),
        (e.allowSlideNext = i),
        e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
    }
    function J(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function ee() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let l;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const n = e.maxTranslate() - e.minTranslate();
      (l = 0 === n ? 0 : (e.translate - e.minTranslate()) / n),
        l !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let te = !1;
    function se() {}
    const ie = (e, t) => {
      const s = w(),
        {
          params: i,
          touchEvents: l,
          el: n,
          wrapperEl: r,
          device: a,
          support: o,
        } = e,
        c = !!i.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        p = t;
      if (o.touch) {
        const t = !(
          "touchstart" !== l.start ||
          !o.passiveListener ||
          !i.passiveListeners
        ) && { passive: !0, capture: !1 };
        n[d](l.start, e.onTouchStart, t),
          n[d](
            l.move,
            e.onTouchMove,
            o.passiveListener ? { passive: !1, capture: c } : c
          ),
          n[d](l.end, e.onTouchEnd, t),
          l.cancel && n[d](l.cancel, e.onTouchEnd, t);
      } else
        n[d](l.start, e.onTouchStart, !1),
          s[d](l.move, e.onTouchMove, c),
          s[d](l.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        n[d]("click", e.onClick, !0),
        i.cssMode && r[d]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[p](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              K,
              !0
            )
          : e[p]("observerUpdate", K, !0);
    };
    const le = {
        attachEvents: function () {
          const e = this,
            t = w(),
            { params: s, support: i } = e;
          (e.onTouchStart = U.bind(e)),
            (e.onTouchMove = Z.bind(e)),
            (e.onTouchEnd = Q.bind(e)),
            s.cssMode && (e.onScroll = ee.bind(e)),
            (e.onClick = J.bind(e)),
            i.touch && !te && (t.addEventListener("touchstart", se), (te = !0)),
            ie(e, "on");
        },
        detachEvents: function () {
          ie(this, "off");
        },
      },
      ne = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const re = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: s,
            loopedSlides: i = 0,
            params: l,
            $el: n,
          } = e,
          r = l.breakpoints;
        if (!r || (r && 0 === Object.keys(r).length)) return;
        const a = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
        if (!a || e.currentBreakpoint === a) return;
        const o = (a in r ? r[a] : void 0) || e.originalParams,
          c = ne(e, l),
          d = ne(e, o),
          p = l.enabled;
        c && !d
          ? (n.removeClass(
              `${l.containerModifierClass}grid ${l.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !c &&
            d &&
            (n.addClass(`${l.containerModifierClass}grid`),
            ((o.grid.fill && "column" === o.grid.fill) ||
              (!o.grid.fill && "column" === l.grid.fill)) &&
              n.addClass(`${l.containerModifierClass}grid-column`),
            e.emitContainerClasses());
        const u = o.direction && o.direction !== l.direction,
          h = l.loop && (o.slidesPerView !== l.slidesPerView || u);
        u && s && e.changeDirection(), V(e.params, o);
        const m = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          p && !m ? e.disable() : !p && m && e.enable(),
          (e.currentBreakpoint = a),
          e.emit("_beforeBreakpoint", o),
          h &&
            s &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - i + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", o);
      },
      getBreakpoint: function (e, t, s) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
          return;
        let i = !1;
        const l = b(),
          n = "window" === t ? l.innerHeight : s.clientHeight,
          r = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: n * t, point: e };
            }
            return { value: e, point: e };
          });
        r.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < r.length; e += 1) {
          const { point: n, value: a } = r[e];
          "window" === t
            ? l.matchMedia(`(min-width: ${a}px)`).matches && (i = n)
            : a <= s.clientWidth && (i = n);
        }
        return i || "max";
      },
    };
    const ae = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: s,
            rtl: i,
            $el: l,
            device: n,
            support: r,
          } = e,
          a = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((i) => {
                      e[i] && s.push(t + i);
                    })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "pointer-events": !r.touch },
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: i },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: n.android },
              { ios: n.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
              { "watch-progress": s.watchSlidesProgress },
            ],
            s.containerModifierClass
          );
        t.push(...a), l.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const oe = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function ce(e, t) {
      return function (s) {
        void 0 === s && (s = {});
        const i = Object.keys(s)[0],
          l = s[i];
        "object" == typeof l && null !== l
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in l
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                V(t, s))
              : V(t, s))
          : V(t, s);
      };
    }
    const de = {
        eventsEmitter: R,
        update: N,
        translate: j,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode || s.$wrapperEl.transition(e),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            i.cssMode ||
              (i.autoHeight && s.updateAutoHeight(),
              F({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            (s.animating = !1),
              i.cssMode ||
                (s.setTransition(0),
                F({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: Y,
        loop: X,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: le,
        breakpoints: re,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: i } = s;
            if (i) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: ae,
        images: {
          loadImage: function (e, t, s, i, l, n) {
            const r = b();
            let a;
            function o() {
              n && n();
            }
            x(e).parent("picture")[0] || (e.complete && l)
              ? o()
              : t
              ? ((a = new r.Image()),
                (a.onload = o),
                (a.onerror = o),
                i && (a.sizes = i),
                s && (a.srcset = s),
                t && (a.src = t))
              : o();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
              const i = e.imagesToLoad[s];
              e.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      pe = {};
    class ue {
      constructor() {
        let e, t;
        for (var s = arguments.length, i = new Array(s), l = 0; l < s; l++)
          i[l] = arguments[l];
        if (
          (1 === i.length &&
          i[0].constructor &&
          "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
            ? (t = i[0])
            : ([e, t] = i),
          t || (t = {}),
          (t = V({}, t)),
          e && !t.el && (t.el = e),
          t.el && x(t.el).length > 1)
        ) {
          const e = [];
          return (
            x(t.el).each((s) => {
              const i = V({}, t, { el: s });
              e.push(new ue(i));
            }),
            e
          );
        }
        const n = this;
        (n.__swiper__ = !0),
          (n.support = z()),
          (n.device = D({ userAgent: t.userAgent })),
          (n.browser = G()),
          (n.eventsListeners = {}),
          (n.eventsAnyListeners = []),
          (n.modules = [...n.__modules__]),
          t.modules && Array.isArray(t.modules) && n.modules.push(...t.modules);
        const r = {};
        n.modules.forEach((e) => {
          e({
            swiper: n,
            extendParams: ce(t, r),
            on: n.on.bind(n),
            once: n.once.bind(n),
            off: n.off.bind(n),
            emit: n.emit.bind(n),
          });
        });
        const a = V({}, oe, r);
        return (
          (n.params = V({}, a, pe, t)),
          (n.originalParams = V({}, n.params)),
          (n.passedParams = V({}, t)),
          n.params &&
            n.params.on &&
            Object.keys(n.params.on).forEach((e) => {
              n.on(e, n.params.on[e]);
            }),
          n.params && n.params.onAny && n.onAny(n.params.onAny),
          (n.$ = x),
          Object.assign(n, {
            enabled: n.params.enabled,
            el: e,
            classNames: [],
            slides: x(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === n.params.direction,
            isVertical: () => "vertical" === n.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (n.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (n.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                n.support.touch || !n.params.simulateTouch
                  ? n.touchEventsTouch
                  : n.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: n.params.focusableElements,
              lastClickTime: k(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          n.emit("_swiper"),
          n.params.init && n.init(),
          n
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
          l = (s.maxTranslate() - i) * e + i;
        s.translateTo(l, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((s) => {
          const i = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: s,
          slides: i,
          slidesGrid: l,
          slidesSizesGrid: n,
          size: r,
          activeIndex: a,
        } = this;
        let o = 1;
        if (s.centeredSlides) {
          let e,
            t = i[a].swiperSlideSize;
          for (let s = a + 1; s < i.length; s += 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (o += 1), t > r && (e = !0));
          for (let s = a - 1; s >= 0; s -= 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (o += 1), t > r && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < i.length; e += 1) {
            (t ? l[e] + n[e] - l[a] < r : l[e] - l[a] < r) && (o += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            l[a] - l[e] < r && (o += 1);
          }
        return o;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let l;
        s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : ((l =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              l || i()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this,
          i = s.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.$el
              .removeClass(`${s.params.containerModifierClass}${i}`)
              .addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const s = x(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let l = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = x(e.shadowRoot.querySelector(i()));
            return (t.children = (e) => s.children(e)), t;
          }
          return s.children ? s.children(i()) : x(s).children(i());
        })();
        if (0 === l.length && t.params.createElements) {
          const e = w().createElement("div");
          (l = x(e)),
            (e.className = t.params.wrapperClass),
            s.append(e),
            s.children(`.${t.params.slideClass}`).each((e) => {
              l.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: l,
            wrapperEl: l[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === l.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const s = this,
          { params: i, $el: l, $wrapperEl: n, slides: r } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              l.removeAttr("style"),
              n.removeAttr("style"),
              r &&
                r.length &&
                r
                  .removeClass(
                    [
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        V(pe, e);
      }
      static get extendedDefaults() {
        return pe;
      }
      static get defaults() {
        return oe;
      }
      static installModule(e) {
        ue.prototype.__modules__ || (ue.prototype.__modules__ = []);
        const t = ue.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => ue.installModule(e)), ue)
          : (ue.installModule(e), ue);
      }
    }
    Object.keys(de).forEach((e) => {
      Object.keys(de[e]).forEach((t) => {
        ue.prototype[t] = de[e][t];
      });
    }),
      ue.use([
        function (e) {
          let { swiper: t, on: s, emit: i } = e;
          const l = b();
          let n = null,
            r = null;
          const a = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (i("beforeResize"), i("resize"));
            },
            o = () => {
              t && !t.destroyed && t.initialized && i("orientationchange");
            };
          s("init", () => {
            t.params.resizeObserver && void 0 !== l.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((n = new ResizeObserver((e) => {
                  r = l.requestAnimationFrame(() => {
                    const { width: s, height: i } = t;
                    let l = s,
                      n = i;
                    e.forEach((e) => {
                      let { contentBoxSize: s, contentRect: i, target: r } = e;
                      (r && r !== t.el) ||
                        ((l = i ? i.width : (s[0] || s).inlineSize),
                        (n = i ? i.height : (s[0] || s).blockSize));
                    }),
                      (l === s && n === i) || a();
                  });
                })),
                n.observe(t.el))
              : (l.addEventListener("resize", a),
                l.addEventListener("orientationchange", o));
          }),
            s("destroy", () => {
              r && l.cancelAnimationFrame(r),
                n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
                l.removeEventListener("resize", a),
                l.removeEventListener("orientationchange", o);
            });
        },
        function (e) {
          let { swiper: t, extendParams: s, on: i, emit: l } = e;
          const n = [],
            r = b(),
            a = function (e, t) {
              void 0 === t && (t = {});
              const s = new (r.MutationObserver || r.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void l("observerUpdate", e[0]);
                  const t = function () {
                    l("observerUpdate", e[0]);
                  };
                  r.requestAnimationFrame
                    ? r.requestAnimationFrame(t)
                    : r.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                n.push(s);
            };
          s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) a(e[t]);
                }
                a(t.$el[0], { childList: t.params.observeSlideChildren }),
                  a(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            i("destroy", () => {
              n.forEach((e) => {
                e.disconnect();
              }),
                n.splice(0, n.length);
            });
        },
      ]);
    const he = ue;
    function me(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function fe(e) {
      let { swiper: t, extendParams: s, on: i, emit: l } = e;
      const n = "swiper-pagination";
      let r;
      s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${n}-bullet`,
          bulletActiveClass: `${n}-bullet-active`,
          modifierClass: `${n}-`,
          currentClass: `${n}-current`,
          totalClass: `${n}-total`,
          hiddenClass: `${n}-hidden`,
          progressbarFillClass: `${n}-progressbar-fill`,
          progressbarOppositeClass: `${n}-progressbar-opposite`,
          clickableClass: `${n}-clickable`,
          lockClass: `${n}-lock`,
          horizontalClass: `${n}-horizontal`,
          verticalClass: `${n}-vertical`,
        },
      }),
        (t.pagination = { el: null, $el: null, bullets: [] });
      let a = 0;
      function o() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          !t.pagination.$el ||
          0 === t.pagination.$el.length
        );
      }
      function c(e, s) {
        const { bulletActiveClass: i } = t.params.pagination;
        e[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`);
      }
      function d() {
        const e = t.rtl,
          s = t.params.pagination;
        if (o()) return;
        const i =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          n = t.pagination.$el;
        let d;
        const p = t.params.loop
          ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((d = Math.ceil(
                (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
              )),
              d > i - 1 - 2 * t.loopedSlides && (d -= i - 2 * t.loopedSlides),
              d > p - 1 && (d -= p),
              d < 0 && "bullets" !== t.params.paginationType && (d = p + d))
            : (d = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
          "bullets" === s.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const i = t.pagination.bullets;
          let l, o, p;
          if (
            (s.dynamicBullets &&
              ((r = i
                .eq(0)
                [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              n.css(
                t.isHorizontal() ? "width" : "height",
                r * (s.dynamicMainBullets + 4) + "px"
              ),
              s.dynamicMainBullets > 1 &&
                void 0 !== t.previousIndex &&
                ((a += d - (t.previousIndex - t.loopedSlides || 0)),
                a > s.dynamicMainBullets - 1
                  ? (a = s.dynamicMainBullets - 1)
                  : a < 0 && (a = 0)),
              (l = Math.max(d - a, 0)),
              (o = l + (Math.min(i.length, s.dynamicMainBullets) - 1)),
              (p = (o + l) / 2)),
            i.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${s.bulletActiveClass}${e}`)
                .join(" ")
            ),
            n.length > 1)
          )
            i.each((e) => {
              const t = x(e),
                i = t.index();
              i === d && t.addClass(s.bulletActiveClass),
                s.dynamicBullets &&
                  (i >= l &&
                    i <= o &&
                    t.addClass(`${s.bulletActiveClass}-main`),
                  i === l && c(t, "prev"),
                  i === o && c(t, "next"));
            });
          else {
            const e = i.eq(d),
              n = e.index();
            if ((e.addClass(s.bulletActiveClass), s.dynamicBullets)) {
              const e = i.eq(l),
                r = i.eq(o);
              for (let e = l; e <= o; e += 1)
                i.eq(e).addClass(`${s.bulletActiveClass}-main`);
              if (t.params.loop)
                if (n >= i.length) {
                  for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                    i.eq(i.length - e).addClass(`${s.bulletActiveClass}-main`);
                  i.eq(i.length - s.dynamicMainBullets - 1).addClass(
                    `${s.bulletActiveClass}-prev`
                  );
                } else c(e, "prev"), c(r, "next");
              else c(e, "prev"), c(r, "next");
            }
          }
          if (s.dynamicBullets) {
            const l = Math.min(i.length, s.dynamicMainBullets + 4),
              n = (r * l - r) / 2 - p * r,
              a = e ? "right" : "left";
            i.css(t.isHorizontal() ? a : "top", `${n}px`);
          }
        }
        if (
          ("fraction" === s.type &&
            (n.find(me(s.currentClass)).text(s.formatFractionCurrent(d + 1)),
            n.find(me(s.totalClass)).text(s.formatFractionTotal(p))),
          "progressbar" === s.type)
        ) {
          let e;
          e = s.progressbarOpposite
            ? t.isHorizontal()
              ? "vertical"
              : "horizontal"
            : t.isHorizontal()
            ? "horizontal"
            : "vertical";
          const i = (d + 1) / p;
          let l = 1,
            r = 1;
          "horizontal" === e ? (l = i) : (r = i),
            n
              .find(me(s.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${l}) scaleY(${r})`)
              .transition(t.params.speed);
        }
        "custom" === s.type && s.renderCustom
          ? (n.html(s.renderCustom(t, d + 1, p)), l("paginationRender", n[0]))
          : l("paginationUpdate", n[0]),
          t.params.watchOverflow &&
            t.enabled &&
            n[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
      }
      function p() {
        const e = t.params.pagination;
        if (o()) return;
        const s =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          i = t.pagination.$el;
        let n = "";
        if ("bullets" === e.type) {
          let l = t.params.loop
            ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.loop &&
            l > s &&
            (l = s);
          for (let s = 0; s < l; s += 1)
            e.renderBullet
              ? (n += e.renderBullet.call(t, s, e.bulletClass))
              : (n += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          i.html(n), (t.pagination.bullets = i.find(me(e.bulletClass)));
        }
        "fraction" === e.type &&
          ((n = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          i.html(n)),
          "progressbar" === e.type &&
            ((n = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
            i.html(n)),
          "custom" !== e.type && l("paginationRender", t.pagination.$el[0]);
      }
      function u() {
        t.params.pagination = (function (e, t, s, i) {
          const l = w();
          return (
            e.params.createElements &&
              Object.keys(i).forEach((n) => {
                if (!s[n] && !0 === s.auto) {
                  let r = e.$el.children(`.${i[n]}`)[0];
                  r ||
                    ((r = l.createElement("div")),
                    (r.className = i[n]),
                    e.$el.append(r)),
                    (s[n] = r),
                    (t[n] = r);
                }
              }),
            s
          );
        })(t, t.originalParams.pagination, t.params.pagination, {
          el: "swiper-pagination",
        });
        const e = t.params.pagination;
        if (!e.el) return;
        let s = x(e.el);
        0 !== s.length &&
          (t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            s.length > 1 &&
            ((s = t.$el.find(e.el)),
            s.length > 1 &&
              (s = s.filter((e) => x(e).parents(".swiper")[0] === t.el))),
          "bullets" === e.type && e.clickable && s.addClass(e.clickableClass),
          s.addClass(e.modifierClass + e.type),
          s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          "bullets" === e.type &&
            e.dynamicBullets &&
            (s.addClass(`${e.modifierClass}${e.type}-dynamic`),
            (a = 0),
            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
          "progressbar" === e.type &&
            e.progressbarOpposite &&
            s.addClass(e.progressbarOppositeClass),
          e.clickable &&
            s.on("click", me(e.bulletClass), function (e) {
              e.preventDefault();
              let s = x(this).index() * t.params.slidesPerGroup;
              t.params.loop && (s += t.loopedSlides), t.slideTo(s);
            }),
          Object.assign(t.pagination, { $el: s, el: s[0] }),
          t.enabled || s.addClass(e.lockClass));
      }
      function h() {
        const e = t.params.pagination;
        if (o()) return;
        const s = t.pagination.$el;
        s.removeClass(e.hiddenClass),
          s.removeClass(e.modifierClass + e.type),
          s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          t.pagination.bullets &&
            t.pagination.bullets.removeClass &&
            t.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && s.off("click", me(e.bulletClass));
      }
      i("init", () => {
        u(), p(), d();
      }),
        i("activeIndexChange", () => {
          (t.params.loop || void 0 === t.snapIndex) && d();
        }),
        i("snapIndexChange", () => {
          t.params.loop || d();
        }),
        i("slidesLengthChange", () => {
          t.params.loop && (p(), d());
        }),
        i("snapGridLengthChange", () => {
          t.params.loop || (p(), d());
        }),
        i("destroy", () => {
          h();
        }),
        i("enable disable", () => {
          const { $el: e } = t.pagination;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.pagination.lockClass
            );
        }),
        i("lock unlock", () => {
          d();
        }),
        i("click", (e, s) => {
          const i = s.target,
            { $el: n } = t.pagination;
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            n.length > 0 &&
            !x(i).hasClass(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                (t.navigation.prevEl && i === t.navigation.prevEl))
            )
              return;
            const e = n.hasClass(t.params.pagination.hiddenClass);
            l(!0 === e ? "paginationShow" : "paginationHide"),
              n.toggleClass(t.params.pagination.hiddenClass);
          }
        }),
        Object.assign(t.pagination, {
          render: p,
          update: d,
          init: u,
          destroy: h,
        });
    }
    function ge(e) {
      let { swiper: t, extendParams: s, on: i } = e;
      function l(e, t) {
        const s = (function () {
          let e, t, s;
          return (i, l) => {
            for (t = -1, e = i.length; e - t > 1; )
              (s = (e + t) >> 1), i[s] <= l ? (t = s) : (e = s);
            return e;
          };
        })();
        let i, l;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((l = s(this.x, e)),
                (i = l - 1),
                ((e - this.x[i]) * (this.y[l] - this.y[i])) /
                  (this.x[l] - this.x[i]) +
                  this.y[i])
              : 0;
          }),
          this
        );
      }
      function n() {
        t.controller.control &&
          t.controller.spline &&
          ((t.controller.spline = void 0), delete t.controller.spline);
      }
      s({ controller: { control: void 0, inverse: !1, by: "slide" } }),
        (t.controller = { control: void 0 }),
        i("beforeInit", () => {
          t.controller.control = t.params.controller.control;
        }),
        i("update", () => {
          n();
        }),
        i("resize", () => {
          n();
        }),
        i("observerUpdate", () => {
          n();
        }),
        i("setTranslate", (e, s, i) => {
          t.controller.control && t.controller.setTranslate(s, i);
        }),
        i("setTransition", (e, s, i) => {
          t.controller.control && t.controller.setTransition(s, i);
        }),
        Object.assign(t.controller, {
          setTranslate: function (e, s) {
            const i = t.controller.control;
            let n, r;
            const a = t.constructor;
            function o(e) {
              const s = t.rtlTranslate ? -t.translate : t.translate;
              "slide" === t.params.controller.by &&
                (!(function (e) {
                  t.controller.spline ||
                    (t.controller.spline = t.params.loop
                      ? new l(t.slidesGrid, e.slidesGrid)
                      : new l(t.snapGrid, e.snapGrid));
                })(e),
                (r = -t.controller.spline.interpolate(-s))),
                (r && "container" !== t.params.controller.by) ||
                  ((n =
                    (e.maxTranslate() - e.minTranslate()) /
                    (t.maxTranslate() - t.minTranslate())),
                  (r = (s - t.minTranslate()) * n + e.minTranslate())),
                t.params.controller.inverse && (r = e.maxTranslate() - r),
                e.updateProgress(r),
                e.setTranslate(r, t),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            }
            if (Array.isArray(i))
              for (let e = 0; e < i.length; e += 1)
                i[e] !== s && i[e] instanceof a && o(i[e]);
            else i instanceof a && s !== i && o(i);
          },
          setTransition: function (e, s) {
            const i = t.constructor,
              l = t.controller.control;
            let n;
            function r(s) {
              s.setTransition(e, t),
                0 !== e &&
                  (s.transitionStart(),
                  s.params.autoHeight &&
                    A(() => {
                      s.updateAutoHeight();
                    }),
                  s.$wrapperEl.transitionEnd(() => {
                    l &&
                      (s.params.loop &&
                        "slide" === t.params.controller.by &&
                        s.loopFix(),
                      s.transitionEnd());
                  }));
            }
            if (Array.isArray(l))
              for (n = 0; n < l.length; n += 1)
                l[n] !== s && l[n] instanceof i && r(l[n]);
            else l instanceof i && s !== l && r(l);
          },
        });
    }
    function we(e) {
      let t,
        s,
        i,
        { swiper: l, extendParams: n } = e;
      n({ grid: { rows: 1, fill: "column" } });
      l.grid = {
        initSlides: (e) => {
          const { slidesPerView: n } = l.params,
            { rows: r, fill: a } = l.params.grid;
          (s = t / r),
            (i = Math.floor(e / r)),
            (t = Math.floor(e / r) === e / r ? e : Math.ceil(e / r) * r),
            "auto" !== n && "row" === a && (t = Math.max(t, n * r));
        },
        updateSlide: (e, n, r, a) => {
          const { slidesPerGroup: o, spaceBetween: c } = l.params,
            { rows: d, fill: p } = l.params.grid;
          let u, h, m;
          if ("row" === p && o > 1) {
            const s = Math.floor(e / (o * d)),
              i = e - d * o * s,
              l = 0 === s ? o : Math.min(Math.ceil((r - s * d * o) / d), o);
            (m = Math.floor(i / l)),
              (h = i - m * l + s * o),
              (u = h + (m * t) / d),
              n.css({ "-webkit-order": u, order: u });
          } else
            "column" === p
              ? ((h = Math.floor(e / d)),
                (m = e - h * d),
                (h > i || (h === i && m === d - 1)) &&
                  ((m += 1), m >= d && ((m = 0), (h += 1))))
              : ((m = Math.floor(e / s)), (h = e - m * s));
          n.css(a("margin-top"), 0 !== m ? c && `${c}px` : "");
        },
        updateWrapperSize: (e, s, i) => {
          const {
              spaceBetween: n,
              centeredSlides: r,
              roundLengths: a,
            } = l.params,
            { rows: o } = l.params.grid;
          if (
            ((l.virtualSize = (e + n) * t),
            (l.virtualSize = Math.ceil(l.virtualSize / o) - n),
            l.$wrapperEl.css({ [i("width")]: `${l.virtualSize + n}px` }),
            r)
          ) {
            s.splice(0, s.length);
            const e = [];
            for (let t = 0; t < s.length; t += 1) {
              let i = s[t];
              a && (i = Math.floor(i)),
                s[t] < l.virtualSize + s[0] && e.push(i);
            }
            s.push(...e);
          }
        },
      };
    }
    function ve() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      !(function () {
        ve(),
          new he(".main__slider", {
            modules: [fe],
            slidesPerView: 1,
            spaceBetween: 10,
            speed: 800,
            touchRatio: 0.5,
            pagination: { el: ".bottom-main__pugg", clickable: !0 },
            on: {
              slideChange: function () {
                var e = this.realIndex + 1;
                this.el.querySelector(".bottom-main__number").innerHTML =
                  e > 9 ? e : "0" + e;
              },
              beforeInit: function () {
                let e =
                  this.wrapperEl.querySelectorAll(".swiper-slide").length -
                  (this.passedParams.slidesPerView - 1);
                this.el.querySelector(".bottom-main__amount").innerHTML =
                  e > 9 ? e : "0" + e;
              },
            },
          }),
          new he(".cards__slider", {
            modules: [fe],
            slidesPerView: 4,
            spaceBetween: 50,
            speed: 800,
            touchRatio: 0.5,
            pagination: { el: ".bottom-main__pugg", clickable: !0 },
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 30 },
              480: { slidesPerView: 2, spaceBetween: 30 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              992: { slidesPerView: 3, spaceBetween: 30 },
              1268: { slidesPerView: 4, spaceBetween: 50 },
            },
            on: {
              slideChange: function () {
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                null != t[e + 2] && t[e + 1].classList.add("_active"),
                  null != t[e + 3] &&
                    (t[e + 2].classList.add("_active"),
                    t[e + 1].classList.add("_active")),
                  (this.el.querySelector(".bottom-main__number").innerHTML =
                    e > 9 ? e : "0" + e);
              },
              beforeInit: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                t[e + 1].classList.add("_active"),
                  t[e + 2].classList.add("_active");
              },
              beforeResize: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
              },
            },
          }),
          new he(".cardsTwo__slider", {
            modules: [fe],
            slidesPerView: 4,
            spaceBetween: 50,
            speed: 800,
            touchRatio: 0.5,
            pagination: { el: ".bottom-main__pugg", clickable: !0 },
            breakpoints: {
              320: { slidesPerView: 2, spaceBetween: 20 },
              480: { slidesPerView: 2, spaceBetween: 30 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              992: { slidesPerView: 3, spaceBetween: 30 },
              1268: { slidesPerView: 4, spaceBetween: 50 },
            },
            on: {
              slideChange: function () {
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                null != t[e + 2] && t[e + 1].classList.add("_active"),
                  null != t[e + 3] &&
                    (t[e + 2].classList.add("_active"),
                    t[e + 1].classList.add("_active")),
                  (this.el.querySelector(".bottom-main__number").innerHTML =
                    e > 9 ? e : "0" + e);
              },
              beforeInit: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                t[e + 1].classList.add("_active"),
                  t[e + 2].classList.add("_active");
              },
              beforeResize: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
              },
            },
          }),
          new he(".about__slider", {
            modules: [fe],
            slidesPerView: 3,
            spaceBetween: 65,
            speed: 800,
            touchRatio: 0.5,
            pagination: { el: ".bottom-main__pugg", clickable: !0 },
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 30 },
              768: { slidesPerView: 2, spaceBetween: 27 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1268: { slidesPerView: 3, spaceBetween: 65 },
            },
            on: {
              slideChange: function () {
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                null != t[e + 2] && t[e + 1].classList.add("_active"),
                  null != t[e + 3] &&
                    (t[e + 2].classList.add("_active"),
                    t[e + 1].classList.add("_active")),
                  (this.el.querySelector(".bottom-main__number").innerHTML =
                    e > 9 ? e : "0" + e);
              },
              beforeInit: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                t[e + 1].classList.add("_active"),
                  t[e + 2].classList.add("_active");
              },
              beforeResize: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
              },
            },
          }),
          new he(".interesting__slider", {
            modules: [fe],
            slidesPerView: 4,
            spaceBetween: 50,
            speed: 800,
            touchRatio: 0.5,
            pagination: { el: ".bottom-main__pugg", clickable: !0 },
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 30 },
              480: { slidesPerView: 2, spaceBetween: 30 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1268: { slidesPerView: 4, spaceBetween: 30 },
            },
            on: {
              slideChange: function () {
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                null != t[e + 2] && t[e + 1].classList.add("_active"),
                  null != t[e + 3] &&
                    (t[e + 2].classList.add("_active"),
                    t[e + 1].classList.add("_active")),
                  (this.el.querySelector(".bottom-main__number").innerHTML =
                    e > 9 ? e : "0" + e);
              },
              beforeInit: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                t[e + 1].classList.add("_active"),
                  t[e + 2].classList.add("_active");
              },
              beforeResize: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
              },
            },
          }),
          new he(".face__slider", {
            modules: [fe, we],
            slidesPerView: 2,
            spaceBetween: 50,
            speed: 800,
            touchRatio: 0.5,
            pagination: { el: ".bottom-main__pugg", clickable: !0 },
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 30 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1268: { slidesPerView: 2, spaceBetween: 50 },
            },
            on: {
              slideChange: function () {
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                null != t[e + 2] && t[e + 1].classList.add("_active"),
                  null != t[e + 3] &&
                    (t[e + 2].classList.add("_active"),
                    t[e + 1].classList.add("_active")),
                  (this.el.querySelector(".bottom-main__number").innerHTML =
                    e > 9 ? e : "0" + e);
              },
              beforeInit: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                t[e + 1].classList.add("_active"),
                  t[e + 2].classList.add("_active");
              },
              beforeResize: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
              },
            },
          }),
          new he(".results__slider", {
            modules: [fe, we],
            slidesPerView: 2,
            spaceBetween: 50,
            speed: 800,
            touchRatio: 0.5,
            pagination: { el: ".bottom-main__pugg", clickable: !0 },
            breakpoints: {
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
                slidesPerColumnFill: "row",
                grid: { rows: 2 },
              },
              768: { slidesPerView: 2, spaceBetween: 30 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1268: { slidesPerView: 2, spaceBetween: 50 },
            },
            on: {
              slideChange: function () {
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                null != t[e + 2] && t[e + 1].classList.add("_active"),
                  null != t[e + 3] &&
                    (t[e + 2].classList.add("_active"),
                    t[e + 1].classList.add("_active")),
                  (this.el.querySelector(".bottom-main__number").innerHTML =
                    e > 9 ? e : "0" + e);
              },
              beforeInit: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                t[e + 1].classList.add("_active"),
                  t[e + 2].classList.add("_active");
              },
              beforeResize: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
              },
            },
          }),
          new he(".comparison__slider", {
            modules: [fe],
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 800,
            touchRatio: 0.5,
            pagination: { el: ".bottom-main__pugg", clickable: !0 },
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 0, autoHeight: !0 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1268: { slidesPerView: 3, spaceBetween: 30 },
            },
            on: {
              slideChange: function () {
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                null != t[e + 2] && t[e + 1].classList.add("_active"),
                  null != t[e + 3] &&
                    (t[e + 2].classList.add("_active"),
                    t[e + 1].classList.add("_active")),
                  (this.el.querySelector(".bottom-main__number").innerHTML =
                    e > 9 ? e : "0" + e);
              },
              beforeInit: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                t[e + 1].classList.add("_active"),
                  t[e + 2].classList.add("_active");
              },
              beforeResize: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
              },
            },
          }),
          new he(".awards__slider", {
            modules: [fe, we],
            slidesPerView: 3,
            spaceBetween: 50,
            speed: 800,
            touchRatio: 0.5,
            pagination: { el: ".bottom-main__pugg", clickable: !0 },
            breakpoints: {
              320: {
                slidesPerView: 1,
                spaceBetween: 50,
                slidesPerColumnFill: "row",
                grid: { rows: 3 },
              },
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1268: { slidesPerView: 3, spaceBetween: 30 },
            },
            on: {
              slideChange: function () {
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                null != t[e + 2] && t[e + 1].classList.add("_active"),
                  null != t[e + 3] &&
                    (t[e + 2].classList.add("_active"),
                    t[e + 1].classList.add("_active")),
                  (this.el.querySelector(".bottom-main__number").innerHTML =
                    e > 9 ? e : "0" + e);
              },
              beforeInit: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                t[e + 1].classList.add("_active"),
                  t[e + 2].classList.add("_active");
              },
              beforeResize: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
              },
            },
          }),
          new he(".centre__slider", {
            modules: [fe],
            slidesPerView: 3,
            spaceBetween: 50,
            speed: 800,
            centeredSlides: !0,
            initialSlide: 1,
            touchRatio: 0.5,
            pagination: { el: ".bottom-main__pugg", clickable: !0 },
            breakpoints: {
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: !0,
                centeredSlides: !1,
                initialSlide: 0,
              },
              768: { slidesPerView: 3, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1268: { slidesPerView: 3, spaceBetween: 50 },
            },
            on: {
              slideChange: function () {
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                null != t[e + 2] && t[e + 1].classList.add("_active"),
                  null != t[e + 3] &&
                    (t[e + 2].classList.add("_active"),
                    t[e + 1].classList.add("_active")),
                  (this.el.querySelector(".bottom-main__number").innerHTML =
                    e > 9 ? e : "0" + e);
              },
              beforeInit: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 3);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 3);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 3);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                t[e + 1].classList.add("_active"),
                  t[e + 2].classList.add("_active");
              },
              beforeResize: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
              },
            },
          });
        let e = new he(".doctors__slider", {
            modules: [fe, ge],
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 800,
            freeMode: !0,
            touchRatio: 0.5,
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 20, autoHeight: !0 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1268: { slidesPerView: 3, spaceBetween: 30 },
            },
            on: {
              slideChange: function () {
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                null != t[e + 2] && t[e + 1].classList.add("_active"),
                  null != t[e + 3] &&
                    (t[e + 2].classList.add("_active"),
                    t[e + 1].classList.add("_active")),
                  null != t[e + 1] && t[e + 1].classList.add("_active");
              },
              beforeInit: function () {
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                null != t[e + 2] && t[e + 1].classList.add("_active"),
                  null != t[e + 3] &&
                    (t[e + 2].classList.add("_active"),
                    t[e + 1].classList.add("_active"));
              },
            },
          }),
          t = new he(".doctors01__slider", {
            modules: [fe, ge],
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 800,
            freeMode: !0,
            touchRatio: 0.5,
            pagination: { el: ".bottom-main__pugg", clickable: !0 },
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 20, autoHeight: !0 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1268: { slidesPerView: 3, spaceBetween: 30 },
            },
            on: {
              slideChange: function () {
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                null != t[e + 2] && t[e + 1].classList.add("_active"),
                  null != t[e + 3] &&
                    (t[e + 2].classList.add("_active"),
                    t[e + 1].classList.add("_active")),
                  null != t[e + 1] && t[e + 1].classList.add("_active"),
                  (this.el.querySelector(".bottom-main__number").innerHTML =
                    e > 9 ? e : "0" + e);
              },
              beforeInit: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
                var e = this.realIndex + 1;
                let t = this.el.querySelectorAll(".swiper-slide");
                for (let e = 0; e < t.length; e++)
                  t[e].classList.remove("_active");
                t[e + 1].classList.add("_active"),
                  t[e + 2].classList.add("_active");
              },
              beforeResize: function () {
                if (window.innerWidth < 768) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[320].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 992) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[768].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else if (window.innerWidth < 1268) {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[992].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                } else {
                  let e =
                    this.wrapperEl.querySelectorAll(".swiper-slide").length -
                    (this.params.breakpoints[1268].slidesPerView - 1);
                  this.el.querySelector(".bottom-main__amount").innerHTML =
                    e > 9 ? e : "0" + e;
                }
              },
            },
          });
        (e.controller.control = t), (t.controller.control = e);
      })();
    });
    const be = document.querySelectorAll("._swiper-mob");
    if (be.length > 0)
      for (let e = 0; be.length > e; e++) {
        const t = be[e];
        let s;
        (t.dataset.mobile = "false"),
          window.addEventListener("resize", () => {
            window.innerWidth <= 479.98 && "false" == t.dataset.mobile
              ? ((s = new he(t, {
                  modules: [fe],
                  slidesPerView: 4,
                  spaceBetween: 50,
                  speed: 800,
                  touchRatio: 0.5,
                  pagination: { el: ".bottom-main__pugg", clickable: !0 },
                  breakpoints: {
                    320: { slidesPerView: 2, spaceBetween: 20 },
                    480: { slidesPerView: 2, spaceBetween: 30 },
                    768: { slidesPerView: 3, spaceBetween: 30 },
                    992: { slidesPerView: 3, spaceBetween: 30 },
                    1268: { slidesPerView: 4, spaceBetween: 50 },
                  },
                  on: {
                    slideChange: function () {
                      var e = this.realIndex + 1;
                      let t = this.el.querySelectorAll(".swiper-slide");
                      for (let e = 0; e < t.length; e++) {
                        t[e].classList.remove("_active");
                      }
                      null != t[e + 2] && t[e + 1].classList.add("_active"),
                        null != t[e + 3] &&
                          (t[e + 2].classList.add("_active"),
                          t[e + 1].classList.add("_active")),
                        (this.el.querySelector(
                          ".bottom-main__number"
                        ).innerHTML = e > 9 ? e : "0" + e);
                    },
                    beforeInit: function () {
                      if (window.innerWidth < 768) {
                        let e =
                          this.wrapperEl.querySelectorAll(".swiper-slide")
                            .length -
                          (this.params.breakpoints[320].slidesPerView - 1);
                        e > 9
                          ? ((this.el.querySelector(
                              ".bottom-main__amount"
                            ).innerHTML = e),
                            this.el
                              .querySelector(".bottom-main__amount")
                              .classList.add("_active"))
                          : (this.el.querySelector(
                              ".bottom-main__amount"
                            ).innerHTML = "0" + e);
                      } else if (window.innerWidth < 992) {
                        let e =
                          this.wrapperEl.querySelectorAll(".swiper-slide")
                            .length -
                          (this.params.breakpoints[768].slidesPerView - 1);
                        e > 9
                          ? ((this.el.querySelector(
                              ".bottom-main__amount"
                            ).innerHTML = e),
                            this.el
                              .querySelector(".bottom-main__amount")
                              .classList.add("_active"))
                          : (this.el.querySelector(
                              ".bottom-main__amount"
                            ).innerHTML = "0" + e);
                      } else if (window.innerWidth < 1268) {
                        let e =
                          this.wrapperEl.querySelectorAll(".swiper-slide")
                            .length -
                          (this.params.breakpoints[992].slidesPerView - 1);
                        e > 9
                          ? ((this.el.querySelector(
                              ".bottom-main__amount"
                            ).innerHTML = e),
                            this.el
                              .querySelector(".bottom-main__amount")
                              .classList.add("_active"))
                          : (this.el.querySelector(
                              ".bottom-main__amount"
                            ).innerHTML = "0" + e);
                      } else {
                        let e =
                          this.wrapperEl.querySelectorAll(".swiper-slide")
                            .length -
                          (this.params.breakpoints[1268].slidesPerView - 1);
                        e > 9
                          ? ((this.el.querySelector(
                              ".bottom-main__amount"
                            ).innerHTML = e),
                            this.el
                              .querySelector(".bottom-main__amount")
                              .classList.add("_active"))
                          : (this.el.querySelector(
                              ".bottom-main__amount"
                            ).innerHTML = "0" + e);
                      }
                      var e = this.realIndex + 1;
                      let t = this.el.querySelectorAll(".swiper-slide");
                      for (let e = 0; e < t.length; e++) {
                        t[e].classList.remove("_active");
                      }
                      t[e + 1].classList.add("_active"),
                        t[e + 2].classList.add("_active");
                    },
                    beforeResize: function () {
                      if (window.innerWidth < 768) {
                        let e =
                          this.wrapperEl.querySelectorAll(".swiper-slide")
                            .length -
                          (this.params.breakpoints[320].slidesPerView - 1);
                        this.el.querySelector(
                          ".bottom-main__amount"
                        ).innerHTML = e > 9 ? e : "0" + e;
                      } else if (window.innerWidth < 992) {
                        let e =
                          this.wrapperEl.querySelectorAll(".swiper-slide")
                            .length -
                          (this.params.breakpoints[768].slidesPerView - 1);
                        this.el.querySelector(
                          ".bottom-main__amount"
                        ).innerHTML = e > 9 ? e : "0" + e;
                      } else if (window.innerWidth < 1268) {
                        let e =
                          this.wrapperEl.querySelectorAll(".swiper-slide")
                            .length -
                          (this.params.breakpoints[992].slidesPerView - 1);
                        this.el.querySelector(
                          ".bottom-main__amount"
                        ).innerHTML = e > 9 ? e : "0" + e;
                      } else {
                        let e =
                          this.wrapperEl.querySelectorAll(".swiper-slide")
                            .length -
                          (this.params.breakpoints[1268].slidesPerView - 1);
                        this.el.querySelector(
                          ".bottom-main__amount"
                        ).innerHTML = e > 9 ? e : "0" + e;
                      }
                    },
                  },
                })),
                (t.dataset.mobile = "true"))
              : window.innerWidth >= 479.98 &&
                "true" == t.dataset.mobile &&
                (s.destroy(), (t.dataset.mobile = "false"));
          }),
          window.innerWidth <= 479.98 && "false" == t.dataset.mobile
            ? (ve(),
              (s = new he(t, {
                modules: [fe],
                slidesPerView: 4,
                spaceBetween: 50,
                speed: 800,
                touchRatio: 0.5,
                pagination: { el: ".bottom-main__pugg", clickable: !0 },
                breakpoints: {
                  320: { slidesPerView: 2, spaceBetween: 20 },
                  480: { slidesPerView: 2, spaceBetween: 30 },
                  768: { slidesPerView: 3, spaceBetween: 30 },
                  992: { slidesPerView: 3, spaceBetween: 30 },
                  1268: { slidesPerView: 4, spaceBetween: 50 },
                },
                on: {
                  slideChange: function () {
                    var e = this.realIndex + 1;
                    let t = this.el.querySelectorAll(".swiper-slide");
                    for (let e = 0; e < t.length; e++) {
                      t[e].classList.remove("_active");
                    }
                    null != t[e + 2] && t[e + 1].classList.add("_active"),
                      null != t[e + 3] &&
                        (t[e + 2].classList.add("_active"),
                        t[e + 1].classList.add("_active")),
                      (this.el.querySelector(".bottom-main__number").innerHTML =
                        e > 9 ? e : "0" + e);
                  },
                  beforeInit: function () {
                    if (window.innerWidth < 768) {
                      let e =
                        this.wrapperEl.querySelectorAll(".swiper-slide")
                          .length -
                        (this.params.breakpoints[320].slidesPerView - 1);
                      e > 9
                        ? ((this.el.querySelector(
                            ".bottom-main__amount"
                          ).innerHTML = e),
                          this.el
                            .querySelector(".bottom-main__amount")
                            .classList.add("_active"))
                        : (this.el.querySelector(
                            ".bottom-main__amount"
                          ).innerHTML = "0" + e);
                    } else if (window.innerWidth < 992) {
                      let e =
                        this.wrapperEl.querySelectorAll(".swiper-slide")
                          .length -
                        (this.params.breakpoints[768].slidesPerView - 1);
                      e > 9
                        ? ((this.el.querySelector(
                            ".bottom-main__amount"
                          ).innerHTML = e),
                          this.el
                            .querySelector(".bottom-main__amount")
                            .classList.add("_active"))
                        : (this.el.querySelector(
                            ".bottom-main__amount"
                          ).innerHTML = "0" + e);
                    } else if (window.innerWidth < 1268) {
                      let e =
                        this.wrapperEl.querySelectorAll(".swiper-slide")
                          .length -
                        (this.params.breakpoints[992].slidesPerView - 1);
                      e > 9
                        ? ((this.el.querySelector(
                            ".bottom-main__amount"
                          ).innerHTML = e),
                          this.el
                            .querySelector(".bottom-main__amount")
                            .classList.add("_active"))
                        : (this.el.querySelector(
                            ".bottom-main__amount"
                          ).innerHTML = "0" + e);
                    } else {
                      let e =
                        this.wrapperEl.querySelectorAll(".swiper-slide")
                          .length -
                        (this.params.breakpoints[1268].slidesPerView - 1);
                      e > 9
                        ? ((this.el.querySelector(
                            ".bottom-main__amount"
                          ).innerHTML = e),
                          this.el
                            .querySelector(".bottom-main__amount")
                            .classList.add("_active"))
                        : (this.el.querySelector(
                            ".bottom-main__amount"
                          ).innerHTML = "0" + e);
                    }
                    var e = this.realIndex + 1;
                    let t = this.el.querySelectorAll(".swiper-slide");
                    for (let e = 0; e < t.length; e++) {
                      t[e].classList.remove("_active");
                    }
                    t[e + 1].classList.add("_active"),
                      t[e + 2].classList.add("_active");
                  },
                  beforeResize: function () {
                    if (window.innerWidth < 768) {
                      let e =
                        this.wrapperEl.querySelectorAll(".swiper-slide")
                          .length -
                        (this.params.breakpoints[320].slidesPerView - 1);
                      this.el.querySelector(".bottom-main__amount").innerHTML =
                        e > 9 ? e : "0" + e;
                    } else if (window.innerWidth < 992) {
                      let e =
                        this.wrapperEl.querySelectorAll(".swiper-slide")
                          .length -
                        (this.params.breakpoints[768].slidesPerView - 1);
                      this.el.querySelector(".bottom-main__amount").innerHTML =
                        e > 9 ? e : "0" + e;
                    } else if (window.innerWidth < 1268) {
                      let e =
                        this.wrapperEl.querySelectorAll(".swiper-slide")
                          .length -
                        (this.params.breakpoints[992].slidesPerView - 1);
                      this.el.querySelector(".bottom-main__amount").innerHTML =
                        e > 9 ? e : "0" + e;
                    } else {
                      let e =
                        this.wrapperEl.querySelectorAll(".swiper-slide")
                          .length -
                        (this.params.breakpoints[1268].slidesPerView - 1);
                      this.el.querySelector(".bottom-main__amount").innerHTML =
                        e > 9 ? e : "0" + e;
                    }
                  },
                },
              })),
              (t.dataset.mobile = "true"))
            : window.innerWidth >= 479.98 &&
              "true" == t.dataset.mobile &&
              (s.destroy(), (t.dataset.mobile = "false"));
      }
    new (s(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    e.watcher = new (class {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `??????????????????, ?????????? ???? ?????????????????? (${e.length})...`
          ),
            d(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let s = t.split("|"),
                i = { root: s[0], margin: s[1], threshold: s[2] },
                l = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    l = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === i.root &&
                    String(s) === i.margin &&
                    String(l) === i.threshold
                  )
                    return e;
                }),
                n = this.getScrollWatcherConfig(i);
              this.scrollWatcherInit(l, n);
            });
        } else
          this.scrollWatcherLogging("????????, ?????? ???????????????? ?????? ????????????????. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `??????... ?????????????????????????? ?????????????? ${e.root} ?????? ???? ????????????????`
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "???? ????, ?????????????????? data-watch-margin ?????????? ???????????????? ?? PX ?????? %"
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `?? ???????? ${t.classList}, ?????????????? ?????????? _watcher-view`
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `?? ???? ???????? ${t.classList}, ?????????? ?????????? _watcher-view`
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`?? ???????????????? ?????????????? ???? ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging && c(`[??????????????????????]: ${e}`);
      }
      scrollWatcherCallback(e, t) {
        const s = e.target;
        this.scrollWatcherIntersecting(e, s),
          s.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(s, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } })
          );
      }
    })({});
    let Se = !1;
    function ye(e) {
      this.type = e;
    }
    setTimeout(() => {
      if (Se) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      (ye.prototype.init = function () {
        const e = this;
        (this.??bjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let e = 0; e < this.nodes.length; e++) {
          const t = this.nodes[e],
            s = t.dataset.da.trim().split(","),
            i = {};
          (i.element = t),
            (i.parent = t.parentNode),
            (i.destination = document.querySelector(s[0].trim())),
            (i.breakpoint = s[1] ? s[1].trim() : "767"),
            (i.place = s[2] ? s[2].trim() : "last"),
            (i.index = this.indexInParent(i.parent, i.element)),
            this.??bjects.push(i);
        }
        this.arraySort(this.??bjects),
          (this.mediaQueries = Array.prototype.map.call(
            this.??bjects,
            function (e) {
              return (
                "(" +
                this.type +
                "-width: " +
                e.breakpoint +
                "px)," +
                e.breakpoint
              );
            },
            this
          )),
          (this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (e, t, s) {
              return Array.prototype.indexOf.call(s, e) === t;
            }
          ));
        for (let t = 0; t < this.mediaQueries.length; t++) {
          const s = this.mediaQueries[t],
            i = String.prototype.split.call(s, ","),
            l = window.matchMedia(i[0]),
            n = i[1],
            r = Array.prototype.filter.call(this.??bjects, function (e) {
              return e.breakpoint === n;
            });
          l.addListener(function () {
            e.mediaHandler(l, r);
          }),
            this.mediaHandler(l, r);
        }
      }),
      (ye.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (ye.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? s.children[e].insertAdjacentElement("beforebegin", t)
            : s.insertAdjacentElement("afterbegin", t);
      }),
      (ye.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (ye.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (ye.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new ye("max").init(),
      window.addEventListener("DOMContentLoaded", function () {
        $(".powerpage__aside-hide").click(() => {
          $(".powerpage__aside-body").slideToggle(800),
            $(".powerpage__aside-hide").toggleClass("_active");
        }),
          [].forEach.call(document.querySelectorAll(".tel"), function (e) {
            var t;
            function s(e) {
              e.keyCode && (t = e.keyCode),
                this.selectionStart < 3 && e.preventDefault();
              var s = "+7 (___) ___ __ __",
                i = 0,
                l = s.replace(/\D/g, ""),
                n = this.value.replace(/\D/g, ""),
                r = s.replace(/[_\d]/g, function (e) {
                  return i < n.length ? n.charAt(i++) || l.charAt(i) : e;
                });
              -1 != (i = r.indexOf("_")) &&
                (i < 5 && (i = 3), (r = r.slice(0, i)));
              var a = s
                .substr(0, this.value.length)
                .replace(/_+/g, function (e) {
                  return "\\d{1," + e.length + "}";
                })
                .replace(/[+()]/g, "\\$&");
              (!(a = new RegExp("^" + a + "$")).test(this.value) ||
                this.value.length < 5 ||
                (t > 47 && t < 58)) &&
                (this.value = r),
                "blur" == e.type && this.value.length < 5 && (this.value = "");
            }
            e.addEventListener("input", s, !1),
              e.addEventListener("focus", s, !1),
              e.addEventListener("blur", s, !1),
              e.addEventListener("keydown", s, !1);
          });
      });
    let _e = document.querySelectorAll("._file");
    if (_e)
      for (let e = 0; e < _e.length; e++) {
        const t = _e[e];
        let s = t.querySelector("._file-name"),
          i = t.querySelector("._file-remove"),
          l = t.querySelector("input"),
          n = s.textContent;
        l.addEventListener("change", function (e) {
          if (null != l.value && "" != l.value) {
            let e = l.value.split(/(\\|\/)/g).pop();
            (s.textContent = e), i.classList.add("_active");
          } else (s.textContent = n), i.classList.remove("_active");
        }),
          i.addEventListener("click", function (e) {
            (l.value = ""), i.classList.remove("_active"), (s.textContent = n);
          });
      }
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
      document.querySelector("body").classList.add("safari"),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (t) {
            r &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? a(e)
                  : o(e);
              })(),
              document
                .querySelector(".menu__body")
                .classList.toggle("menu-open"),
              e.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const t = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.spollers.split(",")[0];
          });
          t.length && l(t);
          let s = p(e, "spollers");
          function l(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    r(e),
                    e.addEventListener("click", a))
                  : (e.classList.remove("_spoller-init"),
                    r(e, !1),
                    e.removeEventListener("click", a));
            });
          }
          function r(e, t = !0) {
            let s = e.querySelectorAll("[data-spoller]");
            s.length &&
              ((s = Array.from(s).filter(
                (t) => t.closest("[data-spollers]") === e
              )),
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              }));
          }
          function a(e) {
            const t = e.target;
            if (t.closest("[data-spoller]")) {
              const s = t.closest("[data-spoller]"),
                i = s.closest("[data-spollers]"),
                l = !!i.hasAttribute("data-one-spoller");
              i.querySelectorAll("._slide").length ||
                (l && !s.classList.contains("_spoller-active") && o(i),
                s.classList.toggle("_spoller-active"),
                n(s.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function o(e) {
            const t = e.querySelector("[data-spoller]._spoller-active");
            t &&
              (t.classList.remove("_spoller-active"),
              i(t.nextElementSibling, 500));
          }
          s &&
            s.length &&
            s.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                l(e.itemsArray, e.matchMedia);
              }),
                l(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-tabs]");
        let s = [];
        if (e.length > 0) {
          const i = t();
          i && i.startsWith("tab-") && (s = i.replace("tab-", "").split("-")),
            e.forEach((e, t) => {
              e.classList.add("_tab-init"),
                e.setAttribute("data-tabs-index", t),
                e.addEventListener("click", a),
                (function (e) {
                  let t = e.querySelectorAll("[data-tabs-titles]>*"),
                    i = e.querySelectorAll("[data-tabs-body]>*");
                  const l = e.dataset.tabsIndex,
                    n = s[0] == l;
                  if (n) {
                    const t = e.querySelector(
                      "[data-tabs-titles]>._tab-active"
                    );
                    t && t.classList.remove("_tab-active");
                  }
                  i.length &&
                    ((i = Array.from(i).filter(
                      (t) => t.closest("[data-tabs]") === e
                    )),
                    (t = Array.from(t).filter(
                      (t) => t.closest("[data-tabs]") === e
                    )),
                    i.forEach((e, i) => {
                      t[i].setAttribute("data-tabs-title", ""),
                        e.setAttribute("data-tabs-item", ""),
                        n && i == s[1] && t[i].classList.add("_tab-active"),
                        (e.hidden = !t[i].classList.contains("_tab-active"));
                    }));
                })(e);
            });
          let l = p(e, "tabs");
          l &&
            l.length &&
            l.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                n(e.itemsArray, e.matchMedia);
              }),
                n(e.itemsArray, e.matchMedia);
            });
        }
        function n(e, t) {
          e.forEach((e) => {
            let s = (e = e.item).querySelector("[data-tabs-titles]"),
              i = e.querySelectorAll("[data-tabs-title]"),
              l = e.querySelector("[data-tabs-body]"),
              n = e.querySelectorAll("[data-tabs-item]");
            (i = Array.from(i).filter((t) => t.closest("[data-tabs]") === e)),
              (n = Array.from(n).filter((t) => t.closest("[data-tabs]") === e)),
              n.forEach((n, r) => {
                t.matches
                  ? (l.append(i[r]),
                    l.append(n),
                    e.classList.add("_tab-spoller"))
                  : (s.append(i[r]), e.classList.remove("_tab-spoller"));
              });
          });
        }
        function r(e) {
          let t = e.querySelectorAll("[data-tabs-title]"),
            s = e.querySelectorAll("[data-tabs-item]");
          const n = e.dataset.tabsIndex;
          const r = (function (e) {
            if (e.hasAttribute("data-tabs-animate"))
              return e.dataset.tabsAnimate > 0
                ? Number(e.dataset.tabsAnimate)
                : 500;
          })(e);
          if (s.length > 0) {
            const a = e.hasAttribute("data-tabs-hash");
            (s = Array.from(s).filter((t) => t.closest("[data-tabs]") === e)),
              (t = Array.from(t).filter((t) => t.closest("[data-tabs]") === e)),
              s.forEach((e, s) => {
                var o;
                t[s].classList.contains("_tab-active")
                  ? (r ? l(e, r) : (e.hidden = !1),
                    a &&
                      !e.closest(".popup") &&
                      ((o = (o = `tab-${n}-${s}`)
                        ? `#${o}`
                        : window.location.href.split("#")[0]),
                      history.pushState("", "", o)))
                  : r
                  ? i(e, r)
                  : (e.hidden = !0);
              });
          }
        }
        function a(e) {
          const t = e.target;
          if (t.closest("[data-tabs-title]")) {
            const s = t.closest("[data-tabs-title]"),
              i = s.closest("[data-tabs]");
            if (
              !s.classList.contains("_tab-active") &&
              !i.querySelector("._slide")
            ) {
              let e = i.querySelectorAll("[data-tabs-title]._tab-active");
              e.length &&
                (e = Array.from(e).filter(
                  (e) => e.closest("[data-tabs]") === i
                )),
                e.length && e[0].classList.remove("_tab-active"),
                s.classList.add("_tab-active"),
                r(i);
            }
            e.preventDefault();
          }
        }
      })(),
      window.addEventListener("load", function (e) {
        const t = document.querySelectorAll("[data-showmore]");
        let s, n;
        function r(e) {
          e.forEach((e) => {
            a(e.itemsArray, e.matchMedia);
          });
        }
        function a(e, t) {
          e.forEach((e) => {
            !(function (e, t = !1) {
              let s = (e = t ? e.item : e).querySelectorAll(
                  "[data-showmore-content]"
                ),
                n = e.querySelectorAll("[data-showmore-button]");
              (s = Array.from(s).filter(
                (t) => t.closest("[data-showmore]") === e
              )[0]),
                (n = Array.from(n).filter(
                  (t) => t.closest("[data-showmore]") === e
                )[0]);
              const r = o(e, s);
              (t.matches || !t) &&
              r <
                (function (e) {
                  let t,
                    s = e.offsetHeight;
                  e.style.removeProperty("height"),
                    e.closest("[hidden]") &&
                      ((t = e.closest("[hidden]")), (t.hidden = !1));
                  let i = e.offsetHeight;
                  return t && (t.hidden = !0), (e.style.height = `${s}px`), i;
                })(s)
                ? (i(s, 0, r), (n.hidden = !1))
                : (l(s, 0, r), (n.hidden = !0));
            })(e, t);
          });
        }
        function o(e, t) {
          let s = 0;
          if ("items" === (e.dataset.showmore ? e.dataset.showmore : "size")) {
            const e = t.dataset.showmoreContent ? t.dataset.showmoreContent : 3,
              i = t.children;
            for (
              let t = 1;
              t < i.length && ((s += i[t - 1].offsetHeight), t != e);
              t++
            );
          } else s = t.dataset.showmoreContent ? t.dataset.showmoreContent : 150;
          return s;
        }
        function c(e) {
          const t = e.target,
            c = e.type;
          if ("click" === c) {
            if (t.closest("[data-showmore-button]")) {
              const e = t
                  .closest("[data-showmore-button]")
                  .closest("[data-showmore]"),
                s = e.querySelector("[data-showmore-content]"),
                n = e.dataset.showmoreButton ? e.dataset.showmoreButton : "500",
                r = o(e, s);
              s.classList.contains("_slide") ||
                (e.classList.contains("_showmore-active")
                  ? i(s, n, r)
                  : l(s, n, r),
                e.classList.toggle("_showmore-active"));
            }
          } else "resize" === c && (s && s.length && a(s), n && n.length && r(n));
        }
        t.length &&
          ((s = Array.from(t).filter(function (e, t, s) {
            return !e.dataset.showmoreMedia;
          })),
          s.length && a(s),
          document.addEventListener("click", c),
          window.addEventListener("resize", c),
          (n = p(t, "showmoreMedia")),
          n &&
            n.length &&
            (n.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                a(e.itemsArray, e.matchMedia);
              });
            }),
            r(n)));
      }),
      (function () {
        const e = document.querySelectorAll(".rating");
        e.length > 0 &&
          (function () {
            let t, s;
            for (let t = 0; t < e.length; t++) {
              i(e[t]);
            }
            function i(e) {
              l(e), n(), e.classList.contains("rating_set") && r(e);
            }
            function l(e) {
              (t = e.querySelector(".rating__active")),
                (s = e.querySelector(".rating__value"));
            }
            function n(e = s.innerHTML) {
              const i = e / 0.05;
              t.style.width = `${i}%`;
            }
            function r(e) {
              const t = e.querySelectorAll(".rating__item");
              for (let i = 0; i < t.length; i++) {
                const r = t[i];
                r.addEventListener("mouseenter", function (t) {
                  l(e), n(r.value);
                }),
                  r.addEventListener("mouseleave", function (e) {
                    n();
                  }),
                  r.addEventListener("click", function (t) {
                    l(e),
                      e.dataset.ajax
                        ? a(r.value, e)
                        : ((s.innerHTML = i + 1), n());
                  });
              }
            }
            async function a(e, t) {
              if (!t.classList.contains("rating_sending")) {
                t.classList.add("rating_sending");
                let e = await fetch("rating.json", { method: "GET" });
                if (e.ok) {
                  const i = (await e.json()).newRating;
                  (s.innerHTML = i), n(), t.classList.remove("rating_sending");
                } else alert("????????????"), t.classList.remove("rating_sending");
              }
            }
          })();
      })(),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const s = t.closest("[data-goto]"),
                i = s.dataset.goto ? s.dataset.goto : "",
                l = !!s.hasAttribute("data-goto-header"),
                n = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : 500,
                r = s.dataset.gotoTop ? parseInt(s.dataset.gotoTop) : 0;
              u(i, l, n, r), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              s = t.target;
            if ("navigator" === s.dataset.watch) {
              document.querySelector("[data-goto]._navigator-active");
              let e;
              if (s.id && document.querySelector(`[data-goto="#${s.id}"]`))
                e = document.querySelector(`[data-goto="#${s.id}"]`);
              else if (s.classList.length)
                for (let t = 0; t < s.classList.length; t++) {
                  const i = s.classList[t];
                  if (document.querySelector(`[data-goto=".${i}"]`)) {
                    e = document.querySelector(`[data-goto=".${i}"]`);
                    break;
                  }
                }
              t.isIntersecting
                ? e && e.classList.add("_navigator-active")
                : e && e.classList.remove("_navigator-active");
            }
          }
        }
        if (
          (document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e),
          t())
        ) {
          let e;
          document.querySelector(`#${t()}`)
            ? (e = `#${t()}`)
            : document.querySelector(`.${t()}`) && (e = `.${t()}`),
            e && u(e, !0, 500, 20);
        }
      })(),
      (Se = !0),
      (function () {
        const e = document.querySelectorAll("[data-sticky]");
        e.length &&
          e.forEach((e) => {
            let t = {
              media: e.dataset.sticky ? parseInt(e.dataset.sticky) : null,
              top: e.dataset.stickyTop ? parseInt(e.dataset.stickyTop) : 0,
              bottom: e.dataset.stickyBottom
                ? parseInt(e.dataset.stickyBottom)
                : 0,
              header: e.hasAttribute("data-sticky-header")
                ? document.querySelector("header.header").offsetHeight
                : 0,
            };
            !(function (e, t) {
              const s = e.querySelector("[data-sticky-item]"),
                i = t.header + t.top,
                l = s.getBoundingClientRect().top + scrollY - i;
              function n(n) {
                const r =
                  e.offsetHeight +
                  e.getBoundingClientRect().top +
                  scrollY -
                  (i + s.offsetHeight + t.bottom);
                console.log(s.offsetHeight);
                let a = {
                  position: "relative",
                  bottom: "auto",
                  top: "0px",
                  left: "0px",
                  width: "auto",
                };
                (!t.media || t.media < window.innerWidth) &&
                  i + t.bottom + s.offsetHeight < window.innerHeight &&
                  (scrollY >= l && scrollY <= r
                    ? ((a.position = "fixed"),
                      (a.bottom = "auto"),
                      (a.top = `${i}px`),
                      (a.left = `${s.getBoundingClientRect().left}px`),
                      (a.width = `${s.offsetWidth}px`))
                    : scrollY >= r &&
                      ((a.position = "absolute"),
                      (a.bottom = `${t.bottom}px`),
                      (a.top = "auto"),
                      (a.left = "0px"),
                      (a.width = `${s.offsetWidth}px`))),
                  (function (e, t) {
                    e.style.cssText = `position:${t.position};bottom:${t.bottom};top:${t.top};left:${t.left};width:${t.width};`;
                  })(s, a);
              }
              document.addEventListener("windowScroll", n);
            })(e, t);
          });
      })();
  })();
})();
