const app = Vue.createApp({
  //data, functions
  //template: `<h2>I am the template</h2>`,
  data() {
    return {
      url: 'http://www.google.com',
      showBooks: true,
      books: [
        {
          title: 'Lock Every Door',
          author: 'Riley Sager',
          img: 'assets/1.png',
          isFav: true,
        },
        {
          title: 'The Last Time I Lied',
          author: 'Riley Sager',
          img: 'assets/2.png',
          isFav: false,
        },
        {
          title: 'Final Girls',
          author: 'Riley Sager',
          img: 'assets/3.png',
          isFav: true,
        },
      ],
      // x: 0,
      // y: 0,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
    // handleEvent(e, data) {
    //   console.log(e, e.type);
    //   if (data) {
    //     console.log(data);
    //   }
    // },
    // handleMouseMove(e) {
    //   this.x = e.offsetX;
    //   this.y = e.offsetY;
    // },
  },
  // computed: {
  //   filteredBooks() {
  //     return this.books.filter((book) => book.isFav);
  //   },
  // },
});

app.mount('#app');
