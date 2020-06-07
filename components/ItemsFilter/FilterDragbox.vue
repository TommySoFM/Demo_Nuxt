<template>
  <div class="dragbox">
      <div class="genre-box receiver-box" @dragover.prevent @drop="onDrop">
        <div  v-for="(option, index) in receiver" :key="index"
              @click="cancelSelect(option,index)" class="pill receiver-box__pill">
          {{ option }}
        </div>
        <div class="pill notification addHere" v-if="isOnDrag"> Add Here </div>
        <div class="pill notification empty" v-if="receiver.length === 0 && !isOnDrag"> None Selected </div>
      </div>

      <div class="source-text"> Options: </div>
      <div class="genre-box source-box">
        <div v-for="(option, index) in source" :key="index" :id="'source_' + index"
             draggable="true" @dragover.stop @dragstart="dragStart" @dragend="dragEnd" class="pill source-box__pill">
          {{ option }}
        </div>
        <div class="pill notification empty" v-if="source.length === 0"> All Selected </div>
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        source: this.genreData.data,
        receiver: [],
        replication: new Set(),
        isOnDrag: false
      }
    },
    props: [
      'genreData',
      'isExpanded'
    ],
    watch: {
      receiver() {
        const emitObject = new Object({genre: this.genreData.genre, data: this.receiver})
        // Bubbling event to all parents
        let component = this;
        do {
          component.$emit('receiverUpdate', emitObject);
          component = component.$parent;
        } while (component);
      }
    },
    methods: {
      dragStart(event)  {
        this.isOnDrag = true
        const item = event.target.innerText
        const index = event.target.id
        event.dataTransfer.setData('draggedItem', item)
        event.dataTransfer.setData('draggedId', index)
        event.target.style.opacity = '0.5'
      },
      dragEnd(event) {
        this.isOnDrag = false
        event.target.style.opacity = '1'
      },
      onDrop (event) {
        const item =  event.dataTransfer.getData('draggedItem')
        const index = parseInt( event.dataTransfer.getData('draggedId').substring(7) )
        if (!this.replication.has(item)) {
          this.receiver.push(item)
          this.replication.add(item)
          this.source.splice(index, 1)
        }
      },
      cancelSelect (item, index) {
        this.source.push(item)
        this.receiver.splice(index, 1)
        this.replication.delete(item)
      }
    }
  }
</script>
<style scoped lang="scss">
  .dragbox {
    width: 95%;
    padding-left: 3%;
    display: flex;
    flex-direction: column;

      .genre-box {
        position: relative;
        min-height: 10vh;
        max-height: 25vh;
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
      }
      .source-box {
        border-top: rgba(127, 130, 139, 0.3) 3px solid;
        border-bottom: rgba(127, 130, 139, 0.3) 3px solid;
        margin-top: 1rem;
        padding: 1rem 0 ;

        &__pill {
          cursor: grab;
          color: white;
          background-color: lightslategrey;
          border: lightslategrey 2px solid;
        }
      }
      .receiver-box {
        margin-bottom: 3rem;
        border: #7F828B 3px solid;
        border-radius: 15px;
        background-color: white;
        &__pill {
          cursor: pointer;
          color: white;
          background-color: #44957a;
          border: #44957a 2px solid;
        }
      }
  }
  .pill {
    width: fit-content;
    height: fit-content;
    font-weight: 500;
    border-radius: 10px;
    padding: 2px 10px;
    margin: 3px 5px;
  }
  .notification {
    text-align: center;
    width: 100%;
    height: auto;
  }
  .addHere {
    color: white;
    font-size: 130%;
    font-weight: 700;
    padding-top: 1rem;
    background-color: rgba(90, 151, 130, 0.7);
    border: #44957a 3px dashed;
  }
  .empty {
    color: white;
    font-size: 130%;
    font-weight: 700;
    padding-top: 1rem;
    background-color: rgba(126, 138, 151, 0.5);
    border: lightslategrey 3px dashed;
  }

  .source-text {
    align-self: flex-start;
    margin-left: .5rem;
    color: #44957a;
    font-size: 130%;
    font-weight: 800;
  }
</style>
