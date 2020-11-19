// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою


function Dinner (eat, taskWhenReady) {
    console.log('Добрий ранок');
    console.log('Давай вставти...');

    setTimeout(() => {
        console.log('_______________Перша_дія_______________');
        console.log('Треба щось поснідати');
        if (eat === true) {
            taskWhenReady(null, 'Cмачні Варенички');
            return;
        }
            taskWhenReady('Треба йти в магаз по вареники' ,null);
            console.log('_______________________________________');

    },4000)
}

function Shower (watter,taskWhenReady) {
    setTimeout(() => {
        console.log('_______________Друга_дія_______________');
        console.log('Треба йти в душ');
        if (watter === true) {
            taskWhenReady(null, 'Після душу дуже добре');
            return;
        }
        taskWhenReady('Бляха, знову воду відключидли',null);
        console.log('_______________________________________');

    }, 1000);
}

function Stady (voltage, taskWhenReady) {
    setTimeout(() => {
        console.log('_______________Третя_дія_______________');
        console.log('Треба починати вчитись');
        if (voltage === true) {
            taskWhenReady(null,'Окей, що там в нас на дз було...');
            return;
        }
            taskWhenReady('Світла нема ЛьвівОблЕнерго задрали' ,null);
        console.log('_______________________________________');
    }, 2000);
};

Dinner(true ,(err, dinner)  => {
    if (err) {
        console.log(`Нема що їсти ${err}`);
        return;
    }

    console.log(`URA! ${dinner}`);
    console.log('_______________________________________');

    Shower(true ,(err, wet) => {
        if (err) {
            console.log(`Чому нема води? ${err}`);
            return;
        }
        console.log(`Обожнюю душ ${wet}`);
        console.log('_______________________________________');

        Stady (true, (err, study) =>{
           if (err) {
               console.log(`Треба чекати. ${err}`);
               return;
           }
            console.log(`Включаємо ноут... ${study}`);
            console.log('_______________________________________');
        });
    });
});


