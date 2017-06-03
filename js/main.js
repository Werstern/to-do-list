var list = document.querySelector('ul'),
    listPoint = document.getElementsByTagName('li');

for (var i = 0; i < listPoint.length; i++) {
    var span = document.createElement('span');
    var txt = document.createTextNode('\u00d7');
    span.className = 'close';
    span.appendChild(txt);
    listPoint[i].appendChild(span);
}

var close = document.getElementsByClassName('close');
for (var i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function () {
        var div = this.parentElement;
        div.remove();
    })
}

list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


var btn = document.getElementById('btn-success');

btn.addEventListener('click', function () {
    var li = document.createElement("li");
    var value = document.getElementById("input-text").value;
    var t = document.createTextNode(value);
    li.appendChild(t);
    if (value === '') {
        alert("Empty field. Please write something!");
    } else {
        document.getElementById("list-of-things-need-todo").appendChild(li);
    }
    document.getElementById("input-text").value = "";

    var span = document.createElement('span');
    var txt = document.createTextNode('\u00d7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function () {
            var div = this.parentElement;
            div.remove(div);
        })
    }
})
