
function toDraw() {
          var ctx = document.getElementById("cv").getContext("2d");

          var txt = document.forms.serihu_form.serihu.value; //描画する文字
          ctx.font = "italic 40px Arial"; //フォントにArial,40px,斜体を指定
          ctx.fillStyle = "green"; //塗り潰し色を緑に

          ctx.fillText(txt,10,50);      //テキストを塗り潰しで描画
          
          }

function Whichselect(formName,name){
          var element = document.getElementById( "formName" ) ;
          var cvs = document.getElementById('takane');
           var ctx = cvs.getContext('2d');
          var img = new Image();
 
          // form要素内のラジオボタングループ(name="hoge")を取得
          var radioNodeList = element.name ;

          // 選択状態の値(value)を取得 (Bが選択状態なら"b"が返る)
          var select = radioNodeList.value ;

          if ( select === "" ) {
                    // 未選択状態
          } else {
                    // selectには選択状態の値が代入されている
                     img.src = select + ".png";
                    console.log( select ) ;
                    img.onload = function(){
                    ctx.drawImage(img, 0, 0, 400, 300);  //400x300に縮小表示
  }
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
