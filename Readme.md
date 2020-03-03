# FLLogger

FLLogger is an opinionated logger for JavaScript based projects. It allows you to better log to the console for easier debugging.

## Installation

yarn add FLLogger

## Usage

```python
import FLLogger from 'fllogger'

FLLogger.info("test this") # logs an info message
FLLogger.warning("warning this") # logs a warning
FLLogger.error("error this") # logs an error
FLLogger.important("This is important") # logs an important message
FLLogger.array(["one", "two", "three"]) # logs an array to a beautiful table view
FLLogger.setFontSize(20) # sets the font size of all log message to 20px
FLLogger.enableLogging() # enables logging to the console (true by default)
FLLogger.disableLogging() # diables logging to the console
```

You can also control enabling or disabling of log message using the environment variable FLLOGGER_ENABLED

## License

[MIT](https://choosealicense.com/licenses/mit/)
