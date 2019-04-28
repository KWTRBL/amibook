<template>
    <div  style='margin-top:185px;margin-left: 600px;'>
        <a-form
    :form="form"
    @submit="handleSubmit"
    style= ' justify-content: center;'
  >
    <a-form-item
      label="Book Name:"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      style="font-family: 'Jua', sans-serif;"
    >
      <a-input
        v-decorator="[
          'BookName',
          {rules: [{ required: true, message: 'Please input your Book Name!' }]}
        ]"
        size="large"
      />
    </a-form-item>
    <a-form-item
      label="Author:"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      style="font-family: 'Jua', sans-serif;"
    >
      <a-input
        v-decorator="[
          'Author'
        ]"
        size="large"
      />
    </a-form-item>
    <a-form-item
      label="Upload Picture:"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      style="font-family: 'Jua', sans-serif;text-align: left;"
    >
      <a-upload name="file" :multiple="true" action="http://localhost:3000/fileupload" :headers="headers" @change="handleChange">
        <a-button style="font-family: 'Jua';" size="large">
          <a-icon type="upload" /> Click to Upload
        </a-button>
      </a-upload>
    </a-form-item>
    <a-form-item
      label="Barcode Number:"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      style="font-family: 'Jua', sans-serif;text-align: left;"
    >
      <a-Row :gutter="8">
        <a-Col :span="12">
          <a-input
            v-decorator="[
            'getCode',
            {rules: [{ required: true, message: 'Please input your ISBN Code!' }]}
            ]"
            placeholder="Type barcode or upload"
            size="large"
          />
        </a-Col>
        <a-Col :span="12">
          <a-upload name="file" :multiple="true" action="http://localhost:3000/barcode" :headers="headers" @change="handleChange2">
            <a-button type="primary" shape="circle" icon="upload" size="large"/>
          </a-upload>
        </a-Col>
      </a-Row>     
    </a-form-item> 
    <a-form-item
      label="Note"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      style="font-family: 'Jua', sans-serif;"
    >
      <a-input
        v-decorator="[
          'Note'
        ]"
        placeholder="Type something to describe the book here"
        size="large"
      />
    </a-form-item>   
    <a-form-item
      :wrapper-col="{ span: 12, offset: 5 }"
    >
      <a-button
        type="primary"
        html-type="submit"
        style="font-family: 'Jua', sans-serif;"
        size="large"
      >
        ADD
      </a-button>
    </a-form-item>
  </a-form>
  <!-- {{img}} -->
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapMutations } from 'vuex';

export default {
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
      headers: {
        authorization: 'authorization-text',
      },
      img: null,
      code: null,
      book: null,
      name: null,
      note: null
      // BookName: null
    };
  },
  watch: {
    getCode (val) {
      console.log('this.$store.state.username: ', val);
      this.form.setFieldsValue({getCode: val});
    },
    BookName (val){
      this.form.setFieldsValue({BookName: val});
    },
    Author (val){
      this.form.setFieldsValue({Author: val});
    },
    Note (val){
      this.form.setFieldsValue({Note: val});
    }
  },
  computed: {
    ...mapGetters(['getWho']),
    getCode(){
      return this.code
    },
    BookName(){
      return this.book
    },
    Author(){
      return this.name
    },
    Note(){
      return this.note
    }
    
  },
  methods: {
    ...mapMutations(['setCode']),
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          values['id'] = this.getWho.id
          values['img'] = this.img
          // console(values)
          axios.post('http://localhost:3000/save', values).then((res) => {
            console.log('success')
            this.$swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'success',
            }).then((result) => {
              this.code =""
              this.book =""
              this.name =""
              this.note =""
              this.img = null
                })
          }).catch((err) => {
            console.log('error')
          })
        }
      });
    },
    handleChange(info) {

      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        console.log('--------------------------')
        console.log(info.file)
        this.img = info.file.response
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    handleChange2(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        console.log('--------------------------')
        console.log(info.file)
        this.code = info.file.response
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
};
</script>
