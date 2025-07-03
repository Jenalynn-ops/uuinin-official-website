'use client'
import { useEffect, useState } from 'react'
import './page.css'
import {
  Form, Input, Button, Space, Tooltip,
  message
} from 'antd'

export default function Delete() {
  const [status, setStatus] = useState(1)
  const { TextArea } = Input;
  const [form] = Form.useForm()
  const [state, setState] = useState(1)
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = (e: any) => {
    fetch('https://api.alstarai.com/api/v2/user/cancelUserAccount', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(e),
    }).then(res => res.json()).then(res => {
      console.log(res);
      if (res.code === 200) {
        messageApi.success('Account deleted')
        setStatus(1)
        setState(1)
      } else {
        messageApi.error(res.message)
      }
    })
  }

  const getCode = () => {
    const emailAddress = form.getFieldValue('emailAddress')
    if (emailAddress) {
      fetch('https://api.alstarai.com/api/emai/register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'emailAddress': emailAddress }),
      }).then(res => res.json()).then(res => {
        console.log(res);
        if (res.code === 200) {
          messageApi.success('Verification code has been sent')
        }
      })
      setState(2)
    } else {
      messageApi.warning('Please input your email address!')
    }
  }

  return <div className="container-box">
    {contextHolder}
    <div className='main'>
      <div className='title'>Delete your account</div>
      {
        status === 1 ? <>
          <div className='content'>We follow VaultChat standard specifications to provide you with a fast and convenient data deletion service. You should know that data deletion is an irreversible act, so we remind you that you should fully and properly consider it before you take this action. Next, please tell us how to delete your data. Please select the relevant option and take your action:</div>
          <div className='tips-title'>Delete your account</div>
          <div className='tips'>After you actively delete your account, we will stop providing you with products or services and delete or anonymize your personal information in accordance with the requirements of applicable laws, except for those that need to be retained due to laws and regulations.</div>
          <div className='btn' onClick={() => setStatus(2)}>Apply to delete my account</div>
        </> : <div>
          <div className='content'>Before you delete your account, we also need you to take a little time to read our account cancellation agreement, in which we will list in detail how to delete your account and how to delete the data associated with your account.</div>
          <Form className='form-box' onFinish={onFinish} form={form}>
            <Form.Item name="emailAddress" rules={[{ required: true, message: 'Please input your email address!' }]}>
              <Input placeholder='Please enter your email address'></Input>
            </Form.Item>

            <div className='code-box'>
              <Form.Item name="code" className='code-style' rules={[{ required: true, message: 'Please input verification code!' }]}>
                <Input placeholder='Please enter the verification code' style={{ width: '100%' }}></Input>
              </Form.Item>
              <Button disabled={state === 2} onClick={getCode} className='code-btn'>Send code</Button>
            </div>

            <Form.Item name="reason">
              <TextArea placeholder='Please enter the reason for deleting the account'></TextArea>
            </Form.Item>
            <Form.Item name="account">
              <Input placeholder='Please leave your contact number so that we can communicate with you further'></Input>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type='primary'>Submit</Button>
            </Form.Item>
          </Form>
        </div>
      }

    </div>
  </div>


}