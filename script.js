

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
    toAdd: 
    {
      text: '',
      done: false
    }
  },
  methods: {
    deleteToDo(index){
      console.log('*********indice da eliminare*********', index);
      if(confirm('Sei sicuro di voler eliminare?')){
        this.toDoList.splice(index, 1);
      }
    },

    addToDo(){
      console.log(this.toAdd.text);
      if(this.toAdd.text.length > 2) this.toDoList.push(this.toAdd);
      this.toAdd = '';
    }
  }
})