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


    }, 3000);
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

    }, 3500);
}

function Video (num, taskWhenReady) {
    setTimeout( () => {
        console.log('_______________Четверта_дія____________');
        console.log(`Скільки разів дивився лекці? ${num} ???`);
            if (num < 3) {
                taskWhenReady('треба передивлятись ще раз', null);
                return;
            }
                taskWhenReady(null,'йдемо далі');

    },4200);
}

function Game (hours, taskWhenReady) {
    setTimeout( () => {
        console.log('_______________П*ята_дія_______________')
        console.log(`Може трохи пограємо в ігри, всього ${hours} годин`);
        if (hours > 5) {
            taskWhenReady('вже не до навчання',null);
            return;
        }
            taskWhenReady(null,'продовжити вчитись');
     }, 3500);

}


function Teeth (toothpaste, taskWhenReady) {
    setTimeout( () => {
        console.log('_______________Шоста_дія_______________');
        console.log('Треба йти чистити зубки');
        if (toothpaste === true) {
            taskWhenReady(null,'Чудово, зуби чисті');
            return;
        }
            taskWhenReady('Бляха, був сьогдні в магазині');
    }, 2200);
}

function Beer (bottle, taskWhenReady) {
    setTimeout( () => {
        console.log('_______________Cьома_дія______________');
        console.log('Хмммм, може по півку?');
        if (bottle > 1) {
            taskWhenReady(null,'Вмовив, давай бахнем');
            return;
        }
            taskWhenReady('Блін, нема в холодильнику ні грама пива', null);

    }, 2100);
}

Dinner(true ,(err, dinner)  => {
    if (err) {
        console.log(`Нема що їсти ${err}`);
        console.log('_______________________________________');
        return;
    }

    console.log(`URA! ${dinner}`);
    console.log('_______________________________________');

    Shower(true ,(err, wet) => {
        if (err) {
            console.log(`Чому нема води? ${err}`);
            console.log('_______________________________________');
            return;
        }
        console.log(`Обожнюю душ ${wet}`);
        console.log('_______________________________________');

        Stady (true, (err, study) =>{
           if (err) {
               console.log(`Треба чекати. ${err}`);
               console.log('_______________________________________');
               return;
           }
            console.log(`Включаємо ноут... ${study}`);
            console.log('_______________________________________');

            Video (5, (err, video) => {
                if (err) {
                    console.log(`Нічорта не зрозуміло ${err}`);
                    console.log('_______________________________________');
                    return;
                }
                console.log(`От тепер все понятна, ${video}`);
                console.log('_______________________________________');

                Game(2,(err,nice) => {
                    if (err) {
                        console.log(`Яка цікава гра ${err}`);
                        console.log('_______________________________________');
                        return;
                    }
                    console.log(`Так, пора зупинятись і ${nice}`);
                    console.log('_______________________________________');

                    Teeth (true, (err,clean) => {
                            if(err) {
                                console.log(`${err}, чого не купив пасту`);
                                console.log('_______________________________________');
                                return ;
                            }
                        console.log(`${clean}, можна лягати спати`);
                        console.log('_______________________________________');

                        Beer(0, (err, Beer) => {
                            if (err) {
                                console.log(`${err}, був в магазі сьогодні, чо не купив? Добраніч`);
                                console.log('_______________________________________');
                                return;
                            }
                            console.log(`${Beer}, але треба завтра хочаб до лекції роздуплитись`);
                            console.log('_______________________________________');
                        })
                    });
                })
            })
        });
    });
});


