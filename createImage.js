
function toDraw() {//文字を画像に描画
          var ctx = document.getElementById("cv4").getContext("2d");
          ctx.clearRect(350, 800, 1200,500);
          var fontsize = 50;
          var txt = document.forms.serihu_form.serihu.value; //描画する文字（セリフ）
          var txt2 = document.forms.serihu_form.dare.value;//話者の名前
          ctx.font = "50px Arial"; //フォントにArial,40px,太字を指定
          ctx.fillStyle = "white"; //塗り潰し色を緑に
          ctx.fillText(txt2,350,840);

    var len = txt.length; 
    var strArray = [];
    var tmp = "";
    var i = 0;
    var l;
    if( len < 1 ){
        //textの文字数が0だったら終わり
        return strArray;
    }

    for( i = 0; i < len; i++ ){
        var c = txt.charAt(i);  //textから１文字抽出
        if( c == "\n" ){
            /* 改行コードの場合はそれまでの文字列を配列にセット */
            strArray.push( tmp );
            tmp = "";

            continue;
        }

        /* contextの現在のフォントスタイルで描画したときの長さを取得 */
        if (ctx.measureText( tmp + c ).width <= 1200){
            /* 指定幅を超えるまでは文字列を繋げていく */
            tmp += c;
        }else{
            /* 超えたら、それまでの文字列を配列にセット */
            strArray.push( tmp );
            tmp = c;
        }
    }

    /* 繋げたままの分があれば回収 */
    if( tmp.length > 0 )
        strArray.push( tmp );
	
          
          for( i=0, l=strArray.length; l>i; i++ ) {
	var line = strArray[i];
          var addY = 900 + 55 * i ;

	ctx.fillText( line, 350,addY );
	  }     //テキストを塗り潰しで描画
          }

function whichselect(e) {//選択中の値を取得
          switch(e) {
                    case 1:var slct = document.getElementsByName('e1');
                               var ans;
                                  for(var i = 0; i < slct.length; i++){
                                    if(slct[i].checked) {
                                      
                                             ans = slct[i].value;
                                    }
                                  }
                              break;
                              
                    case 2:var slct2 = document.getElementsByName('e2');
                                  var ans;
                                  for(var i = 0; i < slct2.length; i++){
                                    if(slct2[i].checked) {
                                      
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


/**
 * Canvas合成
 */
 async function concatCanvas(base, asset){
  const canvas = document.querySelector(base);
  const ctx = canvas.getContext("2d");
  const downloadLink = document.getElementById('download_link');
	 
  for(let i=0; i<asset.length; i++){
    const image1 = await getImagefromCanvas(asset[i]);
    await ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
	  console.log("create");
	   
  }   
	 
}


 
async function download(){
  await concatCanvas('#resultImage', ['#cv','#cv2','#cv3','#cv4']);
  await DL();
  
}


function DL()
{
	var canvas = document.getElementById('resultImage');
	//アンカータグを作成
	var a = document.createElement('a');
	//canvasをJPEG変換し、そのBase64文字列をhrefへセット
	a.href = canvas.toDataURL('image/jpeg', 0.85);
	//ダウンロード時のファイル名を指定
	a.download = 'takanecom.jpg';
	//クリックイベントを発生させる
	a.click();
}


/**
 * Canvasを画像として取得
 *
 * @param {string} id  対象canvasのid
 * @return {object}
 */
function getImagefromCanvas(id){
  return new Promise((resolve, reject) => {
    const image = new Image();
    const ctx = document.querySelector(id).getContext("2d");
    image.onload = () => resolve(image);
    image.onerror = (e) => reject(e);
    image.src = ctx.canvas.toDataURL();
  });
}
/**
 * Canvasをすべて削除する
 *
 * @param {string} target 対象canvasのid
 * @return {void}
 */
function eraseCanvas(target){
	for(let i = 0;i < target.length;i++){
  const canvas = document.getElementById(target[i]);
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
}
