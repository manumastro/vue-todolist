

const app = new Vue({
  el: '#app',

  data: {
    toDoList: 
    [

      {
        text: 'porta a spasso il cane',
        done: false,
      },
      {
        text: 'vai a fare la spesa',
        done: true,
      },
      {
        text: 'vai al meccanico',
        done: false,
      }
    ]
  },
  methods: {
    deleteToDo(index){
      console.log('*********indice da eliminare*********', index);
      this.toDoList.splice(index, 1);
    }
  }
})