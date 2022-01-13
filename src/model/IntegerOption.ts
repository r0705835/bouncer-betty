export class IntegerOptions {
    name: string;
    description: string;
    required: boolean;

    constructor(name: string, description: string, required: boolean) {
        this.name = name;
        this.description = description;
        this.required = required;
    }
}
