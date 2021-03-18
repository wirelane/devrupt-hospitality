// @ts-check

const HotelCharging = {
  data() {
    return {
      activeSection: 'form',
      bookingNumber: '',
      acceptedConditions: false,
      validationMessage: '',
      validationMessageShowHelpAddon: false,
      folioId: null,
      chargeId: null,
      chargingSessionId: null,
    }
  },
  methods: {
    submitStartForm(event) {
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
          acceptedConditions: this.acceptedConditions,
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

          this.activeSection = 'charging';
          this.folioId = data.folioId;
          this.chargeId = data.chargeId;
          this.chargingSessionId = data.chargingSessionId;
        })
        .catch(error => console.error(error));
    },
    submitStopForm(event) {
      fetch(event.target.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          bookingNumber: this.bookingNumber,
          folioId: this.folioId,
          chargeId: this.chargeId,
          chargingSessionId: this.chargingSessionId,
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

          this.bookingNumber = '';
          this.acceptedConditions = false;
          this.activeSection = 'form';
          this.folioId = null;
          this.chargeId = null;
          this.chargingSessionId = null;
        })
        .catch(error => console.error(error));
    }
  }
};

// @ts-ignore
Vue
  .createApp(HotelCharging)
  .mount('#app');
