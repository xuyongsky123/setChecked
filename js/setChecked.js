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

//选择复选框组 选择全部记录/取消全部记录
function JS_setCheckAll(nameStr, valueStr, fatherObj){
	if (!fatherObj || typeof(fatherObj)!= "object"){
		var Checkers = document.getElementsByTagName("input");
	}else{
		var Checkers = fatherObj.getElementsByTagName("input");
	}
	if (!Checkers) return false;
	
	var tempArray = [];
	for (var i=0; i<Checkers.length; i++){
		if ((Checkers[i].type == "checkbox" || Checkers[i].type == "radio") && Checkers[i].name == nameStr){
			tempArray.push(Checkers[i]);
		}
	}
	if (tempArray.length <= 0) return false;
	var nowType = "checkbox";
	if (tempArray[0].type == "radio"){
		nowType = "radio"
	}
	
	valueStr = valueStr + "";
	if (valueStr == "true" || valueStr == "false"){
		if (nowType == "radio"){
			var setValue = valueStr == "true" ? true : false;
			if (setValue == true){
				tempArray[0].checked = true;
			}else{
				for (var i=0; i<tempArray.length; i++){
					tempArray[i].checked = false;
				}
			}
		}else{
			for (var i=0; i<tempArray.length; i++){
				var setValue = valueStr == "true" ? true : false;
				tempArray[i].checked = setValue;
			}
		}
	}else{
		var compareStr = "," + valueStr + ",";
		if (nowType == "radio"){
			var valueArray = compareStr.split(",");
			compareStr = "," + valueArray[1] + ",";
		}
		for (var i=0; i<tempArray.length; i++){
			var nowValue = "," + tempArray[i].value + ",";
			if (compareStr.indexOf(nowValue) >= 0){
				tempArray[i].checked = true;
			}else{
				tempArray[i].checked = false;
			}
		}
	}
	return true;
}