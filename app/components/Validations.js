/**
 * Deprecated - file likely not in use.
 * TODO: Check usage and remove if unused
 */
import React, { Component } from 'react';

export const validation = {
    name: {
        presence: {
            message: "Please enter a name"
        }
    },
    email: {
        
        presence: {
            message: "Please enter an email address"
        }
    },
    password: {
        presence: {
            message: "Please enter a name"
        },
        format: {
            pattern: "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/",
            message: " Password must contain at least 1 lower case letter, upper case letter and special character ",

        },
        length: {
            minimum: {
                val: 8,
                message: "Your password must be at least 8 characters"
            }
        }


    }
}

export function validate(nameField, value) {
    let response = [null, null];
    if (validation.hasOwnProperty(nameField)) {
        console.log('validation');
        let v = validation[nameField]
        if (value == '' || value == null) {
            console.log('validation null')
            response[0] = false;
            response[1] = v['presence']['message']
        } else if (v.hasOwnProperty("format") && !v['format']['pattern'].test(value)) {
            response[0] = false;
            response[1] = v['format']['message']
        } else if (v.hasOwnProperty('length')) {
            let l = v['length'];
            if (v.hasOwnProperty('minimum') && value.length < l['minimum']['val']) {
                response[0] = false;
                response[1] = l['minimum']['val']
            }
        } else {
            response[0] = true;
        }
    }
    response[0] = true;
    return response;
}