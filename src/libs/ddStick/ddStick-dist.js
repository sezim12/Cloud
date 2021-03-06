!function (e) {
    e.fn.ddslick = function (t) {
        return d[t] ? d[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exists.") : d.init.apply(this, arguments)
    };
    var d = {}, t = {
        data: [],
        keepJSONItemsOnTop: !1,
        width: 260,
        height: null,
        background: "#eee",
        selectText: "",
        defaultSelectedIndex: null,
        truncateDescription: !0,
        imagePosition: "left",
        showSelectedHTML: !0,
        clickOffToClose: !0,
        embedCSS: !0,
        onSelected: function () {
        }
    };

    function i(e, d) {
        var t = e.data("ddslick"), i = e.find(".dd-selected"), n = i.siblings(".dd-selected-value"),
            s = (e.find(".dd-options"), i.siblings(".dd-pointer"), e.find(".dd-option").eq(d)), l = s.closest("li"),
            a = t.settings, c = t.settings.data[d];
        e.find(".dd-option").removeClass("dd-option-selected"), s.addClass("dd-option-selected"), t.selectedIndex = d, t.selectedItem = l, t.selectedData = c, a.showSelectedHTML ? i.html((c.imageSrc ? '<img class="dd-selected-image' + ("right" == a.imagePosition ? " dd-image-right" : "") + '" src="' + c.imageSrc + '" />' : "") + (c.text ? '<label class="dd-selected-text">' + c.text + "</label>" : "") + (c.description ? '<small class="dd-selected-description dd-desc' + (a.truncateDescription ? " dd-selected-description-truncated" : "") + '" >' + c.description + "</small>" : "")) : i.html(c.text), n.val(c.value), t.original.val(c.value), e.data("ddslick", t), o(e), function (e) {
            var d = e.find(".dd-select").css("height"), t = e.find(".dd-selected-description"),
                i = e.find(".dd-selected-image");
            t.length <= 0 && i.length > 0 && e.find(".dd-selected-text").css("lineHeight", d)
        }(e), "function" == typeof a.onSelected && a.onSelected.call(this, t)
    }

    function n(d) {
        var t = d.find(".dd-select"), i = t.siblings(".dd-options"), n = t.find(".dd-pointer"), o = i.is(":visible");
        e(".dd-click-off-close").not(i).slideUp(50), e(".dd-pointer").removeClass("dd-pointer-up"), o ? (i.slideUp("fast"), n.removeClass("dd-pointer-up")) : (i.slideDown("fast"), n.addClass("dd-pointer-up")), function (d) {
            d.find(".dd-option").each((function () {
                var t = e(this), i = t.css("height"), n = t.find(".dd-option-description"),
                    o = d.find(".dd-option-image");
                n.length <= 0 && o.length > 0 && t.find(".dd-option-text").css("lineHeight", i)
            }))
        }(d)
    }

    function o(e) {
        e.find(".dd-options").slideUp(50), e.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up")
    }

    d.init = function (d) {
        d = e.extend({}, t, d);
        return e("#css-ddslick").length <= 0 && d.embedCSS && e('<style id="css-ddslick" type="text/css">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:10px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:10px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; }.dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { width: 32px; height: 32px;border-radius: 50%;vertical-align:middle; float:left; margin-right:5px; max-width:64px;}').appendTo("head"), this.each((function () {
            var t = e(this);
            if (!t.data("ddslick")) {
                var o = [];
                d.data;
                t.find("option").each((function () {
                    var d = e(this), t = d.data();
                    o.push({
                        text: e.trim(d.text()),
                        value: d.val(),
                        selected: d.is(":selected"),
                        description: t.description,
                        imageSrc: t.imagesrc
                    })
                })), d.keepJSONItemsOnTop ? e.merge(d.data, o) : d.data = e.merge(o, d.data);
                var s = t, l = e('<div id="' + t.attr("id") + '"></div>');
                t.replaceWith(l), (t = l).addClass("dd-container").append('<div class="dd-select"><input class="dd-selected-value" type="hidden" /><a class="dd-selected"></a><span class="dd-pointer dd-pointer-down"></span></div>').append('<ul class="dd-options"></ul>');
                o = t.find(".dd-select");
                var a = t.find(".dd-options");
                a.css({width: d.width}), o.css({
                    width: d.width,
                    background: d.background
                }), t.css({width: d.width}), null != d.height && a.css({
                    height: d.height,
                    overflow: "auto"
                }), e.each(d.data, (function (e, t) {
                    t.selected && (d.defaultSelectedIndex = e), a.append('<li><a class="dd-option">' + (t.value ? ' <input class="dd-option-value" type="hidden" value="' + t.value + '" />' : "") + (t.imageSrc ? ' <img class="dd-option-image' + ("right" == d.imagePosition ? " dd-image-right" : "") + '" src="' + t.imageSrc + '" />' : "") + (t.text ? ' <label class="dd-option-text">' + t.text + "</label>" : "") + (t.description ? ' <small class="dd-option-description dd-desc">' + t.description + "</small>" : "") + "</a></li>")
                }));
                var c = {settings: d, original: s, selectedIndex: -1, selectedItem: null, selectedData: null};
                if (t.data("ddslick", c), d.selectText.length > 0 && null == d.defaultSelectedIndex) t.find(".dd-selected").html(d.selectText); else {
                    var r = null != d.defaultSelectedIndex && d.defaultSelectedIndex >= 0 && d.defaultSelectedIndex < d.data.length ? d.defaultSelectedIndex : 0;
                    i(t, r)
                }
                t.find(".dd-select").on("click.ddslick", (function () {
                    n(t)
                })), t.find(".dd-option").on("click.ddslick", (function () {
                    i(t, e(this).closest("li").index())
                })), d.clickOffToClose && (a.addClass("dd-click-off-close"), t.on("click.ddslick", (function (e) {
                    e.stopPropagation()
                })), e("body").on("click", (function () {
                    e(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up")
                })))
            }
        }))
    }, d.select = function (d) {
        return this.each((function () {
            void 0 !== d.index && i(e(this), d.index)
        }))
    }, d.open = function () {
        return this.each((function () {
            var d = e(this);
            d.data("ddslick") && n(d)
        }))
    }, d.close = function () {
        return this.each((function () {
            var d = e(this);
            d.data("ddslick") && o(d)
        }))
    }, d.destroy = function () {
        return this.each((function () {
            var d = e(this), t = d.data("ddslick");
            if (t) {
                var i = t.original;
                d.removeData("ddslick").unbind(".ddslick").replaceWith(i)
            }
        }))
    }
}(jQuery);