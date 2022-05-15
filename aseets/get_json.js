Vue.createApp({
  data() {
    return {
      hero: {},
    };
  },
  methods: {
    getHeroData() {
      axios
        .get(
          "https://raw.githubusercontent.com/Retnoayuwulandari/tekweb2022/master/contents/hero.json"
        )
        .then((res) => {
          console.log(res.data);
          this.hero = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.getHeroData();
  },
}).mount("#app");
