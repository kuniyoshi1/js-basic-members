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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});