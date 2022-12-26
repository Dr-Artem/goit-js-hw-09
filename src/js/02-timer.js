import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {
		if (selectedDates[0] < {minDate:"today"}) {
			window.alert("Please choose a date in the future")
		}
		console.log(selectedDates[0]);
	},
}

const calendars = flatpickr("#datetime-picker", options);
calendars[0] // flatpickr