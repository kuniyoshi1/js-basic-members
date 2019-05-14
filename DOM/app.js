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

window.onload = function(){
  
  document.getElementById('btnB').onclick = function() {
    
    window.alert('ボタンBがクリックされました')
  
  }
  
}










