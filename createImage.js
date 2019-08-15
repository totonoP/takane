
function toDraw() {
          var ctx = document.getElementById("cv").getContext("2d");

          var txt = document.forms.serihu_form.serihu.value; //描画する文字
          ctx.font = "italic 40px Arial"; //フォントにArial,40px,斜体を指定
          ctx.fillStyle = "green"; //塗り潰し色を緑に

          ctx.fillText(txt,10,50);      //テキストを塗り潰しで描画
          
          }

function SelectImage(imgname,cvnum){
         var cvs = document.getElementById("cv").getContext("2d");
          var img = new Image();
          img.src = "entrance.png";
 
            //画像をcanvasに設定
            img.onload = function(){
              cvs.drawImage(img, 0, 0, 400, 300);  //400x300に縮小表示
            }
      
}


function gousei(){
          var createImage= function(context){
            var image= new Image
            image.src= context.canvas.toDataURL()
            return image
          }

          var haikei= document.createElement('canvas').getContext('2d')
          context1.fillText('foo',0,10)

          var takane= document.createElement('canvas').getContext('2d')
          context2.fillText('bar',0,20)

          var serihu= document.createElement('canvas').getContext('2d')
          context3.fillText('baz',0,30)

          var takanekomyu = document.createElement('canvas').getContext('2d')
          context4.drawImage(createImage(haikei),0,0)
          context4.drawImage(createImage(takane),0,0)
          context4.drawImage(createImage(serihu),0,0)

          document.body.appendChild(createImage(takanekomyu))
}
