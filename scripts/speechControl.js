var final_transcript = '';
var recognizing = false;
var ignore_onend;
var speaking = false;

var message = new SpeechSynthesisUtterance('What are your thought on this artwork?');
window.speechSynthesis.speak(message);

if (!('webkitSpeechRecognition' in window)) {
  upgrade();
} else {
	console.log("speech recognition is enabled");
	var recognition = new webkitSpeechRecognition();
	recognition.continuous = true;	// keeping recording even if there is a break in speech
	recognition.interimResults = true;	//only submit the final speech, nothing as we go along

	recognition.onstart = function() {
		recognizing = true;
		console.log("Recording...");
	};
	
	recognition.onresult = function(event) {
		var interim_transcript = '';
		for (var i = event.resultIndex; i < event.results.length; ++i) {
			if (event.results[i].isFinal) {
				final_transcript += event.results[i][0].transcript;
			} else {
				interim_transcript += event.results[i][0].transcript;
			}
		}
		if (final_transcript || interim_transcript) {
		  console.log(interim_transcript);
		  document.getElementById('inputWords').value = interim_transcript;
		}		
	};
	
	recognition.onerror = function(event) {
		if (event.error == 'no-speech') {
		}
		console.log('no_speech');
		ignore_onend = true;
	};
	
	recognition.onend = function() {
		recognizing = false;
		console.log("Final transcript: " + final_transcript);
		document.getElementById('inputWords').value = final_transcript;
		if (ignore_onend) {
			return;
		}
		if (!final_transcript) {
			console.log("No final transcript");
			return;
		}
	}
}

startSpeechRecognition = function(event) {
	if (recognizing) {
		recognition.stop();
		return;
	}
	final_transcript = '';
	recognition.lang = 'en-GB';
	recognition.start();
	ignore_onend = false;
	console.log("Starting....");
}

stopSpeechRecognition = function(event){
	console.log("Stopping...");
	recognition.stop();
}

toggleSpeech = function(event){
	if(speaking){
		stopSpeechRecognition(event);
	}
	else{
		startSpeechRecognition(event);
	}
	speaking = !speaking;
}