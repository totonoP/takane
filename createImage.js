
function toDraw() {
          var ctx = document.getElementById("cv").getContext("2d");

          var txt = document.forms.serihu_form.serihu.value; //描画する文字
a

          ctx.font = "20px Arial"; //フォントにArial,40px,斜体を指定
          ctx.fillStyle = "black"; //塗り潰し色を黒に
          ctx.fillText(txt,10,50);
          }
