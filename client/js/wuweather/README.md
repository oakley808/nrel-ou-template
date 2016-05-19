nrel-wuwidget
=============

A little widget to pull weather info from the Weather Underground


## Example Usage
```
<div class="weather-widget"> </div>

<script src="jquery.wuweather.js"></script>

<script>
$(document).ready(function(){
    $('.weather-widget').wuwidget({
        city   : 'Golden',
        state  : 'CO',
        apikey : 'your API key'
    });
});
</script>
```
There are a few other customizable options. See the [defaults object](https://github.nrel.gov/communications/nrel-wuwidget/blob/f282f82105dd92f3a894610d59ee8d0906509e8d/jquery.wuweather.js#L12-L18).

For example, you can customize your icons using the `iconset` option. See the [API documentation](https://www.wunderground.com/weather/api/d/docs?d=resources/icon-sets). (the default is set k)  
