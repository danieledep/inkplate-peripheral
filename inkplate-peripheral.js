// source: https://inkplate.readthedocs.io/en/latest/peripheral-mode.html

module.exports = {
  echo,
  drawPixel,
  drawLine,
  drawFastVLine,
  drawFastHLine,
  drawRect,
  drawCircle,
  drawTriangle,
  drawRoudRect,
  fillRect,
  fillCircle,
  fillTriangle,
  fillRoudRect,
  print,
  setTextSize,
  setCursor,
  setTextWrap,
  setRotation,
  drawBitmap,
  setDisplayMode,
  getDisplayMode,
  clearDisplay,
  display,
  partialUpdate,
  readTemperature,
  readTouchpad,
  readBattery,
  panelSupply,
  getPanelState,
  drawImage,
  drawThickLine,
  drawEllipse,
  fillEllipse,
};

function echo() {
  return "b#?*\n\r";
}

function drawPixel(x, y, c) {
  var XXX = leadZeroes(x, 3);
  var YYY = leadZeroes(y, 3);
  var CC = leadZeroes(c, 2);

  var serialString = "b#0(" + XXX + "," + YYY + "," + CC + ")*\\n\\r";
  return serialString;
}

function drawLine(x, y, i, j, c) {
  var XXX = leadZeroes(x, 3);
  var YYY = leadZeroes(y, 3);
  var III = leadZeroes(i, 3);
  var JJJ = leadZeroes(j, 3);
  var CC = leadZeroes(c, 2);

  var serialString =
    "b#1(" + XXX + "," + YYY + "," + III + "," + JJJ + "," + CC + ")*\\n\\r";
  return serialString;
}

function drawFastVLine(x, y, l, c) {
  var XXX = leadZeroes(x, 3);
  var YYY = leadZeroes(y, 3);
  var LLL = leadZeroes(l, 3);
  var CC = leadZeroes(c, 2);

  var serialString =
    "b#2(" + XXX + "," + YYY + "," + LLL + "," + CC + ")*\\n\\r";
  return serialString;
}

function drawFastHLine(x, y, l, c) {
  var XXX = leadZeroes(x, 3);
  var YYY = leadZeroes(y, 3);
  var LLL = leadZeroes(l, 3);
  var CC = leadZeroes(c, 2);

  var serialString =
    "b#3(" + XXX + "," + YYY + "," + LLL + "," + CC + ")*\\n\\r";
  return serialString;
}

function drawRect(x, y, w, h, c) {
  var XXX = leadZeroes(x, 3);
  var YYY = leadZeroes(y, 3);
  var WWW = leadZeroes(w, 3);
  var HHH = leadZeroes(h, 3);
  var CC = leadZeroes(c, 2);

  var serialString =
    "b#4(" + XXX + "," + YYY + "," + WWW + "," + HHH + "," + CC + ")*\\n\\r";
  return serialString;
}

function drawCircle(x, y, r, c) {
  var XXX = leadZeroes(x, 3);
  var YYY = leadZeroes(y, 3);
  var RRR = leadZeroes(r, 3);
  var CC = leadZeroes(c, 2);

  var serialString =
    "b#5(" + XXX + "," + YYY + "," + RRR + "," + CC + ")*\\n\\r";
  return serialString;
}

function drawTriangle(x1, y1, x2, y2, x3, y3, c) {
  var XX1 = leadZeroes(x1, 3);
  var YY1 = leadZeroes(y1, 3);
  var XX2 = leadZeroes(x2, 3);
  var YY2 = leadZeroes(y2, 3);
  var XX3 = leadZeroes(x3, 3);
  var YY3 = leadZeroes(y3, 3);
  var CC = leadZeroes(c, 2);

  var serialString =
    "b#6(" +
    XX1 +
    "," +
    YY1 +
    "," +
    XX2 +
    "," +
    YY2 +
    "," +
    XX3 +
    "," +
    YY3 +
    "," +
    CC +
    ")*\\n\\r";
  return serialString;
}

function drawRoudRect(x, y, w, h, r, c) {
  var XXX = leadZeroes(x, 3);
  var YYY = leadZeroes(y, 3);
  var WWW = leadZeroes(w, 3);
  var HHH = leadZeroes(h, 3);
  var RRR = leadZeroes(r, 3);
  var CC = leadZeroes(c, 2);

  var serialString =
    "b#7(" +
    XXX +
    "," +
    YYY +
    "," +
    WWW +
    "," +
    HHH +
    "," +
    RRR +
    "," +
    CC +
    ")*\\n\\r";
  return serialString;
}

function fillRect(x, y, w, h, c) {
  var XXX = leadZeroes(x, 3);
  var YYY = leadZeroes(y, 3);
  var WWW = leadZeroes(w, 3);
  var HHH = leadZeroes(h, 3);
  var CC = leadZeroes(c, 2);

  var serialString =
    "b#8(" + XXX + "," + YYY + "," + WWW + "," + HHH + "," + CC + ")*\\n\\r";
  return serialString;
}

function fillCircle(x, y, r, c) {
  var XXX = leadZeroes(x, 3);
  var YYY = leadZeroes(y, 3);
  var RRR = leadZeroes(r, 3);
  var CC = leadZeroes(c, 2);

  var serialString =
    "b#9(" + XXX + "," + YYY + "," + RRR + "," + CC + ")*\\n\\r";
  return serialString;
}

function fillTriangle(x1, y1, x2, y2, x3, y3, c) {
  var XX1 = leadZeroes(x1, 3);
  var YY1 = leadZeroes(y1, 3);
  var XX2 = leadZeroes(x2, 3);
  var YY2 = leadZeroes(y2, 3);
  var XX3 = leadZeroes(x3, 3);
  var YY3 = leadZeroes(y3, 3);
  var CC = leadZeroes(c, 2);

  var serialString =
    "b#A(" +
    XX1 +
    "," +
    YY1 +
    "," +
    XX2 +
    "," +
    YY2 +
    "," +
    XX3 +
    "," +
    YY3 +
    "," +
    CC +
    ")*\\n\\r";
  return serialString;
}

function fillRoudRect(x, y, w, h, r, c) {
  var XXX = leadZeroes(x, 3);
  var YYY = leadZeroes(y, 3);
  var WWW = leadZeroes(w, 3);
  var HHH = leadZeroes(h, 3);
  var RRR = leadZeroes(r, 3);
  var CC = leadZeroes(c, 2);

  var serialString =
    "b#B(" +
    XXX +
    "," +
    YYY +
    "," +
    WWW +
    "," +
    HHH +
    "," +
    RRR +
    "," +
    CC +
    ")*\\n\\r";
  return serialString;
}

function print(str) {
  var STRING = str.hexEncode();
  var serialString = 'b#C("' + STRING + '")*\\n\\r';

  return serialString;
}

function setTextSize(n) {
  var NN = leadZeroes(n, 2);

  var serialString = "b#D(" + NN + ")*\\n\\r";
  return serialString;
}

function setCursor(x, y) {
  var XXX = leadZeroes(x, 3);
  var YYY = leadZeroes(y, 3);

  var serialString = "b#E(" + XXX + "," + YYY + ")*\\n\\r";
  return serialString;
}

function setTextWrap(bool) {
  var B = "F";

  if (bool) B = "T";
  else B = "F";

  var serialString = "b#F(" + B + ")*\\n\\r";
  return serialString;
}

function setRotation(r) {
  var RRR = leadZeroes(r, 3);

  var serialString = "b#G(" + RRR + ")*\\n\\r";
  return serialString;
}

function drawBitmap(x, y, path) {
  var XXX = leadZeroes(x, 3);
  var YYY = leadZeroes(y, 3);
  var HEX = path.hexEncode();

  var serialString = "b#H(" + XXX + "," + YYY + ',"' + HEX + '")*\\n\\r';
  return serialString;
}

function setDisplayMode(D) {
  var serialString = "b#I(" + D + ")*\\n\\r";
  return serialString;
}

function getDisplayMode() {
  return "b#J(?)*\\n\\r";
}

function clearDisplay() {
  return "b#K(1)*\\n\\r";
}

function display() {
  return "b#L(1)*\\n\\r";
}

function partialUpdate(y1, x2, y2) {
  var YY1 = leadZeroes(y1, 3);
  var XX2 = leadZeroes(x2, 3);
  var YY2 = leadZeroes(y2, 3);

  var serialString = "b#M(" + YY1 + "," + XX2 + "," + YY2 + ")*\\n\\r";
  return serialString;
}

function readTemperature() {
  return "b#N(?)*\\n\\r";
}

function readTouchpad() {
  return "b#O(P)*\\n\\r";
}

function readBattery() {
  return "b#P(?)*\\n\\r";
}

function panelSupply(s) {
  var serialString = "b#Q(" + s + ")*\\n\\r";
  return serialString;
}

function getPanelState() {
  return "b#R(?)*\\n\\r";
}

function drawImage(x, y, path) {
  var XXX = leadZeroes(x, 3);
  var YYY = leadZeroes(y, 3);
  var HEX = path.hexEncode();

  var serialString = "b#S(" + XXX + "," + YYY + ',"' + HEX + '")*\\n\\r';
  return serialString;
}

function drawThickLine(x, y, i, j, t, c) {
  var XXX = leadZeroes(x, 3);
  var YYY = leadZeroes(y, 3);
  var III = leadZeroes(i, 3);
  var JJJ = leadZeroes(j, 3);
  var TT = leadZeroes(t, 3);
  var CC = leadZeroes(c, 2);

  var serialString =
    "b#T(" +
    XXX +
    "," +
    YYY +
    "," +
    III +
    "," +
    JJJ +
    "," +
    TT +
    "," +
    CC +
    ")*\\n\\r";
  return serialString;
}

function drawEllipse(x, y, rx, ry, c) {
  var XXX = leadZeroes(x, 3);
  var YYY = leadZeroes(y, 3);
  var RRX = leadZeroes(rx, 3);
  var RRY = leadZeroes(ry, 3);
  var CC = leadZeroes(c, 2);

  var serialString =
    "b#U(" + XXX + "," + YYY + "," + RRX + "," + RRY + "," + CC + ")*\\n\\r";
  return serialString;
}

function fillEllipse(x, y, rx, ry, c) {
  var XXX = leadZeroes(x, 3);
  var YYY = leadZeroes(y, 3);
  var RRX = leadZeroes(rx, 3);
  var RRY = leadZeroes(ry, 3);
  var CC = leadZeroes(c, 2);

  var serialString =
    "b#V(" + XXX + "," + YYY + "," + RRX + "," + RRY + "," + CC + ")*\\n\\r";
  return serialString;
}

String.prototype.hexEncode = function () {
  var hex, i;
  var result = "";

  for (i = 0; i < this.length; i++) {
    hex = this.charCodeAt(i).toString(16);
    result += hex.slice(-4);
  }

  return result;
};

function leadZeroes(num, size) {
  return ("0000000000" + num).slice(-size);
}
