import axios from "axios";

export function sum(a:number, b:number) {
    return a + b
}

export class Person {
    name: string;
    age: number;
    isMale: boolean;

    constructor(name:string, age:number, isMale:boolean) {
        this.name = name
        this.age = age
        this.isMale = isMale
    }

    static all() {
        return axios.get('./persons.json').then(resp => resp.data)
    }
}

export function cappedSum(a:number, b:number) {
    const sum = a + b
    if (sum > 10) {
        return 10
    }
    else if (sum < 0) {
        return 0
    }
    else {
        return sum
    }
}

export function addToShoppingList(list:string[],newItem:string) {
    var amount:Number|String = newItem.split("-")[0]?.trim()
    var name = newItem.split("-")[1]?.trim()

    // Check if any items equal the new item, if so just set the new amount to it
    for (const i in list) {
        var item_amount = list[i].split("-")[0]?.trim()
        var item_name = list[i].split("-")[1]?.trim()

        if (item_name === name) {
            amount = Number(amount) + Number(item_amount)
            list[i] = `${amount} - ${name}`
            return
        }
    }

    list.push(`${amount} - ${name}`)
}

export async function ping() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("pong")
        },500)
    })
}