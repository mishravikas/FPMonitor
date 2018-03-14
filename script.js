/*
 This is the actual script which is injected to the page from content.js
  */

//This section gets the original getters to get the original values
var navigatorGetter = navigator.__lookupGetter__("platform").bind(navigator);
var originalUserAgentGetter = navigator.__lookupGetter__("userAgent").bind(navigator);
var originalScreenWidthGetter = screen.__lookupGetter__("width").bind(screen);

//This section defines fakeGetter functions
var fakePlatformGetter = function () {
    console.log("Accessing platform");
    return navigatorGetter();
};

var fakeUserAgentGetter = function () {
    console.log("Accessing userAgent");
    return originalUserAgentGetter();
};

var fakeScreenWidthGetter = function () {
    console.log("Accessing screen.width");
    return originalScreenWidthGetter();
};

//This section resets the getters to fakeGetters
Object.defineProperty(navigator, "platform", {
    get: fakePlatformGetter
});

Object.defineProperty(navigator, "userAgent", {
    get: fakeUserAgentGetter
});

Object.defineProperty(screen, "width", {
    get: fakeScreenWidthGetter
});

