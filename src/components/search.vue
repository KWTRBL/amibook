<template>
  <div style='margin-left:20%'>
    
    <a-row :gutter="8" style="text-align: left;">
      <a-col :span="16">
            <a-input-search
                placeholder="input search text"
                @search="onSearch"
                enterButton
                size="large"
                v-model="code"
            />
        </a-col>
      <a-col :span="8"  >
          <a-upload name="file" :multiple="true" action="http://localhost:3000/barcode" :headers="headers" @change="handleChange">
            <a-button type="primary" shape="circle" icon="upload" size="large"/>
          </a-upload>
        </a-col>
    </a-row>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
function getBase64 (img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
export default {
  data(){
    return{
      code: null
    }
  },
  computed: {
    ...mapGetters(['getWho'])
  },
  methods: {
    ...mapMutations(['setListBook']),
    onSearch (value) {
      console.log(value)
      var lst={code: value,id: this.getWho.id}
          axios.post('http://localhost:3000/search',lst).then((res) => {
            // console.log(res)
            this.setListBook(res.data)
            return this.$router.push({name: 'finishsearch'})
          }).catch((err) => {
            console.log('error')
          })
    },
    handleChange (info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        console.log('--------------------------')
        console.log(info.file)
        this.code = info.file.response
        var input = document.getElementById("input")
        input.value = this.code
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    beforeUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      if (!isJPG) {
        this.$message.error('You can only upload JPG file!')
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!')
      }
      return isJPG && isLt2M
    },
     updateValue(value) {
      this.$emit('input', value)
    }
  },

}
</script>
<style>
  .avatar-uploader > .ant-upload {
    width: 128px;
    height: 128px;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>