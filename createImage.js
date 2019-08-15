function onKey() {
          target = document.getElementById("output");
          target.innerText = document.forms.serihu_form.serihu.value;
          //target.innerText = document.id_form1.id_textBox1.value;//これでもOK
          
        }
function toDraw() {
          var ctx = document.getElementById("cv").getContext("2d");

          var txt = document.forms.serihu_form.serihu.value; //描画する文字

          ctx.font = "italic 10px Arial"; //フォントにArial,40px,斜体を指定
          ctx.fillStyle = "white"; //塗り潰し色を緑に

          ctx.fillText(txt,10,50);      //テキストを塗り潰しで描画
          }
