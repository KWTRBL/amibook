<template>
<div style='background-color: blue; margin-left: 20px; height: 120px;'>
  <a-form
    layout="inline"
    :form="form"
    @submit="handleSubmit"
  >
    <a-form-item
      :validate-status="userNameError() ? 'error' : ''"
      :help="userNameError() || ''"
    >
      <a-input
        v-decorator="[
          'userName',
          {rules: [{ required: true, message: 'Please input your username!' }]}
        ]"
        placeholder="Username"
      >
        <a-icon
          slot="prefix"
          type="user"
          style="color:rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <br>
    <a-form-item
      :validate-status="passwordError() ? 'error' : ''"
      :help="passwordError() || ''"
    >
      <a-input
        v-decorator="[
          'password',
          {rules: [{ required: true, message: 'Please input your Password!' }]}
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon
          slot="prefix"
          type="lock"
          style="color:rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <br>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="hasErrors(form.getFieldsError())"
        
      >
        Log in
      </a-button>
    </a-form-item>
  </a-form>
  <!-- <a-alert v-if='correct' message="Success Tips" type="success" showIcon /> -->
</div>
</template>

<script>
function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  data () {
    return {
      hasErrors,
      form: this.$form.createForm(this),
      correct: false,
      users: [
          {
              id: "nut",
              pass: 12345
          },
          {
              id: "kaew",
              pass: 67890
          },
          {
              id: "babe",
              pass: 24680
          }
      ],
    };
  },
  mounted () {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError () {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('userName') && getFieldError('userName');
    },
    // Only show error after a field is touched.
    passwordError () {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('password') && getFieldError('password');
    },
    handleSubmit  (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          // console.log(this.users.length)
          for(var i=0; i<this.users.length; i++){
            // console.log(values['userName'])
            if(this.users[i]['id'] == values['userName'] && this.users[i]['pass'] == values['password']){
              this.correct = true
              // console.log("yes")
              this.$swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'success',
              }).then((result) => {
                return this.$router.push({name: 'home'})
              })
            }
          }
          if(this.correct == false){
          this.$swal({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
          }).then((result) => {
                window.location.reload()
              })
          }
        }
      });
    },
  },
};
</script>

<style>

</style>
