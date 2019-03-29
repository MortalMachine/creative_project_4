var login = new Vue({
  el: '#login',
  data: {
    showForm: false,
    user: null,
    username: '',
    password: '',
    error: '',
    addedName: '',
    addedMessage: '',
    messages: {},
  },
  created() {
    this.getUser();
    this.getMessages();
  },
  methods: {
    toggleForm() {
      this.error = "";
      this.username = "";
      this.password = "";
      this.showForm = !this.showForm;
    },
    closeForm() {
      this.showForm = false;
    },
    async register() {
      this.error = "";
      try {
        let response = await axios.post("/api/users", {
          username: this.username,
          password: this.password
        });
        this.user = response.data;
        // close the dialog
        this.toggleForm();
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    async login() {
      this.error = "";
      try {
        let response = await axios.post("/api/users/login", {
          username: this.username,
          password: this.password
        });
        this.user = response.data;
        // close the dialog
        this.toggleForm();
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    async logout() {
      try {
        let response = await axios.delete("/api/users");
        this.user = null;

        let title = document.getElementById("pageTitle").innerHTML;

        if (title == "Comics" || title == "Shows")
            window.location.href = "/";
      } catch (error) {
        // don't worry about it
      }
    },
    async getUser() {
      try {
        let response = await axios.get("/api/users");
        this.user = response.data;
      } catch (error) {
        // Not logged in. That's OK!
      }
    },
    async getMessages() {
      try {
        let response = await axios.get("/api/messages");
        this.messages = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async addMessage() {
      try {
        let response = await axios.post("/api/messages", {
          name: this.addedName,
          message: this.addedMessage
        });
        this.addedName = "";
        this.addedMessage = "";
        this.getMessages();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteMessage(message) {
      try {
        let response = await axios.delete("/api/messages/" + message._id);
        this.getMessages();
      } catch (error) {
        this.toggleForm();
      }
    }
  }
});
