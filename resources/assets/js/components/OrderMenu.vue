<template>
  <div>
    <isotope :list="items" id="root_isotope" class="isoDefault" :options='option' >
      <div v-for="element in items" @click="selected=element">
        <span class="menu-item-name">{{element.name}}</span>
        <span @click="addToCart(element.id)" class="add-to-cart">
          <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
        </span>
      </div>
    </isotope>
  </div>
</template>

<script>
  export default {
    mounted() {
    },
    props: ['items'],
    data: function() {
      return {
        option: {
          getSortData: {
            id: "id"
          },
          sortBy : "id"
        }
      }
    },
    methods: {
      addToCart: function(id) {
        this.$store.dispatch('addToCart', id)
      }
    }
  }
</script>

<style>
.item {
  background-color: #eee;
  padding: 10px;
  width: 200px;
  height: 200px;
  margin: 10px;
  box-sizing: border-box;
  font-family: monospace;
  color: #333;
  background-image: url("/images/sample.jpg");
  border-radius: 3px;
}

* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

/* ---- isotope ---- */

.grid {
  border: 1px solid #333;
}


/* clear fix */

.grid:after {
  content: '';
  display: block;
  clear: both;
}

.isoDefault {
  min-height: 210px;
}


/* ---- .element-item ---- */

.element-item {
  position: relative;
  float: left;
  width: 100px;
  height: 100px;
  margin: 5px;
  padding: 10px;
  background: #888;
  color: #262524;
}

.element-item > * {
  margin: 0;
  padding: 0;
}

.element-item .name {
  position: absolute;
  left: 10px;
  top: 60px;
  text-transform: none;
  letter-spacing: 0;
  font-size: 12px;
  font-weight: normal;
}

.element-item .symbol {
  position: absolute;
  left: 10px;
  top: 0px;
  font-size: 42px;
  font-weight: bold;
  color: white;
}

.element-item .number {
  position: absolute;
  right: 8px;
  top: 5px;
}

.element-item .weight {
  position: absolute;
  left: 10px;
  top: 76px;
  font-size: 12px;
}

.element-item.transition {
  background: #0F8;
  background: hsl( 144, 100%, 50%);
}

.element-item.post-transition {
  background: #0FF;
  background: hsl( 180, 100%, 50%);
}

.add-to-cart {
  cursor: pointer;
}

.menu-item-name {
  background-color: black;
  color: white;
  opacity: 0.5;
}
</style>
