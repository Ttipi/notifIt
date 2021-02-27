!(function (t, i) {
    if ("function" == typeof define && define.amd) define(i);
    else {
        var n = i(t.b);
        (t.notif = n.notif), (t.notif_confirm = n.notif_confirm), (t.notif_prompt = n.notif_prompt);
    }
})(this, function () {
    function t(t) {
        var i = function () {
                return o("<span>", { id: "notifIt_close", html: "&times" });
            },
            n = function () {
                var t = o("<div>", { id: "ui_notifIt" }),
                    i = o("<p>", { html: l.msg });
                return t.append(i), t;
            },
            o = jQuery,
            a = function () {
                o("#ui_notifIt").remove(), clearTimeout(window.notifit_timeout);
            },
            e = function () {
                if ((clearTimeout(window.notifit_timeout), l.fade))
                    o("#ui_notifIt").fadeOut("slow", function () {
                        o("#ui_notifIt").remove(), l.callback && l.callback();
                    });
                else {
                    if (
                        l.animations &&
                        l.animations[l.animation] &&
                        l.animations[l.animation][l.position] &&
                        l.animations[l.animation][l.position].out &&
                        l.animations[l.animation][l.position].out.start &&
                        l.animations[l.animation][l.position].out.end
                    )
                        (animation1 = l.animations[l.animation][l.position].out.start), (animation2 = l.animations[l.animation][l.position].out.end);
                    else {
                        if (
                            !(
                                l.animations[l.available_animations[0]] &&
                                l.animations[l.available_animations[0]][l.position] &&
                                l.animations[l.available_animations[0]][l.position].out &&
                                l.animations[l.available_animations[0]][l.position].out.start &&
                                l.animations[l.available_animations[0]][l.position].out.end
                            )
                        )
                            throw new Error("Invalid animation");
                        (animation1 = l.animations[l.available_animations[0]][l.position].out.start), (animation2 = l.animations[l.available_animations[0]][l.position].out.end);
                    }
                    o("#ui_notifIt").animate(animation1, 100, function () {
                        o("#ui_notifIt").animate(animation2, 100, function () {
                            o("#ui_notifIt").remove(), l.callback && l.callback();
                        });
                    });
                }
            };
        a(), (window.notifit_timeout = null);
        var s = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / 2,
            c = ["left", "center", "right", "bottom"],
            l = {
                type: "default",
                width: 400,
                height: 60,
                position: "right",
                autohide: 1,
                msg: "This is my default message",
                opacity: 1,
                multiline: 0,
                fade: 0,
                bgcolor: "",
                color: "",
                timeout: 5e3,
                zindex: null,
                offset: 0,
                callback: null,
                clickable: !1,
                animation: "slide",
            };
        if (
            (o.extend(l, t),
            (l.animations = {}),
            (l.animations.slide = {
                center: {
                    css_start: { top: parseInt(0 - (l.height + 10)), left: s - parseInt(l.width / 2) },
                    in: { top: parseInt(10 + l.offset) },
                    out: { start: { top: parseInt(l.height - l.height / 2) }, end: { top: parseInt(0 - 2 * l.height) } },
                },
                bottom: {
                    css_start: { top: "auto", bottom: parseInt(0 - (l.height + 10)), left: s - parseInt(l.width / 2) },
                    in: { bottom: parseInt(10 + l.offset) },
                    out: { start: { bottom: parseInt(l.height - l.height / 2) }, end: { bottom: parseInt(0 - 2 * l.height) } },
                },
                right: {
                    css_start: { right: parseInt(0 - (l.width + 10)), right: parseInt(0 - 2 * l.width) },
                    in: { right: parseInt(10 + l.offset) },
                    out: { start: { right: parseFloat(l.width - 0.9 * l.width) }, end: { right: parseInt(0 - 2 * l.width) } },
                },
                left: { css_start: { left: parseInt(0 - (l.width + 10)) }, in: { left: parseInt(10 + l.offset) }, out: { start: { left: parseFloat(l.width - 0.9 * l.width) }, end: { left: parseInt(0 - 2 * l.width) } } },
            }),
            (l.animations.zoom = {
                center: { css_start: { top: 10, left: s - parseInt(l.width / 2), zoom: 0.01 }, in: { zoom: 1 }, out: { start: { zoom: 1.3 }, end: { zoom: 0.01 } } },
                bottom: { css_start: { top: "auto", bottom: 10, left: s - parseInt(l.width / 2), zoom: 0.01 }, in: { zoom: 1 }, out: { start: { zoom: 1.3 }, end: { zoom: 0.01 } } },
                right: { css_start: { right: 10, zoom: 0.01 }, in: { right: parseInt(10 + l.offset), zoom: 1 }, out: { start: { zoom: 1.3 }, end: { zoom: 0.01 } } },
                left: { css_start: { left: 10, zoom: 0.01 }, in: { zoom: 1 }, out: { start: { zoom: 1.3 }, end: { zoom: 0.01 } } },
            }),
            (l.available_animations = Object.keys(l.animations)),
            !l.available_animations.length)
        )
            throw new Error("No animations");
        if (!c.length) throw new Error("No available positions");
        -1 === c.indexOf(l.position) && (l.position = c[0]),
            -1 === l.available_animations.indexOf(l.animation) && (l.animation = l.available_animations[0]),
            "function" != typeof l.callback && (l.callback = null),
            l.width > 0 ? (l.width = l.width) : "all" === l.width ? (l.width = screen.width - 60) : (l.width = 400),
            (l.height > 100 || l.height < 0) && (l.height = 60);
        var f = n();
        return (
            l.clickable && f.append(i()),
            o("body").append(f),
            l.zindex && o("#ui_notifIt").css("z-index", l.zindex),
            l.multiline ? o("#ui_notifIt").css("padding", 15) : (o("#ui_notifIt").css("height", l.height), o("#ui_notifIt p").css("line-height", l.height + "px")),
            o("#ui_notifIt").css({ width: l.width, opacity: l.opacity, "background-color": l.bgcolor, color: l.color }),
            o("#ui_notifIt").addClass(l.type),
            l.animations[l.animation][l.position].css_start ? o("#ui_notifIt").css(l.animations[l.animation][l.position].css_start) : o("#ui_notifIt").css(l.animations[l.available_animations[0]][l.position].css_start),
            o("#ui_notifIt").animate(l.animations[l.animation][l.position]["in"]),
            l.clickable ||
                o("#ui_notifIt").click(function (t) {
                    t.stopPropagation(), e(l);
                }),
            o("body").on("click", "#ui_notifIt #notifIt_close", function () {
                e(l);
            }),
            l.autohide &&
                (isNaN(l.timeout) ||
                    (window.notifit_timeout = setTimeout(function () {
                        e(l);
                    }, l.timeout))),
            { destroy: a, dismiss: e }
        );
    }
    function i(t) {
        function i() {
            if (null !== f) return f;
            var t = s("<button>", { class: "notifit_confirm_accept", text: l.textaccept }),
                i = s("<button>", { class: "notifit_confirm_cancel", text: l.textcancel }),
                n = s("<div>", { class: "notifit_confirm_message", text: l.message });
            return (f = s("<div>", { class: "notifit_confirm" })), f.append(n).append(t).append(i), (r = s("<div>", { class: "notifit_confirm_bg" })), f;
        }
        function n() {
            f &&
                (l.fullscreen
                    ? (r.hide(),
                      f.hide(),
                      s("body").append(r),
                      s("body").append(f),
                      f.css({ top: r.outerHeight() / 2 - f.outerHeight() / 2, left: r.outerWidth() / 2 - f.outerWidth() / 2 }),
                      r.fadeIn("fast", function () {
                          f.slideDown("fast");
                      }))
                    : (f.css({ top: "20px", left: "auto", right: "20px", display: "none" }), s("body").append(f), f.slideDown("fast")));
        }
        function o() {
            f &&
                f.slideUp("fast", function () {
                    f.remove();
                }),
                r &&
                    r.fadeOut("fast", function () {
                        r.remove();
                    });
        }
        function a() {
            o();
            var t = null;
            return s(this).hasClass("notifit_confirm_accept") ? (t = !0) : s(this).hasClass("notifit_confirm_cancel") && (t = !1), "function" == typeof l.callback ? l.callback(t) : t;
        }
        function e() {
            s("html").one("click", ".notifit_confirm_accept, .notifit_confirm_cancel", a);
        }
        var s = jQuery,
            c = { textaccept: "Accept", textcancel: "Cancel", message: "Is that what you want to do?", fullscreen: !1, callback: null },
            l = s.extend({}, c, t),
            f = s(".notifit_confirm")[0] ? s(".notifit_confirm") : null,
            r = s(".notifit_confirm_bg")[0] ? s(".notifit_confirm_bg") : null;
        i(), n(), e();
    }
    function n(t) {
        function i() {
            if (null !== f) return f;
            var t = s("<button>", { class: "notifit_prompt_accept", text: l.textaccept }),
                i = s("<button>", { class: "notifit_prompt_cancel", text: l.textcancel }),
                n = s("<p>", { class: "notifit_prompt_message", text: l.message }),
                o = s("<input>", { type: "text", class: "notifit_prompt_input", value: l.default_value });
            return (f = s("<div>", { class: "notifit_prompt" })), f.append(n).append(o).append(i).append(t), (r = s("<div>", { class: "notifit_prompt_bg" })), f;
        }
        function n() {
            f &&
                (l.fullscreen
                    ? (r.hide(),
                      f.hide(),
                      s("body").append(r),
                      s("body").append(f),
                      f.css({ top: r.outerHeight() / 2 - f.outerHeight() / 2, left: r.outerWidth() / 2 - f.outerWidth() / 2 }),
                      r.fadeIn("fast", function () {
                          f.slideDown("fast", function () {
                              s(this).find(".notifit_prompt_input").focus();
                          });
                      }))
                    : (f.css({ top: "20px", left: "auto", right: "20px", display: "none" }),
                      s("body").append(f),
                      f.slideDown("fast", function () {
                          s(this).find(".notifit_prompt_input").focus();
                      })));
        }
        function o() {
            f &&
                f.slideUp("fast", function () {
                    f.remove();
                }),
                r &&
                    r.fadeOut("fast", function () {
                        r.remove();
                    });
        }
        function a() {
            o();
            var t = null;
            return (
                s(this).hasClass("notifit_prompt_accept") ? (t = s(this).parents(".notifit_prompt").find(".notifit_prompt_input").val()) : s(this).hasClass("notifit_prompt_cancel") && (t = !1),
                "function" == typeof l.callback ? l.callback(t) : t
            );
        }
        function e() {
            s("html").one("click", ".notifit_prompt_accept, .notifit_prompt_cancel", a);
        }
        var s = jQuery,
            c = { message: "Tell me something", default_value: "", textaccept: "Accept", textcancel: "Cancel", fullscreen: !1, callback: null },
            l = s.extend({}, c, t),
            f = s(".notifit_prompt")[0] ? s(".notifit_prompt") : null,
            r = s(".notifit_prompt_bg")[0] ? s(".notifit_prompt_bg") : null;
        i(), n(), e();
    }
    return { notif: t, notif_confirm: i, notif_prompt: n };
});
