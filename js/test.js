
//リュウジの至高のレシピ100(1)
const Ryuuji_sikou_recipe100_1 = [
  "ハンバーグ", "ナポリタン", "ポテトサラダ", "煮卵", "炒飯", "唐揚げ", "豚汁", "カレー",
  "チキン南蛮", "生姜焼き", "エビマヨ", "照り焼きチキン", "ブリの照り焼き", "ホイコーロー", "エビチリ", "麻婆豆腐",
  "コロッケ", "肉じゃが", "角煮", "餃子", "ミートボール", "チキントマト煮", "ステーキ", "みそ漬け豚",
  "豚キムチ", "冷しゃぶ","チンジャオロース", "黒酢豚"
]


for (let i = 0; i < Ryuuji_sikou_recipe100_1.length; i++) {
    // ここでRyuuji_sikou_recipe100_1の各要素を使ってHTMLを生成
    const title = Ryuuji_sikou_recipe100_1[i];
    const imageData = 'img/osara_text.png'; // 画像のパスを指定

    const html = `
    <div class="item_box">
        <div class="item_text">
            <p>${title}</p>
        </div>
        <div class="item_image">
            <img src="${imageData}" alt="空のお皿"><!-- クリックしたらlocalStorageに画像保存して置き換える -->
        </div>
    </div>
    `;

    // 生成したHTMLを#item_box_fieldに追加
    $("#item_box_field").append(html);
}




// const itemBoxField = document.querySelector('.item_box_field');
// for (let i = 0; i < Ryuuji_sikou_recipe100_1.length; i++) {
//     const itemBox = document.createElement('div');
//     itemBox.className = 'item_box';

//     const itemText = document.createElement('div');
//     itemText.className = 'item_text';
//     const p = document.createElement('p');
//     p.textContent = Ryuuji_sikou_recipe100_1[i];
//     itemText.appendChild(p);

//     const itemImage = document.createElement('div');
//     itemImage.className = 'item_image';
//     const img = document.createElement('img');
//     img.src = 'img/osara_text.png';
//     img.alt = '';
//     itemImage.appendChild(img);

//     itemBox.appendChild(itemText);
//     itemBox.appendChild(itemImage);

//     itemBoxField.appendChild(itemBox);
// }