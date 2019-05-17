$(function(){
  
  //ボタンのサイズ変更
  
  $('#js-click-btn').on('click',function(){
    
    $(this).addClass('large-btn');
    
  });
  
  
  
  $('#js-hover-btn').mouseover(function(){
    
    $(this).addClass('opacity');
    
  }).mouseout(function(){
    
    $(this).removeClass('opacity');
    
  });
  
  //.でメソッドをつなげることができる→メソッドチェーン

  
  $('#js-hide-btn').on('click',function(){
    
    $('#js-target-element').fadeOut(1000);
    
  });
  
  
  $('#js-show-btn').on('click',function(){
    
    $('#js-target-element').fadeIn(1000);
    
  });
  
  
  //要素の追加(同じ階層に追加)
  
  $('#js-add-btn').on('click',function(){
    
    $(this).before('<li class="btn">追加されたよ</li>');
    
    $(this).after('<li class="btn">追加されたよ</li>');
    
  });
  
  
  
  //小要素として追加
  
  $('#js-add-btn2').on('click',function(){
    
    $(this).prepend('<li>前</li>');
    
    $(this).append('<li>後</li>');
    
  });
  
  
  //toggleメニュー
  
  $('.js-toggle').on('click',function() {
    
    //$(this).toggleClass('on');

    $(this).siblings().slideToggle();
    
    //sinlings()←←兄弟要素を取得
  
  });

  
  //ハンバーガー
  
  $('.js-hamburger').on('click',function(){
    
    $(this).toggleClass('on');
    
  });
  
  
  
  
  //スムーズスクロール
  
  $('.js-scroll').on('click',function(){
    
    $('body, html').animate({scrollTop: 100}, 1000);
    
  });
  
  
  
  //モーダル
  
  //fadeIn と fadeOut使う
  
  //✕じるしを押しても、背景を押しても消えるように
  
  $('.js-modal').on('click',function(){
    
    $('.modal-content').fadeIn(500);
    
    $('#modal-bg').fadeIn(500);
    
  });
  
  $('.js-modal-close').on('click',function(){
    
    $('.modal-content').fadeOut(500);
    
    $('#modal-bg').fadeOut(500);
    
  });
  
  
  
  
  //タブメニュー
  
  //aタグがクリックされたとき
  
  $('.tab-nav a').on('click',function(){
  
  //activeクラスがついていれば、処理停止
    if($(this).hasClass('active')){
      
      return false;
      
      //これ以降の関数内の処理は停止
      
    }
    
  //activeを外す
    
    $('.tab-nav a').removeClass('active');
    

  //アクティブをつける
  
    $(this).addClass('active');
    
    
    console.log(this.hash);
    
    
    $('.tab-content > div').removeClass('active');
    
    $('.tab-content > div').filter(this.hash).addClass('active');

  
  });
  
  
  
  //スライダー
  
  var slideWidth = $('.slide').outerWidth();
  
  var slideNum = $('.slide').length;
  
  var slideWrapperWidth = slideWidth * slideNum;
  
  var currentSlide = 0;
  
  $('.slide-wrapper').css('width', slideWrapperWidth);
  
  
  //次へ
  
  $('.next-slider').on('click',function(){
    
    //最後のスライドだった場合→return false;
    
    if(currentSlide >= slideNum -1){
    
      return false;
    
    }
    
    currentSlide++;
    
    slide();
    
  });
  
  
  
  //前へ
  
  $('.prev-slider').on('click',function(){
    
    if(currentSlide <= 0){
       
       return false;
       
    }
       
    currentSlide--;
    
    slide();
    
  });
  
  
  function slide(){
    
    $('.slide-wrapper').stop().animate({
      
      left: currentSlide * -slideWidth
      
    });
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
});