window.onload = function(){
	var ctx = document.getElementById("loading").getContext("2d");
	ctx.drawImage("loading.png","loading",1);
	DrawImage("img/serihu.png","cv3",0.7);
}


const face = 
      {
        "cusual": ["基本", "基本2", "にっこり","にっこり面妖","こまり顔","こまり顔２","すん","どうですか？",
		   "悩み","悩み(目閉じ)","思案中 ","きりっ ","ぎょえ！","えーん！"],
        "shiny": ["基本", "面妖(目閉じ)", "困り顔(目閉じ)","笑顔","笑顔(目閉じ)","赤面","赤面２","ぷいっ","半目"],
        "suit": ["基本", "困り顔", "困り顔(目閉じ)","思案","悩み","赤面","赤面２","つん","ぷいっ","半目"],
	"lady": ["笑顔", "笑顔２", "にっこり","にっこり面妖","うっとり","びっくり","びっくり２","伺い","不安","えー","すん","横"]
      };

//選択された衣装によって表情の選択肢を変える
function selectpose(selectGenre){
	let menuList = document.getElementById('menuList');
	menuList.disabled = false;
	menuList.innerHTML = '';

	let option = document.createElement('option');
	option.innerHTML = '表情を選択してください';
	option.defaultSelected = true;
	option.disabled = true;
	menuList.appendChild(option);  

	face[selectGenre].forEach( menu => {
		let option = document.createElement('option');
		option.innerHTML = menu;
		menuList.appendChild(option);  
	});
}

//画像のダウンロード
async function download(){
	await concatCanvas('#resultImage', ['#cv','#cv2','#cv3','#cv4']);
  	await DL();
}

function toDraw() {//文字を画像に描画
	var ctx = document.getElementById("cv4").getContext("2d");
	ctx.clearRect(350, 800, 1200,500);
	var fontsize = 50;
	var txt = document.forms.words.serihu.value; //描画する文字（セリフ）
	var txt2 = document.forms.words.who.value;//話者の名前

	ctx.font = "bold 48px 'Helvetica Neue','Arial','Hiragino Kaku Gothic ProN','Hiragino Sans','Meiryo','sans-serif'";//フォントにArial,40px,太字を指定
	ctx.fillStyle = "white"; //文字色を白に
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
		}
		else{
			/* 超えたら、それまでの文字列を配列にセット */
			strArray.push( tmp );
			tmp = c;
		}
	}

	/* 繋げたままの分があれば回収 */
	if( tmp.length > 0 )　strArray.push( tmp );

	for( i=0, l=strArray.length; l>i; i++ ) {
		var line = strArray[i];
		var addY = 900 + 55 * i ;
		ctx.fillText( line,350,addY );
	}     //テキストを塗り潰しで描画
}

function Selecthk(hk_value){
	DrawImage("img/"++".png","cv",1);
}


function DrawImage(img_path,cvs_name,t) {
	document.getElementById('resultImage').style.visibility ="hidden";
	document.getElementById('cv').style.visibility ="hidden";
	document.getElementById('cv2').style.visibility ="hidden";
	document.getElementById('cv3').style.visibility ="hidden";
	document.getElementById('cv4').style.visibility ="hidden";
	//2Dコンテキストのオブジェクトを生成する
	var cvs = document.getElementById(cvs_name);
	var ctx = cvs.getContext('2d');
	
	ctx.clearRect(0, 0, 1920, 1080);
	ctx.globalAlpha = t;
	
	//画像オブジェクトを生成
	var img = new Image();
	img.src = img_path;
	
	//画像をcanvasに設定
	img.onload = function(){
		ctx.drawImage(img, 0, 0, 1920, 1080);  //400x300に縮小表示
		document.getElementById('resultImage').style.visibility ="visible";
		document.getElementById('cv').style.visibility ="visible";
		document.getElementById('cv2').style.visibility ="visible";
		document.getElementById('cv3').style.visibility ="visible";
		document.getElementById('cv4').style.visibility ="visible";
	}
}



//Canvas合成
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

//Canvasを画像として取得
function getImagefromCanvas(id){
	return new Promise((resolve, reject) => {
		const image = new Image();
		const ctx = document.querySelector(id).getContext("2d");
		image.onload = () => resolve(image);
		image.onerror = (e) => reject(e);
		image.src = ctx.canvas.toDataURL();
	});
}

//Canvasをすべて削除する
function eraseCanvas(target){
	for(let i = 0;i < target.length;i++){
		const canvas = document.getElementById(target[i]);
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
}



function setListeners(event){
	// --------------------
	//	引数チェック
	// --------------------
	var tg = event.target;	// イベントが発生した要素

	if (!tg.files.length) {
		console.log('ファイルが選択されていません');
		return;
	}
	// Formからファイルを取得
	var file = tg.files[0];

	// --------------------
	//	ファイル読み込み
	// --------------------
	var cve = document.getElementById('cv2');
	if (cve.getContext) {
		var ctx = cve.getContext('2d');

		var img = new Image();
		var fr  = new FileReader();
		
		// 画像ファイル読み込み完了後に実行する処理
		fr.onload = function(evt) {
			// 画像読み込み完了後に実行する処理
			img.onload = function () {
				
				// 描画
				ctx.drawImage(img, 0, 0, 1920, 1080);
			}
			// Base64エンコードされた文字を画像のurlとしてsrcプロパティに渡す
			// すると、画像として表示される。
			img.src = evt.target.result;
		}
		
		// fileを読み込む データはBase64エンコードされる
		fr.readAsDataURL(file);
	}

};
