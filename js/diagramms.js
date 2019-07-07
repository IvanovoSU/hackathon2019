var coefs_data = JSON.parse('{"Юриспруденция": [-853.3998867782377, 3.8949459069365733, 0.021209370076714303], "Фармация": [-87.04623652468729, 5.802348742400296, -0.00045074167288446446], "Фотоника, приборостроение, оптические и биотехнические системы и технологии": [220.57131876578296, 2.9536620182277176, -0.012298232129131365], "Экономика и управление": [1881.7863437107567, 1.2719308401074647, -0.04880332467379304], "Управление в технических системах": [103.11839275653693, 1.6273095850906705, -0.004397573625442907], "Технологии легкой промышленности": [6842.768188660681, -58.5070245860538, -0.10110386352232321], "Ветеринария и зоотехния": [-28.201044891637423, 1.9407894736842124, 0.006288699690402338], "Математика и механика": [32.99565341408024, 1.3391168956149655, 8.183505026664387e-05], "Электроника, радиотехника и системы связи": [36.759548134764614, 1.2951019728672066, 0.0002676632848006037], "Электро- и теплоэнергетика": [98.45381167931865, 5.780081697187614, -0.014087905660242126], "Машиностроение": [-37.99702260163339, 0.6801293863041051, 0.008230326814816237], "Техносферная безопасность и природообустройство": [6.565754349618146, 7.830035913508784, -0.007741208541619523], "Образование и педагогические науки": [392.77516340710133, 1.4343839065829591, -0.01604098011471281], "Биологические науки": [117.39936223266142, 0.6657674096538588, -0.003151515814968], "Техника и технологии строительства": [126.0746097095552, 2.0868471816272676, -0.007626107728976598], "Техника и технологии наземного транспорта": [34.44074824854303, 1.7417535340895234, -0.0009463182619250422], "Средства массовой информации и информационно-библиотечное дело": [6.959489371334925, 1.8064455842643146, 0.00010881778650434189], "Социология и социальная работа": [84.70943735343565, 1.84253485285053, -0.004566257179235467], "Языкознание и литературоведение": [174.27093251923648, 1.6689841602664242, -0.007187507367443491], "Психологические науки": [30.32469922404534, 1.5212101400051703, -0.0005233496988474689], "История и археология": [271.0229490091359, 4.68587378730189, -0.01962183505888712], "Химические технологии": [418.90199934849454, 1.090029016643359, -0.01379361988463896], "Информатика и вычислительная техника": [83.39560809768473, 2.1903481453918396, -0.0038413688128299504], "Клиническая медицина": [-294.3113281236258, 2.5449831798227787, 0.010697339209966817], "Сельское, лесное и рыбное хозяйство": [150.22985744984442, 1.7678712237838679, -0.007399621991738929], "Сервис и туризм": [19.398876647351642, 1.7878674228544986, -0.0002851113806922505], "Науки о земле": [26.561863867675683, 2.170533681532071, -0.001682402571313835]}');
var salary_data = JSON.parse('{"ivanovo": {"Юриспруденция": 17130, "Экономика и управление": 14534, "Управление в технических системах": 12107, "Технологии легкой промышленности": 10288, "Языкознание и литературоведение": 14983, "Ветеринария и зоотехния": 11797, "Психологические науки": 12296, "История и археология": 28591, "Электро- и теплоэнергетика": 23171, "Машиностроение": 16669, "Техносферная безопасность и природообустройство": 5351, "Образование и педагогические науки": 15478, "Информатика и вычислительная техника": 27399, "Социология и социальная работа": 7863, "Сельское, лесное и рыбное хозяйство": 17993, "Клиническая медицина": 18478, "Биологические науки": 13868, "Сервис и туризм": 16838, "Техника и технологии строительства": 17658, "Средства массовой информации и информационно-библиотечное дело": 16721}, "yaroslavl": {"Юриспруденция": 22257, "Фармация": 20500, "Психологические науки": 17508, "Экономика и управление": 23796, "Управление в технических системах": 29112, "Социология и социальная работа": 22822, "Языкознание и литературоведение": 5776, "Математика и механика": 35828, "Электроника, радиотехника и системы связи": 29044, "Химические технологии": 31388, "Электро- и теплоэнергетика": 35242, "Машиностроение": 30876, "Информатика и вычислительная техника": 22369, "Образование и педагогические науки": 23329, "Физика и астрономия": 33724, "Сервис и туризм": 11066, "Клиническая медицина": 20962, "Науки о земле": 4223, "Техника и технологии строительства": -2143, "Техника и технологии наземного транспорта": 11251, "Средства массовой информации и информационно-библиотечное дело": 15845}, "vladimir": {"Юриспруденция": 21028, "Изобразительное и прикладные виды искусств": 10646, "Фотоника, приборостроение, оптические и биотехнические системы и технологии": 22275, "Экономика и управление": 22557, "Управление в технических системах": 22523, "Социология и социальная работа": 15898, "Компьютерные и информационные науки": 17429, "Математика и механика": 35789, "Электроника, радиотехника и системы связи": 17173, "Электро- и теплоэнергетика": 51413, "Машиностроение": 30782, "Техносферная безопасность и природообустройство": 27927, "Образование и педагогические науки": 15674, "Информатика и вычислительная техника": 20346, "Биологические науки": 24882, "Техника и технологии строительства": 16100, "Техника и технологии наземного транспорта": 24303, "Средства массовой информации и информационно-библиотечное дело": 18025, "Психологические науки": 15224}}');
var trend = JSON.parse('{"ivanovo": {"Юриспруденция": 295, "Экономика и управление": 1509, "Управление в технических системах": 122, "Технологии легкой промышленности": 97, "Языкознание и литературоведение": 45, "Ветеринария и зоотехния": 62, "Психологические науки": 122, "История и археология": 82, "Электро- и теплоэнергетика": 155, "Машиностроение": 112, "Техносферная безопасность и природообустройство": 47, "Образование и педагогические науки": 308, "Информатика и вычислительная техника": 94, "Социология и социальная работа": 0, "Сельское, лесное и рыбное хозяйство": 106, "Клиническая медицина": 138, "Биологические науки": 27, "Сервис и туризм": 51, "Техника и технологии строительства": 206, "Средства массовой информации и информационно-библиотечное дело": 22}, "yaroslavl": {"Юриспруденция": 329, "Фармация": 59, "Психологические науки": 83, "Экономика и управление": 1536, "Управление в технических системах": 106, "Социология и социальная работа": 79, "Языкознание и литературоведение": 33, "Математика и механика": 77, "Электроника, радиотехника и системы связи": 90, "Химические технологии": 251, "Электро- и теплоэнергетика": 77, "Машиностроение": 261, "Информатика и вычислительная техника": 119, "Образование и педагогические науки": 621, "Физика и астрономия": 44, "Сервис и туризм": 116, "Клиническая медицина": 413, "Науки о земле": -32, "Техника и технологии строительства": 48, "Техника и технологии наземного транспорта": 128, "Средства массовой информации и информационно-библиотечное дело": 73}, "vladimir": {"Юриспруденция": 636, "Изобразительное и прикладные виды искусств": 63, "Фотоника, приборостроение, оптические и биотехнические системы и технологии": 64, "Экономика и управление": 823, "Управление в технических системах": 54, "Социология и социальная работа": 49, "Компьютерные и информационные науки": 39, "Математика и механика": 41, "Электроника, радиотехника и системы связи": -22, "Электро- и теплоэнергетика": 201, "Машиностроение": 176, "Техносферная безопасность и природообустройство": 38, "Образование и педагогические науки": 578, "Информатика и вычислительная техника": 104, "Биологические науки": -1, "Техника и технологии строительства": 280, "Техника и технологии наземного транспорта": 122, "Средства массовой информации и информационно-библиотечное дело": 68, "Психологические науки": 110}}');
var student = JSON.parse('{"ivanovo": {"Юриспруденция": 448, "Экономика и управление": 3144, "Управление в технических системах": 256, "Технологии легкой промышленности": 147, "Языкознание и литературоведение": 180, "Ветеринария и зоотехния": 166, "Психологические науки": 229, "История и археология": 115, "Электро- и теплоэнергетика": 562, "Машиностроение": 256, "Техносферная безопасность и природообустройство": 726, "Образование и педагогические науки": 655, "Информатика и вычислительная техника": 177, "Социология и социальная работа": 2, "Сельское, лесное и рыбное хозяйство": 237, "Клиническая медицина": 225, "Биологические науки": 85, "Сервис и туризм": 103, "Техника и технологии строительства": 375, "Средства массовой информации и информационно-библиотечное дело": 92}, "yaroslavl": {"Юриспруденция": 270, "Фармация": 243, "Психологические науки": 155, "Экономика и управление": 2592, "Управление в технических системах": 119, "Социология и социальная работа": 96, "Языкознание и литературоведение": 50, "Математика и механика": 130, "Электроника, радиотехника и системы связи": 162, "Химические технологии": 349, "Электро- и теплоэнергетика": 104, "Машиностроение": 351, "Информатика и вычислительная техника": 147, "Образование и педагогические науки": 915, "Физика и астрономия": 93, "Сервис и туризм": 216, "Клиническая медицина": 983, "Науки о земле": -50, "Техника и технологии строительства": 44, "Техника и технологии наземного транспорта": 144, "Средства массовой информации и информационно-библиотечное дело": 123}, "vladimir": {"Юриспруденция": 2163, "Изобразительное и прикладные виды искусств": 78, "Фотоника, приборостроение, оптические и биотехнические системы и технологии": 136, "Экономика и управление": 1938, "Управление в технических системах": 112, "Социология и социальная работа": 145, "Компьютерные и информационные науки": 82, "Математика и механика": 93, "Электроника, радиотехника и системы связи": -90, "Электро- и теплоэнергетика": 354, "Машиностроение": 340, "Техносферная безопасность и природообустройство": 89, "Образование и педагогические науки": 991, "Информатика и вычислительная техника": 345, "Биологические науки": 42, "Техника и технологии строительства": 591, "Техника и технологии наземного транспорта": 255, "Средства массовой информации и информационно-библиотечное дело": 135, "Психологические науки": 208}}');


var myChart = undefined;
function drawdiag(region, elem){
    var key = elem.textContent;
    var coefs = coefs_data[key];
    var d = trend[region][key];
    var s = salary_data[region][key];
    var p1 = student[region][key];
    var c1 = parseFloat(coefs[0]);
    var c2 = parseFloat(coefs[1]);
    var c3 = parseFloat(coefs[2]);
    var p2 = Math.ceil(c1 + d*c2 + s*c3);
    var chart = document.getElementById('myChart');
    var el = document.getElementById('name');
    el.innerText = key;
    var el = document.getElementById('trend');
    el.innerText = d;
    var el = document.getElementById('salary');
    el.innerText = s;
    var el = document.getElementById('prof_cur');
    el.innerText = Math.ceil(p1/20);
    var el = document.getElementById('prof_rec');
    el.innerText = Math.ceil(p2/20);
    var ctx = chart.getContext('2d');
    if (myChart != undefined) {
        myChart.destroy();
    }
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Текущий набор', 'Рекомендуемый набор'],
            datasets: [{
                label: 'Набор студентов',
                data: [p1, p2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(120, 250, 0, 0.2)'

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(120, 250, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}