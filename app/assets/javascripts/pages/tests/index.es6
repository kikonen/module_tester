export function init() {
  new Vue({
    el: '#vue_hello',
    data: {
      hello: 'init',
    },
    computed: {
      calculated_value: function() {
        return _.upperCase(this.hello);
      }
    }
  });
}
