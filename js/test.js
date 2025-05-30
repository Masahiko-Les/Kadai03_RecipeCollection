//HTML生成は省略

$('#submit_btn').on('click', function() {
    // item_textのpタグのテキストを取得
    const itemText = $('.item_text p').text();
    // dish_imageの画像データ(src属性)を取得
    const dishImageSrc = $('.dish_image img').attr('src');

    // 変数に保存
    let savedText = itemText;
    let savedImageSrc = dishImageSrc;

    // 必要に応じてconsole.logで確認
    console.log('保存されたテキスト:', savedText);
    console.log('保存された画像データ:', savedImageSrc);
});






// document.getElementById('changeImageButton').addEventListener('click', function() {
//     // item_textのpタグのテキストを取得
//     const itemText = document.querySelector('.item_text p').textContent;
//     // dish_imageの画像データ(src属性)を取得
//     const dishImageSrc = document.querySelector('.dish_image img').getAttribute('src');

//     // 変数に保存
//     let savedText = itemText;
//     let savedImageSrc = dishImageSrc;

//     // 必要に応じてconsole.logで確認
//     console.log('保存されたテキスト:', savedText);
//     console.log('保存された画像データ:', savedImageSrc);
// });




