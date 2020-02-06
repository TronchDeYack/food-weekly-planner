<script>
export default {
  props: {
    disabled: {
      type: Boolean,
    },
  },
  methods: {
    getIconClass() {
      return this.disabled ? 'icon-disabled' : '';
    },
  },
};
</script>

<style>
.icon-disabled {
  filter: grayscale(100%);
}
</style>
