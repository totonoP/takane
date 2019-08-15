
function toDraw() {
          var ctx = document.getElementById("cv").getContext("2d");

          var txt = document.forms.serihu_form.serihu.value; //描画する文字
          ctx.font = "italic 40px Arial"; //フォントにArial,40px,斜体を指定
          ctx.fillStyle = "green"; //塗り潰し色を緑に

          ctx.fillText(txt,10,50);      //テキストを塗り潰しで描画
          ctx.fillText(txt,10,100,100); //テキストの最大幅を100pxに指定

          ctx.strokeStyle = "blue"; //輪郭線の色を青に

          ctx.strokeText(txt,10,150);     //テキスト輪郭を描画
          ctx.strokeText(txt,10,200,100);
          }
