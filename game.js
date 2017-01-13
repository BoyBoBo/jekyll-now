var generateBtn = document.getElementById('generate_btn');
var container = document.getElementById('container');

var LEN = 5;

var endTime, startTime;
var expect = 1;
generateBtn.addEventListener('click', function(){
	startTime = 0, endTime = 0;
	expect = 1;
	container.innerHTML = '';
	var arr = [];
	for(var i = 0; i < LEN * LEN; i ++) {
		arr.push(i + 1);
	}
	var randomArr = [];
	do {
		var index = Math.floor(Math.random() * arr.length) + 1;
		var num = arr.splice(index-1, 1);
		console.log(num);
		randomArr.push(num);
	} while(arr.length > 0);
	
	for(var i = 0; i < LEN; i ++) {
		var ulEle = document.createElement('ul');
		for(var j = 0; j < LEN; j ++) {
			var ele = document.createElement('li');
			ele.innerText = randomArr[i * LEN + j];
			ulEle.appendChild(ele);
		}
		container.appendChild(ulEle);
	}
});



container.addEventListener('keydown', function(e){
	var target = e.target;
	if(target.constructor === HTMLLIElement){
		var num = Number(target.innerText);
		if(num === expect) {
			target.style.backgroundColor = 'green';
			if(expect === LEN * LEN){
				endTime = new Date().getTime();
				alert('共用时：' + ((endTime - startTime) / 1000) + 's');
			} else if(expect === 1){
				startTime = new Date().getTime();
				expect ++;
			} else {
				expect ++;
			}
		}
	}
});

container.addEventListener('keyup', function(e){
	var target = e.target;
	if(target.constructor === HTMLLIElement){
		target.style.backgroundColor = '#ccc';
	}
});
