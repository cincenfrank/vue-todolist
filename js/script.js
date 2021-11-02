Vue.config.devtools = true;
window.addEventListener("DOMContentLoaded", () => {
  const vueApp = new Vue({
    el: "#vueApp",
    data: {
      todoList: [
        {
          title: "Empty trash can",
          color: "#ffff00",
          done: false,
          createdAt: 0,
        },
        {
          title: "have a workout",
          color: "#ff0000",
          done: false,
          createdAt: 0,
        },
      ],
      newTaskColor: "#ff0000",
      newTaskText: "",
    },

    methods: {
      onDeleteClicked(indexToRemove) {
        this.todoList.splice(indexToRemove, 1);
      },
      normalizeString(inputString) {
        return inputString.trim().toLowerCase();
      },
      onAddClicked() {
        /**
         * @type {string}
         */
        const newString = this.normalizeString(this.newTaskText);
        /**
         * @type {[{}]}
         */
        const todoArray = this.todoList;
        if (
          newString !== "" &&
          !todoArray.find((el) => this.normalizeString(el.title) === newString)
        ) {
          todoArray.push({
            title: this.newTaskText.trim(),
            color: this.newTaskColor,
            done: false,
            createdAt: Date.now(),
          });
          this.newTaskText = "";
        }
      },
    },
  });
});
