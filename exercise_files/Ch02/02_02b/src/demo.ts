interface Contact extends Address {
    id: number;
    name: string;
    birthDate?: Date;
}

interface Address {
    line1: string;
    line2?: string;
    province: string;
    region: string;
    postalCode: string;
}

var primaryContat: Contact = {
    id: 0,
    name: "yep",
    line1: "1234 Fake St.",
    province: "Los Angeles",
    region: "CA",
    postalCode: "12345"
};