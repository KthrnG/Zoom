var f = function () {
    
    function eventHandler(event) {
        var width = parseInt(window.getComputedStyle(this).width);
        var height = parseInt(window.getComputedStyle(this).height);
        var zoom = 40;
        if (event.wheelDelta > 0) {
            this.style.width = Math.min(3000, width + zoom) + "px";
            this.style.height = Math.min(2033, height + zoom) + "px";
        } else {
            this.style.width = Math.max(500, width - zoom) + "px";
            this.style.height = Math.max(338.83, height - zoom) + "px";
        }
        event.preventDefault();
    }
    
    var imageElement = document.getElementsByTagName('img')[0];
    imageElement.addEventListener('mousewheel', eventHandler, false);
};

window.addEventListener('load', f, false);