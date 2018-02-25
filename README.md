# Lodash constrain

[![Build Status](https://travis-ci.org/davidwaterston/lodash-constrain.svg)](https://travis-ci.org/davidwaterston/lodash-constrain)
[![Known Vulnerabilities](https://snyk.io/test/github/davidwaterston/lodash-constrain/badge.svg?targetFile=package.json)](https://snyk.io/test/github/davidwaterston/lodash-constrain?targetFile=package.json)
[![NPM version](http://img.shields.io/npm/v/lodash-constrain.svg)](https://www.npmjs.com/package/lodash-constrain/)


Extend [Lodash](https://lodash.com/) to take a numeric value, check that it's within a range and, if not, return the minimum or maximum allowed value instead. That is, if _value_ is lower than the minimum allowed then _minimum_ is returned. If it is greater than the maximum allowed then _maximum_ is returned, otherwise _value_ is returned unchanged.



### _.constrain(value, [min=0], [max=Number.MAX_VALUE])

**Arguments**  
value (number): The number value to be checked. Required.  
[min] (number): The minimum allowed value. Optional. When none is supplied, zero is used.  
[max] (number): The maximum allowed value. Optional. When none is supplied the maximum allowed for the environment (Number.MAX_VALUE) is used.

**Returns**  
(Number): A number.  


### Examples  
```
var _ = require('lodash')
require('lodash-constrain')

_.constrain(10,12) // 12 
_.constrain(10,10) // 10 
_.constrain(10,0,10) // 10 
_.constrain(15,10) // 15
_.constrain(-1) // 0
_.constrain(15,20.5) // 20.5
_.constrain(120,20,100) // 100
```


### Version History

| Version | Release Date | Details |   
| :-- | :-- | :-- |    
| 1.0.0 | 25th February, 2018 | Initial release. |
