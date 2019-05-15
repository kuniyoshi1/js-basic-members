document.addEventListener('DOMContentLoaded',function(){
  
  let elem = document.getElementById('elem');
  
  elem.addEventListener('mouseover', function(){
    
    //mouseover = カーソルが要素に乗っている状態のとき
    
    this.style.color = '#ff0000';
    
    //thisは、イベントの発生元を表す、もともと用意されている変数
    
  });
  
  elem.addEventListener('mouseout', function(){
    
    //mouseout = カーソルが要素から外れたとき
    
    this.style.color = '';
    
    //thisは、イベントの発生元を表す、もともと用意されている変数
    
  });
  
  
  
  //マウスオーバーされた時に、クラス名を付ける
  
  let elem2 = document.getElementById('elem2');
  
  elem2.addEventListener('mouseover',function(){
    
    this.className = 'blue';
    
  });
  
  //マウスアウト時に、クラス名を外す
  
  elem2.addEventListener('mouseout',function(){
    
    this.className = '';
    
  });
  
  
  
  
  //クリックされた時にクラス名の取り外し(#elem3に対して)
  
  let elem3 = document.getElementById('elem3');
  
  elem3.addEventListener('click',function(){
    
    //classがついているか否か
    
    if(this.className === 'blue'){
      
      //外す処理
      this.className = '';
      
    }else{
      
      //つける処理
      this.className = 'blue';
      
    }
    
    
  });
  
  
  
  let elem4 = document.getElementById('elem4');
  
  elem4.addEventListener('click',function(){
    
    this.classList.toggle('blue');
    
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});