#Snippets CSS for Media Queries
============

This is snippets css for help you when create an website that will access many devices.
You can see some examples a below:

#Iphone 4 and 4S

<code>
/* ----------- iPhone 4 and 4S ----------- */

/* Portrait and Landscape */
@media only screen 
>
  and (min-device-width: 320px) 
>
  and (max-device-width: 480px)
>
  and (-webkit-min-device-pixel-ratio: 2) {
>
 /*Here your code*/
>
 }
</code>

#Galaxy S3

<code>
/* ----------- Galaxy S3 ----------- */

/* Portrait and Landscape */
@media screen 
>
  and (device-width: 320px) 
>
  and (device-height: 640px) 
>
  and (-webkit-device-pixel-ratio: 2) {
>
/*Here your code*/
>
}
</code>

#How to use 
Put file CSS into head of your website or using into your CSS. Look example a below:

<link rel="stylesheet" href="path/site/media-queries-devices.css">
>
Now you put CSS into of file CSS like this: 
>
<code>
@import url("path/media-queries-devices.css");
</code>

#Mobile Checker
[Mobile Checker](https://validator.w3.org/mobile-alpha/?utm_source=html5weekly&utm_medium=email)

#References

[CSS Tricks](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

[CSS Media Queries](http://cssmediaqueries.com/)

This is an opinion diferent like this: 
 [Why you dont need device specific breakpoints](http://responsivedesign.is/articles/why-you-dont-need-device-specific-breakpoints)

