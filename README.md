#Snippets CSS for Media Queries

[![Build Status](https://travis-ci.org/leonardo403/media-queries-devices.svg)](https://travis-ci.org/leonardo403/media-queries-devices)

###[Leia também em português](https://github.com/leonardo403/media-queries-devices/blob/dev/README-ptbr.md)

This is snippets css for help you when create an website that will access many devices.
You can see some examples a below:

##Iphone 4 and 4S

```
/* ----------- iPhone 4 and 4S ----------- */
/* Portrait and Landscape */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    /*Here your code*/
 }
```

##Galaxy S3

```
/* ----------- Galaxy S3 ----------- */
/* Portrait and Landscape */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 2) {
    /*Here your code*/
>
}
```

##How to use
Put file CSS into head of your website or using into your CSS. Look example a below:

**Example 1**:

```
<link rel="stylesheet" href="path/site/media-queries-devices.css">
```

**Example 2**:

```
@import url("path/media-queries-devices.css");
```

##Mobile Checker
[Mobile Checker](https://validator.w3.org/mobile-alpha/?utm_source=html5weekly&utm_medium=email)

##References

[CSS Tricks](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

[CSS Media Queries](http://cssmediaqueries.com/)

This is an opinion different like this:
 [Why you dont need device specific breakpoints](http://responsivedesign.is/articles/why-you-dont-need-device-specific-breakpoints)

##License

**MIT**
