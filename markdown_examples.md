### Weather forecast object
| Element | Description | Type | Notes |
| --- | --- | --- | --- |
| date | Day for which weather is forecast | string | YYYY-MM-DD |
| description | Quick description of predicted weather | string | must have value from this list: "sunny", "overcast", "partly cloudy", "raining", "snowing"|
| maxTemp | maximum temperature (in Celsius) | integer | |
| minTemp | minimum temperature (in Celsius) | integer | |
| windSpeed | maximum wind speed (in km/hr) | integer | |
| danger | alert for dangerous weather | boolean | |


###  Three-day forecast

This is a container for three (or more) days of forecasts for a given location.

| Element | Description | Type | Notes |
| --- | --- | --- | --- |
| longitude | longitude of forecast location | number | I guess we're assuming North? |
| latitude | latitude of forecast location | number | I guess we're assuming West? |
| forecasts | array of forecast objects | forecast | |
| &nbsp;&nbsp;date | Day for which weather is forecast | string | YYYY-MM-DD |
| &nbsp;&nbsp;description | Quick description of predicted weather | string | must have value from this list: "sunny", "overcast", "partly cloudy", "raining", "snowing"|
| &nbsp;&nbsp;maxTemp | maximum temperature (in Celsius) | integer | |
| &nbsp;&nbsp;minTemp | minimum temperature (in Celsius) | integer | |
| &nbsp;&nbsp;windSpeed | maximum wind speed (in km/hr) | integer | |
| &nbsp;&nbsp;danger | alert for dangerous weather | boolean | |


### Meeting object
Data type for a meeting request.

| Element | Description | Type | Required | Notes |
| --- | --- | --- | --- | --- |
| time | Time of meeting | string | required | YYYY-MM-DD HH:MM |
| duration | Length of meeting in minutes | integer | required | |
| description | Description of meeting | string | required | |
| location | Location of meeting | string | optional | default empty string |
| reminder | If set, will issue a reminder this many minutes before the meeting begins | integer | optional | default 10 minutes |
| invitees | email addresses of people invited to meeting | array of email addresses | optional | |

