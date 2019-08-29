


function toDraw() {//文字を画像に描画
          var ctx = document.getElementById("cv4").getContext("2d");
          ctx.clearRect(350, 850, 100,1000);
          var txt = document.forms.serihu_form.serihu.value; //描画する文字
          var txt2 = document.forms.serihu_form.dare.value;
          ctx.font = "bold 50px Arial"; //フォントにArial,40px,斜体を指定
          ctx.fillStyle = "white"; //塗り潰し色を緑に
          ctx.fillText(txt2,350,860);
          ctx.fillText(txt,350,940);      //テキストを塗り潰しで描画
          
          }

function whichselect(e) {//選択中の値を取得
          switch(e) {
                    case 1:var slct = document.getElementsByName('e1');
                               var ans;
                                  for(var i = 0; i < slct.length; i++){
                                    if(slct[i].checked) {
                                      console.log("選択された値：", slct[i].value);
                                             ans = slct[i].value;
                                    }
                                  }
                              break;
                              
                    case 2:var slct2 = document.getElementsByName('e2');
                                  var ans;
                                  for(var i = 0; i < slct2.length; i++){
                                    if(slct2[i].checked) {
                                      console.log("選択された値：", slct2[i].value);
                                             ans = slct2[i].value;
                                    }
                                  }
                            break;
                              
                    default:console.log("エラーです。");break;
                         }
          DrawImage(ans,e,1);

  }


function DrawImage(name,n,t) {
           
  //2Dコンテキストのオブジェクトを生成する
          switch(n){
                    case 1:var cvs = document.getElementById('cv');break;
                    case 2:var cvs = document.getElementById('cv2');break;
                    case 3:var cvs = document.getElementById('cv3');break;
                    default:console.log("エラーです。");break;
               }
            var ctx = cvs.getContext('2d');
          ctx.clearRect(0, 0, 1920, 1080);
            ctx.globalAlpha = t;
            //画像オブジェクトを生成
            var img = new Image();
            img.src ="img/"+name+".png";
          
            //画像をcanvasに設定
            img.onload = function(){
            ctx.drawImage(img, 0, 0, 1920, 1080);  //400x300に縮小表示
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

