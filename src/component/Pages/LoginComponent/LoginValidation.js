const LoginValidations = {
    UserName: {
      rules: [
        {
          test: /^(?=.*[a-z])(?=.*[A-Z]){3,}/,
          message: 'Username should not contain special characters & size should be greater than 3',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
      password: {
        rules: [
          {
            test: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            message:'Your password size should be of min 8 ,for example:Xyz@!198',
          },
        ],
        errors: [],
        valid: false,
        state: ''
      },
  
  };
  export default LoginValidations;