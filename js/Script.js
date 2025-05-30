//リュウジの至高のレシピ100(1)
const Ryuuji_sikou_recipe100_1 = [
  "ハンバーグ", "ナポリタン", "ポテトサラダ", "煮卵", "炒飯", "唐揚げ", "豚汁", "カレー",

  "チキン南蛮", "生姜焼き", "エビマヨ", "照り焼きチキン", "ブリの照り焼き", "ホイコーロー", "エビチリ", "麻婆豆腐",
  "コロッケ", "肉じゃが", "角煮", "餃子", "ミートボール", "チキントマト煮", "ステーキ", "みそ漬け豚",
  "豚キムチ", "冷しゃぶ", "チンジャオロース", "黒酢豚",

  "コールスロー", "マヨネーズ", "ドレッシングサラダ", "スパゲティサラダ", "かぼちゃサラダ", "ナスの焼き浸し",
  "きんぴら", "だし巻き卵", "なめたけ", "ナムル", "野菜炒め", "ゴーヤーチャンプル", "バンバンジー",
  "ニラ玉", "しりしり", "青菜炒め", "筑前煮",

  "オムライス", "レタスチャーハン", "ハヤシライス", "キーマカレー", "卵かけごはん", "牛丼", "親子丼", "豚丼",
  "中華丼", "炊き込みごはん", "とりめし", "ガパオ",

  "ペペロンチーノ", "ボロネーゼ", "カルボナーラ", "ペペたま", "明太子パスタ", "トマトパスタ", "クリームパスタ", "グラタン",
  "カレーうどん", "肉うどん", "焼きそば", "担々麺", "油そば", "冷やし中華", "ジャージャー麺",

  "ガーリックシュリンプ", "グリルチキン", "とり天", "フライドチキン", "チジミ", "モツ煮", "ジャーマンポテト",
  "カルパッチョ", "アクアパッツァ", "チャーシュー", "トンテキ", "お茶漬け", "味噌汁",

  "ポトフ", "ビーフシチュー", "クリームシチュー", "ミネストローネ", "クラムチャウダー", "たまごスープ", "スンドゥブ",
  "かぼちゃのポタージュ", "おでん", "ちゃんこ", "湯豆腐",

  "タマゴサンド", "ハムレタスサンド", "フレンチトースト", "ティラミス"
];

// HTMLの要素を生成して追加する
$("#item_box_field").empty(); // 既存の内容をクリア

// ↓ここでRyuuji_sikou_recipe100_1の各要素を使ってHTMLを生成
for (let i = 0; i < Ryuuji_sikou_recipe100_1.length; i++) {
    const title = Ryuuji_sikou_recipe100_1[i];
    const imageData = 'img/osara_text.png'; // 空のお皿の画像のパスを指定

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
                //keyにはpタグの料理名を使う
                const key = $(this).closest('.item_box').find('.item_text p').text();
                localStorage.setItem(key, event.target.result);
            };
            reader.readAsDataURL(file);
        }
        fileInput.remove();
    });
});


// localStorageから画像を読み込む（item_textのpタグの料理名から画像ファイルを取り込む）
$(".item_box").each(function() {
    const key = $(this).find('.item_text p').text();
    const savedImage = localStorage.getItem(key);
    if (savedImage) {
        $(this).find('.item_image img').attr('src', savedImage);
    }
});