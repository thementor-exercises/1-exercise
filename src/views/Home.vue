<template>
  <div>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  components: {
    HelloWorld
  }
  // data() {
  //   return {
  //     myJson: json
  //   };
  // }
  // mounted() {
  //   this.getData();
  // },
  // methods: {
  //   getData() {
  //     // vue-resource example
  //     // const jsonlink = JSON.stringify("/salads.json");
  //     // const link = JSON.parse(jsonlink);
  //     debugger;
  //     this.axios
  //       .get("/salads.json")
  //       .then(response => {
  //         console.log(response.data);
  //         this.data = JSON.parse(response.data);
  //       })
  //       .catch(e => {
  //         console.log("Error", e);
  //       });
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
