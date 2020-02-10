<template>
  <v-container>
    <v-stepper v-model="e6" vertical>
      <v-stepper-step :complete="e6 > 1" step="1">
        Title of the recipe
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-text-field label="Title" />
        <div class="mt-2">
          <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </div>
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
        <div class="mt-2">
          <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3">
        What is the level of calories ?
      </v-stepper-step>

      <v-stepper-content :complete="e6 > 4" step="3">
        <v-slider
          :tick-labels="caloriesLabel"
          :max="caloriesLabel.length - 1"
          step="1"
          ticks="always"
          tick-size="3"
        ></v-slider>
        <div class="mt-2">
          <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 4" step="4">
        What are the starchy foods ?
      </v-stepper-step>

      <v-stepper-content step="4">
        <v-chip-group multiple active-class="primary" :column="true">
          <v-chip label>Riz</v-chip>
          <v-chip label>Pâte</v-chip>
        </v-chip-group>
        <div class="mt-2">
          <v-btn color="primary" @click="e6 = 5">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 5" step="5">
        What are the vegetables ?
      </v-stepper-step>

      <v-stepper-content step="5">
        <v-chip-group multiple active-class="primary">
          <v-chip label>Carotte</v-chip>
          <v-chip label>Poireaux</v-chip>
        </v-chip-group>
        <div class="mt-2">
          <v-btn color="primary" @click="e6 = 6">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 6" step="6">
        What are the animal based ingredients ?
      </v-stepper-step>

      <v-stepper-content step="6">
        <v-chip-group multiple active-class="primary" :column="true">
          <v-chip label>Steak haché</v-chip>
          <v-chip label>Jambon</v-chip>
          <v-chip label>Oeuf</v-chip>
        </v-chip-group>
        <div class="mt-2">
          <v-btn color="primary" @click="e6 = 7">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 7" step="7">
        What are the fruits ?
      </v-stepper-step>
      <v-stepper-content step="7">
        <v-chip-group multiple active-class="primary">
          <v-chip label>Pomme</v-chip>
          <v-chip label>Banane</v-chip>
        </v-chip-group>
        <div class="mt-2">
          <v-btn color="primary" @click="e6 = 8">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 8" step="8">
        What are the dairy products ?
      </v-stepper-step>
      <v-stepper-content step="8">
        <v-chip-group multiple active-class="primary">
          <v-chip label>Crème fraiche</v-chip>
          <v-chip label>Lait</v-chip>
        </v-chip-group>
        <div class="mt-2">
          <v-btn color="primary" @click="e6 = 9">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 9" step="9">
        What are the condiments / spices ?
      </v-stepper-step>
      <v-stepper-content step="9">
        <v-chip-group multiple active-class="primary">
          <v-chip label>Ketchup</v-chip>
          <v-chip label>Sel de guérande</v-chip>
        </v-chip-group>
        <div class="mt-2">
          <v-btn color="primary" @click="e6 = 10">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 10" step="10">
        What are the others ingredients ?
      </v-stepper-step>
      <v-stepper-content step="10">
        <v-chip-group multiple active-class="primary">
          <v-chip label filter>Vin blanc</v-chip>
          <v-chip label filter>Levure</v-chip>
        </v-chip-group>
        <div class="mt-2">
          <v-btn color="primary" @click="e6 = 11">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </div>
      </v-stepper-content>
    </v-stepper>
  </v-container>
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
