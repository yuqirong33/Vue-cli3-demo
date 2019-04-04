<template>
    <div class="login">
        <vue-particles
        color="#dedede"
        :particleOpacity="0.9"
        :particlesNumber="85"
        shapeType="triangle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.6"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
        <div class="login-box">
            <h2>Yu.qirong云系统</h2>
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
                <FormItem prop="user">
                    <Input type="text" v-model="formInline.username" placeholder="请输入用户名">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="请输入密码">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <Checkbox v-model="single">记住密码</Checkbox>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formInline')" long class="mt20">登  录</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
import VueParticles from 'vue-particles'
import { constants } from 'fs';


export default {
  name: 'Login',
  data () {
        return {
            single: false,
            formInline: {
                username: '',
                password: ''
            },
            ruleInline: {
                username: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码为6个字符！', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$api.post('/user/login', {
                        username: this.formInline.username,
                        password: this.formInline.password
                    }, response => {
                        if (response.status >= 200 && response.status < 300) {
                            this.$Message.success('登录成功!');
                        } else {
                            console.log(123)
                            this.$Message.error('登录失败!');
                        }
                    });
                } else {
                    this.$Message.error('请输入用户名或密码!');
                }
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.login{
    width: 100%;
    height: 100vh;
    background-image: url('../../assets/images/login-bg.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    top: 0;
}
.login-box{
    width: 30%;
    padding: 15px 50px 10px 50px;
    background: #fff;
    border-radius: 5px;
    position: absolute;
    top: 30%;
    left: 60%;
    margin: 0 0 0 -25%;
}
.login-box h2{
    font-size: 20px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    margin-bottom: 10px;
}
.mt20{
    margin-top: 20px;
}
</style>
