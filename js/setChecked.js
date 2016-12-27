//选中单选框/复选框
//namestr 设置元素的name属性
//valueList 需要选中的项的值的集合，数组
//参数 fatherObj 需要在哪个DOM元素下执行 如果没有传递则使用document
function JS_setCheck(nameStr,valueList,fatherObj){
	var Checkers
	if (!fatherObj || typeof(fatherObj)!= "object"){
		Checkers = document.getElementsByTagName("input");
	}else{
		Checkers = fatherObj.getElementsByTagName("input");
	}
	if (!Checkers) return false;
	var tempArray = valueList;
	for (var i=0;i<Checkers.length;i++){
		if (Checkers[i].name==nameStr){
			//获得该元素的value
			valueStr=Checkers[i].value;
			s=0;
			for (var j=0;j<tempArray.length;j++){
				if (valueStr+""==tempArray[j]+""){
					s=1;
					break;
				}
			}
			if (s==1){
				Checkers[i].checked=true;
			}else{
				Checkers[i].checked=false;
			}
		}
	}
}