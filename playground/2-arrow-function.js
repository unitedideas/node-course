// const square = function (n) {
//     return n * n
// }

// const square2 = (n) => {
//     return n * n
// }

// const square3 = (n) => n * n

// console.log(square(2))
// console.log(square2(2))
// console.log(square3(2))

const event = {
    name: 'Party',
    printGuestList() {
        console.log(`Guest list for ${this.name}`)
        this.guestList.forEach((guest) => {
            console.log(`${guest} is attending ${this.name}`)
        })
    },
    guestList: ['Shane', 'Jen', 'Mike']
}
event.printGuestList()