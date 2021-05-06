const CourierValidations = {
    consignmentNo: {
        rules: [
            {
                test: /^[0-9]/,
                message: 'Consignment number should cantain only numbers',
            },
        ],
        errors:[],
        valid: false,
        state: ''
    },

    deliveredDate: {
        rules: [
            {
                test: /^(?=.[0-9])(?=.[/-])(?=.{10})/,
                message: 'Delivery date must be Valid',
            },
        ],
        errors:[],
        valid: false,
        state: ''
    },

    initiatedDate: {
        rules: [
            {
                test: /^(?=.[0-9])(?=.[/-])(?=.{10})/,
                message: 'Initiated date must be Valid',
            },
        ],
        errors:[],
        valid: false,
        state: ''
    },

    firstName: {
        rules: [
          {
            test:  /^(?=.[a-z])(?=.[A-Z]){2,}/,
            message: 'First Name must be char only ',
          },
        ],
        errors: [],
        valid: false,
        state: ''
      },

      lastName: {
        rules: [
          {
            test:  /^(?=.[a-z])(?=.[A-Z]){0,}/,
            message: 'Last Name must be char only ',
          },
        ],
        errors: [],
        valid: false,
        state: ''
      },

      mobileNo: {
        rules: [
          {
            test: /^[6-9]{1}[0-9]{9}/,
            message: 'Mobile number should be a 10 digit number with first digit from 6 to 9',
          },
        ],
        errors: [],
        valid: false,
        state: ''
      },

      status: {
        rules: [
          {
            test: /^(?=.[A-Z]){0,}/,
            message: 'Status must be char only ',
          },
        ],
        errors: [],
        valid: false,
        state: ''
      },

      

};
export default CourierValidations;