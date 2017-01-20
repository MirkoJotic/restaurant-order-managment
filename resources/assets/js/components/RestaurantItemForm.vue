<template>
  <div class="">
    <form id="menu-item-form" method="POST">
      <div class="form-group">
        <label class="form-label">Menu item name: </label>
        <input type="text" name="name" class="form-control" v-model="form.name"/>
      </div>
      <div class="form-group">
        <label class="form-label">Menu item description: </label>
        <input type="text" name="description" class="form-control" v-model="form.description"/>
      </div>
      <div class="form-group">
        <label class="form-label">Menu item amount: </label>
        <input type="text" name="amount" class="form-control" v-model="form.amount"/>
      </div>
      <button class="btn btn-default" type="button"
              @click="$router.push({ name: 'restaurant.items' })"
      >
      Cancel</button>
      <button class="btn btn-success" type="button"
              @click.once="submitForm()"
      >
      Save
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    mounted() {
      if ( this.$route.name.indexOf('edit') !== -1 )
        this.getItemDataToEdit()
    },
    data: function() {
      return {
        form: {
          id: null,
          name: '',
          description: '',
          amount: 0.00
        }
      }
    },
    methods: {
      submitForm() {
        var formData = this.form
        this.$store.dispatch('submitMenuItemForm', formData)
        this.$router.push({ name: 'restaurant.items' })
      },
      getItemDataToEdit() {
        var params = this.$route.params
        var data = this.$store.getters.getMenuItems.find( item => {
          return item.id === params.id
        })
        if ( data ) this.setItemDataToEdit(data)
        else {
          this.$http.post('/items/view', { iid: params.id }).then(
            (response) => { this.setItemDataToEdit(response.body) },
            (response) => { console.log(response) }
          ).catch()
        }
      },
      setItemDataToEdit(data) {
        this.form.id = data.id
        this.form.name = data.name
        this.form.description = data.description
        this.form.amount = data.amount
      }
    }
  }
</script>