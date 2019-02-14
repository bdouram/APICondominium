export const errors = {
    required:  "'{PATH}' attribute is required.",
    min: "The value '{VALUE}' is less then min value '{MIN}'.",
    max: "The value '{VALUE}' is greather than the upper limit '{MAX}'."
};

export const emailRegex = /\S+@\S+\.\S+/;

export const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;

export const port=3000;