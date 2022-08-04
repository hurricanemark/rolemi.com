// pluging code
(function($) {
    let defaults = {
      autoParentDetection: true,
      autoActiveDetection: true,
      itemsUniqueClasses: true,
      parentClass: 'parent',
      activeClass: 'active',
      selectedClass: 'selected',
      expandClass: 'opened',
      collapseClass: 'closed',
      spoilerButtonClickMinX: 4,
      spoilerButtonClickMaxX: 20,
      spoilerButtonClickMinY: 8,
      spoilerButtonClickMaxY: 24,
      slideEffect: true
    };
  
    let methods = {
      init: function(params) {
        let options = $.extend({}, defaults, params);
  
        let items = this.find('li');
  
        $.each(items, function(num, item) {
          item = $(item);
  
          if (options.autoParentDetection) {
            if (item.has('ul')[0]) {
              item.addClass(options.parentClass);
            }
          }
  
          if (options.itemsUniqueClasses) {
            item.addClass('item-' + num);
          }
  
        });
  
        let parents = this.find('.' + options.parentClass);
  
        $.each(parents, function(num, parent) {
          parent = $(parent);
  
          parent.addClass(options.collapseClass);
  
          if (parent.has('.' + options.selectedClass)[0]) {
            parent.removeClass(options.collapseClass).addClass(options.expandClass);
  
            if (options.autoActiveDetection) {
              parent.addClass(options.activeClass);
            }
          }
  
          if (parent.hasClass(options.selectedClass)) {
            parent.removeClass(options.activeClass).removeClass(options.collapseClass).addClass(options.expandClass);
          }
        });
  
        $('.' + options.collapseClass + ' > ul', this).hide();
  
        $('.' + options.parentClass + ' > a', this).click(function(e) {
          let posX = $(this).offset().left;
          let posY = $(this).offset().top;
  
          let clickX = e.pageX - posX;
          let clickY = e.pageY - posY;
  
          if (clickX <= options.spoilerButtonClickMaxX && clickX >= options.spoilerButtonClickMinX && clickY <= options.spoilerButtonClickMaxY && clickY >= options.spoilerButtonClickMinY || !e.hasOwnProperty('originalEvent')) {
            let item = $(this).parent('li');
            let content = $(this).parent('li').children('ul');
  
            item.toggleClass(options.expandClass).toggleClass(options.collapseClass);
  
            if (options.slideEffect) {
              content.slideToggle();
            } else {
              content.toggle();
            }
  
            e.preventDefault();
          }
        });
      }
    };
  
    $.fn.ntm = function(method) {
      if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === 'object' || !method) {
        return methods.init.apply(this, arguments);
      } else {
        $.error('What' + method + ' jQuery.ntm');
      }
    };
  })(jQuery);
  // end of pluging code