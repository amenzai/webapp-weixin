$(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    // margin:10,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
      // animateOut: 'fadeOut'
  });
  $('.tab .tab-nav li').each(function() {
    var e = $(this);
    var trigger = e.closest('.tab').attr("data-toggle");
    if (trigger == "hover") {
      e.mouseover(function() {
        $showtabs(e);
      });
      e.click(function() {
        return false;
      });
    } else {
      e.click(function() {
        $showtabs(e);
        return false;
      });
    }
  });
  $showtabs = function(e) {
    var detail = e.children("a").attr("href");
    e.closest('.tab .tab-nav').find("li").removeClass("active");
    e.closest('.tab').find(".tab-main .tab-content").removeClass("active");
    e.addClass("active");
    $(detail).addClass("active");
  };
  // $(document).on("touchstart", function(e) {
  //   if (!$(e.target).hasClass("disable")) $(e.target).data("isMoved", 0);
  // });
  // $(document).on("touchmove", function(e) {
  //   if (!$(e.target).hasClass("disable")) $(e.target).data("isMoved", 1);
  // });
  // $(document).on("touchend", function(e) {
  //   if (!$(e.target).hasClass("disable") && $(e.target).data("isMoved") == 0) $(e.target).trigger("tap");
  // });
  //按钮点击效果
  $('.list-media a').on("touchstart", function(e) {
    var $this = $(this);
    var flag = true;
    //遍历子类
    $this.find("*").each(function() {
      //查看有没有子类触发过active动作
      if ($(this).hasClass("active")) flag = false;
    });
    //如果子类已经触发了active动作，父类则取消active触发操作
    if (flag) $this.addClass("active");
  });
  $('.list-media a').on("touchmove", function(e) {
    if ($(this).hasClass("active")) $(this).removeClass("active");
  });
  $('.list-media a').on("touchend", function(e) {
    if ($(this).hasClass("active")) $(this).removeClass("active");
  });
})