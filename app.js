'use strict';

function Application() {

    var number = document.getElementById('num');
    startBtn.onclick = function () {
        if (num.value < 10) {
            number = 10;
        } else if (num.value > 50) {
            number = 50;
        } else {
            number = num.value;
        }
        num.value = number;

        frame.addEventListener('keydown', startGame);
    }
    stopBtn.onclick = function () {
        frame.removeEventListener('keydown', startGame);
    }

    var left, top;
    var x = 0;

    function startGame(e) {
        var my_obj = document.getElementById('my-object');
        var cur_offset_left, cur_offset_top;

        if (e.shiftKey && e.keyCode === 37) {
            x++;
            my_obj.style.transform = 'rotate(' + (360 * x) + 'deg)';
        }

        else {
            switch (e.keyCode) {
                case 37: //влево
                    cur_offset_left = my_obj.offsetLeft;
                    cur_offset_left = (cur_offset_left -= number) < 0 ? 0 : cur_offset_left;
                    my_obj.style.left = cur_offset_left + "px";
                    break;
                case 38: //вверх
                    cur_offset_top = my_obj.offsetTop;
                    cur_offset_top = (cur_offset_top -= number) < 0 ? 0 : cur_offset_top;
                    my_obj.style.top = cur_offset_top + "px";
                    break;
                case 39: // вправо
                    cur_offset_left = my_obj.offsetLeft;
                    cur_offset_left = (cur_offset_left += +number) > (document.body.offsetWidth - my_obj.offsetWidth) ?
                        (document.body.offsetWidth - my_obj.width) : cur_offset_left;
                    my_obj.style.left = cur_offset_left + "px";
                    break;
                case 40: //вниз
                    cur_offset_top = my_obj.offsetTop;
                    cur_offset_top = (cur_offset_top += +number) > (document.body.offsetHeight - my_obj.offsetHeight) ?
                        (document.body.offsetHeight - my_obj.offsetHeight) : cur_offset_top;
                    my_obj.style.top = cur_offset_top + "px";
                    break;
            }
        }
    }
}