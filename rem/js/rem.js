!(function() {
    var docElem = document.documentElement,
        metaElem = document.querySelector('meta[name="viewport"]'),
        dpr = window.devicePixelRatio || 1,
        // 将页面分为10块
        blocks = 10,
        // 需要限制的最小宽度
        defaultMinWidth = 320,
        // 需要限制的最大宽度
        defaultMaxWidth = 540,
        // 计算的基准值
        calcMaxWidth = 9999999;

    if (!metaElem) {
        metaElem = initMetaViewport();
    }

    if (metaElem.getAttribute('data-content-max') !== null) {
        calcMaxWidth = defaultMaxWidth;
    }

    // 确保meta[name="viewport"]存在
    function initMetaViewport() {
        var meta = document.createElement('meta');

        meta.setAttribute('name', 'viewport');
        meta.setAttribute('content', 'width=device-width,initial-scale=1,user-scalable=no');
        document.head.appendChild(meta);

        return meta;
    }

    // 大部分dpr为2以下的安卓机型不识别scale，需设置不缩放
    if (navigator.appVersion.match(/android/gi) && dpr <= 2) {
        dpr = 1;
    }

    setScale(dpr);

    // 企业QQ设置了scale后，不能完全识别scale（此时clientWidth未收到缩放的影响而翻倍），需设置不缩放
    if (navigator.appVersion.match(/qq\//gi) && docElem.clientWidth <= 360) {
        dpr = 1;
        setScale(dpr);
    }

    docElem.setAttribute('data-dpr', dpr);

    // 设置缩放
    function setScale(dpr) {
        metaElem.setAttribute('content', 'initial-scale=' + 1 / dpr + ',maximum-scale=' + 1 / dpr + ',minimum-scale=' + 1 / dpr + ',user-scalable=no');
    }

    // 设置docElem字体大小
    function setFontSize() {
        var clientWidth = docElem.clientWidth;

        clientWidth = Math.max(clientWidth, defaultMinWidth * dpr)

        // 调整计算基准值
        if (calcMaxWidth === defaultMaxWidth) {
            clientWidth = Math.min(clientWidth, defaultMaxWidth * dpr);
        }

        docElem.style.fontSize = clientWidth / blocks + 'px';
    }

    setFontSize();

    window.addEventListener(window.orientationchange ? 'orientationchange' : 'resize', setFontSize, false);
})();
