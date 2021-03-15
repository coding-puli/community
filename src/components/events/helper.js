const weekdayArray = new Array(7);
weekdayArray[0] = "Sunday";
weekdayArray[1] = "Monday";
weekdayArray[2] = "Tuesday";
weekdayArray[3] = "Wednesday";
weekdayArray[4] = "Thursday";
weekdayArray[5] = "Friday";
weekdayArray[6] = "Saturday";

const monthArray = new Array(12);
monthArray[0] = "Jan";
monthArray[1] = "Feb";
monthArray[2] = "Mar";
monthArray[3] = "Apr";
monthArray[4] = "May";
monthArray[5] = "Jun";
monthArray[6] = "Jul";
monthArray[7] = "Aug";
monthArray[8] = "Sep";
monthArray[9] = "Oct";
monthArray[10] = "Nov";
monthArray[11] = "Dec";

function getFormattedDate(dateAsString){
	const dateObject = new Date(dateAsString);
	const day = weekdayArray[dateObject.getDay()];
	const month = monthArray[dateObject.getMonth()];
	const date =  dateObject.getDate();
	const year =  dateObject.getFullYear();

	return {
		day,
		month,
		date,
		year
	}
}

function imageGetter(data){
  const {cover} = data;
  if(cover) {
    return cover.source;
  }
  return  ''
}

const sumIterator = (item)=>{
  const in_count = item['interested_count'] === undefined ? 0 : item['interested_count'];
  const at_count = item['attending_count'] === undefined ? 0 : item['attending_count'];
  return in_count + at_count + 1;
};

export {
	getFormattedDate,
  imageGetter,
  sumIterator
}