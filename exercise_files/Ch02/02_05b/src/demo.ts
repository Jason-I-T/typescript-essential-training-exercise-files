interface Contact {
    id: number;
    name: string;
    clone(x: number): Contact
}

function clone(source, myFunc?: (x:number) => number) {
    return Object.apply({}, source);
}