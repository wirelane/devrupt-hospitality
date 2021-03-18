// @ts-check

const AuthenticationForm = {
  data() {
    return {
      bookingNumber: '',
      acceptedConditions: false,
      validationMessage: '',
      validationMessageShowHelpAddon: false,
    }
  },
  methods: {
    submitForm(event) {
      this.validationMessage = '';
      this.validationMessageShowHelpAddon = false;

      if (!this.bookingNumber.length) {
        this.validationMessage = 'Please enter your booking number.';
        return;
      }

      if (!this.acceptedConditions) {
        this.validationMessage = 'You need to accept the conditions to continue.';
        return;
      }

      fetch(event.target.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          bookingNumber: this.bookingNumber,
          acceptedConditions: this.acceptedConditions
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);

          if (data.error) {
            this.validationMessage = data.error;
            this.validationMessageShowHelpAddon = true;
            return;
          }
        })
        .catch(error => console.error(error));
    }
  }
};

// @ts-ignore
Vue
  .createApp(AuthenticationForm)
  .mount('#app');
