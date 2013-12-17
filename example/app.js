// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	layout: 'vertical',
	backgroundColor:'white'
});
var label = Ti.UI.createLabel({text: 'Audio Manager', top: 10});
win.add(label);
win.open();

// TODO: write your module tests here
var tiaudiomanager = require('org.selfkleptomaniac.org.mod.tiaudiomanager');

function createButton(title){
	return Ti.UI.createButton({
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		title: title,
		top: 10
	});
}

var button1 = createButton('Get Ring Volume');
var button2 = createButton('Set Ring Volume (2)');
alert(button1);
button1.addEventListener('click', function(){
	alert(
		tiaudiomanager.getVolume({
  		streamType: tiaudiomanager.STREAM_RING
		}));
});
button2.addEventListener('click', function(){
	tiaudiomanager.setVolume({
  	streamType: tiaudiomanager.STREAM_RING,
  	volume: 2
	});
});


win.add(button1);
win.add(button2);

