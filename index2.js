 //ここからキーボード表示関係
 const keybordElements = document.querySelectorAll('.keybord');

 // キーボードが押されたときの処理
 document.addEventListener('keydown', (event) => {
     // 押されたキーのテキストを取得
     const pressedKey = event.key.toUpperCase();

     // キーボード要素の中から押されたキーに対応する要素を検索
     const matchingKeybordElement = Array.from(keybordElements).find((element) => element.innerText === pressedKey);

     // キーボード要素が見つかった場合、押しているようなクラスを追加
     if (matchingKeybordElement) {
         matchingKeybordElement.classList.add('pressed');
     }
 });

 // キーボードが離されたときの処理
 document.addEventListener('keyup', (event) => {
     // 押されたキーのテキストを取得
     const pressedKey = event.key.toUpperCase();

     // キーボード要素の中から押されたキーに対応する要素を検索
     const matchingKeybordElement = Array.from(keybordElements).find((element) => element.innerText === pressedKey);

     // キーボード要素が見つかった場合、押しているようなクラスを削除
     if (matchingKeybordElement) {
         matchingKeybordElement.classList.remove('pressed');
     }
 });