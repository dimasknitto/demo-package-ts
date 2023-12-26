interface SumType {
    number1: number,
    number2: number
}
function functionSum({ number1, number2 }: SumType): Promise<number | string> {
    return new Promise((resolve, reject) => {
        if (number1 < 1 && number2 < 1) {
            return reject('Number must be getter than zero')
        }
        resolve(number1 + number2)
    })
}


export default functionSum