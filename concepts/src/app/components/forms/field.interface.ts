export interface Validator {
    name: string;
    validator: any;
    message: string;
}

export interface FieldConfig {
label?: string;
name?: string;
inputType?: string;
options?: string[];
collections?: any;
type: string;
value?: any;
validations?: Validator[];
}

export interface Pet {
    id: number;
    type: string;
    name: string;
    age: string; // NOTE: This is a String because it is an open-ended form value.
    isPastOn: boolean;
}