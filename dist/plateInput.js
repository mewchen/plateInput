$(function () {
    var imgBackDelete = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAiCAYAAADLTFBPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHZ2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplY2ZiNzQ2MS1mZTY5LTAxNDktOTUxZC1kNDBjYjMwZTg0MmUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NmVhZjE0OTMtN2Y0NS00ZGZiLTk2NGUtNmUwMmZiMmNjOWRhIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IkJDQkVDNjNGQjgzN0EwRTMzMDgzRTI3REJCODAxREQ4IiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IiIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDItMDNUMTk6Mjk6NTArMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTAyLTAzVDIwOjE2OjEzKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTAyLTAzVDIwOjE2OjEzKzA4OjAwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjMzZDJlNTYtMzllZC00MGQwLTg1ZTQtZjAyZjUyODVhZDY0IiBzdEV2dDp3aGVuPSIyMDIwLTAyLTAzVDIwOjE2OjEzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL2pwZWcgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NmVhZjE0OTMtN2Y0NS00ZGZiLTk2NGUtNmUwMmZiMmNjOWRhIiBzdEV2dDp3aGVuPSIyMDIwLTAyLTAzVDIwOjE2OjEzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjMzZDJlNTYtMzllZC00MGQwLTg1ZTQtZjAyZjUyODVhZDY0IiBzdFJlZjpkb2N1bWVudElEPSJC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';

    var htmlKeyboard = '<div id="keyboardBox" tabindex="0"><div class="provinceBox" id="provinceBox"><ul><li>京</li><li>津</li><li>渝</li><li>沪</li><li>冀</li><li>晋</li><li>辽</li><li>吉</li><li>黑</li><li>苏</li></ul><ul><li>浙</li><li>皖</li><li>闽</li><li>赣</li><li>鲁</li><li>豫</li><li>鄂</li><li>湘</li><li>粤</li><li>琼</li></ul><ul><li>川</li><li>贵</li><li>云</li><li>陕</li><li>甘</li><li>青</li><li>蒙</li><li>桂</li><li>宁</li><li>新</li></ul><ul><li class="changeContentBtn other">ABC</li><li>藏</li><li>使</li><li>领</li><li>警</li><li>学</li><li>港</li><li>澳</li><li class="deleteBtn other"><img src="'+imgBackDelete+'" /></li></ul></div><div class="textBox" id="textBox"><ul><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>0</li></ul><ul><li>Q</li><li>W</li><li>E</li><li>R</li><li>T</li><li>Y</li><li>U</li><li>I</li><li>O</li><li>P</li></ul><ul><li>A</li><li>S</li><li>D</li><li>F</li><li>G</li><li>H</li><li>J</li><li>K</li><li>L</li></ul><ul><li class="changeContentBtn other">中文</li><li>Z</li><li>X</li><li>C</li><li>V</li><li>B</li><li>N</li><li>M</li><li class="deleteBtn other"><img src="'+imgBackDelete+'" /></li></ul></div></div>';

    var inputDom;
    //新增键盘
    $('.inputPlate').on('click', function () {
        inputDom = $(this);
        $('body').append(htmlKeyboard);
        $('#keyboardBox').focus();
        if($(inputDom).val().length>0){
            $('#textBox').show();
            $('#provinceBox').hide();
        }
    });

    //切换键盘
    $('body').on('click', '.changeContentBtn',function () {
        if ($(this).html() == 'ABC') {
            $('#textBox').show();
            $('#provinceBox').hide();
        } else {
            $('#textBox').hide();
            $('#provinceBox').show();
        } 
    });
    //省份键盘点击事件
    $('body').on('click', '#provinceBox ul li:not(.other)',function () {
        // if($(inputDom).val()==''){
        //     $(inputDom).val($(this).text());
        // }else{
        //     $(inputDom).val($(this).text() + $(inputDom).val().substr(1));
        // }
        $(inputDom).val($(inputDom).val() + $(this).text())
        $('#textBox').show();
        $('#provinceBox').hide();
    });
    //文本键盘点击事件
    $('body').on('click', '#textBox ul li:not(.other)',function () {
        $(inputDom).val($(inputDom).val() + $(this).text())
    });
    //回退按钮点击事件
    $('body').on('click', '.deleteBtn',function () {
        $(inputDom).val($(inputDom).val().substr(0,$(inputDom).val().length-1));
        if($(inputDom).val().length==0){
            $('#textBox').hide();
            $('#provinceBox').show();
        }
    });
    //判断是否离开键盘
    $('body').on('blur','#keyboardBox', function () {
        $(this).remove();
    });
});