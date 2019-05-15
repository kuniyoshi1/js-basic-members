//getElementByClassName

let date = new Date();

let hoge = document.getElementById('hoge');

hoge.textContent = date.toLocaleString();



//getElementsByTagName

let list = document.getElementsByTagName('a');

console.log(list);

console.log(list.length);//lengthで、配列の中身の数を取得できる。

//getElementsByTagNameで取得した、aタグのhrefのURLを全件consoleに表示する処理を書いてみる


console.log(list[0].href);


for (let i = 0; i < list.length; i++){
  
  console.log(list[i].href);

}


//イベントハンドラーやるよ

function btna_click(){
  
  window.alert('ボタンAがクリックされた');
  
}


//画面がロードされた時にイベントの読み込み

//コンテンツ + 画像がロードされたら、発火

window.onload = function(){
  
  document.getElementById('btnB').onclick = function() {
    
    window.alert('ボタンBがクリックされました');
  
  }
  
}


//DOMContentLoaded→コンテンツのロードがおわったら実行

//画像のロードは待たない。

document.addEventListener('DOMContentLoaded', function(){
  
  document.getElementById('btnC').addEventListener('click',function(){
    
    window.alert('ボタンCがクリックされました');
    
  });
  
});


//getElementByClassName

//戻り値はNodeListオブジェクト→documentを配列化したもの

//class名を複数指定すると、全てを含んでいる要素だけ返す。

let fuga = document.getElementsByClassName('fuga moge');

for(i = 0; i < fuga.length; i++){
  
  console.log(fuga[i].textContent);
  
}



//textContent, innerHTMLの違い。

document.addEventListener('DOMContentLoaded',function(){
  
  //値をセット
  
  //document.getElementById('text').textContent = '<a href="https://amazon.com">Amazon</a>';
  
  //textContentはHTMLタグとして認識されない
  
  document.getElementById('text').innerHTML = '<a href="https://amazon.com">Amazon</a>';
  
  //innerHTMLはタグとして認識される
  
});

    

//入力内容の取得と出力

document.addEventListener('DOMContentLoaded',function(){
  
  document.getElementById('addbtn').addEventListener('click',function(){
    
    //変数にNodeListを格納
    
    let url = document.getElementById('url');
    
    let site = document.getElementById('site');
    
    //必要なタグを生成し、変数に格納
    
    let anchor = document.createElement('a');
    
    //がっちゃんこ
    
    anchor.href = url.value;
    
    let text = document.createTextNode(site.value);
    
    anchor.appendChild(text);
    
    //console.log(url.value);
    
    //HTMLにがっちゃんこしたタグを追加
    
    let list = document.getElementById('list');
    
    list.appendChild(anchor);
    
//    改行処理を入れる。
    
  });
  
  
//  削除ボタンを作って、追加したanchorを１つづつ削除できるようにする
  
  
});


























