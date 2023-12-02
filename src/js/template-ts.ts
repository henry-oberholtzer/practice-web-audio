const clonedeep = require('lodash.clonedeep');

interface typeObject {
    param: string;
}

const originalObject: typeObject = {
    param: "All  OK!"
}

const objectCopy = clonedeep(originalObject);

export default function template(objectCopy: typeObject) {
    return objectCopy.param;
}