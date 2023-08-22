const snakecaseKeys = require('snakecase-keys');

export class Person {
    private ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getSSN(): string {
        return this.ssn;
    }

    setSSN(value: string) {
        this.ssn = value;
    }

    getFirstName(): string {
        return this.firstName;
    }

    setFirstName(value: string) {
        this.firstName = value;
    }

    getLastName(): string {
        return this.lastName;
    }

    setLastName(value: string) {
        this.lastName = value;
    }

    toJSON() {
        return snakecaseKeys(this, { deep: true });
    }
}
