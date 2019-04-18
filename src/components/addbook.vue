<template>
    <div  style='margin-left: 8%;'>
        <a-form
    :form="form"
    @submit="handleSubmit"
    style= ' justify-content: center;'
  >
    <a-form-item
      label="Book Name"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      style="font-family: 'Jua', sans-serif;"
    >
      <a-input
        v-decorator="[
          'Book Name',
          {rules: [{ required: true, message: 'Please input your Book Name!' }]}
        ]"
        size="large"
      />
    </a-form-item>
    <a-form-item
      label="Author"
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
      <a-upload name="file" :multiple="true" action="//jsonplaceholder.typicode.com/posts/" :headers="headers" @change="handleChange">
        <a-button style="font-family: 'Jua';" size="large">
          <a-icon type="upload" /> Click to Upload
        </a-button>
      </a-upload>
    </a-form-item>
    <a-form-item
      label="ISBN Code"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      style="font-family: 'Jua', sans-serif;text-align: left;"
    >
      <a-Row :gutter="8">
        <a-Col :span="12">
          <a-input
            v-decorator="[
            'ISBN Code',
            {rules: [{ required: true, message: 'Please input your ISBN Code!' }]}
            ]"
            placeholder="Type barcode or upload"
            size="large"
          />
        </a-Col>
        <a-Col :span="12">
          <a-upload name="file" :multiple="true" action="//jsonplaceholder.typicode.com/posts/" :headers="headers" @change="handleChange">
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
    </div>
</template>

<script>
export default {
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
      headers: {
        authorization: 'authorization-text',
      }
    };
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange (value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
    handleChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
};
</script>
