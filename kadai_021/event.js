
const btn = document.getElementById('btn');
 

// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
setTimeout(() => {
  const text = document.getElementById('text');
  text.textContent = "2秒後に書き換えられました";
}, 2000);
