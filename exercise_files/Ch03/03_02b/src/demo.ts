type ContactName = string;
type ContactStatus = "active" | "inactive" | "new"
type ContactBirthDate = Date | number | string

interface Contact  {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}

type ContactFields = keyof Contact

// function getValue(source: Contact, propertyName: ContactFields) {
//     return source[propertyName]
// }

// function getValue<T>(source: T, propertyName: keyof T) {
//     return source[propertyName]
// }

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName]
}

const value = getValue(primaryContact, "status")
const value2 = getValue({ small: 0, big: 5}, "small")