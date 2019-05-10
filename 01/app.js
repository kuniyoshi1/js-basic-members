//コメントアウト

console.log('----------consolelog--------');

console.log('hoge');


console.log('----------四則演算-----------');

console.log(1 + 1);

console.log(5 - 2);

console.log(5 * 2);

console.log(5 / 2);

console.log(5 % 2);

console.log('5 % 2');//シングルクォーテーション or ダブルクォーテーションで囲うと文字列になる


console.log('----------文字列連結---------');

console.log('ふじなみ' + 'たいじゅ');



console.log('----------変数--------------');

//変数とは、データを入れるための箱。

//箱の名前→変数名

//変数を使用する理由

//1.変更に対応しやすい。

//2.同じ値を繰り返し使える。

//3.値の意味がわかりやすい。


let name = 'まつしま';

console.log(name);


let num = 2;

console.log(num);

num = num + 2;

console.log(num);

num += 2;//変数を使った計算と省略形。

console.log(num);



//定数

const age = 20;

console.log(age);



console.log(`私の年齢は、${age}歳です。`);




console.log('------------条件分岐------------');


console.log('if文-----');

//if(条件式){
//  
//    処理;
//   
//}

let int = 5;

if(int > 3){
 
  console.log(`${int}は3より大きいです`);
  
}

//true もしくは false で返す

//真偽値



//比較演算子

//<, <= , > , >= , === , !==


//論理演算子

//&&(〇〇かつ〇〇) , ||(〇〇もしくは〇〇)



console.log('else if---------------');

if(int >= 10){
  
  console.log(int + 'は10以上です。');
  
}else if(int > 3){
  
  console.log(int + 'は3より大きいです。')
  
}else{
  
  console.log(int + 'は3以下です')
  
}


console.log('switch文-------------');

let signal = 'green';

switch (signal) {
    
    case 'red':
    
        console.log('止まれ');
        
        break;
    
    case 'green':
        
        console.log('すすめ');
        
        break;
    
    default:
    
        console.log('その他');
    
        break;
    
}




console.log('------------繰り返し処理------------');

console.log('for-------');

//for(変数の定義, 条件式, 変数の更新) {処理}

for (let i = 1; i <= 10; i++){
  
  console.log(i);
  
}


console.log('while------');

let j = 11;

while(j <= 20){
  
  console.log(j);
  
  j++;
  
}


console.log('fizzbuzz問題--------------');

//3の倍数はfizz

//5の倍数はbuzz

//3と5の倍数はfizzbuzz


let num2 = 30;

//1~num2の値になるまで、続ける。



for (i = 1; i <= num2; i++){
  
  if(i % 3 == 0 && i % 5 == 0){
     
    console.log('fizzbuzz');
  
  }else if(i % 3 == 0){
    
    console.log('fizz');
    
  }else if(i % 5 == 0){
    
    console.log('buzz');
    
  }else{
    
    console.log(i);
    
  }
  
}





console.log('----------関数-----------');



//関数とは

//→複数の処理をまとめたもの。

//function 関数名(){処理}

//関数は変数に代入することもできます


//function greeting() {
//  
//  console.log('おはよう');
//  
//}
//
//
//greeting();


//変数名も、関数も、キャメルケースにする


console.log('引数--------------------');


function greeting(say){
  
  console.log('佐藤さんが'+ say + 'と言っています');
  
}


greeting('こんにちは');



console.log('ローカル変数----------------');


function local(name){
  
  let hoge = '私の名前は' + name + 'です';
  
  return hoge;
  
  //結果を返す。
  
}


console.log(local('くによし'));

//console.log(hoge);




console.log('-------------配列-------------');

//配列 = グループ化されたデータ

// [値1 , 値2]

let studentList = ['橋本さん','三宅さん','佐藤さん'];

console.log(studentList);

console.log(studentList[1]);//2番目の値がでます

console.log(studentList[1] = '藤並さん');//値を上書き

console.log(studentList);

studentList.push('松島さん');

console.log(studentList);

studentList.pop();//末尾の値を削除

studentList.shift();//先頭の値を削除

console.log(studentList);



console.log('------------連想配列-------------');

//{キー1:値1 , キー2:値2}

let user = {
  
  food:'ラーメン',
  
  age:50,
  
  from:'沖縄'
  
  
};

let user2 = {
  
  food:'焼きそば',
  
  age:40,
  
  from:'大阪'
  
  
};


console.log(user);

console.log(user['food']);



console.log('-----------二次元配列------------');

let users = [user, user2];

console.log(users);

console.log(users[0]['from']);

console.log(users[0].food);//連想配列(オブジェクト)は、. でつなぐことができる



console.log('-----------メソッド--------------');

let user3 = {
  
  food:'寿司',
  
  age:20,
  
  from:'千葉',
  
  greet: function(name){//メソッド
    
    console.log('私の名前は' + name + 'です。' + this.from + 'から来ました。');
    
  }
}


user3.greet('齋藤');



console.log('日付-------------------');


let date = new Date();

console.log(date);



console.log('DOM--------------------');

//Javascriptから、HTMLにアクセスするための様々な命令をDOM(Document Object Model)という。

let test = document.getElementById('test');

test.style.color = 'blue';

console.log(test);

test.className = 'addClass';

test.textContent = '変更します';



console.log('イベント-----------------');



document.getElementById('btn').addEventListener('click', function() {
  
  let tag = document.createElement('p');
  
  let text = document.createTextNode('Hello js');
  
  document.body.appendChild(tag).appendChild(text);
  
  
})

























