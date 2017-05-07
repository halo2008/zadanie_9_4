function drawTree(k) {
	var star = '';
	for ( var i = 0; i < k; i++) {
		star += '*';
		console.log(star);
	}
}

drawTree(1);
drawTree(2);
drawTree(5);