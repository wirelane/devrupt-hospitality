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
      chargingSession: null,
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

      this.activeSection = 'loading';

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
            this.activeSection = 'form';
            this.validationMessage = data.error;
            this.validationMessageShowHelpAddon = true;
            return;
          }

          this.activeSection = 'charging';
          this.folioId = data.folioId;
          this.chargeId = data.chargeId;
          this.chargingSession = data.chargingSession;
        })
        .catch(error => console.error(error));
    },
    submitStopForm(event) {
      this.activeSection = 'loading';

      fetch(event.target.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          bookingNumber: this.bookingNumber,
          folioId: this.folioId,
          chargeId: this.chargeId,
          chargingSessionId: this.chargingSession.id,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);

          if (data.error) {
            this.activeSection = 'charging';
            this.validationMessage = data.error;
            this.validationMessageShowHelpAddon = true;
            return;
          }

          this.activeSection = 'receipt';
          this.chargingSession = data.chargingSession;
        })
        .catch(error => console.error(error));
    },
    submitCloseForm(event) {
      this.bookingNumber = '';
      this.acceptedConditions = false;
      this.activeSection = 'form';
      this.folioId = null;
      this.chargeId = null;
      this.chargingSession = null;
    }
  }
};

// @ts-ignore
Vue
  .createApp(HotelCharging)
  .mount('#app');
