
function showdiff(){
	
	$('.cf').each(function(i, item){
		if (item.src.includes('heatmap.png')){
			item.src = item.src.replace('heatmap.png','0.png')
		}else{
			item.src = item.src.replace('0.png','heatmap.png')
		}
	})
	
	
}

$('.cf').hover(function(item){
	item = $( this )[0]	
    if (item.src.includes('heatmap.png')){
			item.src = item.src.replace('heatmap.png','0.png')
		}else{
			item.src = item.src.replace('0.png','heatmap.png')
		}
})