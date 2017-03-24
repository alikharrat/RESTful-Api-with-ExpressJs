var offre = require('./models/schedular');
var mongoose = require('mongoose');
 mongoose.connect ('localhost:27017/mydb');
var Offres = [
new offre({
      title: 'All Day Event',
            start: '2016-09-01',
            rendering: 'background',
            backgroundColor:'red'
}),

new offre({title: 'Long Event',
            start: '2016-09-07',
            end: '2016-09-10'
}),
new offre({  title: 'Repeating Event',
            start: '2016-09-09T16:00:00'

}),

new offre({
	title: 'Conference',
            start: '2016-09-11',
            end: '2016-09-13'

}),new offre({
	title: 'Meeting',
            start: '2016-09-12T10:30:00',
            end: '2016-09-12T12:30:00'

}),new offre({
	title: 'Lunch',
            start: '2016-09-12T12:00:00'

}),new offre({
	            title: 'Meeting',
            start: '2016-09-12T14:30:00'

}),new offre({
	title: 'Happy Hour',
            start: '2016-09-12T17:30:00'

}),new offre({
	  title: 'Dinner',
            start: '2016-09-12T20:00:00'

}),new offre({
	title: 'Birthday Party',
            start: '2016-09-13T07:00:00'
})


];

var done=0;
for (var i=0; i < 10; i++){
	Offres[i].save(function(err, result) {
		done++;
		if(done==Offres.length){
			exit();
		}

	});
}

function exit() {
	mongoose.disconnect();
}
