const map = new geolonia.Map(
  '#map',
  {
    preserveDrawingBuffer: true
  })
const sourceCanvas = map.getCanvas();

console.log(sourceCanvas)

var ctx = new C2S(1920,242);
// ctx.fillStyle="red";
// ctx.fillRect(100,100,100,100);

ctx.drawImage(sourceCanvas, 0, 0);
var myRectangle = ctx.getSerializedSvg(true); 

console.log(myRectangle)

const svgImage = document.getElementById('svgImage');

const tmpStr = "data:image/svg+xml," + encodeURIComponent(myRectangle);
svgImage.src = tmpStr;

