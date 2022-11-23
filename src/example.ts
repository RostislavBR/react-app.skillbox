//1
function concatString(left: string, right: string): string {
    return left.concat(right);
}

const str1 = concatString( 'Hello ', 'World');

//2
interface IMyHomeTask {
    howIDoIt: string,
    someArray: [string, string, number],
    withData: [
        {
            howIDoIt: string,
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

type MyPartial<T> = {
    [N in keyof T]?: MyPartial<T[N]>
}

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}