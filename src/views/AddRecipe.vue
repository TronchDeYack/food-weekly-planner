<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Title of the recipe
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-text-field label="Title" />
      <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">How many minutes to prepare ?</v-stepper-step>

    <v-stepper-content step="2">
      <v-slider
        :tick-labels="minutesLabel"
        :max="minutesLabel.length - 1"
        step="1"
        ticks="always"
        tick-size="3"
      ></v-slider>
      <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">
      What is the level of calories ?
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-slider
        :tick-labels="caloriesLabel"
        :max="caloriesLabel.length - 1"
        step="1"
        ticks="always"
        tick-size="3"
      ></v-slider>
      <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">What are the ingredients ?</v-stepper-step>
    <v-stepper-content step="4">
      TODO
      <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      e6: 1,
      minutesLabel: [
        '5',
        '10',
        '15',
        '30',
        '45',
        '60',
        '+ 60',
      ],
      caloriesLabel: [
        'Low',
        'Medium',
        'High',
      ],
    };
  },
};
</script>
