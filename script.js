	var menssagens = {
		data: '',
		msg: ''
	}
	
function send(){
	let message = document.getElementById("msg")
	let tuplaDate = document.getElementById("data")
	let tuplaMsg = document.getElementById("message")
	var data = new Date()
	data = data.getDate().toString()+'/'+data.getMonth().toString()+'/'+data.getFullYear().toString()+'  '+data.getHours().toString()+':'+data.getMinutes().toString()+':'+data.getSeconds().toString()
	
	
	//
	menssagens.data = String(data)
	menssagens.msg = message.value
	
	tuplaDate.innerHTML += menssagens.data + `<br>`
	tuplaMsg.innerHTML += menssagens.msg + `<br>`
}



	
	
