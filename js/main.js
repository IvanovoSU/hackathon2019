var dvs = new Array;
dvs[1] = 'Пример';
dvs[2] = 'Диаграммы';

var dvnum = 2;

function urlencode (str) {
    str = (str+'').toString();
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
                                                                    replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}

function fmax(a){
    var maxEl = parseInt(a[0]);
    for(var el in a) {
        if(parseInt(a[el]) >= maxEl) maxEl = parseInt(a[el]);
    }
    return maxEl;
}

function g_set() {
    var width, height, type, color, title, src, s1, s2, dname, dvalue;
    width = document.getElementById('width').value;
    height = document.getElementById('height').value;
    type = document.getElementById('type').value;
    color = document.getElementById('color').value;
    title = document.getElementById('title').value;
    src = 'http://chart.apis.google.com/chart?cht='+type+'&chbh=a&chtt='+urlencode(title)+'&chco='+color+'&chs='+width+'x'+height+'';
    s1 = '&chd=t:';
    s2 = '&chl=';
    var mv = new Array;
    var max = 100;
    for(var el in dvs) {
        dname = document.getElementById('dname'+el).value;
        dvalue = document.getElementById('dvalue'+el).value
        if(dname == '' | dvalue == '') {
            alert('Все поля должны быть заполнены!');
            return false;
        }
        if(s1 != '&chd=t:') s1 += ','+urlencode(dvalue);
        else s1 += urlencode(dvalue);
        if(s2 != '&chl=') s2 += '|'+urlencode(dname);
        else s2 += urlencode(dname);
        mv.push(dvalue);
    }
    document.image.src = src+s1+s2+'&chds=0,'+fmax(mv);
    document.getElementById('link').value = document.image.src;
}
function createdv() {
    dvnum++;
    document.getElementById('cv'+(dvnum-1)).innerHTML = '<div id="dv'+dvnum+'"> <input class="str" id="dname'+dvnum+'" type="text" name="dname['+dvnum+']" /> <span style="color:black;"> = </span><input class="num" id="dvalue'+dvnum+'" type="text" name="dvalue['+dvnum+']" /> <span onclick="deletedv('+dvnum+');" title="Удалить"> <span style="color:black;"> - </span> </span></div><div id="cv'+dvnum+'"></div>';
    dvs[dvnum] = dvnum;
    document.getElementById('dname'+dvnum).focus();
}

function deletedv(dvid) {
    document.getElementById('dv'+dvid).innerHTML = '';
    dvnum--;
    delete(dvs[dvid]);
}
