type ContactStatus = "active" | "inactive" | "new";

interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
    address: Address;
}

type Awesome = Contact["id"]
type VerCool = Contact["address"]["postalCode"]

interface ContactEvent {
    contactId: Contact["id"];
}

interface ContactDeletedEvent extends ContactEvent { 
}

interface ContactStatusChangedEvent extends ContactEvent { 
    oldStatus: ContactStatus;
    newStatus: ContactStatus;
}

interface ContactEvents {
    deleted: ContactDeletedEvent;
    statusChanged: ContactStatusChangedEvent;
    // ... and so on
}

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];
}

// Method to handle event for contacts
function handleEvent<T extends keyof ContactEvents>( // Define generic type
    eventName: T, // This parameter will accept a string containing the 
                  //name of any of the properties defined in the ContactEvents type
    handler: (event: ContactEvents[T]) => void // This is a function that accepts a single parameter
                                               // that matches the type of the property indicated
                                               // by eventName
) {
    if(eventName === "statusChanged") {
        // handler({ contactId: 1} as ContactDeletedEvent) // Not correct, so typescript yells
        handler({ contactId: 1, oldStatus: "active", newStatus: "inactive"}) // Providing object that matches the
    }                                                                         // correct event interface
}

// TypeScript knows that the type of this event is ContactStatusChangedEvent, even though it wasn't
// specified in this call. This is because using index access on the contact events type let it figure it
// out on its own.
handleEvent("statusChanged", event => event)