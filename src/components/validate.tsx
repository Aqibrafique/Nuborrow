import React from 'react'

function validate(values: {Name: string;Phone?: string;Email?: string;Address?: string;}) {
        const errors = {
          Name: "",
          Phone: "",
          Email: "",
          Address: "",
        };
        const name_validation = new RegExp(/^[a-zA-Z\s._-]{3,30}$/);
        const phone_validation = new RegExp(
          /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
        );
        const email_validation = new RegExp(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        );
        if (!values.Name) {
          errors.Name = "Name is Required!";
          
        } else if (!name_validation.test(values.Name)) {
          errors.Name = "Name is Not Valid";
        }
        if (!values.Phone) {
          errors.Phone = "Phone No is Required!";
        } else if (!phone_validation.test(values.Phone)) {
          errors.Phone = "Phone No Not Valid";
        }
        if (!values.Email) {
          errors.Email = "Email is Required!";
        } else if (!email_validation.test(values.Email)) {
          errors.Email = "Email Not Valid";
        }
        if (!values.Address) {
          errors.Address = "Address is Required!";
        }
        return errors;
      }


export default validate