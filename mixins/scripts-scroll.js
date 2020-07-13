Vue.directive("clipscroll", {
  inserted: function(el, binding) {
    let f = function(evt) {
      var hasRun = false;
      if (!hasRun && window.scrollY > binding.value.start) {
        hasRun = true;
        TweenMax.to(el, 2, {
          morphSVG: binding.value.toPath,
          ease: Sine.easeIn
        });
      }
      if (window.scrollY > binding.value.end) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  }
});
