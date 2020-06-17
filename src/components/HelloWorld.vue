<template>
  <div>
    <div id="container">
      <h1>Menu of Salads</h1>
      <ul>
        <li v-for="(item, index, price) in myJson" :key="index" :id="index">
          {{ index + 1 }}. {{ item }}
          <div class="lisupport">
            <p v-if="index % 3 == 0">{{ (price = +15) }}</p>
            <p v-else-if="item.startsWith('E')">{{ (price = +10) }}</p>
            <p v-else-if="item.startsWith('R')">{{ (price = +10) }}</p>
            <p v-else-if="item.startsWith('G')">{{ (price = +10) }}</p>
            <p v-else>{{ (price = +20) }}</p>
            <input
              type="checkbox"
              :id="index"
              :value="price"
              :checked="false"
              @click="check($event)"
              number
            />
          </div>
        </li>
        <!-- <p>Total: {{  }}</p> -->
      </ul>
      <p class="total">Total: {{ total }}</p>
    </div>
    <footer>Copyright &copy; Rafal Weglinski 2020 RW&reg;</footer>
  </div>
</template>

<script>
import json from "./../../json/salads.json";
export default {
  data() {
    return {
      myJson: json,
      price: 0,
      total: 0
    };
  },
  props: {
    data: Object
  },
  methods: {
    check(e) {
      if (e.target.checked) {
        console.log(e.target.value);
        this.total = parseInt(this.total) + parseInt(e.target.value);
      } else {
        this.total = parseInt(this.total) - parseInt(e.target.value);
      }
      return this.total;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
  width: auto;
}
h1 {
  margin-top: 50px;
  margin-right: 20%;
}
ul {
  list-style-type: none;
  padding: 0px;
  width: 600px;
  margin: auto;
  display: inline-table;
}
li {
  display: flex;
  padding: 2px;
  margin: 5px;
  text-align: left;
  background-color: #eee;
  color: black;
  justify-content: space-between;
  font-size: 18px;
}
p {
  justify-content: end;
  margin: 0;
}
.lisupport {
  display: flex;
}
.total {
  display: inline-table;
  margin: 0 50px 50px 50px;
  position: sticky;
  top: 50%;
  font-size: 34px;
  width: 300px;
}
footer {
  padding: 25px;
  margin-right: 20%;
}
</style>
