//リュウジの至高のレシピ100(1)
const Ryuuji_sikou_recipe100_1 = [
  "ハンバーグ", "ナポリタン", "ポテトサラダ", "煮卵", "炒飯", "唐揚げ", "豚汁", "カレー",
  "チキン南蛮", "生姜焼き", "エビマヨ", "照り焼きチキン", "ブリの照り焼き", "ホイコーロー", "エビチリ", "麻婆豆腐",
  "コロッケ", "肉じゃが", "角煮", "餃子", "ミートボール", "チキントマト煮", "ステーキ", "みそ漬け豚",
  "豚キムチ", "冷しゃぶ","チンジャオロース", "黒酢豚"
]

// HTMLの要素を生成して追加する
$("#item_box_field").empty(); // 既存の内容をクリア
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

// 画像クリックイベント
$(".item_image img").on("click", function() {
    //ファイル選択ダイアログを開く
    const fileInput = $('<input type="file" accept="image/*" style="display:none">');
    $(this).after(fileInput);
    fileInput.trigger('click');
    fileInput.on('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                $(this).attr('src', event.target.result);
                // 必要ならlocalStorageへの保存処理もここに追加
                localStorage.setItem('customImage', event.target.result);
            };
            reader.readAsDataURL(file);
        }
        fileInput.remove();
    });
});

// 画像の初期表示
const savedImage = localStorage.getItem('customImage');
if (savedImage) {
    $(".item_image img").attr('src', savedImage);
}