

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
    ],
    toAdd: ''
  },
  methods: {
    deleteToDo(index){
      console.log('*********indice da eliminare*********', index);
      if(confirm('Sei sicuro di voler eliminare?')){
        this.toDoList.splice(index, 1);
      }
    },

    addToDo(){
      console.log(this.toAdd);
      if(this.toAdd.length > 2){ 
        const toAddToPush = {
          text: this.toAdd,
          done: false
        }
        this.toDoList.push(toAddToPush);
        this.toAdd = '';
      }
    }
  }
})