let video = new Vue({
  el: '#video',
  data: {
    number: '',
    min: 0,
    max: 6,
    current: {
      src: '',
    },
    videos: [
        'https://www.youtube.com/embed/3TFdE_pSusw',
        'https://www.youtube.com/embed/aZqacomisWQ',
        'https://www.youtube.com/embed/NBlLaMJT8JY',
        'https://www.youtube.com/embed/iFuqkq_Vp0U',
        'https://www.youtube.com/embed/pYpwXRYUt_E',
        'https://www.youtube.com/embed/SwwXGOOXQSE',
        'https://www.youtube.com/embed/Lg4RZk63Ahc'
    ],
    loading: true,
  },

  created() {
    this.number = this.max;
    this.current.src = this.videos[this.max];
    this.loading = false;
  },

  computed: {

  },

  watch: {
/*
    number(value, oldvalue) {
      if (oldvalue === '') {
        this.max = value;
      }
    },
*/
  },

  methods: {
    firstVideo() {
      this.number = this.min;
      this.current.src = this.videos[this.number];
    },
    lastVideo() {
      this.number = this.max;
      this.current.src = this.videos[this.number];
    },
    previousVideo() {
      this.number = this.number - 1;
      if (this.number < this.min)
        this.number = this.min;
      this.current.src = this.videos[this.number];
    },
    nextVideo() {
      this.number = this.number + 1;
      if (this.number > this.max)
        this.number = this.max;
      this.current.src = this.videos[this.number];
    },
  }
});
