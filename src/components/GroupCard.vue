<template>
  <div style="background-color: #ececec;">
    <a-row :gutter="20">
      <a-col :span="8">
        <a-card
          hoverable
          style="width: 240px"
        >
          <img
            alt="example"
            src="https://pbs.twimg.com/media/DkVazksU0AYVovj.jpg"
            slot="cover"
          />
          <a-card-meta
            title="Group1">
            <template slot="description">Detail</template>
          </a-card-meta>
          <a-button style="margin-top: 4%;" type="primary">Join</a-button>
          <a-button style="margin-top: 4%; margin-left: 4%" type="danger "  >Leave</a-button >
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card
          hoverable
          style="width: 240px"
        >
          <img
            alt="example"
            src="https://pbs.twimg.com/media/Dxj30pPUcAATu2t.jpg"
            slot="cover"
          />
          <a-card-meta
            title="Group2">
            <template slot="description">Detail</template>
          </a-card-meta>
          <a-button v-on:click="changeBT" style="margin-top: 4%;" type="primary">Join</a-button>
          <a-button style="margin-top: 4%; margin-left: 4%" type="danger "  >Leave</a-button >
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card
          hoverable
          style="width: 240px"
        >
          <img
            alt="example"
            src="https://pbs.twimg.com/media/DkVazE9V4AAw1FI.jpg"
            slot="cover"
          />
          <a-card-meta
            title="Group3">
            <template slot="description">Detail</template>
          </a-card-meta>
          <a-button style="margin-top: 4%;" type="primary">Join</a-button>
          <a-button style="margin-top: 4%; margin-left: 4%" type="danger "  >Leave</a-button >
        </a-card>   
      </a-col>
    </a-row>
    <br>
    <a-row :gutter="20">
      <a-col :span="8">
        <a-card
          hoverable
          style="width: 240px"
        >
          <img
            alt="example"
            src="https://pbs.twimg.com/media/DdFgex5VwAAsQi3.jpg"
            slot="cover"
          />
          <a-card-meta
            title="Group4">
            <template slot="description">Detail</template>
          </a-card-meta>
          <a-button style="margin-top: 4%;" type="primary" >Join</a-button >
          <a-button style="margin-top: 4%; margin-left: 4%" type="danger "  >Leave</a-button >
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card
          hoverable
          style="width: 240px"
        >
          <img
            alt="example"
            src="https://pbs.twimg.com/media/DCM0hY6UAAAbWEJ.jpg"
            slot="cover"
          />
          <a-card-meta
            title="Group5">
            <template slot="description">Detail</template>
          </a-card-meta>
          <a-button style="margin-top: 4%;" type="primary">Join</a-button>
          <a-button style="margin-top: 4%; margin-left: 4%" type="danger " >Leave</a-button >
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
}
</script>
