
function toDraw() {//文字を画像に描画
          var ctx = document.getElementById("cv").getContext("2d");

          var txt = document.forms.serihu_form.serihu.value; //描画する文字
          ctx.font = "20px Arial"; //フォントにArial,40px,斜体を指定
          ctx.fillStyle = "green"; //塗り潰し色を緑に

          ctx.fillText(txt,10,50);      //テキストを塗り潰しで描画
          
          }

function Haikeiselect() {//選択中の値を取得
    var slct = document.getElementsByName('el');
    for(var i = 0; i < slct.length; i++){
      if(slct[i].checked) {
        console.log("選択された値：", slct[i].value);
               
      }
    }
  }

function color() {
            // キャンバスを取り出す
            var canvas = document.getElementById('tryCanvas00');
            // 2Dのコンテキストを取り出す
            var ctx = canvas.getContext('2d');
            // 指定の色で範囲内を塗りつぶす
            ctx.fillStyle = 'rgb(255,0,255)';
            ctx.fillRect(0, 0, 200, 200);
        }

function DrawImage() {
  //2Dコンテキストのオブジェクトを生成する
  var cvs = document.getElementById('cv');
  var ctx = cvs.getContext('2d');
 
  //画像オブジェクトを生成
  var img = new Image();
  img.src = "entrance.png";
 
  //画像をcanvasに設定
  img.onload = function(){
    ctx.drawImage(img, 0, 0, 400, 300);  //400x300に縮小表示
  }
}


function gousei(){//複数のキャンバスを合成
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
