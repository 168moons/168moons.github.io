document.addEventListener('DOMContentLoaded', function () {
  var simplifiedButton = document.getElementById('simplified-button');
  var traditionalButton = document.getElementById('traditional-button');

  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function loadLanguage(language) {
    if (language === 'zh-CN') {
      window.location.href = tw_cn.s2t(document.body.innerHTML);
    } else if (language === 'zh-TW') {
      window.location.href = tw_cn.t2s(document.body.innerHTML);
    }
  }

  simplifiedButton.addEventListener('click', function () {
    setCookie('language', 'zh-CN', 7);
    loadLanguage('zh-CN');
  });

  traditionalButton.addEventListener('click', function () {
    setCookie('language', 'zh-TW', 7);
    loadLanguage('zh-TW');
  });

  // 在页面加载时检查Cookie并设置语言
  var savedLanguage = getCookie('language');
  if (savedLanguage) {
    loadLanguage(savedLanguage);
  }
});
