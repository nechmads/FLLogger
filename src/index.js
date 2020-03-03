const styles = {
	fontSize: "16",
	infoColor: "#ffffff",
	warningColor: "yellow",
	errorColor: "red",
	important: "background: white; border: 3px solid orange; color: orange; font-size: 16px; margin: 5px; padding: 5px;"
}

/**
 * Opinionated logger for JavaScript based projects
 */
class FLLogger {
	constructor() {
		this.isLoggingEnabled = process.env.FLLOGGER_ENABLED ? process.env.FLLOGGER_ENABLED : true
	}
	/**
	 * Sets the font size for all log messages
	 * @param {Integer} size The size in pixels to set for all log message
	 */
	setFontSize(size) {
		styles.fontSize = size
	}

	/**
	 * Sets the color for all info log messages
	 * @param {String} color the color to use for all info log messages
	 */
	setInfoColor(color) {
		styles.infoColor = color
	}

	/**
	 * Sets the color for all warning log messages
	 * @param {String} color the color to use for all warning log messages
	 */
	setWarningColor(color) {
		styles.warningColor = color
	}

	/**
	 * Sets the color for all error log messages
	 * @param {String} color the color to use for all error log messages
	 */
	setErrorColor(color) {
		styles.errorColor = color
	}

	/**
	 * Enable writing logs to the console
	 */
	enableLogging() {
		this.enableLogging = true
	}

	/**
	 * Disables writing logs to the console
	 */
	disableLogging() {
		this.enableLogging = false
	}

	/**
	 * Logs an info type of message
	 * @param {String} message The message to log
	 * @param {String} style Override the style of the message
	 */
	info(message, style = null) {
		if (this.isLoggingEnabled) {
			const messageStyle = style ? style : `font-size: ${styles.fontSize}px; color: ${styles.infoColor}`
			console.log(`%c${message}`, messageStyle)
		}
	}

	/**
	 * Logs a warning type of message
	 * @param {String} message The message to log
	 * @param {String} style Override the style of the message
	 */
	warning(message, style = null) {
		if (this.isLoggingEnabled) {
			const messageStyle = style ? style : `font-size: ${styles.fontSize}px; color: ${styles.warningColor}`
			console.log(`%c${message}`, messageStyle)
		}
	}

	/**
	 * Logs an error type of message
	 * @param {String} message The message to log
	 * @param {String} style Override the style of the message
	 */
	error(message, style = null) {
		if (this.isLoggingEnabled) {
			const messageStyle = style ? style : `font-size: ${styles.fontSize}px; color: ${styles.errorColor}`
			console.log(`%c${message}`, messageStyle)
		}
	}

	/**
	 * Logs an important message
	 * @param {String} message The message to log
	 * @param {String} style Override the style of the message
	 */
	important(message, style = null) {
		if (this.isLoggingEnabled) {
			const messageStyle = style ? style : styles.important
			console.log(`%c${message}`, messageStyle)
		}
	}

	/**
	 * Logs an an array in a readable table style
	 * @param {Array} arrayToPrint The array to log
	 */
	array(arrayToPrint) {
		if (this.isLoggingEnabled) {
			console.table(arrayToPrint)
		}
	}

	/**
	 * COunt hoe many times something happened. Run this method with the same counter name to increase the count by 1
	 * @param {String} counterName The name of the counter
	 */
	count(counterName) {
		if (this.isLoggingEnabled) {
			console.count(counterName)
		}
	}

	/**
	 * Resets a specific counter to 0
	 * @param {String} counterName The name of the counter we want to reset
	 */
	resetCounter(counterName) {
		if (this.isLoggingEnabled) {
			console.resetCounter(counterName)
		}
	}
}

export default new FLLogger()
