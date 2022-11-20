//1
function concatString(method: 'add', left: string, right: string): string {
    switch (method) {
        case 'add':
            return left.concat(right);
    }
}

const str1 = concatString('add', 'Hello ', 'World');

//2
interface IMyHomeTask {
    howIDoIt: string,
    someArray: [string, string, number],
    withData: [
        {
            howIDoIt: string,
        },
        {
            someArray: [string, string, number],
        },
    ],
}

const MyHomeTask: IMyHomeTask = {
    howIDoIt: "I Do It Wel",
    someArray: ["string one", "string two", 42],
    withData: [
        {
            howIDoIt: "I Do It Wel",
        },
        {
            someArray: ["string one", "string two", 42],
        },
    ]
}

//3
interface MyArray<T> {
    [N: number]: T;

    reduce<U>(fn: (previousValue: U, currentValue: T, currentIndex: number, arr: MyArray<T>) => U, initialValue: U): U;
}

const myArray: MyArray<number> = [1, 2, 3];

myArray.reduce((s, c) => s + c, 0);

//4
interface IHomeTask {
    data: string,
    numbericData: number,
    date: Date,
    externalData: {
        basic: number,
        value: string,
    }
}

const myHomeTask: IHomeTask = {
    data: 'aasdas',
    numbericData: 11021999,
    date: new Date('11-02-1999'),
    externalData: {
        basic: 123,
        value: 'lose',
    }
}

type TMyHomeTask = typeof myHomeTask;
type TObjKeys = keyof TMyHomeTask;
type TCommitType = TMyHomeTask['externalData']

//Добавляем Readonly
type TPartial<T> = {
    readonly [N in keyof T]: T[N] extends object ? TPartial<T[N]> : T[N]
}

//Проверяем работает ли Readonly
const typedTPartialObj: TPartial<TMyHomeTask> = myHomeTask;
// typedTPartialObj.externalData.value = "win"; тут будет ошибка и мы удостоверились что Readonly работает

//Создаем тип который уберет Readonly
type TSomeType = TPartial<TMyHomeTask>;
type RemoveReadonly<T> = T extends TPartial<infer E> ? E : T;

//Проверяем можем ли мы изменить значение ключа
const typeTTest: RemoveReadonly<TMyHomeTask> = myHomeTask;
typeTTest.externalData.value = "win";

