window.onload = function() {
    var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight;

    var centerY = height * .5,
        centerX = width * .5,
        baseRadius = 400,
        baseAlpha = 0.5,
        offset = 0.5,
        offsetY = height * .5,
        offsetRad = 300,
        speed = 0.05,
        angle = 0;

    render();

    // Moving on Y grid
    /*
    function render() {
        var y = centerY + Math.sin(angle) * offset;

        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(centerX, y, 50, 0, Math.PI * 2, false)
        context.fill();

        angle += speed;

        requestAnimationFrame(render);
    }
    */

    // Growing and lowering radius
    /*
    function render() {
        var radius = baseRadius + Math.sin(angle) * offset;

        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, Math.PI * 2, false)
        context.fill();

        angle += speed;

        requestAnimationFrame(render);
    }
    */

    // Glowing RGBA
    /*
    function render() {
        var alpha = baseAlpha + Math.sin(angle) * offset;

        context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(centerX, centerY, 100, 0, Math.PI * 2, false)
        context.fill();

        angle += speed;

        requestAnimationFrame(render);
    }
    */

    // Together
    function render() {
        var alpha = baseAlpha + Math.sin(angle) * offset,
            y = centerY + Math.sin(angle) * offsetY,
            radius = baseRadius + Math.sin(angle) * offsetRad;

        context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(centerX, y, radius, 0, Math.PI * 2, true)
        context.fill();

        angle += speed;

        requestAnimationFrame(render);
    }

};
