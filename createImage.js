
function toDraw() {
          var ctx = document.getElementById("cv").getContext("2d");

          var txt = document.forms.serihu_form.serihu.value; //描画する文字
          ctx.font = "italic 40px Arial"; //フォントにArial,40px,斜体を指定
          ctx.fillStyle = "green"; //塗り潰し色を緑に

          ctx.fillText(txt,10,50);      //テキストを塗り潰しで描画
          
          }

function Whichselect(){
          var element = document.getElementById( "target" ) ;

          // form要素内のラジオボタングループ(name="hoge")を取得
          var radioNodeList = element.hoge ;

          // 選択状態の値(value)を取得 (Bが選択状態なら"b"が返る)
          var select = radioNodeList.value ;

          if ( select === "" ) {
                    // 未選択状態
          } else {
                    // selectには選択状態の値が代入されている
                    console.log( a ) ;
          }
}
