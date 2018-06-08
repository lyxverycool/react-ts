/**
 * @Decorator
 * @description 验证类Decorator 用法：在方法上通过@baseValidate的形式调用
 * @time 2018/1/9
 * @author Mike
 */
//  import { Form } from 'antd';



class ValidatorForm {
    /*表单提交时验证*/
    static _baseValidate(form: any) {
        //const method = descriptor.value; target: any, key: string, descriptor: any
        return (target:any, methodName: string, descriptor: PropertyDescriptor) => {
            console.log(222);
            console.log(target);
            console.log(methodName);
            console.log(descriptor);
        }
        // console.log(key);
        // console.log(descriptor);
        // Form.create()(
        //     (props): any => {
        //         const { form } = props;
        //         const { getFieldDecorator } = form;
        //         getFieldDecorator('title', {
        //             rules: [{ required: true, message: 'Please input the title of collection!' }],
        //         })
        //     })

        // descriptor.value = (...args: any[]) => {
        //     args[0].$refs.myform.validate((valid: any) => {
        //         if (valid) {
        //             method.apply(target, args);
        //         }
        //     })
        //     return descriptor
        // }

    }

    /*提供基础自定义验证类*/
    static _charValidate(rule: any, value: any, callback: any) {
        if (/[\u4E00-\u9FA5]/i.test(value)) {
            callback(new Error(rule.message));
        } else {
            callback();
        }
    }

    static _numberValidate(rule: any, value: any, callback: any) {
        if (!/^[0-9]+$/.test(value)) {
            callback(new Error(rule.message));
        } else {
            callback();
        }
    }

    static _mobileValidate(rule: any, value: any, callback: any) {
        if (!/^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/.test(value) || value.length !== 11) {
            callback(new Error(rule.message));
        } else {
            callback();
        }
    }

}

const baseValidate = ValidatorForm._baseValidate;
const numberValidate = ValidatorForm._numberValidate;
const charValidate = ValidatorForm._charValidate;
const mobileValidate = ValidatorForm._mobileValidate;

export {
    baseValidate,
    charValidate,
    numberValidate,
    mobileValidate
}