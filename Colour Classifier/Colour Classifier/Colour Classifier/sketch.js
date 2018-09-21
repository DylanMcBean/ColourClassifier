let r, g, b;
let rgbDiv;

let bodyElement;
let buttons = [];
let compair = [];
let ColorData = [];

let UUID = Generate_UUID();

let Collected = 0;

function pickColor() {
  r = floor(random(256));
  g = floor(random(256));
  b = floor(random(256));
  background(r, g, b);
  updateBodyBG();
}

function setup() {
	createCanvas(200, 200).parent('#root').id('canvas');
  	rgbDiv = createDiv().parent('#root');
  	bodyElement = document.body;
	
  	buttons.push(createButton('red-ish').parent('#root').class('red-ish'));
  	buttons.push(createButton('green-ish').parent('#root').class('green-ish'));
  	buttons.push(createButton('blue-ish').parent('#root').class('blue-ish'));
  	buttons.push(createButton('orange-ish').parent('#root').class('orange-ish'));
  	buttons.push(createButton('yellow-ish').parent('#root').class('yellow-ish'));
  	buttons.push(createButton('pink-ish').parent('#root').class('pink-ish'));
  	buttons.push(createButton('purple-ish').parent('#root').class('purple-ish'));
  	buttons.push(createButton('brown-ish').parent('#root').class('brown-ish'));
  	buttons.push(createButton('grey-ish').parent('#root').class('grey-ish'));

  	for (let i = 0; i < buttons.length; i++) {
    	buttons[i].mouseClicked(saveData);
  	}
  	createP('Compair Colours').parent('#root2');
  	compair.push(createButton('').parent('#root2').class('red-ish comp').id('comp1'));
  	compair.push(createButton('').parent('#root2').class('green-ish comp').id('comp2'));
  	compair.push(createButton('').parent('#root2').class('blue-ish comp').id('comp3'));
  	compair.push(createButton('').parent('#root2').class('orange-ish comp').id('comp4'));
  	compair.push(createButton('').parent('#root2').class('yellow-ish comp').id('comp5'));
  	compair.push(createButton('').parent('#root2').class('pink-ish comp').id('comp6'));
  	compair.push(createButton('').parent('#root2').class('purple-ish comp').id('comp7'));
  	compair.push(createButton('').parent('#root2').class('brown-ish comp').id('comp8'));
  	compair.push(createButton('').parent('#root2').class('grey-ish comp').id('comp9'));

  	saveButton = createButton('Save Collect Data').parent('#root2').class('save').mousePressed(function() {saveJSON(ColorData, 'ColorData.json');});

    pickColor();
  }

function draw() {

}

async function saveData() {
    Collected ++;
  // Make an object with data in it
  var data = {
  	UUID: UUID,
    r: r,
    g: g,
    b: b,
    label: this.html()
  };

  //Pick new color
  pickColor();
  ColorData.push(data);
}

function updateBodyBG(){
  bodyElement.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1.0)`;
  rgbDiv.html(`R:${r} G:${g} B:${b}`);
  comp1.style['background-color'] = 'rgba(' + r + ',' + g + ',' + b + ')';
  comp2.style['background-color'] = 'rgba(' + r + ',' + g + ',' + b + ')';
  comp3.style['background-color'] = 'rgba(' + r + ',' + g + ',' + b + ')';
  comp4.style['background-color'] = 'rgba(' + r + ',' + g + ',' + b + ')';
  comp5.style['background-color'] = 'rgba(' + r + ',' + g + ',' + b + ')';
  comp6.style['background-color'] = 'rgba(' + r + ',' + g + ',' + b + ')';
  comp7.style['background-color'] = 'rgba(' + r + ',' + g + ',' + b + ')';
  comp8.style['background-color'] = 'rgba(' + r + ',' + g + ',' + b + ')';
  comp9.style['background-color'] = 'rgba(' + r + ',' + g + ',' + b + ')';
  br = (r + g + b) / 3
  canvas.style['box-shadow'] = "0px 0 1em rgb("+(255-br)+","+(255-br)+","+(255-br)+"),0 0 4em rgb("+br+","+br+","+br+")";
  saveButton.html(`Save Collect Data[${Collected}]`)
}

function Generate_UUID() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}