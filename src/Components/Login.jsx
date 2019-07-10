import React from 'react'
import axios from 'axios'
import './Login.css'
import { Header, Form, Checkbox, Button, Input } from 'semantic-ui-react'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            pwd: ''
        }
    }
    render() {
        return (
            <div className="login-container">
                <div className="login-title">
                    <Header as='h3'>登录</Header>
                </div>
                <div className="login-form">
                <Form>
                    <Form.Field>
                        <Input required value={this.state.username} onChange={this.changeFn} name="username" icon='user' iconPosition='left' placeholder='清输入用户名...' size='big' label={{ icon: 'asterisk' }} labelPosition='right corner'/>
                    </Form.Field>
                    <Form.Field>
                        <Input required value={this.state.pwd} onChange={this.changeFn} name="pwd" icon='lock' iconPosition='left' placeholder='清输入密码...' size='big' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='我已同意相关协议规定' />
                    </Form.Field>
                    <Button fluid positive type='submit'>登录</Button>
                </Form>
                </div>
            </div>
        )
    }
    changeFn = (e) => {
        // this.state[e.target.name] = e.target.value
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    clickFn = (e) => {
        e.preventDefault()
        axios.post('http://47.96.21.88:8086/users/login',{uname: this.state.username, pwd: this.state.pwd})
        .then(res => {
            console.log("登录成功")
            console.log(res.data)
        })
        .catch(err => {
            console.log("登录失败")
        })
    }
}
export default Login 