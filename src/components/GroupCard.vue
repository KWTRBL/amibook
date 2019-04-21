<template>
  <div style="background-color: #7777773d; padding: 20px;">
    <a-row :gutter="16" >
      <a-col :span="8">
        <a-card title="Grop1" :bordered=false
        style="font-family: 'Jua', sans-serif;margin-left: 5%;margin-right: 5%;margin-top:2%;"
        >
            <img
              alt="example"
              src="https://pbs.twimg.com/media/DCM0hY6UAAAbWEJ.jpg"
              slot="cover"
              style="height:150px"
            />
             <a-button v-if="join1"  v-on:click="join1 = !join1;add(g1)" style="margin-top: 4%;" type="primary" size="large">Join</a-button>
             <a-button v-else v-on:click="join1 = !join1;remove(g1)" style="margin-top: 4%;" type="danger " size="large">Leave</a-button >
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Grop2" :bordered=false
        style="font-family: 'Jua', sans-serif;margin-left: 5%;margin-right: 5%;margin-top:2%;"
        >
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              slot="cover"
              style="height:150px"
            />
             <a-button v-if="join2"  v-on:click="join2 = !join2" style="margin-top: 4%;" type="primary" size="large">Join</a-button>
             <a-button v-else v-on:click="join2 = !join2" style="margin-top: 4%;" type="danger " size="large">Leave</a-button >
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Grop3" :bordered=false
        style="font-family: 'Jua', sans-serif;margin-left: 5%;margin-right: 5%;margin-top:2%;"
        >
            <img
              alt="example"
              src="https://pbs.twimg.com/media/DkVazE9V4AAw1FI.jpg"
              slot="cover"
              style="height:150px"
            />
             <a-button v-if="join3"  v-on:click="join3 = !join3" style="margin-top: 4%;" type="primary" size="large">Join</a-button>
             <a-button v-else v-on:click="join3 = !join3" style="margin-top: 4%;" type="danger " size="large">Leave</a-button >
        </a-card>  
      </a-col>
    </a-row>
    <br>
    <a-row :gutter="16"  >
      <a-col :span="8">
        <a-card title="Grop4" :bordered=false
        style="font-family: 'Jua', sans-serif;margin-left: 5%;margin-right: 5%;margin-top:2%;"
        >
            <img
              alt="example"
              src="https://pbs.twimg.com/media/DdFgex5VwAAsQi3.jpg"
              slot="cover"
              style="height:150px"
            />
             <a-button v-if="join4"  v-on:click="join4 = !join4;" style="margin-top: 4%;" type="primary" size="large">Join</a-button>
             <a-button v-else v-on:click="join4 = !join4" style="margin-top: 4%;" type="danger " size="large">Leave</a-button >
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Grop5" :bordered=false
        style="font-family: 'Jua', sans-serif;margin-left: 5%;margin-right: 5%;margin-top:2%;"
        >
            <img
              alt="example"
              src="https://pbs.twimg.com/media/DCM0hY6UAAAbWEJ.jpg"
              slot="cover"
              style="height:150px"
            />
             <a-button v-if="join5"  v-on:click="join5 = !join5" style="margin-top: 4%;" type="primary" size="large">Join</a-button>
             <a-button v-else v-on:click="join5 = !join5" style="margin-top: 4%;" type="danger " size="large">Leave</a-button >
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { join } from 'path';
export default {
  data(){
    return{
      join1: "false",
      join2: "false",
      join3: "false",
      join4: "false",
      join5: "false",
      g1:"g1",
      g2:"g2",
      g3:"g3",
      g4:"g4",
      g5:"g5"
    }
  },
  methods:{
    add(val){
      console.log(val)
    },
    remove(val){
      console.log(val)
    },
  }

}
</script>

