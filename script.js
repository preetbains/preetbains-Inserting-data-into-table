const app = new Vue({
  el: '#app',
  data: {
    header: ['NAME', 'AGE', 'EMAIL', 'MOVIE', 'ACTION'],
    person: [],
    Name: '',
    Age: '',
    Email: '',
    Movie: '',
    Action: '',
    Pname: 'Lovepreet'
  },
  methods: {
    addnew: function() {
      this.person.push({
        Name: this.Name,
        Age: this.Age,
        Email: this.Email,
        Movie: this.Movie
      });
    }
  },

  // getter function
  computed: {
    Name: {
      get: function() {
        return this.name;
      }
    },
    Age: {
      get: function() {
        return this.age;
      }
    },
    Email: {
      get: function() {
        return this.email;
      }
    },
    Movie: {
      get: function() {
        return this.movie;
      }
    }
  }
});
