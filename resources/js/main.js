import restaurants from '../js/restaurants.js';
import new_restaurants from '../js/new_restaurants.js';

new Vue({
  el: '#app',
  components: {


  },
  data () {
    return {

      activeColumn: "restaurantsColumn",
      restaurants: restaurants,
      new_restaurants: new_restaurants,


    }
  },
  computed: {

  },
  methods: {
    setColumn(column) {
      document.getElementById(column).style.display = "block";
      if (column == "restaurantsColumn") {
        document.getElementById("tryColumn").style.display = "none";

      }
      if (column == "tryColumn") {
        document.getElementById("restaurantsColumn").style.display = "none";
        document.getElementById("otherColumn").style.display = "none";
        document.getElementById("placesColumn").style.display = "none";
      }
      this.activeColumn = column;
      document.getElementById('page-index').scrollTo(0,0);
    },

  },
  mounted () {
  },
  created() {
    this.setColumn('tryColumn')
//    this.activateWorldEvents()
  }
})



